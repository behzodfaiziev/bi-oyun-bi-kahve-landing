import Image from "next/image";
import Link from "next/link";
import { getCafeMenu, priceValue, slugify } from "@/lib/menu";
import {
  birthday,
  business,
  cafe,
  faq,
  loyalty,
  photos,
  playArea,
  services,
  workshops,
  womensWorkshop,
  events,
} from "@/lib/site";
import ServiceIcon, {
  CheckIcon,
  ChevronIcon,
} from "@/components/ServiceIcon";
import PhotoStrip from "@/components/PhotoStrip";
import Deco from "@/components/Deco";
import HeroCarousel from "@/components/HeroCarousel";
import Gallery from "@/components/Gallery";
import gallery from "@/lib/gallery.json";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PlayArea />
      <Workshops />
      <Birthday />
      <WorkshopAndEvents />
      <Menu />
      <GallerySection />
      <Loyalty />
      <Faq />
      <Contact />
    </>
  );
}

/* ── Ortak parçalar ──────────────────────────────────────────────── */

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-bold tracking-[1.1px] text-ink-muted uppercase">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2.5 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.9px]">
      {children}
    </h2>
  );
}

const tryNumber = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });

/** 1200 → "1.200₺" — sitedeki diğer fiyatlarla aynı yazım. */
function formatTry(n: number) {
  return `${tryNumber.format(n)}₺`;
}

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-paper-deep py-3 last:border-0">
      <span className="font-semibold">{name}</span>
      <span className="flex-grow border-b border-dotted border-line-strong" />
      <span className="font-extrabold tabular-nums">{price}</span>
    </div>
  );
}

/**
 * Hizmet ikonu, uygulamadaki ana menü kutucuğunun aynısı: açık renkli zemin,
 * içinde beyaz daire ve hizmetin koyu renginde ikon (Canva ikon yönergesi).
 */
function ServiceBadge({
  name,
  tint,
  deep,
}: {
  name: React.ComponentProps<typeof ServiceIcon>["name"];
  tint: string;
  deep: string;
}) {
  return (
    <span
      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl sm:size-14 ${tint}`}
    >
      <span
        className={`flex size-9 items-center justify-center rounded-full bg-surface shadow-card sm:size-10 ${deep}`}
      >
        <ServiceIcon name={name} size={20} />
      </span>
    </span>
  );
}

/**
 * Masaüstü süsleri (xl ve üstü): Canva'dan ölçülmüş birebir yerleşim, bkz.
 * Deco. Telefon/tablette her bölümde küçük, köşeye yerleşmiş ayrı süsler var.
 */
const desk = "z-10 hidden xl:block";

/* ── Bölümler ────────────────────────────────────────────────────── */

/**
 * Hero istatistikleri. Açıklama metni <dd> içinde: <dt> görünmez olduğu için
 * açıklama dışarıda kalırsa ekran okuyucu "2–12"nin ne olduğunu söylemez.
 * Renkli kutular müşterinin Canva tasarımından (sarı / kırmızı / yeşil).
 */
const heroStats = [
  // Oyun alanı 18 aydan itibaren (18–24 ay ebeveyn eşliğinde). "2–12" yazınca
  // küçük çocuğu olan veli "bize göre değil" diye çıkıyordu.
  {
    term: "Yaş aralığı",
    // Bölünmez boşluk: telefonda dar kutuda yalnızca tireden bölünsün.
    value: "18\u00a0ay–12\u00a0yaş",
    caption: "2 yaştan sonra eşlik gerekmez",
    tone: "border-cafe text-cafe-deep",
  },
  {
    term: "Çalışma saatleri",
    value: `${business.opens}–${business.closes}`,
    caption: "her gün açık",
    tone: "border-workshop text-workshop-deep",
  },
  {
    term: "Sadakat kartı",
    value: `${loyalty.maxStamps} damga`,
    caption: "1 saat oyun hediye",
    tone: "border-play text-play-deep",
  },
];

/** Hero karuseli: Galerimiz'in büyük fotoğrafları (lib/gallery.json). */
const heroPhotos = [6, 3, 15, 23, 25].map((n) => gallery[n - 1]);

function Hero() {
  return (
    <section className="relative overflow-x-clip pt-10 pb-14 md:pt-16 md:pb-24">

      {/* Esnek kutu değil ızgara: görsel sütununun `w-full` + `flex-grow`
          temeli metin sütununu 560 → 380 px'e eziyordu. */}
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
        <Deco name="agac" ol={29} top={63} w={395} priority className={desk} />
        <Deco name="bulut-1" l={349} top={-9} w={149} className={desk} />
        <Deco name="balon" l={452} top={34} w={128} priority className={desk} />
        <Deco name="gunes" or={40} top={-25} w={192} priority className={desk} />
        <Deco name="bulut-2" or={-35} top={194} w={140} className={desk} />
        <Deco name="ordek" r={429} top={515} w={140} className={desk} />
        <Deco name="cit" or={63} top={459} w={365} className={desk} />
        <Deco name="cali" or={135} top={503} w={214} className={desk} />
        {/* @container: başlık boyutu görünüme değil BU sütunun genişliğine
            bağlı (cqi). vw kullanınca geniş ekranda dar sütuna 64 px düşüyordu. */}
        <div className="relative @container">
          <Deco
            name="balon"
            priority
            className="-top-6 right-0 w-[4.5rem] sm:-top-14 sm:w-16 lg:top-6 lg:-right-4 lg:w-20 xl:hidden"
          />
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-1.5 text-sm font-bold text-brand-deep">
            {business.district}
          </span>
          <h1 className="relative mt-5 font-display text-[clamp(2.25rem,10.5cqi,4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-balance">
            {/* Ünlem Canva'daki yeni başlıktan; meta açıklamalarda yok. */}
            {business.slogan}!
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {business.heroLead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-brand-strong px-7 font-bold text-white shadow-card transition-colors hover:bg-brand-deep"
            >
              Bizi arayın
            </a>
            <a
              href="/menu"
              className="inline-flex min-h-13 items-center justify-center rounded-full border-[1.5px] border-cafe bg-surface px-7 font-bold text-cafe-deep transition-colors hover:bg-cafe-tint"
            >
              Menüyü gör
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:grid lg:gap-2.5 xl:flex xl:gap-3">
            {heroStats.map((s) => (
              <div
                key={s.term}
                className={`rounded-2xl border-[1.5px] bg-surface px-3 py-2.5 sm:px-4 ${s.tone}`}
              >
                <dt className="sr-only">{s.term}</dt>
                <dd>
                  <span className="block text-base leading-tight font-extrabold text-balance sm:text-xl">
                    {s.value}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-muted sm:text-sm">
                    {s.caption}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <Deco
            name="gunes"
            priority
            className="-top-9 -right-3 z-10 w-[4.75rem] sm:w-24 lg:-top-12 lg:-right-8 lg:w-28 xl:hidden"
          />
          <Deco
            name="ordek"
            className="-bottom-6 -left-4 z-10 w-16 sm:w-20 lg:-bottom-8 lg:-left-12 lg:w-28 xl:hidden"
          />
          <HeroCarousel items={heroPhotos} />
        </div>
      </Container>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section-y relative overflow-x-clip bg-paper-deep">
      <Container className="relative">
        <Deco name="bulut-1" ol={-16} top={107} w={231} className={desk} />
        <Deco name="bulut-2" ol={32} top={477} w={121} className={desk} />
        <Deco name="ucak" r={-224} top={22} w={284} className={desk} />
        <Deco name="bulut-1" or={-8} top={399} w={156} className={desk} />
        <Deco
          name="ucak"
          className="-top-10 right-3 w-20 sm:w-24 md:-top-14 lg:-top-20 lg:-right-10 lg:w-36 xl:hidden"
        />
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div>
            <Eyebrow>Neler yapıyoruz</Eyebrow>
            <SectionTitle>Çocuklara oyun, size kahve</SectionTitle>
          </div>
          <p className="max-w-md text-ink-muted">
            Serbest oyundan eğitmenli atölyelere, doğum günlerinden kendi
            mutfağımızdan çıkan lezzetlere — hepsi aynı çatı altında.
          </p>
        </div>

        {/* Telefonda iki sütun, kısa kart: bu bölüm bir içindekiler; tam
            açıklamalar aşağıdaki bölümlerde zaten var. Tek sütunda altı
            tam kart 2.3 ekran tutuyordu. */}
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.key}
              className="relative flex flex-col rounded-card border border-line bg-surface p-4 shadow-card transition-shadow hover:shadow-card-hover has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-brand-deep sm:p-6"
            >
              <ServiceBadge name={s.key} tint={s.tint} deep={s.deepText} />
              <h3 className="mt-3 font-display text-lg leading-tight font-semibold sm:mt-4 sm:text-2xl">
                {/* Bağlantı yalnızca başlıkta: ekran okuyucu kartın tüm metnini
                    değil sadece adını okur. ::after kartın tamamını
                    tıklanabilir yapar. */}
                <a
                  href={s.href}
                  className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
                >
                  {s.title}
                </a>
              </h3>
              <p className="mt-2 hidden flex-grow leading-relaxed text-ink-muted sm:block">
                {s.blurb}
              </p>
              <span
                aria-hidden="true"
                className={`mt-2 text-sm font-bold sm:mt-4 ${s.deepText}`}
              >
                Detaylar →
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PlayArea() {
  return (
    <section id="oyun-alani" className="section-y relative overflow-x-clip">
      {/* items-center: sol sütun (adımlar + eylem) sağdan ~190 px uzun;
          üstte hizalı olunca boşluk tamamen sağ altta toplanıyordu. */}
      <Container className="relative">
        <Deco name="ordek" r={-1} top={4} w={140} flip className={desk} />
        <Eyebrow>Oyun Alanı</Eyebrow>
        <SectionTitle>Tamamı ahşap, oyun ablası gözetiminde</SectionTitle>
        <div className="relative mt-7 lg:mt-9">
          {/* Civciv fotoğrafların üstüne yatmış gibi (müşteri isteği). */}
          <Deco
            name="ordek"
            className="right-4 bottom-[calc(100%-0.5rem)] z-10 w-16 scale-x-[-1] sm:w-20 lg:right-2 lg:w-24 xl:hidden"
          />
          <PhotoStrip items={photos.playArea} />
        </div>
      </Container>
      <Container className="relative mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Deco name="cit" ol={44} top={276} w={426} className={desk} />
        <Deco name="cit" or={43} top={276} w={426} className={desk} />
        <div>
          <h3 className="font-bold">Nasıl çalışır?</h3>
          <ol className="mt-3 flex flex-col gap-3">
            {playArea.howItWorks.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-strong text-sm font-extrabold text-white"
                >
                  {i + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-5 text-ink-muted">
            <li className="flex items-start gap-2.5">
              <ClockIcon />
              <span className="leading-relaxed">{playArea.pickup}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckIcon className="mt-0.5 shrink-0 text-play-deep" />
              <span className="leading-relaxed">{playArea.hygiene}</span>
            </li>
          </ul>

          {/* Bölümün eylemi. Eskiden "bize ulaşın" yazıp bağlantı
              vermiyordu; bölümde hiç tıklanabilir öğe yoktu. */}
          <div className="mt-7 rounded-2xl bg-play-tint p-5">
            <p className="leading-relaxed">{playArea.note}</p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-6 font-bold text-white transition-colors hover:bg-brand-deep"
              >
                Bizi arayın
              </a>
              <a
                href={`${business.whatsapp}?text=${encodeURIComponent(playArea.whatsappText)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted bg-surface px-6 font-bold text-brand-deep transition-colors hover:bg-brand-tint"
              >
                WhatsApp&apos;tan sorun
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-card border border-line bg-surface p-6 shadow-card">
            <h3 className="font-display text-xl font-semibold">Süre paketleri</h3>
            <div className="mt-3">
              {playArea.packages.map((p) => (
                <PriceRow key={p.name} {...p} />
              ))}
            </div>
          </div>
          <div className="rounded-card border border-line bg-surface p-6 shadow-card">
            <h3 className="font-display text-xl font-semibold">Yaş aralığı</h3>
            <dl className="mt-3">
              {playArea.ages.map((a) => (
                <div key={a.range} className="border-b border-paper-deep py-3 last:border-0">
                  <dt className="font-bold">{a.range}</dt>
                  <dd className="mt-1 leading-relaxed text-ink-muted">{a.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Atölye yaş etiketleri, Canva'daki gibi her yaş grubu kendi renginde. Dolgu
 * üzerinde koyu mürekkep (≥4.5:1); beyaz yazı bu dolgularda okunmuyor.
 */
const ageTone: Record<string, string> = {
  "18–24 ay": "bg-cafe",
  "24–36 ay": "bg-workshop",
  "3–6 yaş": "bg-play",
};

function Workshops() {
  return (
    <section id="atolyeler" className="section-y relative overflow-x-clip bg-paper-deep">
      <Container className="relative">
        <Deco name="pembe-balon" or={29} top={13} w={140} className={desk} />
        <Deco
          name="pembe-balon"
          className="-top-6 right-4 w-9 sm:w-11 lg:-top-8 lg:right-0 lg:w-16 xl:hidden"
        />
        <div className="max-w-2xl">
          <Eyebrow>Atölyeler</Eyebrow>
          <SectionTitle>Bir saat atölye, bir saat hediye oyun</SectionTitle>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {workshops.description}
          </p>
        </div>

        <div className="mt-8 lg:mt-9">
          <PhotoStrip items={photos.workshops} />
        </div>

        {/* Kartlar kısa tutuldu: telefonda fiyatlar bölüm başından 1321 px
            aşağıdaydı, araya giren uzun program kutusu yüzünden. */}
        <div className="mt-9 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {workshops.types.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <h3 className="font-display text-2xl leading-tight font-semibold">
                {t.name}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{t.description}</p>
              {t.details.length > 0 ? (
                <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                  {t.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-workshop-deep" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {/* Her yaş grubu ayrı etiket: tek uzun etiket satıra taşıyıp
                  kartlar arasında hizayı bozuyordu. */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {t.ages.map((a) => (
                  <span
                    key={a}
                    className={`rounded-full px-3 py-1 text-sm font-bold text-ink ${ageTone[a] ?? "bg-workshop-tint"}`}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Deco name="yildiz-balon" ol={33} top={-86} w={183} className={desk} />
          <div className="rounded-card border border-line bg-surface p-6 shadow-card">
            <h3 className="font-display text-xl font-semibold">Katılım paketleri</h3>
            <ul className="mt-3">
              {workshops.packages.map((p) => {
                const single = workshops.packages[0].total;
                const perSession = p.total / p.count;
                const saving = Math.round((1 - perSession / single) * 100);
                return (
                  <li
                    key={p.count}
                    className="flex items-center justify-between gap-4 border-b border-paper-deep py-3 last:border-0"
                  >
                    <div>
                      <div className="font-semibold">{p.count} atölye</div>
                      {p.count > 1 ? (
                        <div className="text-sm text-ink-muted">
                          Atölye başı {formatTry(perSession)}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-2.5">
                      {saving > 0 ? (
                        <span className="rounded-full bg-workshop-tint px-2.5 py-0.5 text-xs font-bold whitespace-nowrap text-workshop-deep">
                          %{saving} avantajlı
                        </span>
                      ) : null}
                      <span className="font-extrabold whitespace-nowrap tabular-nums">
                        {formatTry(p.total)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-card border-[1.5px] border-workshop bg-workshop-tint p-6">
            <h3 className="font-display text-xl font-semibold">Nasıl katılırım?</h3>
            <ol className="mt-3 flex flex-col gap-3">
              {workshops.howToJoin.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-workshop text-sm font-extrabold text-ink"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/indir"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-6 font-bold text-white transition-colors hover:bg-brand-deep"
              >
                Uygulamayı indir
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted bg-surface px-6 font-bold text-brand-deep transition-colors hover:bg-brand-tint"
              >
                Bizi arayın
              </a>
            </div>

            <h4 className="mt-6 border-t border-workshop/30 pt-5 font-bold">
              Bilmeniz gerekenler
            </h4>
            <ul className="mt-2.5 flex flex-col gap-2">
              {workshops.important.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-workshop-deep" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 shrink-0 text-workshop-deep" />
                <span>
                  Atölye temaları{" "}
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-brand-deep underline underline-offset-2"
                  >
                    Instagram&apos;da
                  </a>{" "}
                  duyurulur
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Birthday() {
  return (
    <section id="dogum-gunu" className="section-y relative overflow-x-clip">
      <Deco name="bayrak" l={-48} top={0} w={636} className={desk} />
      <Deco
        name="bayrak"
        className="top-0 left-1/2 w-[min(80vw,34rem)] -translate-x-1/2 lg:left-[22%] lg:w-[30rem] lg:translate-x-0 xl:hidden"
      />
      {/* Telefonda bayrak, bölüm başlığının üstüne binmesin diye pay. */}
      <Container className="relative mt-10 md:mt-6 lg:mt-0">
        {/* İki fotoğraf: diğer bölümlerdeki gibi tam genişlik şerit olunca
            her biri ~740 px boyunda oluyordu; başlığın yanına alındı. */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <Eyebrow>Doğum Günü</Eyebrow>
            {/* "Siz sadece pastanızı getirin" Premium'un sloganıydı; bölüm
                başlığı olunca Temel paket için de söylenmiş gibi duruyordu. */}
            <SectionTitle>Doğum gününüz bizde</SectionTitle>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {birthday.description}
            </p>
          </div>
          <PhotoStrip items={photos.birthday} />
        </div>

        <div className="relative mt-9 grid gap-5 lg:grid-cols-2">
          <Deco name="yildizlar-1" l={-219} top={-61} w={286} className={desk} />
          <Deco name="yildizlar-2" r={-180} top={4} w={262} className={desk} />
          <Deco
            name="yildizlar-1"
            className="-top-10 right-2 z-10 w-20 lg:-top-12 lg:w-28 xl:hidden"
          />
          {birthday.packages.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-card border border-line bg-surface p-7 shadow-card"
            >
              {/* Fiyat her kartta başlığın altında: yan yana koyunca uzun
                  başlık fiyatı alt satıra itiyor, kartlar hizasız kalıyordu. */}
              <h3 className="font-display text-2xl leading-tight font-semibold">
                {p.name}
              </h3>
              <p className="mt-1 text-ink-muted">{p.subtitle}</p>
              {/* Premium kırmızı, Canva'daki gibi; beyaz yazı 5.97:1. */}
              <div
                className={`mt-4 self-start rounded-full px-4 py-1.5 text-lg font-extrabold ${
                  p.menu ? "bg-danger-deep text-white" : "bg-birthday-tint text-ink"
                }`}
              >
                {p.price}
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 shrink-0 text-birthday-deep" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {p.menu ? (
                <div className="mt-5 rounded-2xl bg-surface-alt p-4 ring-1 ring-line">
                  <h4 className="font-bold">6 çeşit ikram</h4>
                  <div className="mt-2 grid gap-3 sm:grid-cols-3">
                    {p.menu.map((g) => (
                      <div key={g.title}>
                        <div className="text-xs font-bold tracking-[0.6px] text-ink-muted uppercase">
                          {g.title}
                        </div>
                        <ul className="mt-1 flex flex-col gap-0.5 text-sm leading-relaxed">
                          {g.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* mt-auto: dipnot kartın altına yapışır; pt-5 en az boşluk. */}
              {p.footer.length > 0 ? (
                <div className="mt-auto pt-5">
                  <ul className="flex flex-col gap-1.5 border-t border-line pt-4 text-sm leading-relaxed text-ink-muted">
                    {p.footer.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="relative mt-5 rounded-card border-[1.5px] border-birthday bg-birthday-tint p-6 md:p-7">
          <Deco name="tavsan" ol={7} top={-124} w={225} className={desk} />
          <Deco name="timsah" r={-195} top={-146} w={305} className={desk} />
          <h3 className="font-display text-xl font-semibold">Bilmeniz gerekenler</h3>
          <ul className="mt-3 grid gap-x-8 gap-y-2 md:grid-cols-2">
            {birthday.important.map((i) => (
              <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                <CheckIcon className="mt-0.5 shrink-0 text-birthday-deep" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          {/* Sitenin en pahalı hizmeti; eskiden "iletişime geçiniz" yazıp
              hiçbir bağlantı vermiyordu. */}
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={`${business.whatsapp}?text=${encodeURIComponent(birthday.whatsappText)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-6 py-2 text-center font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Uygun tarihi WhatsApp&apos;tan sorun
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted bg-surface px-6 font-bold text-brand-deep transition-colors hover:bg-brand-tint"
            >
              Bizi arayın
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Hanımlara workshop ve etkinlikler. Takvimleri Firestore'da tutuluyor ve
 * sık değişiyor; statik site bunu gösteremez, bu yüzden burada uydurma bir
 * program yok — yalnızca ne olduklarını ve duyuruların nerede olduğunu
 * söylüyor. Hizmet kartlarındaki #workshop ve #etkinlikler buraya iner.
 */
function WorkshopAndEvents() {
  const blocks = [
    {
      id: "workshop",
      key: "womens" as const,
      tint: "bg-womens-tint",
      deep: "text-womens-deep",
      eyebrow: "Yetişkinler için",
      title: womensWorkshop.title,
      text: womensWorkshop.text,
      note: "Her workshop'un konusu ve tarihi Instagram sayfamızda duyurulur.",
      whatsappText: womensWorkshop.whatsappText,
    },
    {
      id: "etkinlikler",
      key: "events" as const,
      tint: "bg-events-tint",
      deep: "text-events-deep",
      eyebrow: "Özel günler",
      title: "Etkinliklerimiz",
      text: events.text,
      note: "Yaklaşan etkinlikleri Instagram sayfamızda paylaşıyoruz.",
      whatsappText: events.whatsappText,
    },
  ];

  return (
    <section className="section-y relative overflow-x-clip bg-paper-deep">
      {/* Çiçekler bölümün dibine basar (müşteri isteği): bölüme göre, alttan. */}
      <Deco name="aycicegi" ol={42} bottom={0} w={150} className={desk} />
      <Deco name="cicek" ol={-37} bottom={0} w={116} className={desk} />
      <Deco name="lale" r={-53} bottom={0} w={124} className={desk} />
      <Container className="relative">
        <Deco name="gunes" or={8} top={-70} w={222} className={desk} />
        <Deco
          name="gunes"
          className="-top-14 right-1 w-[4.25rem] sm:w-24 lg:-top-12 lg:-right-6 lg:w-32 xl:hidden"
        />
        <div className="max-w-2xl">
          <Eyebrow>Workshop ve etkinlikler</Eyebrow>
          <SectionTitle>Sadece çocuklar için değil</SectionTitle>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {blocks.map((b) => (
            <article
              key={b.id}
              id={b.id}
              aria-labelledby={`${b.id}-baslik`}
              className="flex flex-col rounded-card border border-line bg-surface p-7 shadow-card md:p-8"
            >
              <ServiceBadge name={b.key} tint={b.tint} deep={b.deep} />
              <div className="mt-5 text-xs font-bold tracking-[1.1px] text-ink-muted uppercase">
                {b.eyebrow}
              </div>
              <h3
                id={`${b.id}-baslik`}
                className="mt-1.5 font-display text-2xl leading-tight font-semibold"
              >
                {b.title}
              </h3>
              <p className="mt-3 leading-relaxed">{b.text}</p>
              <p className="mt-2 flex-grow leading-relaxed text-ink-muted">
                {b.note}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-6 font-bold text-white transition-colors hover:bg-brand-deep"
                >
                  Instagram&apos;da duyurular
                </a>
                <a
                  href={`${business.whatsapp}?text=${encodeURIComponent(b.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted bg-surface px-6 font-bold text-brand-deep transition-colors hover:bg-brand-tint"
                >
                  WhatsApp&apos;tan sorun
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * Anasayfadaki cafe bölümü yalnızca bir ön izleme: öne çıkan birkaç ürün ve
 * kategoriler. Menünün tamamı /menu sayfasında — anasayfada 63 ürün telefonda
 * 5 ekran tutuyordu.
 */
async function Menu() {
  const menu = await getCafeMenu();

  // Öne çıkanlar: lib/site.ts'teki seçim, fiyat Firestore'dan. Panelden
  // silinmiş bir ürün sessizce atlanır, derleme çıktısında uyarı kalır.
  const featured = cafe.featured.flatMap((f) => {
    const item = menu
      .find((g) => g.category === f.category)
      ?.items.find((i) => i.name === f.name);
    if (!item) {
      console.warn(`[menü] Öne çıkan ürün bulunamadı: ${f.category} › ${f.name}`);
      return [];
    }
    return [{ ...item, category: f.category }];
  });

  const categories = menu.map((g) => {
    const prices = g.items.map((i) => priceValue(i.price)).filter((n): n is number => n !== null);
    return {
      name: g.category,
      count: g.items.length,
      from: prices.length > 0 ? formatTry(Math.min(...prices)) : null,
    };
  });

  return (
    // Zemin düz kağıt: üstteki Workshop ve Etkinlikler bölümü paperDeep;
    // bölümler arka arkaya aynı zeminde olursa sınırları kaybolur.
    <section id="menu" className="section-y relative overflow-x-clip">
      <Container className="relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div className="max-w-2xl">
            <Eyebrow>Cafe</Eyebrow>
            <SectionTitle>Mutfağımızdan</SectionTitle>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {cafe.description}
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex min-h-12 shrink-0 items-center justify-center self-start rounded-full bg-cafe px-6 font-bold text-ink transition-shadow hover:shadow-card-hover md:self-auto"
          >
            Tüm menüyü gör
          </Link>
        </div>

        <div className="relative mt-8 lg:mt-9">
          <Deco name="cilek" ol={-29} top={-61} w={225} className={desk} />
          <Deco
            name="cilek"
            className="-top-8 -left-3 z-10 w-14 sm:w-16 lg:-top-10 lg:-left-6 lg:w-24 xl:hidden"
          />
          <PhotoStrip items={photos.cafe} />
        </div>

        {featured.length > 0 ? (
          <>
            <h3 className="mt-10 text-xs font-bold tracking-[1.1px] text-cafe-deep uppercase">
              Öne çıkanlar
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {featured.map((f) => (
                <li
                  key={`${f.category}-${f.name}`}
                  className="flex flex-col rounded-card border border-line bg-surface p-4 shadow-card sm:p-5"
                >
                  <span className="text-xs font-semibold text-ink-muted">{f.category}</span>
                  <span className="mt-1 flex-grow font-display text-lg leading-tight font-semibold sm:text-xl">
                    {f.name}
                  </span>
                  <span className="mt-3 font-bold text-cafe-deep tabular-nums">{f.price}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <h3 className="relative mt-10 text-xs font-bold tracking-[1.1px] text-cafe-deep uppercase">
          Kategoriler
          <Deco name="cupcake" r={-160} top={-127} w={209} className={desk} />
        </h3>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <li key={c.name}>
              <Link
                href={`/menu#${slugify(c.name)}`}
                className="flex h-full flex-col rounded-2xl border border-line bg-surface px-4 py-3.5 transition-colors hover:border-cafe hover:bg-cafe-tint"
              >
                <span className="font-bold">{c.name}</span>
                <span className="mt-0.5 text-sm text-ink-muted">
                  {c.count} ürün{c.from ? ` · ${c.from} ve üzeri` : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/**
 * Galerimiz — uygulamadaki Galerimiz ekranıyla aynı fotoğraflar (panelden,
 * `npm run sync-gallery` ile lib/gallery.json'a alınır).
 */
function GallerySection() {
  return (
    <section id="galeri" className="section-y bg-paper-deep">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-10">
          <div>
            <Eyebrow>Galerimiz</Eyebrow>
            <SectionTitle>Bizden kareler</SectionTitle>
          </div>
          <p className="max-w-md text-ink-muted">
            Oyun alanımız, atölyelerimiz ve cafemizden fotoğraflar. Büyütmek
            için bir fotoğrafa dokunun.
          </p>
        </div>
        <div className="mt-8">
          <Gallery photos={gallery} />
        </div>
      </Container>
    </section>
  );
}

/** Sadakat kartı örneğinde dolu damga sayısı. */
const SAMPLE_STAMPS = 4;

function Loyalty() {
  const left = loyalty.maxStamps - SAMPLE_STAMPS;
  return (
    <section className="section-y">
      <Container className="relative">
        {/* Canva'daki gibi kartın ARKASINDA: z yok, sonra gelen kart üstte boyanır. */}
        <Deco name="yildizlar-3" ol={-35} top={-45} w={182} className="hidden xl:block" />
        <div className="relative flex flex-col gap-10 rounded-3xl bg-ink-deep p-6 sm:p-8 md:p-12 lg:flex-row lg:items-center lg:gap-14">
          <Deco
            name="yildizlar-3"
            className="-top-6 -left-3 w-14 sm:w-16 lg:-top-10 lg:-left-6 lg:w-20 xl:hidden"
          />
          <Deco
            name="ordek"
            className="-right-3 -bottom-5 w-16 sm:w-20 lg:right-auto lg:-bottom-8 lg:left-[58%] lg:w-24 xl:hidden"
          />
          <div className="flex-grow">
            <div className="text-xs font-bold tracking-[1.1px] text-ink-on-deep uppercase">
              Mobil uygulama
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2.375rem)] leading-tight font-semibold tracking-[-0.8px] text-white">
              {loyalty.description}
            </h2>
            {/* Damganın neyle kazanıldığı yazmıyordu; ödül ise başlığı
                tekrar ediyordu. Kural uygulamadaki karttan: oyun alanına
                her ücretli giriş bir damga, 10. giriş ücretsiz. */}
            <p className="mt-4 leading-relaxed text-ink-on-deep">
              Oyun alanına her ücretli girişinizde kartınıza bir damga
              işlenir; {loyalty.maxStamps + 1}. girişiniz bizden. Karekodunuzu
              okutmanız yeterli — kartınız, kalan atölye haklarınız ve
              rezervasyonlarınız uygulamada.
            </p>
            <Link
              href="/indir"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-bold text-ink transition-opacity hover:opacity-90"
            >
              Uygulamayı indir
            </Link>
          </div>

          {/* Uygulamadaki "Oyun Alanı Sadakat Kartı"nın birebir karşılığı
              (Customer/sections/LoyaltyCard.js): 9 damga + hediye kutusu,
              5x2 ızgara, sarı sayaç ve kalan giriş notu. */}
          <div
            className="w-full shrink-0 rounded-card border border-line bg-surface p-5 sm:w-[340px]"
            role="img"
            aria-label={`Örnek sadakat kartı: ${SAMPLE_STAMPS} damga toplandı, ${loyalty.maxStamps} damgada ${loyalty.maxStamps + 1}. giriş ücretsiz.`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-lg font-bold">{loyalty.maxStamps} ödemeli giriş</div>
                <div className="text-sm text-ink-muted">
                  {loyalty.maxStamps + 1}. girişiniz bizden — ücretsiz.
                </div>
              </div>
              <div className="flex items-baseline gap-0.5 rounded-xl border border-birthday bg-birthday-tint px-3 py-1.5">
                <span className="text-3xl font-extrabold text-birthday-deep tabular-nums">
                  {SAMPLE_STAMPS}
                </span>
                <span className="text-xs font-bold text-ink-muted">/{loyalty.maxStamps}</span>
              </div>
            </div>

            <div className="mx-auto mt-4 grid max-w-[272px] grid-cols-5 gap-2">
              {Array.from({ length: loyalty.maxStamps }, (_, i) =>
                i < SAMPLE_STAMPS ? (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-full bg-play text-ink"
                  >
                    <CheckIcon />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-full border border-dashed border-line-strong bg-paper-deep text-sm font-semibold text-ink-muted"
                  >
                    {i + 1}
                  </div>
                ),
              )}
              <div className="flex aspect-square items-center justify-center rounded-full border-[1.5px] border-dashed border-line-strong bg-surface-alt text-ink-muted">
                <GiftIcon />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-birthday bg-birthday-tint px-3 py-2.5 text-sm">
              <FootstepsIcon />
              Ücretsiz girişe {left} giriş kaldı.
            </div>
          </div>
        </div>
        <Deco name="ordek" r={357} top={268} w={162} flip className={desk} />
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="sss" className="section-y relative overflow-x-clip bg-paper-deep">
      <Container className="relative max-w-[820px]!">
        <Deco name="balon" l={-99} top={-42} w={188} className={desk} />
        <Deco name="bulut-1" r={-133} top={-46} w={235} className={desk} />
        <Deco name="bulut-2" r={72} top={170} w={113} className={desk} />
        <Deco name="bulut-2" ol={15} top={328} w={189} className={desk} />
        <Deco name="bulut-1" or={5} top={411} w={130} className={desk} />
        <Deco name="bulut-2" className="-top-4 right-4 w-20 sm:w-24 xl:hidden" />
        <Eyebrow>Sıkça sorulan sorular</Eyebrow>
        <SectionTitle>Merak edilenler</SectionTitle>

        <div className="mt-8 overflow-hidden rounded-card border border-line bg-surface">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-line last:border-0">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-bold text-brand-deep hover:bg-surface-alt [&::-webkit-details-marker]:hidden">
                <span className="text-ink">{item.q}</span>
                <ChevronIcon />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="section-y">
      <Container className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-card border border-line bg-surface p-7 shadow-card md:p-9">
          <Eyebrow>Bize ulaşın</Eyebrow>
          <SectionTitle>Çınardere&apos;deyiz</SectionTitle>
          <dl className="mt-7 flex flex-col gap-5">
            <div className="flex gap-3.5">
              <PinIcon />
              <div>
                <dt className="sr-only">Adres</dt>
                <dd className="leading-snug">
                  {business.address}
                  <br />
                  <span className="text-ink-muted">{business.addressLine2}</span>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <PhoneIcon />
              <div>
                <dt className="sr-only">Telefon</dt>
                <dd>
                  <a href={business.phoneHref} className="font-bold text-brand-deep hover:underline">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <MailIcon />
              <div>
                <dt className="sr-only">E-posta</dt>
                <dd>
                  <a href={`mailto:${business.email}`} className="font-bold text-brand-deep hover:underline">
                    {business.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <ClockIcon />
              <div>
                <dt className="sr-only">Çalışma saatleri</dt>
                <dd>{business.hours}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${business.whatsapp}?text=${encodeURIComponent(business.whatsappText)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-6 font-bold text-white transition-colors hover:bg-brand-deep"
            >
              WhatsApp&apos;tan yazın
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted px-6 font-bold text-brand-deep"
            >
              {business.instagramHandle}
            </a>
          </div>
        </div>

        {/* Harita gömüsü yok: Google iframe'i sayfa açılır açılmaz üçüncü taraf
            çerezi bırakır. Bağlantı aynı işi görür, izleme olmadan. */}
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex flex-col overflow-hidden rounded-card bg-brand-tint"
        >
          {/* Tabela fotoğrafı: masaüstünde kart üç satır yazıyla 616 px boş
              duruyordu; gelen veli de binayı tabeladan tanıyor. lg'de kalan
              yüksekliği doldurur. lg'de mutlak konumlu: yoksa dikey fotoğrafın
              kendi boyu satırı 1255 px'e uzatıyordu. */}
          <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-48 lg:flex-1">
            <Image
              src={photos.storefront.src}
              alt={photos.storefront.alt}
              width={640}
              height={960}
              className="absolute inset-0 size-full object-cover object-[50%_35%] lg:object-[50%_42%]"
            />
          </div>
          <div className="flex flex-col gap-5 p-7 md:p-9">
            <div>
              <Eyebrow>Konum</Eyebrow>
              <div className="mt-2.5 font-display text-2xl font-semibold">
                Google Haritalar&apos;da aç
              </div>
              <p className="mt-3 leading-relaxed text-ink-muted">
                Pendik Çınardere&apos;de, Mehtap Sokak üzerindeyiz. Yol tarifi için
                dokunun.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-bold text-brand-deep">
              Yol tarifi al
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </a>
      </Container>
    </section>
  );
}

/* ── İletişim ikonları ───────────────────────────────────────────── */

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0 text-brand-deep",
};

function PinIcon() {
  return (
    <svg {...iconProps} className={`${iconProps.className} mt-0.5`}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function FootstepsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-birthday-deep"
    >
      <path d="M4 16v-2.4C4 11.5 3 10.5 3 8c0-2.7 1.5-6 4.5-6C9.4 2 10 3.8 10 5.5c0 3.1-2 5.7-2 8.7V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.4c0-2.1 1-3.1 1-5.6 0-2.7-1.5-6-4.5-6C14.6 6 14 7.8 14 9.5c0 3.1 2 5.7 2 8.7V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4M4 13h4" />
    </svg>
  );
}
