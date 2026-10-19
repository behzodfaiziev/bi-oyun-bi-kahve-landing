import type { Metadata } from "next";
import Link from "next/link";
import { cafe, photos } from "@/lib/site";
import { getCafeMenu } from "@/lib/menu";
import CafeMenu from "@/components/CafeMenu";
import PhotoStrip from "@/components/PhotoStrip";

export const metadata: Metadata = {
  title: "Cafe Menü",
  description:
    "Bi Oyun Bi Kahve cafe menüsü ve güncel fiyatlar: kahvaltı, tost, börek, ana yemekler, çocuk menüsü, tatlılar, sıcak ve soğuk içecekler.",
};

export default async function MenuPage() {
  const groups = await getCafeMenu();
  const itemCount = groups.reduce((n, g) => n + g.items.length, 0);
  // Derleme anı: menü o an Firestore'dan okundu.
  const asOf = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });

  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
      <nav aria-label="Konum" className="flex items-center gap-2 text-sm text-ink-muted">
        <Link href="/" className="font-semibold hover:underline">
          Anasayfa
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-ink">Cafe Menü</span>
      </nav>

      <header className="mt-6 max-w-2xl">
        <div className="text-xs font-bold tracking-[1.1px] text-ink-muted uppercase">
          Cafe
        </div>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.06] font-semibold tracking-[-0.02em]">
          Cafe menüsü
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{cafe.description}</p>
        <p className="mt-3 text-sm text-ink-muted">
          {groups.length} kategori, {itemCount} ürün · Fiyatlar {asOf} itibarıyla.
        </p>
      </header>

      {/* Uygulamadaki cafe ekranı da fotoğraf karuseliyle açılıyor. */}
      <div className="mt-7 lg:mt-9">
        <PhotoStrip items={photos.cafe} priority />
      </div>

      <div className="mt-8 lg:mt-12">
        <CafeMenu groups={groups} />
      </div>
    </div>
  );
}
