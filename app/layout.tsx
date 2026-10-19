import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Fontlar derleme sırasında indirilip kendi kendine sunulur — çalışma anında
 * Google'a istek gitmez. Çerez onayı gerektiren üçüncü taraf isteği yok.
 * latin-ext alt kümesi Türkçe için zorunlu: ç ğ ı İ ö ş ü ve ₺.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = "https://bioyunbikahve.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Çocuk Oyun Atölyesi ve Cafe · Pendik`,
    template: `%s — ${business.name}`,
  },
  description: `${business.slogan}. Ahşap oyuncaklardan oluşan serbest oyun alanı, atölyeler ve doğum günü kutlamaları. ${business.addressLine2}`,
  keywords: [
    "çocuk oyun alanı Pendik",
    "çocuk atölyesi İstanbul",
    "doğum günü organizasyonu Pendik",
    "çocuk dostu cafe",
    "Çınardere oyun alanı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} — Çocuk Oyun Atölyesi ve Cafe`,
    description: business.slogan,
    images: [{ url: "/images/oyun-alani.jpg", width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.png" },
  // "./" her sayfada KENDİ yoluna çözülür (metadataBase + sayfa yolu).
  // Sabit siteUrl yazınca tüm sayfalar canonical olarak anasayfayı
  // gösteriyordu; Google alt sayfaları kopya sayıp indekslemezdi.
  alternates: { canonical: "./" },
};

/**
 * Yerel işletme yapısal verisi — Google'ın haritada ve arama sonucunda
 * adresi, saatleri ve telefonu göstermesi için.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: business.name,
  description: business.description,
  url: siteUrl,
  telephone: business.phone,
  email: business.email,
  image: `${siteUrl}/images/oyun-alani.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    postalCode: business.postalCode,
    addressLocality: "Pendik",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: business.opens,
    closes: business.closes,
  },
  sameAs: [business.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${nunito.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-bold focus:text-ink"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-grow">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // Sabit, kod içinde tanımlı veri — kullanıcı girdisi değil.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
