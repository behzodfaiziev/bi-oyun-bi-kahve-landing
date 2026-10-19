import Image from "next/image";
import Link from "next/link";
import { business, navLinks } from "@/lib/site";
import HeaderDownloadLink from "@/components/HeaderDownloadLink";

/**
 * Mobil menü native <details> ile açılıyor: JavaScript yok, "use client" yok,
 * JS kapalıyken de çalışır. Bir menü açıp kapatmak için React state gerekmez.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-5 py-3 md:gap-9 md:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label={business.name}>
          <Image
            src="/images/logo.png"
            alt={business.name}
            width={160}
            height={46}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav aria-label="Ana menü" className="hidden flex-grow justify-center gap-6 xl:flex 2xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold whitespace-nowrap text-ink transition-colors hover:text-brand-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-grow items-center justify-end gap-2 xl:flex-grow-0">
          {/* İkincil eylem: çerçeveli. Ana eylem "Bizi arayın" dolgulu kalır. */}
          <HeaderDownloadLink />
          <a
            href={business.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-strong px-5 font-bold text-white transition-colors hover:bg-brand-deep"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">Bizi arayın</span>
            <span className="sr-only sm:hidden">Bizi arayın</span>
          </a>

          <details className="relative xl:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-line-strong bg-surface [&::-webkit-details-marker]:hidden"
              aria-label="Menüyü aç"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav
              aria-label="Menü"
              className="absolute right-0 mt-2 flex w-60 flex-col rounded-2xl border border-line bg-surface p-2 shadow-card-hover"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center rounded-xl px-4 font-semibold text-ink hover:bg-paper-deep"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
