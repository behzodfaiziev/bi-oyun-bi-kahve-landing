/**
 * Cafe menüsü — Firestore'daki `cafeMenuItems` koleksiyonundan, DERLEME
 * sırasında okunur.
 *
 * Neden: menüyü işletme mobil uygulamanın yönetim panelinden düzenliyor.
 * Eskiden sitede config.js'in yedek listesinin kopyası vardı; 49 ürünün
 * yalnızca 1'inin fiyatı doğruydu, 34 ürün artık menüde yoktu. Artık her
 * `npm run deploy` güncel menüyü yayınlar.
 *
 * Sınır: site statik. Panelde yapılan değişiklik bir sonraki deploy'a kadar
 * sitede görünmez.
 *
 * Koleksiyon herkese açık okunuyor (firestore.rules › cafeMenuItems ›
 * allow read: if true) — anahtar veya giriş gerekmiyor.
 *
 * Okunamazsa ya da boş gelirse derleme DURUR: sessizce eski veya boş menü
 * yayınlamaktansa deploy'un hata vermesi daha iyi.
 */

const ENDPOINT =
  "https://firestore.googleapis.com/v1/projects/bi-oyun-bi-kahve/databases/(default)/documents/cafeMenuItems";

/**
 * Kategori sırası mobil uygulamayla BİREBİR aynı (cmsService.js ›
 * DEFAULT_CAFE_CATEGORIES + cafeCategoriesFromItems): önce bu listede tam
 * adıyla bulunanlar, sonra kalanlar sıralı ürünlerde ilk göründükleri yerde.
 * Ziyaretçi sitede ve uygulamada menüyü aynı sırada görür.
 */
const APP_DEFAULT_CATEGORIES = [
  "Sıcak İçecek",
  "Soğuk İçecek",
  "Kahvaltı",
  "Tost",
  "Börek",
  "Tatlı",
  "Yemek",
  "Makarna",
];

export type MenuItem = { name: string; price: string; description: string };
export type MenuGroup = { category: string; items: MenuItem[] };

/** "Çocuk Menü" → "cocuk-menu" — /menu sayfasındaki bölüm bağlantıları için. */
export function slugify(s: string): string {
  const map: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" };
  return s
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşü]/g, (c) => map[c])
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** "1.200₺" → 1200. Fiyatı olmayan ya da okunamayan ürün için null. */
export function priceValue(price: string): number | null {
  const n = Number(price.replace(/[^\d]/g, ""));
  return price && Number.isFinite(n) && n > 0 ? n : null;
}

type FirestoreValue = {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
};
type FirestoreDoc = { fields?: Record<string, FirestoreValue> };

function text(v: FirestoreValue | undefined): string {
  if (!v) return "";
  return String(v.stringValue ?? v.integerValue ?? v.doubleValue ?? "").trim();
}

/** "220" → "220₺", "200₺ " → "200₺". Panelde ₺ unutulabiliyor. */
export function normalizePrice(raw: string): string {
  const p = raw.trim();
  if (!p) return "";
  return /₺|TL$/i.test(p) ? p.replace(/\s*₺$/, "₺") : `${p}₺`;
}

export async function getCafeMenu(): Promise<MenuGroup[]> {
  const docs: FirestoreDoc[] = [];
  let pageToken = "";
  do {
    const url = `${ENDPOINT}?pageSize=300${pageToken ? `&pageToken=${pageToken}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Cafe menüsü okunamadı: ${res.status} ${res.statusText}`);
    }
    const page = (await res.json()) as {
      documents?: FirestoreDoc[];
      nextPageToken?: string;
    };
    docs.push(...(page.documents ?? []));
    pageToken = page.nextPageToken ?? "";
  } while (pageToken);

  if (docs.length === 0) {
    throw new Error("Cafe menüsü boş geldi — deploy durduruldu.");
  }

  const items = docs
    .map((d) => {
      const f = d.fields ?? {};
      const rawOrder = text(f.order);
      return {
        name: text(f.name),
        // Kategori kırpılıyor: panelde "Sıcak İçecek " (sonda boşluk) girilmiş
        // ürünler var; kırpılmazsa aynı kategori ikiye bölünür. Uygulama da
        // aynısını yapıyor (CafeScreen.js).
        category: text(f.category) || "Diğer",
        price: normalizePrice(text(f.price)),
        description: text(f.description),
        order: rawOrder !== "" && Number.isFinite(Number(rawOrder)) ? Number(rawOrder) : Infinity,
      };
    })
    .filter((it) => it.name)
    // Uygulamadaki sortByOrder ile aynı: önce `order`, yoksa ada göre.
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, "tr"));

  const present = [...new Set(items.map((it) => it.category))];
  const categories = [
    ...APP_DEFAULT_CATEGORIES.filter((c) => present.includes(c)),
    ...present.filter((c) => !APP_DEFAULT_CATEGORIES.includes(c)),
  ];

  return categories.map((category) => ({
    category,
    items: items
      .filter((it) => it.category === category)
      .map(({ name, price, description }) => ({ name, price, description })),
  }));
}
