"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Başlıktaki "İndir" butonu. /indir sayfasında gizli: kişi zaten orada,
 * kendine bağlantı veren buton gürültüden ibaret.
 *
 * Başlığın geri kalanı sunucu bileşeni; yalnızca bu parça hangi sayfada
 * olduğunu bilmek zorunda olduğu için istemcide.
 */
export default function HeaderDownloadLink() {
  // trailingSlash: true olduğu için yol "/indir/" gelebilir.
  if (usePathname()?.startsWith("/indir")) return null;

  return (
    <Link
      href="/indir"
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border-[1.5px] border-brand-muted bg-surface px-3 font-bold text-brand-deep transition-colors hover:bg-brand-tint sm:px-5"
    >
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
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
      <span className="sr-only sm:not-sr-only">
        <span className="sr-only">Uygulamayı </span>İndir
      </span>
    </Link>
  );
}
