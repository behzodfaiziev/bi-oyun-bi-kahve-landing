import Image from "next/image";
import { apps } from "@/lib/site";

/**
 * Resmî mağaza rozetleri. Apple ve Google yönergeleri rozetin
 * değiştirilmemesini ve ekranda en az 40 px yükseklikte gösterilmesini
 * istiyor; ikisi aynı yükseklikte duruyor.
 */
export default function StoreBadge({
  href,
  src,
  alt,
  width,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-block self-start rounded-[10px] transition-opacity hover:opacity-85"
    >
      <Image src={src} alt={alt} width={width} height={54} className="h-[54px] w-auto" />
    </a>
  );
}

export const appStoreBadge = {
  src: "/images/app-store-badge.svg",
  alt: "App Store'dan indirin",
  width: 205,
};

export const googlePlayBadge = {
  src: "/images/google-play-badge.svg",
  alt: "Google Play'den alın",
  width: 182,
};

/**
 * Test bağlantısı verilmişse ona, yoksa mağaza sayfasına. Dahili testte
 * mağaza sayfası yalnızca daveti kabul etmiş testçilere açılır; diğerleri
 * "bulunamadı" görür.
 */
export const androidHref =
  apps.android.url ||
  `https://play.google.com/store/apps/details?id=${apps.android.packageName}`;
