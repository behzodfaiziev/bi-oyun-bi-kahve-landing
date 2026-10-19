import Link from "next/link";
import { legalPages } from "@/lib/site";

export default function YasalLayout({ children }: LayoutProps<"/yasal">) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14">
      <nav aria-label="Konum" className="flex items-center gap-2 text-sm text-ink-muted">
        <Link href="/" className="font-semibold hover:underline">
          Anasayfa
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-ink">Yasal</span>
      </nav>

      <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:gap-14">
        <aside className="lg:order-2 lg:w-[280px] lg:shrink-0">
          <div className="rounded-2xl bg-brand-tint p-5 lg:sticky lg:top-24">
            <div className="text-xs font-bold tracking-[1.1px] text-brand-deep uppercase">
              Yasal metinler
            </div>
            <div className="mt-3 flex flex-col">
              {legalPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex min-h-11 items-center text-sm font-semibold text-ink hover:underline"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <article className="legal-prose lg:order-1">{children}</article>
      </div>
    </div>
  );
}
