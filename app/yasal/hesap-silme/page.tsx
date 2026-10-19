import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import { LegalHeader, Toc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Hesap ve Veri Silme",
  description:
    "Bi Oyun Bi Kahve mobil uygulamasındaki hesabınızı ve verilerinizi nasıl sileceğiniz, hangi verilerin silindiği ve hangilerinin ne kadar süre saklandığı.",
};

const sections = [
  { id: "uygulama-icinden", label: "Uygulama içinden silme" },
  { id: "eposta-ile", label: "E-posta ile silme talebi" },
  { id: "silinen", label: "Silinen veriler" },
  { id: "saklanan", label: "Saklanan veriler ve süreleri" },
  { id: "sure", label: "İşlem süresi" },
];

export default function HesapSilme() {
  return (
    <>
      <LegalHeader
        title="Hesap ve Veri Silme"
        intro={
          <>
            Bu sayfa, <strong>Bi Oyun Bi Kahve</strong> mobil uygulamasındaki
            (paket adı <code>com.bioyunbikahve.app</code>) hesabınızı ve
            verilerinizi nasıl sileceğinizi açıklar. Uygulamayı kurmanıza veya
            oturum açmanıza gerek yoktur &mdash; aşağıdaki e-posta yolu
            herkese açıktır.
          </>
        }
      />

      <Toc items={sections} />

      <h2 id="uygulama-icinden">1. Uygulama içinden silme</h2>
      <p>
        Hesabınıza erişiminiz varsa en hızlı yol uygulamadır:
      </p>
      <ol>
        <li>Bi Oyun Bi Kahve uygulamasını açın ve oturum açın.</li>
        <li>
          Alt menüden <strong>Profil</strong> sekmesine gidin.
        </li>
        <li>
          Sayfanın altındaki <strong>Hesabı Sil</strong> düğmesine dokunun.
        </li>
        <li>Çıkan onay penceresinde işlemi onaylayın.</li>
      </ol>
      <p>
        Onayladığınız anda hesabınız ve profil kaydınız kalıcı olarak silinir.{" "}
        <strong>Bu işlem geri alınamaz.</strong> Kalan paket haklarınız ve
        sadakat kartı damgalarınız da silinir; silme öncesinde kullanmak
        isterseniz önce işletmemize uğramanızı öneririz.
      </p>

      <h2 id="eposta-ile">2. E-posta ile silme talebi</h2>
      <p>
        Uygulamayı kaldırdıysanız, oturum açamıyorsanız veya saklanan
        kayıtların da silinmesini istiyorsanız talebinizi bize iletin:
      </p>
      <p>
        <a
          href={`mailto:${business.email}?subject=${encodeURIComponent("Hesap ve veri silme talebi")}`}
        >
          {business.email}
        </a>{" "}
        adresine, konu satırına <strong>&laquo;Hesap ve veri silme
        talebi&raquo;</strong> yazarak gönderin.
      </p>
      <p>
        Hesabınızı bulabilmemiz için e-postanızda{" "}
        <strong>kayıtlı ad soyadınızı</strong> ve{" "}
        <strong>kayıtlı telefon numaranızı veya e-posta adresinizi</strong>{" "}
        belirtin. Başkasının hesabının silinmesini önlemek için kimliğinizi
        doğrulamak üzere sizinle iletişime geçebiliriz.
      </p>
      <p>
        Dilerseniz <a href={business.phoneHref}>{business.phoneDisplay}</a>{" "}
        numarasını arayarak da talebinizi iletebilirsiniz.
      </p>

      <h2 id="silinen">3. Silinen veriler</h2>
      <p>
        Hesap silme işlemiyle birlikte aşağıdaki veriler{" "}
        <strong>kalıcı olarak silinir</strong>:
      </p>
      <ul>
        <li>Hesabınız ve oturum açma bilgileriniz (kimlik doğrulama kaydı)</li>
        <li>Ad, soyad, telefon numarası ve e-posta adresiniz</li>
        <li>Çocuğunuza ait ad ve yaş aralığı bilgisi</li>
        <li>Sadakat kartı damgalarınız ve kazanılmış ücretsiz giriş haklarınız</li>
        <li>Kalan atölye ve oyun alanı paket haklarınız</li>
        <li>Bildirim gönderimi için saklanan cihaz kimliğiniz</li>
      </ul>

      <h2 id="saklanan">4. Saklanan veriler ve süreleri</h2>
      <p>
        Bazı kayıtlar, yasal yükümlülüklerimiz nedeniyle hesabınız silindikten
        sonra da sınırlı bir süre saklanır:
      </p>
      <table>
        <thead>
          <tr>
            <th>Veri</th>
            <th>Saklama süresi</th>
            <th>Sebep</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">
              Fatura ve ödeme kayıtları
            </td>
            <td>5 yıl</td>
            <td className="text-ink-muted">
              Vergi Usul Kanunu m.253 uyarınca zorunlu
            </td>
          </tr>
          <tr>
            <td className="font-semibold">
              Ticari defter kayıtları
            </td>
            <td>10 yıl</td>
            <td className="text-ink-muted">
              Türk Ticaret Kanunu m.82 uyarınca zorunlu
            </td>
          </tr>
          <tr>
            <td className="font-semibold">
              Geçmiş rezervasyon ve sipariş kayıtları
              <br />
              <span className="font-normal text-ink-muted">
                anonim &mdash; ad, telefon ve e-posta silme anında kaldırılır
              </span>
            </td>
            <td>[SÜRE]</td>
            <td className="text-ink-muted">
              Olası uyuşmazlıklarda ispat. Kayıtta yalnızca tarih, paket ve
              tutar kalır
            </td>
          </tr>
          <tr>
            <td className="font-semibold">
              Yorum ve değerlendirmeleriniz
              <br />
              <span className="font-normal text-ink-muted">
                anonim &mdash; yazar adı ve e-posta kaldırılır
              </span>
            </td>
            <td>Talebiniz hâlinde derhâl silinir</td>
            <td className="text-ink-muted">
              Aksi hâlde yorum metni yazarı belirtilmeden kalır
            </td>
          </tr>
          <tr>
            <td className="font-semibold">
              Atölye ve oyun alanı katılım kayıtları
            </td>
            <td>[SÜRE]</td>
            <td className="text-ink-muted">
              Yalnızca tarih ve paket bilgisi içerir; ad, telefon veya e-posta
              içermez
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Sunucu güvenlik kayıtları</td>
            <td>[SÜRE]</td>
            <td className="text-ink-muted">Bilgi güvenliği</td>
          </tr>
        </tbody>
      </table>
      <p>
        Saklama süresi dolan veriler silinir, yok edilir veya geri
        döndürülemez biçimde anonim hâle getirilir. Bu kayıtlar pazarlama
        amacıyla kullanılmaz.
      </p>
      <p>
        <strong>Tüm kayıtlarınızın silinmesini</strong> istiyorsanız &mdash;
        yukarıdaki yasal saklama yükümlülükleri dışında kalanlar dâhil &mdash;
        e-posta talebinizde bunu ayrıca belirtin.
      </p>

      <h2 id="sure">5. İşlem süresi</h2>
      <p>
        Uygulama içinden yapılan silme <strong>anında</strong> gerçekleşir.
        E-posta ile iletilen talepler, KVKK m.13 uyarınca en geç{" "}
        <strong>30 gün</strong> içinde ücretsiz olarak sonuçlandırılır ve
        sonuç size bildirilir.
      </p>
      <p>
        Kişisel verilerinizin işlenmesine ilişkin ayrıntılı bilgi için{" "}
        <Link href="/yasal/gizlilik-politikasi">Gizlilik Politikası</Link> ve{" "}
        <Link href="/yasal/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>{" "}
        sayfalarına bakabilirsiniz.
      </p>

      {/* Google Play inceleme ekibi için İngilizce özet. Politika sayfanın
          anlaşılır olmasını istiyor; incelemeci Türkçe bilmeyebilir. */}
      <aside className="mt-10 rounded-2xl border border-line bg-surface-alt p-6">
        <h2 id="english" className="mt-0! text-2xl">
          Account &amp; data deletion (English summary)
        </h2>
        <p className="mt-3">
          <strong>App:</strong> Bi Oyun Bi Kahve &mdash;{" "}
          <code>com.bioyunbikahve.app</code>
          <br />
          <strong>Developer:</strong> [TİCARİ UNVAN], {business.addressLine2},
          Türkiye
        </p>
        <p className="mt-3">
          <strong>How to request deletion.</strong> In the app, go to{" "}
          <strong>Profil</strong> (Profile) and tap{" "}
          <strong>Hesabı Sil</strong> (Delete account), then confirm. If you
          cannot sign in or have uninstalled the app, email{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a> with the
          subject &ldquo;Account deletion request&rdquo;, including the name and
          phone number or email registered to the account.
        </p>
        <p className="mt-3">
          <strong>Data that is deleted:</strong> authentication account, name,
          phone number, email address, child&apos;s first name and age range,
          loyalty stamps and earned rewards, remaining workshop and play-area
          package credits, and push notification device token.
        </p>
        <p className="mt-3">
          <strong>Data that is retained, in anonymised form:</strong> past
          reservation, order and review records are kept for [SÜRE] for
          accounting and dispute resolution. Your name, phone number and email
          address are <strong>stripped from these records at the moment of
          deletion</strong>, leaving only the date, package and amount, so they
          no longer identify you. Invoices and payment records are retained for
          5 years and commercial ledger entries for 10 years as required by
          Turkish tax and commercial law (VUK art. 253, TTK art. 82); server
          security logs for [SÜRE]. Retained records are never used for
          marketing.
        </p>
        <p className="mt-3">
          <strong>Timing:</strong> in-app deletion is immediate. Email requests
          are completed free of charge within 30 days at the latest.
        </p>
      </aside>
    </>
  );
}
