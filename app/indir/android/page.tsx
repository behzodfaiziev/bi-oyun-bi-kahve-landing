import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { apps, business } from "@/lib/site";
import StoreBadge, {
  androidHref,
  appStoreBadge,
  googlePlayBadge,
} from "@/components/StoreBadge";

export const metadata: Metadata = {
  title: "Android'e Kurulum",
  description:
    "Bi Oyun Bi Kahve Android uygulaması test aşamasında. Test listesine nasıl eklenip uygulamayı Google Play'den nasıl indireceğinizi adım adım anlatıyoruz.",
};

/**
 * GEÇİCİ SAYFA — Android uygulaması Google Play'de dahili test aşamasındayken
 * var. `apps.android.status` "public" olunca /indir sayfası doğrudan Google
 * Play rozetini gösterir ve bu sayfaya bağlantı kalmaz; sayfa silinebilir.
 *
 * Android test isteği için hazır mesaj. Dahili teste eklemek için tek gereken
 * bilgi, kullanıcının Play Store'da oturum açtığı Google hesabı — şablon bunu
 * açıkça soruyor; yanlış adres gelirse bağlantı "uygulama bulunamadı" der.
 */
const requestSubject = "Android test erişimi isteği";
const requestBody = [
  "Merhaba,",
  "",
  "Bi Oyun Bi Kahve Android uygulamasının test listesine eklenmek istiyorum.",
  "",
  "Ad Soyad: ",
  "Play Store'da kullandığım Google hesabı (Gmail): ",
  "",
  "Teşekkürler.",
].join("\n");

const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(requestSubject)}&body=${encodeURIComponent(requestBody)}`;
const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(requestBody)}`;

export default function AndroidPage() {
  const androidPublic = apps.android.status === "public";

  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
      <nav
        aria-label="Konum"
        className="flex items-center gap-2 text-sm text-ink-muted"
      >
        <Link href="/indir" className="font-semibold hover:underline">
          Uygulamayı indir
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-ink">Android</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
        <div className="max-w-2xl">
          {androidPublic ? null : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cafe-tint px-3 py-1 text-sm font-bold text-cafe-deep">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Test sürümü
            </span>
          )}
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-balance">
            Android&apos;e kurulum
          </h1>

          {androidPublic ? (
            <>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Uygulama Google Play&apos;de yayında.
              </p>
              <div className="mt-8">
                <StoreBadge href={androidHref} {...googlePlayBadge} />
              </div>
            </>
          ) : (
            <>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Android sürümümüz şu an Google Play&apos;de test aşamasında ve
                aramayla bulunamıyor. Sizi test listesine ekledikten sonra
                uygulamayı Google Play&apos;den her zamanki gibi
                indirebilirsiniz.
              </p>

              <ol className="mt-12">
                <Step n={1} title="Google hesabınızı bize iletin">
                  <p>
                    Play Store&apos;da oturum açtığınız{" "}
                    <strong className="text-ink">Gmail adresini</strong> bize
                    gönderin ya da işletmeye geldiğinizde söyleyin.
                  </p>
                  <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={mailHref}
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-6 font-bold text-white transition-colors hover:bg-brand-deep"
                    >
                      E-posta gönder
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted bg-surface px-6 font-bold text-brand-deep transition-colors hover:bg-brand-tint"
                    >
                      WhatsApp&apos;tan yazın
                    </a>
                  </div>
                  <p className="mt-4 text-sm">
                    <strong className="text-ink">
                      Hangi hesabı kullanıyorum?
                    </strong>{" "}
                    Play Store&apos;u açıp sağ üstteki profil resminize dokunun;
                    e-posta adresiniz orada yazar.
                  </p>
                </Step>

                <Step n={2} title="Sizi test listesine ekleyelim">
                  <p>
                    Hesabınızı listeye ekledikten sonra size test davet
                    bağlantısını iletiriz.
                  </p>
                </Step>

                <Step n={3} title="Daveti kabul edip indirin" last>
                  <p>
                    Davet bağlantısını açın,{" "}
                    <strong className="text-ink">Test kullanıcısı ol</strong>
                    &apos;a dokunun, ardından uygulamayı Google Play&apos;den
                    yükleyin.
                  </p>
                  <div className="mt-4">
                    <StoreBadge href={androidHref} {...googlePlayBadge} />
                  </div>
                </Step>
              </ol>

              <section
                aria-labelledby="sorun-baslik"
                className="mt-14 rounded-card bg-paper-deep p-6 md:p-7"
              >
                <h2
                  id="sorun-baslik"
                  className="font-display text-xl font-semibold"
                >
                  Bağlantı &laquo;uygulama bulunamadı&raquo; diyorsa
                </h2>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-ink-muted">
                  <li>
                    Henüz test listesine eklenmemiş olabilirsiniz; onayımızı
                    bekleyin.
                  </li>
                  <li>
                    Play Store&apos;da bize ilettiğinizden farklı bir Google
                    hesabı açık olabilir. Profil resminize dokunup hesabı
                    değiştirin.
                  </li>
                  <li>
                    Sorun sürerse{" "}
                    <a
                      href={business.phoneHref}
                      className="font-bold text-brand-deep hover:underline"
                    >
                      {business.phoneDisplay}
                    </a>{" "}
                    numarasından bize ulaşın.
                  </li>
                </ul>
              </section>
            </>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-8">
            <span className="text-ink-muted">iPhone mu kullanıyorsunuz?</span>
            <StoreBadge href={apps.ios.url} {...appStoreBadge} />
          </div>
        </div>

        {/* Yalnızca geniş ekranda: telefonda adımlardan önce dev bir görsel
          kaydırmayı uzatır, adımlar asıl içerik. */}
        <div className="hidden lg:block">
          <Image
            src="/images/uygulama-qr-giris.jpg"
            alt="Bi Oyun Bi Kahve uygulamasında profil ekranı: üye kodu, QR ile giriş ve oyun alanı sadakat kartı"
            width={800}
            height={1422}
            className="sticky top-28 w-full rounded-3xl shadow-card-hover"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Zaman çizelgesi adımı: numara dairesi ve bir sonraki adıma inen çizgi.
 * Numara görsel; sıralamayı ekran okuyucuya <ol> zaten veriyor.
 */
function Step({
  n,
  title,
  last = false,
  children,
}: {
  n: number;
  title: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className={`relative flex gap-5 ${last ? "" : "pb-10"}`}>
      {last ? null : (
        <span
          aria-hidden="true"
          className="absolute top-12 bottom-2 left-5 w-0.5 -translate-x-1/2 rounded-full bg-line-strong"
        />
      )}
      <span
        aria-hidden="true"
        className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-strong text-lg font-extrabold text-white"
      >
        {n}
      </span>
      <div className="min-w-0 flex-grow pt-1 leading-relaxed text-ink-muted">
        <h2 className="font-display text-[1.375rem] leading-tight font-semibold text-ink">
          {title}
        </h2>
        <div className="mt-2">{children}</div>
      </div>
    </li>
  );
}
