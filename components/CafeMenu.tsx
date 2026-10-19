"use client";

import { useEffect, useState } from "react";
import { slugify, type MenuGroup } from "@/lib/menu";

const ALL = "Tümü";

/**
 * /menu sayfasının menüsü. Tek HTML, iki düzen:
 *
 * TELEFON (< lg) — mobil uygulamadaki CafeScreen'in birebir karşılığı:
 * yatay kayan kategori çipleri filtreler; her kategori büyük harfli kehribar
 * başlık + beyaz kart, satırda ad solda, fiyat sağda.
 *
 * MASAÜSTÜ (lg+) — geniş ekran için ayrı düzen: solda sabit kategori menüsü
 * (görünen kategori vurgulanır), sağda tüm menü; her kategori kendi başlığı
 * ve iki sütunlu ürün listesiyle. Masaüstünde filtre yok — tüm menü görünür,
 * soldan kategoriye atlanır.
 *
 * Sunucuda üretilen HTML'de menünün tamamı var: arama motorları ve JS'siz
 * tarayıcılar her ürünü görür; çipler yalnızca telefonda gizler.
 */
export default function CafeMenu({ groups }: { groups: MenuGroup[] }) {
  const [selected, setSelected] = useState(ALL);
  const [inView, setInView] = useState(slugify(groups[0]?.category ?? ""));

  // Masaüstü yan menüde, okunan kategoriyi vurgula: başlığı 128 px çizgisini
  // geçmiş son bölüm. Bağlantıyla atlanan bölüm 112 px'e oturur (html
  // scroll-padding 88 + scroll-mt-6 24); çizgi bunun hemen altında. Sayfa sonundaysa son bölüm —
  // kısa son kategoriler o çizgiye hiç ulaşamıyor (#cocuk-menu'ye gelince
  // "Börekler" yanıyordu). Yüklemede de çalışır: /menu#... doğru vurgulanır.
  useEffect(() => {
    const sections = groups
      .map((g) => document.getElementById(slugify(g.category)))
      .filter((el): el is HTMLElement => el !== null);
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? sections.at(-1)
        : sections.findLast((s) => s.getBoundingClientRect().top <= 128);
      setInView((current ?? sections[0])?.id ?? "");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [groups]);

  const chips = [ALL, ...groups.map((g) => g.category)];

  return (
    <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
      {/* ── Telefon: kategori çipleri (filtre) ─────────────────────── */}
      <div
        role="group"
        aria-label="Menü kategorileri"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:-mx-10 md:px-10 lg:hidden"
      >
        {chips.map((c) => {
          const active = c === selected;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(c)}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                active
                  ? "border-cafe bg-cafe text-ink"
                  : "border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* ── Masaüstü: sabit kategori menüsü ─────────────────────────── */}
      <nav aria-label="Menü kategorileri" className="hidden lg:block">
        <ul className="sticky top-28 flex flex-col gap-0.5 border-l border-line">
          {groups.map((g) => {
            const id = slugify(g.category);
            const active = id === inView;
            return (
              <li key={g.category}>
                <a
                  href={`#${id}`}
                  aria-current={active ? "true" : undefined}
                  className={`-ml-px flex items-center justify-between gap-3 border-l-2 py-2 pr-2 pl-4 text-[15px] transition-colors ${
                    active
                      ? "border-cafe font-bold text-ink"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  {g.category}
                  <span className="text-xs font-semibold text-ink-muted tabular-nums">
                    {g.items.length}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── Menü ────────────────────────────────────────────────────── */}
      <div className="mt-7 lg:mt-0">
        {groups.map((g) => {
          const id = slugify(g.category);
          // Telefonda filtre: seçili olmayan kategori yalnızca lg altında gizli.
          const hiddenOnPhone = selected !== ALL && selected !== g.category;
          return (
            <section
              key={g.category}
              id={id}
              aria-labelledby={`${id}-baslik`}
              className={`mb-7 scroll-mt-6 lg:mb-12 ${hiddenOnPhone ? "max-lg:hidden" : ""}`}
            >
              <div className="mb-2 ml-1 lg:mb-4 lg:ml-0 lg:flex lg:items-baseline lg:gap-3 lg:border-b lg:border-line lg:pb-3">
                <h2
                  id={`${id}-baslik`}
                  className="text-xs font-bold tracking-[1.1px] text-cafe-deep uppercase lg:font-display lg:text-[1.75rem] lg:leading-tight lg:font-semibold lg:tracking-[-0.02em] lg:text-ink lg:normal-case"
                >
                  {g.category}
                </h2>
                <span className="hidden text-sm text-ink-muted lg:inline">
                  {g.items.length} ürün
                </span>
              </div>

              {/* Telefonda tek kart (uygulamadaki gibi); masaüstünde iki
                  sütunlu, kartsız liste — geniş ekranda tek uzun kart boş
                  kalıyordu. */}
              <ul className="overflow-hidden rounded-card border border-line bg-surface shadow-card lg:grid lg:grid-cols-2 lg:gap-x-10 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none">
                {g.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex min-h-11 items-center gap-3 border-t border-paper-deep px-[18px] py-3.5 first:border-t-0 lg:items-baseline lg:border-t-0 lg:border-b lg:border-dotted lg:border-line-strong lg:px-0 lg:py-3"
                  >
                    <span className="flex-1">
                      {item.name}
                      {item.description ? (
                        <span className="mt-0.5 block text-sm text-ink-muted">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                    <span className="font-semibold whitespace-nowrap text-cafe-deep tabular-nums">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
