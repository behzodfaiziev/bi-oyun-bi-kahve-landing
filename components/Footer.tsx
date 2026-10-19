import Link from "next/link";
import { business, legalPages, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-12 pb-8 md:px-10 md:pt-14">
        <div className="flex flex-col gap-10 md:flex-row md:gap-14">
          <div className="md:w-[320px]">
            <div className="font-display text-2xl font-semibold">
              {business.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-on-deep">
              {business.description}
              <br />
              {business.address}, {business.addressLine2}
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={business.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-11 items-center justify-center rounded-full border border-ink-muted transition-colors hover:border-white"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={`${business.whatsapp}?text=${encodeURIComponent(business.whatsappText)}`}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-11 items-center justify-center rounded-full border border-ink-muted transition-colors hover:border-white"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.6A9 9 0 1 1 21 12Z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid flex-grow gap-8 sm:grid-cols-3">
            <FooterColumn title="Hizmetler">
              {services.map((s) => (
                <Link key={s.key} href={`/${s.href}`} className="text-sm hover:underline">
                  {s.title}
                </Link>
              ))}
              <Link href="/indir" className="text-sm hover:underline">
                Mobil uygulama
              </Link>
            </FooterColumn>

            <FooterColumn title="İletişim">
              <a href={business.phoneHref} className="text-sm hover:underline">
                {business.phoneDisplay}
              </a>
              <a href={`mailto:${business.email}`} className="text-sm hover:underline">
                {business.email}
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm hover:underline"
              >
                Haritada aç
              </a>
              <span className="text-sm text-ink-on-deep">{business.hours}</span>
            </FooterColumn>

            <FooterColumn title="Yasal">
              {legalPages.map((p) => (
                <Link key={p.href} href={p.href} className="text-sm hover:underline">
                  {p.label}
                </Link>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-ink-on-deep sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} [TİCARİ UNVAN]. Tüm hakları saklıdır.
          </div>
          <div>Ticaret Sicil No: [SİCİL NO] · VKN: [VERGİ NO]</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-bold tracking-[1.1px] text-ink-on-deep uppercase">
        {title}
      </div>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
