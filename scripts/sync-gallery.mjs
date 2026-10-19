/**
 * Galerimiz fotoğraflarını uygulamanın panelinden (Firestore
 * app_settings/serviceSlides › gallery) indirir; kare küçük görsel ve büyük
 * görünüm için WebP üretir, listeyi lib/gallery.json'a yazar.
 *
 * Panelde galeri değişince: `npm run sync-gallery`, sonra yeniden dağıtın.
 * macOS gerekir (sips + cwebp). Derlemeye bağlı değil: site her derlemede
 * 29 fotoğrafı yeniden indirmesin, çıktı depoda dursun.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const DOC =
  "https://firestore.googleapis.com/v1/projects/bi-oyun-bi-kahve/databases/(default)/documents/app_settings/serviceSlides";
const OUT = "public/images/galeri";

const res = await fetch(DOC);
if (!res.ok) throw new Error(`Firestore ${res.status}`);
const items = (await res.json()).fields.gallery.arrayValue.values.map((v) => {
  const f = v.mapValue.fields;
  return { id: f.id.stringValue, url: f.url.stringValue, caption: f.caption?.stringValue?.trim() };
});

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const tmp = mkdtempSync(path.join(tmpdir(), "galeri-"));
const run = (cmd, args) => execFileSync(cmd, args, { stdio: "ignore" });

const list = [];
for (const [i, it] of items.entries()) {
  const name = String(i + 1).padStart(2, "0");
  const src = path.join(tmp, `${name}.jpg`);
  const r = await fetch(it.url);
  if (!r.ok) throw new Error(`${it.url} → ${r.status}`);
  writeFileSync(src, Buffer.from(await r.arrayBuffer()));

  const full = path.join(tmp, `${name}-full.jpg`);
  run("sips", ["-Z", "1200", src, "--out", full]);
  run("cwebp", ["-quiet", "-q", "76", full, "-o", path.join(OUT, `${name}.webp`)]);

  // Izgara kare: kısa kenar 480'e, ortadan kare kırpılır.
  const thumb = path.join(tmp, `${name}-kare.jpg`);
  run("sips", ["--resampleHeightWidthMax", "720", src, "--out", thumb]);
  run("sips", ["--cropToHeightWidth", "480", "480", thumb]);
  run("cwebp", ["-quiet", "-q", "72", thumb, "-o", path.join(OUT, `${name}-kare.webp`)]);

  const dims = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", full]).toString();
  const [w, h] = [...dims.matchAll(/: (\d+)/g)].map((m) => Number(m[1]));
  list.push({
    src: `/images/galeri/${name}.webp`,
    thumb: `/images/galeri/${name}-kare.webp`,
    width: w,
    height: h,
    alt: it.caption || "Bi Oyun Bi Kahve'den bir kare",
  });
}
rmSync(tmp, { recursive: true, force: true });

writeFileSync("lib/gallery.json", JSON.stringify(list, null, 2) + "\n");
console.log(`${list.length} fotoğraf → ${OUT} (${readdirSync(OUT).length} dosya)`);
