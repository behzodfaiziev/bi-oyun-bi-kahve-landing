import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import { LegalHeader, TemplateNotice, Toc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Bi Oyun Bi Kahve olarak kişisel verilerinizi nasıl işlediğimizi, kimlerle paylaştığımızı ve haklarınızı açıklayan gizlilik politikası.",
};

const sections = [
  { id: "veri-sorumlusu", label: "Veri sorumlusu" },
  { id: "hangi-veriler", label: "İşlenen kişisel veriler" },
  { id: "amac", label: "İşleme amaçları ve hukuki sebep" },
  { id: "cocuk", label: "Çocuklara ilişkin veriler" },
  { id: "aktarim", label: "Veri aktarımı" },
  { id: "saklama", label: "Saklama süreleri" },
  { id: "guvenlik", label: "Veri güvenliği" },
  { id: "haklar", label: "Haklarınız ve başvuru" },
];

export default function GizlilikPolitikasi() {
  return (
    <>
      <LegalHeader
        title="Gizlilik Politikası"
        intro={
          <>
            Bu politika, <strong>[TİCARİ UNVAN]</strong> (&laquo;Bi Oyun Bi
            Kahve&raquo;, &laquo;biz&raquo;) olarak bioyunbikahve.com web sitesi
            ve Bi Oyun Bi Kahve mobil uygulaması üzerinden kişisel verilerinizi
            nasıl işlediğimizi açıklar. 6698 sayılı Kişisel Verilerin Korunması
            Kanunu (&laquo;KVKK&raquo;) kapsamında veri sorumlusu sıfatıyla
            hazırlanmıştır.
          </>
        }
      />

      <Toc items={sections} />
      <TemplateNotice />

      <h2 id="veri-sorumlusu">1. Veri sorumlusu</h2>
      <table>
        <tbody>
          <tr>
            <td className="w-48 text-ink-muted">Ticari unvan</td>
            <td className="font-semibold">[TİCARİ UNVAN]</td>
          </tr>
          <tr>
            <td className="text-ink-muted">Adres</td>
            <td className="font-semibold">
              {business.address}, {business.addressLine2}
            </td>
          </tr>
          <tr>
            <td className="text-ink-muted">Vergi dairesi / VKN</td>
            <td className="font-semibold">[VERGİ DAİRESİ] / [VKN]</td>
          </tr>
          <tr>
            <td className="text-ink-muted">VERBİS kaydı</td>
            <td className="font-semibold">[VARSA VERBİS NUMARASI]</td>
          </tr>
          <tr>
            <td className="text-ink-muted">E-posta</td>
            <td>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </td>
          </tr>
          <tr>
            <td className="text-ink-muted">Telefon</td>
            <td>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="hangi-veriler">2. İşlenen kişisel veriler</h2>
      <h3>2.1. Bu web sitesi</h3>
      <p>
        Bu site tamamen statiktir: üyelik, rezervasyon veya iletişim formu
        bulunmaz. Sitede gezinirken bize <strong>hiçbir kişisel veri
        iletmezsiniz</strong>. Telefon, e-posta veya WhatsApp bağlantılarına
        tıklamanız hâlinde iletişim kendi cihazınızın uygulaması üzerinden
        kurulur; bize yalnızca sizin ilettiğiniz bilgiler ulaşır.
      </p>
      <p>
        Barındırma sağlayıcımız, teknik olarak zorunlu sunucu kayıtları (IP
        adresi, tarayıcı bilgisi, istek zamanı) tutar. Bu kayıtlar
        güvenlik amacıyla işlenir ve profilleme için kullanılmaz.
      </p>
      <h3>2.2. İşletmemizde ve mobil uygulamada</h3>
      <ul>
        <li>
          <strong>Kimlik:</strong> ad, soyad
        </li>
        <li>
          <strong>İletişim:</strong> telefon numarası, e-posta adresi
        </li>
        <li>
          <strong>Müşteri işlem:</strong> rezervasyon tarih ve saati, katılımcı
          sayısı, satın alınan paket, kalan katılım hakları, sadakat kartı damga
          sayısı
        </li>
        <li>
          <strong>Çocuğa ilişkin:</strong> çocuğun adı ve yaş aralığı &mdash;
          yalnızca yaşa uygun atölye ve güvenli oyun grubu oluşturmak için
        </li>
        <li>
          <strong>İşlem güvenliği:</strong> uygulama oturum kayıtları, bildirim
          izni verdiyseniz cihaz bildirim kimliği
        </li>
      </ul>
      <p>
        Sağlık verisi, alerji bilgisi veya benzeri{" "}
        <strong>özel nitelikli kişisel veri</strong> talep etmiyoruz.
        Çocuğunuzun sağlığıyla ilgili bir durumu bize sözlü olarak bildirmeniz
        yeterlidir; bu bilgi kayda geçirilmez.
      </p>

      <h2 id="amac">3. İşleme amaçları ve hukuki sebep</h2>
      <table>
        <thead>
          <tr>
            <th>Amaç</th>
            <th>Hukuki sebep (KVKK m.5)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rezervasyon ve paket satışının yürütülmesi</td>
            <td className="text-ink-muted">Sözleşmenin kurulması ve ifası</td>
          </tr>
          <tr>
            <td>Fatura ve yasal defter kayıtları</td>
            <td className="text-ink-muted">Hukuki yükümlülük</td>
          </tr>
          <tr>
            <td>Sadakat kartı ve kalan hakların takibi</td>
            <td className="text-ink-muted">Sözleşmenin ifası</td>
          </tr>
          <tr>
            <td>Oyun alanı güvenliği, yaşa uygun grup oluşturma</td>
            <td className="text-ink-muted">Meşru menfaat</td>
          </tr>
          <tr>
            <td>Kampanya ve etkinlik duyurusu gönderimi</td>
            <td className="text-ink-muted">
              Açık rıza &mdash; dilediğiniz an geri alınabilir
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="cocuk">4. Çocuklara ilişkin veriler</h2>
      <p>
        Çocuğa ait veriler yalnızca velisi tarafından ve veli hesabı üzerinden
        verilir. Çocuk adına bağımsız bir üyelik oluşturulmaz. Çocuğun adı
        yalnızca atölye yoklaması ve oyun alanı giriş kaydı için kullanılır;
        pazarlama amacıyla kullanılmaz.
      </p>
      <p>
        Atölye ve etkinliklerde <strong>fotoğraf veya video</strong> çekilmesi
        yalnızca velinin ayrıca verdiği izne bağlıdır. İzin verilmediğinde
        çocuğunuz kayıt alanının dışında tutulur; izni sonradan geri çekmeniz
        hâlinde paylaşılan içerik kaldırılır.
      </p>

      <h2 id="aktarim">5. Veri aktarımı</h2>
      <p>
        Kişisel verileriniz <strong>satılmaz</strong> ve pazarlama amacıyla
        üçüncü kişilerle paylaşılmaz. Hizmetin yürütülmesi için aşağıdaki
        sağlayıcılar kullanılmaktadır:
      </p>
      <ul>
        <li>
          <strong>Cloudflare, Inc.</strong> &mdash; bu web sitesinin
          barındırılması ve dağıtımı.
        </li>
        <li>
          <strong>Google LLC (Firebase)</strong> &mdash; mobil uygulamanın
          üyelik, rezervasyon ve bildirim altyapısı. Sunucu bölgesi:{" "}
          <strong>[BÖLGE]</strong>.
        </li>
        <li>
          <strong>Yetkili kamu kurum ve kuruluşları</strong> &mdash; yalnızca
          kanunen talep edilmesi hâlinde.
        </li>
      </ul>
      <p>
        Bu sağlayıcıların sunucuları yurt dışında bulunabilir. Yurt dışına
        aktarım gerektiren durumlarda KVKK m.9 uyarınca gerekli şartlar
        sağlanır.
      </p>

      <h2 id="saklama">6. Saklama süreleri</h2>
      <ul>
        <li>
          Üyelik verileri: üyelik süresince ve sona ermesinden itibaren{" "}
          <strong>[SÜRE]</strong>.
        </li>
        <li>
          Fatura ve mali kayıtlar: Vergi Usul Kanunu uyarınca{" "}
          <strong>5 yıl</strong>, Türk Ticaret Kanunu uyarınca{" "}
          <strong>10 yıl</strong>.
        </li>
        <li>
          Pazarlama izni kayıtları: izin geri alınana kadar, sonrasında ispat
          amacıyla <strong>[SÜRE]</strong>.
        </li>
        <li>
          Sunucu ve oturum kayıtları: <strong>[SÜRE]</strong>.
        </li>
      </ul>
      <p>
        Süresi dolan veriler silinir, yok edilir veya anonim hâle getirilir.
      </p>

      <h2 id="guvenlik">7. Veri güvenliği</h2>
      <p>
        Verilerinize yalnızca işini yapmak için ihtiyaç duyan personel erişir.
        Yönetim paneline erişim kimlik doğrulaması ve yetki kuralları ile
        sınırlandırılmıştır. Site ve uygulama trafiği şifreli bağlantı (HTTPS)
        üzerinden taşınır.
      </p>

      <h2 id="haklar">8. Haklarınız ve başvuru</h2>
      <p>
        KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini
        öğrenme, işlenmişse bilgi talep etme, işleme amacını öğrenme, yurt
        içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya
        yanlış işlenmişse düzeltilmesini, koşulları oluştuğunda silinmesini veya
        yok edilmesini isteme, yapılan işlemlerin aktarıldığı üçüncü kişilere
        bildirilmesini isteme, otomatik sistemlerle analiz sonucu aleyhinize bir
        sonuç doğmasına itiraz etme ve zararın giderilmesini talep etme
        haklarına sahipsiniz.
      </p>
      <p>
        Taleplerinizi <a href={`mailto:${business.email}`}>{business.email}</a>{" "}
        adresine e-posta ile veya yukarıdaki adrese yazılı olarak
        iletebilirsiniz. Başvurunuz en geç <strong>30 gün</strong> içinde
        ücretsiz olarak yanıtlanır.
      </p>
      <p>
        Çerezler hakkında ayrıntılı bilgi için{" "}
        <Link href="/yasal/cerez-politikasi">Çerez Politikası</Link>, işleme
        faaliyetlerinin özeti için{" "}
        <Link href="/yasal/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>{" "}
        sayfalarına bakabilirsiniz.
      </p>
      <p className="text-sm text-ink-muted">
        Bu politikada yapılan değişiklikler bu sayfada yayımlandığı tarihte
        yürürlüğe girer. Önemli bir değişiklik hâlinde kayıtlı kullanıcılara
        ayrıca bildirim yapılır.
      </p>
    </>
  );
}
