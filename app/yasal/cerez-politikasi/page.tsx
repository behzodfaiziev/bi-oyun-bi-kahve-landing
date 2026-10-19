import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import { LegalHeader, Toc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Bi Oyun Bi Kahve web sitesinde çerez kullanımı: hangi çerezler kullanılıyor, neden kullanılıyor ve nasıl yönetilir.",
};

const sections = [
  { id: "cerez-nedir", label: "Çerez nedir?" },
  { id: "kullandiklarimiz", label: "Bu sitede kullanılan çerezler" },
  { id: "ucuncu-taraf", label: "Üçüncü taraf içerikler" },
  { id: "yonetim", label: "Çerezleri yönetme" },
];

export default function CerezPolitikasi() {
  return (
    <>
      <LegalHeader
        title="Çerez Politikası"
        intro={
          <>
            Bu sayfa, bioyunbikahve.com sitesinde çerez ve benzeri
            teknolojilerin nasıl kullanıldığını açıklar. Kısa cevap:{" "}
            <strong>bu site sizi takip etmez</strong>.
          </>
        }
      />

      <Toc items={sections} />

      <div className="mt-8 flex gap-3 rounded-2xl bg-brand-tint p-5">
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
          className="mt-0.5 shrink-0 text-brand-deep"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <p className="leading-relaxed">
          Bu sitede <strong>reklam çerezi, izleme pikseli veya analitik
          çerez bulunmuyor</strong>. Bu yüzden karşınıza bir çerez onay kutusu
          da çıkmıyor &mdash; onaylayacağınız bir şey yok.
        </p>
      </div>

      <h2 id="cerez-nedir">1. Çerez nedir?</h2>
      <p>
        Çerez, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen
        küçük bir metin dosyasıdır. Siteler çerezleri oturumu sürdürmek,
        tercihlerinizi hatırlamak veya ziyaretçi davranışını ölçmek için
        kullanır.
      </p>

      <h2 id="kullandiklarimiz">2. Bu sitede kullanılan çerezler</h2>
      <p>
        Bu site <strong>tamamen statiktir</strong>: üyelik, form veya oturum
        yoktur. Site kendi adına <strong>hiçbir çerez yerleştirmez</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tür</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">Zorunlu çerezler</td>
            <td className="text-ink-muted">
              Kullanılmıyor &mdash; oturum veya form bulunmadığı için gerek yok
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Tercih çerezleri</td>
            <td className="text-ink-muted">Kullanılmıyor</td>
          </tr>
          <tr>
            <td className="font-semibold">Analitik çerezler</td>
            <td className="text-ink-muted">Kullanılmıyor</td>
          </tr>
          <tr>
            <td className="font-semibold">Reklam / hedefleme çerezleri</td>
            <td className="text-ink-muted">Kullanılmıyor</td>
          </tr>
        </tbody>
      </table>
      <p>
        Yazı tipleri (Fraunces ve Nunito) siteyle birlikte kendi sunucumuzdan
        yüklenir; sayfa açıldığında Google Fonts&apos;a veya başka bir üçüncü
        tarafa istek gitmez.
      </p>
      <p>
        Barındırma sağlayıcımız Cloudflare, güvenlik ve kötüye kullanım önleme
        amacıyla teknik sunucu kayıtları tutabilir. Bu kayıtlar reklam amacıyla
        kullanılmaz.
      </p>

      <h2 id="ucuncu-taraf">3. Üçüncü taraf içerikler</h2>
      <p>
        Sayfaya gömülü harita, video veya sosyal medya akışı{" "}
        <strong>bulunmamaktadır</strong>. Bu tür gömüler sayfa açılır açılmaz
        üçüncü taraf çerezi bırakacağı için bilinçli olarak tercih edilmedi.
      </p>
      <p>
        Bunların yerine bağlantı kullanıyoruz: &laquo;Google Haritalar&apos;da
        aç&raquo;, Instagram ve WhatsApp bağlantılarına{" "}
        <strong>tıkladığınızda</strong> ilgili sitenin kendi çerez ve gizlilik
        politikası devreye girer. Tıklamadığınız sürece bu sitelere hiçbir veri
        gitmez.
      </p>

      <h2 id="yonetim">4. Çerezleri yönetme</h2>
      <p>
        Bu sitede engelleyeceğiniz bir çerez olmamakla birlikte, tarayıcınızın
        ayarlarından tüm siteler için çerezleri yönetebilirsiniz:
      </p>
      <ul>
        <li>
          <strong>Chrome:</strong> Ayarlar &rsaquo; Gizlilik ve güvenlik &rsaquo;
          Üçüncü taraf çerezler
        </li>
        <li>
          <strong>Safari:</strong> Ayarlar &rsaquo; Gizlilik &rsaquo; Tüm
          çerezleri engelle
        </li>
        <li>
          <strong>Firefox:</strong> Ayarlar &rsaquo; Gizlilik ve Güvenlik
          &rsaquo; Gelişmiş İzlenme Koruması
        </li>
      </ul>
      <p>
        Mobil uygulamamızda durum farklıdır: oturum açtığınızda kimlik
        doğrulama için cihazınızda teknik veriler saklanır. Ayrıntı için{" "}
        <Link href="/yasal/gizlilik-politikasi">Gizlilik Politikası</Link>.
      </p>
      <p>
        Soru ve talepleriniz için:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </>
  );
}
