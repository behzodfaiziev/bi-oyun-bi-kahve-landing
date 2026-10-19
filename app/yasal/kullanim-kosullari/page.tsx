import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import { LegalHeader, TemplateNotice, Toc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "Bi Oyun Bi Kahve web sitesi ve işletme hizmetlerinin kullanımına ilişkin koşullar, oyun alanı kuralları, rezervasyon ve iptal şartları.",
};

const sections = [
  { id: "taraflar", label: "Taraflar ve kapsam" },
  { id: "site", label: "Sitenin kullanımı" },
  { id: "oyun-alani-kurallari", label: "Oyun alanı kuralları" },
  { id: "rezervasyon", label: "Rezervasyon ve ödeme" },
  { id: "iptal", label: "İptal ve iade" },
  { id: "sorumluluk", label: "Sorumluluk" },
  { id: "fikri-mulkiyet", label: "Fikri mülkiyet" },
  { id: "uyusmazlik", label: "Uyuşmazlık çözümü" },
];

export default function KullanimKosullari() {
  return (
    <>
      <LegalHeader
        title="Kullanım Koşulları"
        intro={
          <>
            Bu koşullar, bioyunbikahve.com web sitesinin ve{" "}
            <strong>[TİCARİ UNVAN]</strong> tarafından işletilen Bi Oyun Bi
            Kahve şubesinin hizmetlerinden yararlanmanıza ilişkin kuralları
            belirler. Siteyi kullanarak veya işletmemizden hizmet alarak bu
            koşulları kabul etmiş sayılırsınız.
          </>
        }
      />

      <Toc items={sections} />
      <TemplateNotice />

      <h2 id="taraflar">1. Taraflar ve kapsam</h2>
      <p>
        Bu metinde &laquo;İşletme&raquo; ifadesi{" "}
        <strong>[TİCARİ UNVAN]</strong>&apos;yi, &laquo;Ziyaretçi&raquo; ifadesi
        siteyi kullanan veya işletmeden hizmet alan gerçek kişiyi belirtir.
        İşletme adresi: {business.address}, {business.addressLine2}.
      </p>

      <h2 id="site">2. Sitenin kullanımı</h2>
      <p>
        Bu site yalnızca <strong>tanıtım amaçlıdır</strong>. Site üzerinden
        üyelik oluşturulamaz, rezervasyon yapılamaz ve ödeme alınamaz. Sitedeki
        fiyat, saat, kapasite ve program bilgileri bilgilendirme amaçlı olup
        bağlayıcı bir teklif teşkil etmez; güncel bilgi işletmemizden veya
        mobil uygulamadan teyit edilmelidir.
      </p>
      <p>
        Siteyi hukuka aykırı amaçlarla, sistemlere zarar verecek şekilde veya
        otomatik araçlarla aşırı yük oluşturacak biçimde kullanamazsınız.
      </p>

      <h2 id="oyun-alani-kurallari">3. Oyun alanı kuralları</h2>
      <p>
        Çocukların güvenliği için aşağıdaki kurallar tüm ziyaretçiler için
        geçerlidir:
      </p>
      <ul>
        <li>
          <strong>18&ndash;24 ay</strong> arası çocuklarda anne/baba eşliğinde
          katılım zorunludur.
        </li>
        <li>
          <strong>2&ndash;12 yaş</strong> arasında ebeveyn eşliği gerekmez;
          oyun ablalarımız çocuğunuza eşlik eder. Ancak veli işletme içinde
          bulunmalıdır.
        </li>
        <li>
          Oyun alanına yiyecek ve içecekle girilmez. İkramlar cafe alanında
          tüketilir.
        </li>
        <li>
          Ateş, bulaşıcı hastalık belirtisi veya açık yarası olan çocuklar
          diğer çocukların sağlığı için oyun alanına alınmaz.
        </li>
        <li>
          Çocuğun bilinen alerji veya sağlık durumunu görevliye bildirmek
          velinin sorumluluğundadır.
        </li>
        <li>
          Oyun alanına çoraplı girilir; ayakkabı ile giriş yapılmaz.
        </li>
        <li>
          Personelin güvenlik uyarılarına uyulması zorunludur. Uyarılara
          uyulmaması hâlinde hizmet sonlandırılabilir.
        </li>
      </ul>

      <h2 id="rezervasyon">4. Rezervasyon ve ödeme</h2>
      <p>
        Serbest oyun alanı için rezervasyon gerekmez. Atölyeler, doğum günü
        kutlamaları ve etkinlikler için önceden yer ayırtılması gerekir.
        Rezervasyon ve ödeme <strong>işletmemizde</strong> veya mobil uygulama
        üzerinden yapılır; bu site üzerinden ödeme alınmaz.
      </p>
      <ul>
        <li>
          Doğum günü rezervasyonları için en az <strong>1 hafta</strong> önceden
          iletişime geçilmelidir.
        </li>
        <li>
          Atölye kontenjanı sınırlıdır ve kayıt sırasına göre doldurulur.
        </li>
        <li>
          Satın alınan katılım paketleri devredilemez; geçerlilik süresi
          satın alma sırasında bildirilir.
        </li>
      </ul>

      <h2 id="iptal">5. İptal ve iade</h2>
      <ul>
        <li>
          <strong>Doğum günü:</strong> iptal bildiriminin en geç{" "}
          <strong>3 gün</strong> önce yapılması gerekir. Daha geç yapılan
          iptallerde ön ödeme iade edilmez.
        </li>
        <li>
          <strong>Atölye:</strong> katılım hakkı, kontenjan uygunsa başka bir
          tarihe aktarılabilir. Kullanılmayan katılım hakları için ücret iadesi
          yapılmaz.
        </li>
        <li>
          <strong>İşletme kaynaklı iptal:</strong> etkinliğin işletme tarafından
          iptal edilmesi hâlinde ödemenin tamamı iade edilir veya tarih
          ertelenir; tercih size aittir.
        </li>
        <li>
          Mesafeli satış yoluyla alınan hizmetlerde tüketicinin cayma hakkı
          saklıdır. Belirli tarihte yapılması gereken etkinlik hizmetlerinde
          cayma hakkı mevzuat gereği sınırlı olabilir.
        </li>
      </ul>

      <h2 id="sorumluluk">6. Sorumluluk</h2>
      <p>
        İşletme, oyun alanının güvenliği ve malzemelerin hijyeni için gerekli
        özeni gösterir. Bununla birlikte:
      </p>
      <ul>
        <li>
          Velinin bildirmediği sağlık durumlarından doğan sonuçlardan işletme
          sorumlu tutulamaz.
        </li>
        <li>
          Kurallara aykırı davranış sonucu oluşan zararlardan veli sorumludur.
        </li>
        <li>
          İşletmeye getirilen kişisel eşyaların kaybından veya zarar
          görmesinden işletme sorumlu değildir.
        </li>
      </ul>

      <h2 id="fikri-mulkiyet">7. Fikri mülkiyet</h2>
      <p>
        Bu sitedeki logo, görsel, metin ve tasarım öğeleri İşletme&apos;ye
        aittir. İzinsiz kopyalanamaz, çoğaltılamaz veya ticari amaçla
        kullanılamaz.
      </p>

      <h2 id="uyusmazlik">8. Uyuşmazlık çözümü</h2>
      <p>
        Bu koşullara Türkiye Cumhuriyeti hukuku uygulanır. Uyuşmazlıklarda{" "}
        <strong>[YETKİLİ MAHKEME VE İCRA DAİRELERİ, ör. İstanbul Anadolu]</strong>{" "}
        yetkilidir. Tüketici işlemlerinde, parasal sınırlar dâhilinde Tüketici
        Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
      </p>
      <p>
        Sorularınız için:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a> &middot;{" "}
        <a href={business.phoneHref}>{business.phoneDisplay}</a>
      </p>
      <p className="text-sm text-ink-muted">
        Kişisel verilerinizin işlenmesi hakkında bilgi için{" "}
        <Link href="/yasal/gizlilik-politikasi">Gizlilik Politikası</Link>{" "}
        sayfasına bakabilirsiniz.
      </p>
    </>
  );
}
