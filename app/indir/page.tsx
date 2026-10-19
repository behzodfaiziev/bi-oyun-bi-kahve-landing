import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { apps, loyalty } from "@/lib/site";
import { CheckIcon } from "@/components/ServiceIcon";
import StoreBadge, {
  androidHref,
  appStoreBadge,
  googlePlayBadge,
} from "@/components/StoreBadge";

export const metadata: Metadata = {
  title: "Uygulamayı İndir",
  description:
    "Bi Oyun Bi Kahve mobil uygulamasını iPhone ve Android'e indirin: sadakat kartınız, atölye haklarınız ve rezervasyonlarınız tek yerde.",
};

const benefits = [
  "QR kodunuzla tek dokunuşta giriş",
  `Sadakat kartı — ${loyalty.maxStamps} damgada 1 saat oyun hediye`,
  "Kalan atölye ve oyun alanı haklarınız",
  "Rezervasyonlarınız ve bildirimler",
];

export default function IndirPage() {
  const androidPublic = apps.android.status === "public";

  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-10 pb-16 md:px-10 md:pt-16 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div>
          <div className="text-xs font-bold tracking-[1.1px] text-ink-muted uppercase">
            Mobil uygulama
          </div>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-balance">
            Uygulamayı indirin
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            Karekodunuzu okutun, damganız işlensin. Haklarınızı ve
            rezervasyonlarınızı her an görün.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 shrink-0 text-brand-deep" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <StoreBadge href={apps.ios.url} {...appStoreBadge} />
            {/* Android test aşamasındayken doğrudan rozet yok: önce test
                listesine kaydolmak gerekiyor, adımlar ayrı sayfada. */}
            {androidPublic ? (
              <StoreBadge href={androidHref} {...googlePlayBadge} />
            ) : (
              <Link
                href="/indir/android"
                className="font-bold text-brand-deep underline-offset-2 hover:underline"
              >
                Android kullanıyorum →
              </Link>
            )}
          </div>
        </div>

        <Image
          src="/images/uygulama-qr-giris.jpg"
          alt="Bi Oyun Bi Kahve uygulamasında profil ekranı: üye kodu, QR ile giriş ve oyun alanı sadakat kartı"
          width={800}
          height={1422}
          priority
          className="mx-auto w-full max-w-[280px] rounded-3xl shadow-card-hover lg:max-w-none"
        />
      </div>
    </div>
  );
}
