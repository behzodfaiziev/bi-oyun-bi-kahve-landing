/**
 * Sitenin tüm içeriği. Tek kaynak.
 *
 * Değerler mobil uygulamanın src/config/config.js dosyasından geldi.
 * Fiyat veya adres değişirse İKİSİNİ birlikte güncelleyin — burada elle
 * yazılmış ikinci bir gerçek yok, kopyası var.
 *
 * İSTİSNA — cafe menüsü burada değil: lib/menu.ts onu derleme sırasında
 * Firestore'dan okur, çünkü işletme menüyü uygulamanın panelinden düzenliyor
 * ve kopyası hızla eskiyordu.
 *
 * 2026-10-17'de oyun alanı, atölye ve doğum günü fiyatları Firestore'daki
 * playAreaItems / workshopItems / birthdayPackageItems ile karşılaştırıldı:
 * hepsi aynı. Panelde değişirlerse buradaki kopya eskir.
 */

const postalCode = "34896";
const district = "Pendik / İstanbul";

export const business = {
  name: "Bi Oyun Bi Kahve",
  slogan: "Minikler keşfederken, siz kahvenizin tadını çıkarın",
  /** Hero'nun alt metni. Oyun Alanı bölümünün açıklamasını tekrar etmemeli. */
  heroLead:
    "Oyun ablası gözetiminde ahşap oyun alanı, yaşa göre atölyeler ve doğum günü kutlamaları. Hemen yanında, kendi mutfağımızdan el yapımı lezzetler.",
  description: "Çocuk oyun atölyesi ve cafe — Çınardere, Pendik",
  /*
   * Adres, telefon, WhatsApp ve saat: uygulamanın panelden düzenlenen
   * Firestore ayarı (app_settings/config › business) — uygulama müşteriye
   * bunları gösteriyor. config.js'teki varsayılanlar (0533…, 22:00, 13/A)
   * eskimiş; 2026-10-17'de buraya Firestore'daki değerler alındı.
   */
  address: "Çınardere, Mehtap Sk. No: 13/A-B",
  postalCode,
  district,
  addressLine2: `${postalCode} ${district}`,
  phone: "+90 216 606 42 60",
  phoneHref: "tel:+902166064260",
  phoneDisplay: "0216 606 42 60",
  whatsapp: "https://wa.me/902166064260",
  /** İletişim bölümündeki WhatsApp düğmesinin hazır mesajı. */
  whatsappText: "Merhaba, bilgi almak istiyorum.",
  email: "bioyunbikahve@gmail.com",
  instagram: "https://instagram.com/bioyunbikahve",
  instagramHandle: "@bioyunbikahve",
  /** Her gün aynı. Hero, İletişim, Footer ve Google verisi buradan okur. */
  opens: "10:00",
  closes: "21:00",
  hours: "Her gün 10:00 – 21:00",
  /** Uygulamadaki işletme kaydı bağlantısı (config.js › mapsUrl) — arama değil, doğrudan yer. */
  mapsUrl: "https://maps.app.goo.gl/Gov5RfaTWKzsCg3E8",
} as const;

/** Hizmet kimlikleri — her biri logodan gelen kendi pigmentini taşır. */
export type ServiceKey =
  | "play"
  | "cafe"
  | "workshop"
  | "birthday"
  | "womens"
  | "events";

export type Service = {
  key: ServiceKey;
  /** Sayfadaki bölümün id'si. Karşılığı olmayan bir id ölü bağlantıdır. */
  href: string;
  title: string;
  blurb: string;
  /** Tailwind sınıfları — uygulamadaki gibi açık zemin + koyu ikon. */
  tint: string;
  deepText: string;
};

/**
 * Sıra, sayfadaki bölüm sırasıyla AYNI olmalı: kart bir içindekiler
 * işlevi görüyor; ikinci kart dördüncü bölüme atlarsa kullanıcı kaybolur.
 */
export const services: Service[] = [
  {
    key: "play",
    href: "#oyun-alani",
    title: "Oyun Alanı",
    blurb:
      "Oyun ablası gözetiminde, tamamı ahşap oyuncaklardan oluşan serbest oyun alanı.",
    tint: "bg-play-tint",
    deepText: "text-play-deep",
  },
  {
    key: "workshop",
    href: "#atolyeler",
    title: "Atölyeler",
    blurb:
      "1 saat eğitmen eşliğinde oyun grubu, ardından 1 saat serbest oyun hediye.",
    tint: "bg-workshop-tint",
    deepText: "text-workshop-deep",
  },
  {
    key: "birthday",
    href: "#dogum-gunu",
    title: "Doğum Günü",
    blurb:
      "2 saat size özel alan, 35 kişiye kadar. Tüm konsepti biz kuralım ya da kendiniz getirin.",
    tint: "bg-birthday-tint",
    deepText: "text-birthday-deep",
  },
  {
    key: "womens",
    href: "#workshop",
    title: "Workshop",
    blurb:
      "Yetişkinlere yönelik atölyeler. Hayal gücünüzü konuşturun, yeni beceriler öğrenin.",
    tint: "bg-womens-tint",
    deepText: "text-womens-deep",
  },
  {
    key: "events",
    href: "#etkinlikler",
    title: "Etkinliklerimiz",
    blurb:
      "Dönem dönem düzenlediğimiz özel etkinlikler. Duyurular Instagram sayfamızda.",
    tint: "bg-events-tint",
    deepText: "text-events-deep",
  },
  {
    key: "cafe",
    href: "#menu",
    title: "Cafe Menü",
    blurb:
      "Her şey kendi mutfağımızda el yapımı; hazır üründe yalnızca güvenilir ve organik seçenekler.",
    tint: "bg-cafe-tint",
    deepText: "text-cafe-deep",
  },
];

/** Mobil uygulamadaki metinler (config.js › womensWorkshop, events). */
export const womensWorkshop = {
  title: "Hanımlara Yönelik Workshoplar",
  text: "Hayal gücünüzü konuşturun, yeni beceriler öğrenin.",
  whatsappText:
    "Merhaba, hanımlara yönelik workshoplar hakkında bilgi almak istiyorum.",
};

export const events = {
  text: "Etkinliklerimizden faydalanmak için işletmemize gelerek rezervasyon yaptırabilir ve ödemenizi gerçekleştirebilirsiniz.",
  whatsappText:
    "Merhaba, yaklaşan etkinlikleriniz hakkında bilgi almak istiyorum.",
};

/**
 * Oyun alanı. Metinler mobil uygulamanın config.js › playArea.infoCards
 * alanından ("Nasıl Çalışır?", "Süre Bilgileri", "Hijyen").
 *
 * Başlık zaten "ahşap" ve "oyun ablası" diyor; burada onları tekrar eden
 * özellik listesi yok. Genel iddialar ("güvenli malzemeler", "hijyenik
 * ortam") yerine işletmenin somut olarak söylediği cümleler var.
 */
export const playArea = {
  /** Sıralı adımlar — ilk kez gelen veli "gelince ne yapacağım?" diye sorar. */
  howItWorks: [
    "İşletmede kaydınızı yapın.",
    "Çocuğunuz için süre paketini seçin.",
    "Oyun ablası eşliğinde oyun başlasın.",
    "Siz bu arada cafede oturup soluklanın.",
  ],
  pickup:
    "Süre bitince çocuğunuzu teslim alırsınız. Uzatmak isterseniz bize sormanız yeterli.",
  hygiene: "Tüm oyun malzemelerimiz düzenli olarak temizlenir ve dezenfekte edilir.",
  whatsappText:
    "Merhaba, oyun alanı paketleri ve kardeş indirimi hakkında bilgi almak istiyorum.",
  packages: [
    { name: "30 Dakika Oyun", price: "200₺" },
    { name: "1 Saat Oyun", price: "350₺" },
  ],
  ages: [
    {
      range: "18–24 ay",
      note: "Anne/baba eşliğinde katılım zorunludur.",
    },
    {
      range: "2–12 yaş",
      note: "Ebeveyn eşliği gerekmez; oyun ablalarımız çocuğunuza eşlik eder.",
    },
  ],
  note: "Oyun alanı paketleri ve kardeş indirimi için bize ulaşın.",
};

/**
 * Çocuk atölyeleri. Kaynak: mobil config.js › workshops (program, types,
 * packages, infoCards).
 *
 * Bilerek YAZILMAYANLAR — işletmeye sorulmadı, uydurulmadı:
 *   - paketlerin geçerlilik süresi
 *   - paket hakkının farklı atölye türlerinde kullanılıp kullanılamayacağı
 */
export const workshops = {
  // Başlık zaten "bir saat atölye, bir saat hediye oyun" diyor; burada tekrar yok.
  description:
    "Yaş gruplarına göre küçük gruplar, uzman eğitmenler. Atölye süresince size de Türk kahvesi ikramımız var.",
  types: [
    {
      name: "Oyun Grubu",
      description: "Sosyal becerileri geliştiren grup oyunları ve aktiviteler.",
      // Mobil config'de "Eğitmen Eşliğinde Oyun Grubu" başlığı altında —
      // tüm atölyelerin değil, yalnızca Oyun Grubu'nun içeriği.
      details: [
        "Şarkı ve ritim çalışmaları",
        "Duyusal oyun etkinlikleri",
        "Motor becerileri destekleyen aktiviteler",
      ],
      ages: ["18–24 ay", "24–36 ay", "3–6 yaş"],
    },
    {
      name: "İngilizce Atölyesi",
      description: "Oyun ve aktivitelerle eğlenceli İngilizce öğrenimi.",
      details: [],
      ages: ["24–36 ay", "3–6 yaş"],
    },
    {
      name: "Değerler Eğitimi",
      description:
        "Paylaşma, saygı ve empati gibi değerleri öğreten aktiviteler.",
      details: [],
      ages: ["3–6 yaş"],
    },
  ],
  /** Tutarlar sayı: atölye başı fiyat ve avantaj oranı bunlardan hesaplanır. */
  packages: [
    { count: 1, total: 1200 },
    { count: 4, total: 4400 },
    { count: 8, total: 7600 },
    { count: 12, total: 9600 },
    { count: 18, total: 12600 },
  ],
  /** Rezervasyon uygulamadan yapılıyor (mobil config › infoCards › Rezervasyon). */
  howToJoin: [
    "Paketinizi seçip uygulamadan talep edin.",
    "Ödemeniz işletmede onaylansın.",
    "Uygulamada Profilim › Rezervasyon Yap'tan haftalık programdaki seansınızı seçin.",
  ],
  /** Mobil config › infoCards › Önemli Bilgiler. */
  important: [
    "Gruplar en fazla 6 çocuk",
    "Tüm malzemeler bizden",
    "İptal için önceden haber vermeniz gerekir",
  ],
};

/**
 * Doğum günü. Kaynak: mobil config.js › birthday (concept1, concept2,
 * importantInfo).
 *
 * Bilerek YAZILMAYANLAR — mobil kaynakta yok, işletmeye sorulmadı:
 *   - Premium paketin süresi (Temel'de 2 saat yazıyor, Premium'da yok)
 *   - Premium'a oyun alanının dahil olup olmadığı
 *   - Premium'da 35 kişiyi aşan misafir ücreti
 * Bu yüzden iki paketin listesi birebir karşılaştırılabilir değil.
 */
export const birthday = {
  description:
    "Çocuklar ve yetişkinler için 35 kişiye kadar kutlama. İster alanı kiralayıp kutlamayı kendiniz hazırlayın, ister süslemesinden ikramına tüm konsepti bize bırakın.",
  packages: [
    {
      name: "Temel Paket",
      subtitle: "Alan ve ikram bizden, konsept sizden",
      price: "18.000₺",
      features: [
        "2 saat boyunca size özel alan kullanımı",
        "35 kişiye kadar misafir (çocuk ve yetişkin dahil)",
        "Sınırsız çay ikramı ve 1 çeşit kurabiye",
        "Çocuklara özel oyun alanı",
      ],
      menu: null,
      footer: [
        "35 kişiyi aşan her misafir için 300₺.",
        "Dilerseniz süsleme, atölye veya ek ikram seçenekleriyle paketi zenginleştirebiliriz.",
      ],
    },
    {
      name: "Premium Paket",
      subtitle: "Tüm konsept bizden — siz sadece pastanızı getirin",
      price: "35.000₺",
      features: [
        "Maket pasta, masa düzeni",
        "Arka plan ve masa süslemeleri",
        "35 kişi kapasite",
        "Oyun ablası",
      ],
      /** "6 çeşit ikram"ın ne olduğu — Temel ile aradaki farkı en iyi bu gösteriyor. */
      menu: [
        {
          title: "Salatalar",
          items: ["Havuç tarator", "Hardallı patates salatası", "Köz patlıcan salatası"],
        },
        {
          title: "Ana ikramlar",
          items: ["Börek ya da poğaça", "Yaprak sarma veya kuru dolma", "Çocuklara makarna ve köfte"],
        },
        { title: "İçecekler", items: ["Çay", "Meyve suyu"] },
      ],
      footer: [],
    },
  ],
  important: [
    "Rezervasyon için en az 1 hafta önceden bize ulaşın.",
    "Tarihi müsaitliğe göre birlikte belirleriz.",
    "Kendi pastanızı getirebilirsiniz; Premium'da ayrıca maket pasta dahil.",
    "İptal için en geç 3 gün önce haber verin.",
  ],
  whatsappText:
    "Merhaba, doğum günü kutlaması için bilgi almak istiyorum. Düşündüğümüz tarih: ",
};

/**
 * Mobil uygulama mağaza bilgileri.
 *
 * Android şu an Google Play'de DAHİLİ TEST aşamasında: herkese açık bir
 * mağaza sayfası yok. Kullanıcı önce test listesine eklenmeli — bunun için
 * Play Store'da kullandığı Google hesabının e-postası gerekiyor. Eklendikten
 * sonra aşağıdaki test bağlantısı çalışır; eklenmeden açarsa hata görür.
 *
 * Uygulama herkese açık yayına geçince: `android.status` → "public",
 * `android.url` → mağaza sayfası. Sayfa adımları kendiliğinden gizler.
 */
export const apps = {
  ios: {
    url: "https://apps.apple.com/us/app/bi-oyun-bi-kahve/id6761026946",
  },
  android: {
    status: "internal-testing" as "internal-testing" | "public",
    // Mağaza sayfası. Uygulama dahili testteyken (2026-10-17) bu sayfa
    // herkese 404 "Bulunamadı" döner; yalnızca testçi listesine eklenmiş
    // hesaplar görür. Herkese açılınca status'u "public" yapın.
    url: "https://play.google.com/store/apps/details?id=com.bioyunbikahve.app",
    packageName: "com.bioyunbikahve.app",
  },
};

export const loyalty = {
  maxStamps: 9,
  reward: "Serbest oyun alanında 1 saat ücretsiz giriş hakkı",
  description: "9 damga topla, 1 saat oyun alanı hediye kazan.",
};

export const cafe = {
  description:
    "Bi Oyun Bi Kahve'de her şey kendi mutfağımızda el yapımı olarak hazırlanır; hazır ürünlerde ise yalnızca güvenilir ve organik seçenekleri tercih ederiz.",
  /**
   * Anasayfada "Öne çıkanlar" olarak gösterilen ürünler. Fiyatları Firestore'dan
   * gelir; burada yalnızca HANGİ ürünler olduğu yazar.
   *
   * Bu bir SEÇİM, satış verisi değil — Firestore'da popülerlik bilgisi yok.
   * Bu yüzden sitede "En çok satanlar" değil "Öne çıkanlar" yazıyor.
   * İstediğiniz ürünle değiştirin; ad ve kategori paneldekiyle aynı olmalı.
   * Panelden silinen bir ürün sitede sessizce atlanır (derleme uyarı yazar).
   *
   * Kategori de yazılıyor çünkü aynı ad iki kategoride olabiliyor
   * ("Köfte Patates": Ana Yemekler 400₺, Çocuk Menü 280₺).
   */
  featured: [
    { name: "Kahvaltı Tabağı", category: "Kahvaltı Çeşitleri" },
    { name: "Türk Kahvesi", category: "Sıcak İçecek" },
    { name: "Makarna Köfte", category: "Çocuk Menü" },
    { name: "San Sebastian", category: "Tatlılar" },
  ],
};

/**
 * Bölüm fotoğrafları — public/images/foto/. Kaynak: mobil uygulamanın
 * assets/media/photos klasörü (Galerimiz'deki fotoğraflar) ve doğum günü için
 * panelden yüklenenler (app_settings/serviceSlides). 640 px WebP'ye küçültüldü.
 *
 * Doğum gününde iki fotoğraf bilerek yok: panelin ilk fotoğrafındaki pastada
 * ve uygulamadaki birthday-1.jpg panosunda çocuğun adı okunuyor;
 * site arama motorlarında görünür.
 */
export const photos = {
  playArea: [
    { src: "/images/foto/oyun-ekim-4.webp", alt: "Kaydıraklı oyun evi ve tırmanma alanı" },
    { src: "/images/foto/oyun-ekim-16.webp", alt: "Kaydırakta oynayan çocuk ve oyun ablası" },
    { src: "/images/foto/oyun-2025-14.webp", alt: "Ahşap oyun evleri" },
    { src: "/images/foto/oyun-2025-23.webp", alt: "Oyuncak manav tezgâhı" },
  ],
  workshops: [
    { src: "/images/foto/atolye-ekim-38.webp", alt: "Davul çalan çocuk" },
    { src: "/images/foto/atolye-ekim-67.webp", alt: "Ayçiçeği el işi ve mısır duyusal oyun kutusu" },
    { src: "/images/foto/atolye-2025-29.webp", alt: "Elini boyayan çocuk" },
    { src: "/images/foto/atolye-ekim-55.webp", alt: "Atölye masasında çocuklar" },
  ],
  birthday: [
    { src: "/images/foto/dogum-gunu-pelerin.webp", alt: "Prenses temalı doğum gününde pelerinli çocuk" },
    { src: "/images/foto/dogum-gunu-masa.webp", alt: "Prenses temalı tabak, bardak ve çiçekle kurulmuş masa" },
  ],
  cafe: [
    { src: "/images/foto/cafe-2025-31.webp", alt: "Frambuazlı cheesecake ve kahve" },
    { src: "/images/foto/cafe-2025-43.webp", alt: "Meyveli kruvasan tabağı" },
    { src: "/images/foto/cafe-2025-19.webp", alt: "Sandviç tabağı" },
    { src: "/images/foto/cafe-masa.webp", alt: "Buzlu latte, meyveli waffle ve cheesecake" },
  ],
  /** İletişim › Konum kartı: gelen veli tabeladan tanısın. */
  storefront: { src: "/images/foto/tabela.webp", alt: "Bi Oyun Bi Kahve tabelası ve vitrin" },
};

/**
 * Sıra: en çok sorulan önce. Cevaplar sitedeki bölümlerle ve uygulamadaki
 * akışla aynı olmalı — atölye cevabı eskiden "arayın ya da gelin" diyordu,
 * oysa katılım uygulamadan yürüyor (workshops.howToJoin).
 *
 * Bilinmeyen kural uydurulmadı (çorap, otopark, dışarıdan yiyecek...).
 * Çalışma saati sorusu, saat netleşince eklenecek.
 */
export const faq = [
  {
    q: "Oyun alanı için rezervasyon şart mı?",
    a: "Serbest oyun alanı için rezervasyon gerekmez, gelip kayıt olabilirsiniz. Atölyeler ve doğum günü kutlamaları için önceden yer ayırtmanız gerekir.",
  },
  {
    q: "Çocuğumun yanında durmam gerekiyor mu?",
    a: "18–24 ay arası çocuklarda ebeveyn eşliği zorunludur. 2–12 yaş arasında oyun ablalarımız çocuğunuza eşlik eder, yanında durmanız gerekmez.",
  },
  {
    q: "Mobil uygulamayı indirmem gerekiyor mu?",
    a: "Oyun alanı için gerekmez; kaydınızı işletmede yaparız. Atölye paketi talebi, seans rezervasyonu ve sadakat kartınız ise uygulama üzerinden yürür.",
  },
  {
    q: "Atölyelere nasıl katılırım?",
    a: "Katılım paketinizi mobil uygulamadan talep edin; ödemeniz işletmede onaylandıktan sonra uygulamada Profilim › Rezervasyon Yap'tan haftalık programdaki seansınızı seçin. Atölye temaları Instagram sayfamızda duyurulur.",
  },
  {
    q: "Doğum günü kutlamasında kendi pastamı getirebilir miyim?",
    a: "Evet, kendi pastanızı getirebilirsiniz; Premium pakette ayrıca maket pasta dahildir. Kutlama için en az 1 hafta önceden bize ulaşın.",
  },
  {
    // Uygulamadaki config.js › contactForPackages: indirim oranı yazılı
    // değil, iletişime yönlendiriyor. Burada da oran uydurulmadı.
    q: "Kardeş indirimi var mı?",
    a: "Oyun alanı paketleri ve kardeş indirimi için bizi arayın ya da WhatsApp'tan yazın; size uygun seçeneği birlikte belirleyelim.",
  },
  {
    q: "Sadakat kartı nasıl çalışıyor?",
    a: "Oyun alanına her ücretli girişinizde kartınıza 1 damga işlenir. 9 damga topladığınızda serbest oyun alanında 1 saat ücretsiz giriş hakkı kazanırsınız. Damgalar mobil uygulamadaki karekodunuzla işlenir.",
  },
];

/** Footer'daki yasal sayfa listesi. Rota ile tek yerde eşleşir. */
export const legalPages = [
  { href: "/yasal/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/yasal/kullanim-kosullari", label: "Kullanım Koşulları" },
  { href: "/yasal/kvkk-aydinlatma-metni", label: "KVKK Aydınlatma Metni" },
  { href: "/yasal/cerez-politikasi", label: "Çerez Politikası" },
  // Google Play, uygulamayı kurmadan erişilebilen bir hesap silme
  // bağlantısı zorunlu kılıyor. Footer'dan da erişilebilir olmalı.
  { href: "/yasal/hesap-silme", label: "Hesap ve Veri Silme" },
] as const;

export const navLinks = [
  { href: "/#oyun-alani", label: "Oyun Alanı" },
  { href: "/#atolyeler", label: "Atölyeler" },
  { href: "/#dogum-gunu", label: "Doğum Günü" },
  { href: "/menu", label: "Menü" },
  { href: "/#galeri", label: "Galerimiz" },
  { href: "/#sss", label: "S.S.S." },
  { href: "/#iletisim", label: "İletişim" },
] as const;

/**
 * Yasal metinlerin son güncelleme tarihi. Metni değiştirdiğinizde bunu da
 * değiştirin — ziyaretçinin hangi sürümü okuduğunu bilmesi gerekir.
 */
export const legalLastUpdated = "20.09.2026";
