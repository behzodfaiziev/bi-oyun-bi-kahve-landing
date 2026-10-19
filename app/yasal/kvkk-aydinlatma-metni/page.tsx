import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import { LegalHeader, TemplateNotice, Toc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Bi Oyun Bi Kahve tarafından hazırlanan aydınlatma metni.",
};

const sections = [
  { id: "veri-sorumlusu", label: "Veri sorumlusunun kimliği" },
  { id: "veriler", label: "İşlenen veri kategorileri" },
  { id: "amac", label: "İşlenme amaçları" },
  { id: "yontem", label: "Toplama yöntemi ve hukuki sebep" },
  { id: "aktarim", label: "Aktarılan taraflar" },
  { id: "haklar", label: "İlgili kişinin hakları" },
  { id: "basvuru", label: "Başvuru usulü" },
];

export default function KvkkAydinlatmaMetni() {
  return (
    <>
      <LegalHeader
        title="KVKK Aydınlatma Metni"
        intro={
          <>
            6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun
            (&laquo;Kanun&raquo;) 10. maddesi ve Aydınlatma Yükümlülüğünün
            Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ
            uyarınca, veri sorumlusu sıfatıyla{" "}
            <strong>[TİCARİ UNVAN]</strong> tarafından hazırlanmıştır.
          </>
        }
      />

      <Toc items={sections} />
      <TemplateNotice />

      <h2 id="veri-sorumlusu">1. Veri sorumlusunun kimliği</h2>
      <table>
        <tbody>
          <tr>
            <td className="w-48 text-ink-muted">Veri sorumlusu</td>
            <td className="font-semibold">[TİCARİ UNVAN]</td>
          </tr>
          <tr>
            <td className="text-ink-muted">Adres</td>
            <td className="font-semibold">
              {business.address}, {business.addressLine2}
            </td>
          </tr>
          <tr>
            <td className="text-ink-muted">MERSİS / VKN</td>
            <td className="font-semibold">[MERSİS NO] / [VKN]</td>
          </tr>
          <tr>
            <td className="text-ink-muted">VERBİS kaydı</td>
            <td className="font-semibold">[VARSA VERBİS NUMARASI]</td>
          </tr>
          <tr>
            <td className="text-ink-muted">İletişim</td>
            <td>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="veriler">2. İşlenen kişisel veri kategorileri</h2>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Veriler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">Kimlik</td>
            <td>Ad, soyad; çocuğun adı ve yaş aralığı</td>
          </tr>
          <tr>
            <td className="font-semibold">İletişim</td>
            <td>Telefon numarası, e-posta adresi</td>
          </tr>
          <tr>
            <td className="font-semibold">Müşteri işlem</td>
            <td>
              Rezervasyon bilgileri, satın alınan paket, kalan katılım hakları,
              sadakat kartı damga sayısı, katılım kayıtları
            </td>
          </tr>
          <tr>
            <td className="font-semibold">İşlem güvenliği</td>
            <td>
              IP adresi, cihaz ve tarayıcı bilgisi, oturum kayıtları, bildirim
              cihaz kimliği
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Finans</td>
            <td>Fatura bilgileri ve ödeme kayıtları</td>
          </tr>
          <tr>
            <td className="font-semibold">Görsel kayıt</td>
            <td>
              Yalnızca velinin ayrıca izin vermesi hâlinde etkinlik fotoğraf ve
              videoları
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Özel nitelikli kişisel veri işlenmemektedir.</strong> Sağlık
        bilgisi talep edilmez; velinin sözlü olarak paylaştığı bilgiler kayda
        geçirilmez.
      </p>

      <h2 id="amac">3. Kişisel verilerin işlenme amaçları</h2>
      <ul>
        <li>Rezervasyon, paket satışı ve hizmet sunum süreçlerinin yürütülmesi</li>
        <li>Sadakat programının ve kalan katılım haklarının takibi</li>
        <li>Yaşa uygun atölye ve güvenli oyun grubu oluşturulması</li>
        <li>İletişim faaliyetlerinin yürütülmesi ve talep/şikâyet yönetimi</li>
        <li>Mali ve yasal kayıt yükümlülüklerinin yerine getirilmesi</li>
        <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
        <li>
          Açık rızanız hâlinde kampanya, etkinlik ve duyuru gönderimi
        </li>
      </ul>

      <h2 id="yontem">4. Toplama yöntemi ve hukuki sebep</h2>
      <p>
        Kişisel verileriniz; işletmemizde sözlü veya yazılı olarak, mobil
        uygulama üzerinden elektronik ortamda ve telefon/WhatsApp/e-posta
        yoluyla toplanmaktadır. Bu web sitesi üzerinden veri toplanmaz.
      </p>
      <p>Hukuki sebepler, Kanun&apos;un 5. maddesi uyarınca:</p>
      <ul>
        <li>
          <strong>m.5/2-c</strong> &mdash; sözleşmenin kurulması veya ifası için
          gerekli olması (rezervasyon, paket kullanımı)
        </li>
        <li>
          <strong>m.5/2-ç</strong> &mdash; hukuki yükümlülüğün yerine
          getirilmesi (fatura, defter kayıtları)
        </li>
        <li>
          <strong>m.5/2-f</strong> &mdash; meşru menfaat (oyun alanı güvenliği,
          bilgi güvenliği)
        </li>
        <li>
          <strong>m.5/1</strong> &mdash; açık rıza (pazarlama iletileri, görsel
          kayıt)
        </li>
      </ul>

      <h2 id="aktarim">5. Kişisel verilerin aktarıldığı taraflar</h2>
      <p>
        Verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olarak aşağıdaki
        taraflara aktarılabilir:
      </p>
      <ul>
        <li>
          <strong>Bilişim hizmeti sağlayıcıları</strong> &mdash; Google LLC
          (Firebase, uygulama altyapısı, sunucu bölgesi [BÖLGE]) ve Cloudflare,
          Inc. (web sitesi barındırma)
        </li>
        <li>
          <strong>Mali müşavir ve denetim hizmeti sağlayıcıları</strong> &mdash;
          yasal kayıt yükümlülükleri kapsamında
        </li>
        <li>
          <strong>Yetkili kamu kurum ve kuruluşları</strong> &mdash; mevzuattan
          doğan talepler kapsamında
        </li>
      </ul>
      <p>
        Yurt dışına aktarım gereken hâllerde Kanun&apos;un 9. maddesindeki
        şartlara uyulur.
      </p>

      <h2 id="haklar">6. İlgili kişinin hakları</h2>
      <p>Kanun&apos;un 11. maddesi uyarınca şu haklara sahipsiniz:</p>
      <ol>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>
          İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
        </li>
        <li>
          Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
        </li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>
          Kanun&apos;un 7. maddesindeki şartlar çerçevesinde silinmesini veya
          yok edilmesini isteme
        </li>
        <li>
          Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere
          bildirilmesini isteme
        </li>
        <li>
          Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize
          bir sonucun ortaya çıkmasına itiraz etme
        </li>
        <li>
          Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın
          giderilmesini talep etme
        </li>
      </ol>

      <h2 id="basvuru">7. Başvuru usulü</h2>
      <p>
        Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
        Tebliğ&apos;e uygun olarak şu yollarla iletebilirsiniz:
      </p>
      <ul>
        <li>
          Yazılı olarak {business.address}, {business.addressLine2} adresine
          ıslak imzalı dilekçe ile
        </li>
        <li>
          Kayıtlı elektronik posta (KEP) adresiniz üzerinden{" "}
          <strong>[KEP ADRESİ]</strong> adresine
        </li>
        <li>
          Sistemimizde kayıtlı e-posta adresinizden{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a> adresine
        </li>
      </ul>
      <p>
        Başvurunuz talebin niteliğine göre en kısa sürede ve en geç{" "}
        <strong>30 gün</strong> içinde ücretsiz olarak sonuçlandırılır. İşlemin
        ayrıca bir maliyet gerektirmesi hâlinde Kurul tarifesindeki ücret
        alınabilir.
      </p>
      <p className="text-sm text-ink-muted">
        Ayrıntılı bilgi için{" "}
        <Link href="/yasal/gizlilik-politikasi">Gizlilik Politikası</Link> ve{" "}
        <Link href="/yasal/cerez-politikasi">Çerez Politikası</Link>{" "}
        sayfalarına bakabilirsiniz.
      </p>
    </>
  );
}
