import { legalLastUpdated } from "@/lib/site";

/** Sayfa başlığı + "son güncelleme" satırı. Her yasal sayfada aynı. */
export function LegalHeader({
  title,
  intro,
}: {
  title: string;
  intro: React.ReactNode;
}) {
  return (
    <>
      <div className="text-xs font-bold tracking-[1.1px] text-ink-muted uppercase">
        Yasal
      </div>
      <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] leading-[1.06] font-semibold tracking-[-1.2px]">
        {title}
      </h1>
      <p className="mt-4 border-b border-line pb-6 text-sm text-ink-muted">
        Son güncelleme: <strong className="text-ink">{legalLastUpdated}</strong>
      </p>
      <p className="mt-6 text-lg leading-relaxed">{intro}</p>
    </>
  );
}

/** Sayfa içi içindekiler. Her sayfa kendi başlıklarını verir. */
export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="Bu sayfada"
      className="mt-8 rounded-2xl border border-line bg-surface p-5"
    >
      <div className="text-xs font-bold tracking-[1.1px] text-ink-muted uppercase">
        Bu sayfada
      </div>
      <ol className="mt-3 flex flex-col gap-1">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block py-1 text-sm font-semibold text-brand-deep hover:underline"
            >
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Doldurulması gereken alanları görünür kılar — sessizce yayına çıkmasın. */
export function TemplateNotice() {
  return (
    <aside className="mt-8 rounded-2xl bg-cafe-tint p-5 text-sm leading-relaxed">
      <strong>Şablon notu:</strong> köşeli parantez içindeki alanlar gerçek
      şirket bilgileriyle doldurulmalı, metin yayına alınmadan önce bir
      hukukçuya okutulmalıdır. Bu sayfa hukuki danışmanlık değildir.
    </aside>
  );
}
