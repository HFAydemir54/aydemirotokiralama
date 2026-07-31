/**
 * ⚠️ ŞU ANDA YAYINDA DEĞİL.
 *
 * Bu yazılar hazır ancak /blog rotaları kaldırıldığı için sitede
 * yayınlanmıyor. Sebep: metinlerde doğrulanmamış işletme koşulları geçiyor
 * (kilometre limiti, iptal süresi, depozito uygulaması, kredi kartı şartı).
 *
 * YAYINA ALMAK İÇİN:
 *   1. Aşağıdaki yazılardaki koşulları kendi gerçek şartlarınızla doğrulayın.
 *   2. src/app/blog/page.tsx ve src/app/blog/[slug]/page.tsx rotalarını geri
 *      ekleyin (git geçmişinde mevcut: commit b0e0cab).
 *   3. sitemap.ts'e blog URL'lerini geri ekleyin.
 */

/**
 * Blog yazıları.
 *
 * İçerik MDX yerine yapılandırılmış bloklar halinde tutuluyor: ek bağımlılık
 * gerekmiyor, tip güvenliği var ve her yazı build sırasında statik üretiliyor.
 *
 * Paragraf metinlerinde iki işaretleme desteklenir (components/PostBody.tsx):
 *   [görünen metin](/hedef-sayfa)  → internal link
 *   **kalın**                      → vurgulama
 *
 * ⚠️ Fiyat aralıkları ve koşullar data/vehicles.ts'teki ÖRNEK verilerle
 * uyumlu yazılmıştır. Gerçek fiyatlar girildiğinde bu yazılardaki rakamları da
 * gözden geçirin — sayfalar arası çelişki hem kullanıcıyı hem Google'ı yanıltır.
 *
 * SEO kuralı: her yazı en az bir lokasyon + bir araç + bir koşullar sayfasına
 * link vermelidir.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  /** Listelemede görünen kısa özet */
  excerpt: string;
  keyword: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  blocks: Block[];
};

export const posts: Post[] = [
  {
    slug: "pendik-arac-kiralama-fiyatlari",
    title: "Pendik Araç Kiralama Fiyatları (2026 Güncel)",
    metaTitle: "Pendik Araç Kiralama Fiyatları 2026",
    description:
      "Pendik'te araç kiralama fiyatları ne kadar? Günlük, haftalık ve aylık fiyat aralıkları, fiyatı etkileyen faktörler ve gizli maliyetlerden korunma yolları.",
    excerpt:
      "Günlük, haftalık ve aylık fiyat aralıkları; fiyatı neyin belirlediği ve sözleşmede dikkat etmeniz gereken kalemler.",
    keyword: "pendik araç kiralama fiyatları",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Pendik'te araç kiralama fiyatları, aracın segmentine ve kiralama sürenize göre değişir. Bu yazıda güncel fiyat aralıklarını, fiyatı neyin belirlediğini ve teklif alırken hangi kalemleri sormanız gerektiğini anlattık.",
      },
      { type: "h2", text: "Güncel fiyat aralıkları" },
      {
        type: "p",
        text: "Ekonomik segment araçlarda günlük fiyatlar en düşük seviyeden başlar; orta sınıf sedanlar ve otomatik vitesli modeller bir üst bantta yer alır. SUV segmentinde ise hem günlük fiyat hem de depozito yükselir. Filomuzdaki tüm araçların güncel günlük, haftalık ve aylık fiyatlarını [araçlar ve fiyatlar](/araclar) sayfasında tek tabloda görebilirsiniz.",
      },
      {
        type: "ul",
        items: [
          "**Ekonomik** (örn. [Renault Clio](/araclar/renault-clio-kiralama)): şehir içi kullanım için en uygun maliyetli seçenek.",
          "**Orta sınıf** (örn. [Fiat Egea](/araclar/fiat-egea-kiralama)): bagaj hacmi ve konfor arayanlar için.",
          "**Otomatik vites** (örn. [Renault Taliant](/araclar/renault-taliant-kiralama)): İstanbul trafiğinde tercih edilir, manuel muadiline göre daha yüksek fiyatlıdır.",
          "**SUV** (örn. [Dacia Duster](/araclar/dacia-duster-kiralama)): şehir dışı ve yüksek bagaj ihtiyacı için.",
        ],
      },
      { type: "h2", text: "Fiyatı belirleyen faktörler" },
      {
        type: "ol",
        items: [
          "**Kiralama süresi.** Günlük fiyat, süre uzadıkça düşer. 7 günlük kiralamada günlük maliyet tek güne göre belirgin şekilde azalır, 30 gün ve üzerinde ise en düşük seviyeye iner.",
          "**Segment ve vites.** Otomatik vites, aynı segmentteki manuel modele göre daha pahalıdır.",
          "**Sezon.** Yaz ayları, resmi tatiller ve bayram dönemlerinde talep arttığı için fiyatlar yükselir. Bayram tatilinde araç bulmak da zorlaşır; en az iki hafta önceden rezervasyon önerilir.",
          "**Kilometre ihtiyacı.** Standart günlük limitin üzerinde yol yapacaksanız ek kilometre paketi maliyeti artırır.",
          "**Teslim noktası.** Ofisten teslim en ekonomik seçenektir; uzak ilçelere veya farklı noktaya iade (tek yön) durumunda ek ücret çıkabilir.",
        ],
      },
      { type: "h2", text: "Fiyata neler dahil?" },
      {
        type: "p",
        text: "Bizde açıklanan günlük fiyata trafik sigortası, kasko ve periyodik bakım dahildir. Yakıt, HGS geçişleri ve trafik cezaları kiracıya aittir. Tüm kalemlerin ayrıntısını [kiralama koşulları](/kiralama-kosullari) sayfasında bulabilirsiniz.",
      },
      { type: "h2", text: "Teklif alırken mutlaka sorun" },
      {
        type: "ul",
        items: [
          "Günlük kilometre limiti kaç km ve aşım ücreti ne kadar?",
          "Depozito tutarı ne kadar, ne zaman iade ediliyor?",
          "Kasko muafiyeti (hasar durumunda cebinizden çıkacak tutar) ne kadar?",
          "Yakıt politikası nedir — dolu al, dolu bırak mı?",
          "Teslim ve iade için ek ücret var mı?",
        ],
      },
      {
        type: "note",
        text: "Toplam tutarı yazılı olarak isteyin. Sözleşmede yer almayan bir kalem sonradan talep edilemez.",
      },
      { type: "h2", text: "Pendik'te nereden kiralamalı?" },
      {
        type: "p",
        text: "Ofisimiz Çamçeşme'de, Katip Çelebi Caddesi üzerindedir ve 7/24 açıktır. Aracı ofisten teslim alabilir, adresinize getirtebilir veya Sabiha Gökçen'de teslim alabilirsiniz. Detaylar için [Pendik araç kiralama](/pendik-arac-kiralama) ve [Sabiha Gökçen araç kiralama](/sabiha-gokcen-arac-kiralama) sayfalarımıza göz atın.",
      },
    ],
  },

  {
    slug: "sabiha-gokcen-arac-kiralama-nasil-yapilir",
    title: "Sabiha Gökçen'den Araç Kiralama Nasıl Yapılır?",
    metaTitle: "Sabiha Gökçen'den Araç Kiralama Nasıl Yapılır?",
    description:
      "Sabiha Gökçen Havalimanı'nda araç kiralama adım adım: rezervasyon, karşılama, gerekli belgeler, teslim noktası ve dikkat edilmesi gerekenler.",
    excerpt:
      "Uçuş bilgisi paylaşımından araç tesliminde imzalanan sözleşmeye kadar havalimanı kiralamasının tüm adımları.",
    keyword: "sabiha gökçen araç kiralama nasıl yapılır",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Sabiha Gökçen Havalimanı'na indiğinizde toplu taşıma beklemek yerine doğrudan aracınıza binmek istiyorsanız, süreç düşündüğünüzden basit. Aşağıda adım adım nasıl işlediğini anlattık.",
      },
      { type: "h2", text: "1. Rezervasyon: uçuş bilginizi paylaşın" },
      {
        type: "p",
        text: "Rezervasyon için uçuş numarası, iniş saati, kiralama süresi ve tercih ettiğiniz araç yeterli. Bu bilgileri WhatsApp'tan gönderdiğinizde müsaitlik ve toplam tutar teyit edilir. Uçuş numarasını vermeniz önemli: uçuşunuz takip edildiği için rötar durumunda teslim saati otomatik güncellenir.",
      },
      { type: "h2", text: "2. Karşılama ve buluşma noktası" },
      {
        type: "p",
        text: "Bagajınızı aldıktan sonra çıkışta buluşuyoruz. Havalimanı içindeki kiralama ofislerinin kuyruğunda beklemeniz gerekmez — bu, özellikle yoğun saatlerde 30-40 dakika kazandırır.",
      },
      { type: "h2", text: "3. Gerekli belgeler" },
      {
        type: "ul",
        items: [
          "Geçerli sürücü belgesi (ehliyet)",
          "T.C. kimlik kartı veya pasaport",
          "Yabancı misafirler için pasaport ve uluslararası geçerliliği olan ehliyet",
        ],
      },
      {
        type: "p",
        text: "Yaş ve ehliyet süresi şartı araç segmentine göre değişir; ayrıntılar [kiralama koşulları](/kiralama-kosullari) sayfasında.",
      },
      { type: "h2", text: "4. Sözleşme ve teslim" },
      {
        type: "p",
        text: "Sözleşme yerinde, birkaç dakikada tamamlanır. Aracı teslim alırken **mevcut hasarların tutanağa işlendiğinden emin olun** ve aracın dört bir yanının fotoğrafını çekin. Bu, iade sırasında yaşanabilecek anlaşmazlıkları baştan bitirir. Yakıt seviyesini de not edin.",
      },
      { type: "h2", text: "5. Gece inen uçuşlar" },
      {
        type: "p",
        text: "7/24 hizmet verdiğimiz için gece yarısı inen uçuşlarda da teslimat yapıyoruz. Havalimanı ofislerinin çoğu belirli saatlerde kapandığından, gece inişlerde bu önemli bir fark yaratır.",
      },
      { type: "h2", text: "Havalimanından çıkarken" },
      {
        type: "p",
        text: "Sabiha Gökçen çıkışındaki otoyol bağlantısı HGS gerektirir; araçlarımızda HGS mevcuttur ve geçişler teslim sonrası hesaplanır. Havalimanından Anadolu Yakası'na ulaşım trafiğe göre 20-50 dakika sürer. Bagajı fazla olan misafirlerimize [Fiat Egea](/araclar/fiat-egea-kiralama) gibi geniş bagajlı bir sedan öneriyoruz.",
      },
      {
        type: "p",
        text: "Havalimanı hizmetimizin tüm detayları ve sık sorulan sorular için [Sabiha Gökçen araç kiralama](/sabiha-gokcen-arac-kiralama) sayfamıza, havalimanına en yakın teslim noktamız için [Kurtköy araç kiralama](/kurtkoy-arac-kiralama) sayfamıza bakabilirsiniz.",
      },
    ],
  },

  {
    slug: "arac-kiralama-icin-gerekli-belgeler",
    title: "Araç Kiralamak İçin Gerekli Belgeler",
    metaTitle: "Araç Kiralamak İçin Gerekli Belgeler",
    description:
      "Araç kiralarken hangi belgeler isteniyor? Ehliyet, kimlik, kredi kartı ve yabancı uyruklu misafirler için gereken evraklar.",
    excerpt:
      "Ehliyet, kimlik ve ödeme belgeleri — Türkiye'de araç kiralarken istenen evrakların tam listesi.",
    keyword: "araç kiralama gerekli belgeler",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Araç kiralama işlemi, doğru belgelerle geldiğinizde birkaç dakika sürer. İşte teslim noktasında yanınızda olması gerekenler.",
      },
      { type: "h2", text: "Zorunlu belgeler" },
      {
        type: "ul",
        items: [
          "**Sürücü belgesi (ehliyet):** Geçerli ve segmentin gerektirdiği süreyi doldurmuş olmalı. Fotokopi kabul edilmez, aslı gerekir.",
          "**Kimlik:** T.C. kimlik kartı veya pasaport.",
          "**İletişim bilgileri:** Sözleşme için telefon ve adres bilgisi.",
        ],
      },
      { type: "h2", text: "Kredi kartı şart mı?" },
      {
        type: "p",
        text: "Birçok firma depozito için kredi kartı provizyonu ister. Bizde kredi kartı **zorunlu değildir**; depozitoyu nakit veya havale ile de karşılayabilirsiniz. Bu, kredi kartı limiti bloke edilmesin isteyen misafirlerimiz için önemli bir kolaylık.",
      },
      { type: "h2", text: "Yabancı uyruklu misafirler" },
      {
        type: "p",
        text: "Yurt dışından gelen misafirlerimizde pasaport ve uluslararası geçerliliği olan sürücü belgesi aranır. Latin alfabesi dışındaki bir ehliyetle geliyorsanız uluslararası sürücü belgesi (IDP) getirmeniz gerekir.",
      },
      { type: "h2", text: "Ehliyet ve yaş şartı" },
      {
        type: "p",
        text: "Ekonomik segmentte 21 yaş ve 2 yıllık ehliyet yeterliyken, üst segment ve SUV araçlarda 25 yaş ve 3 yıllık ehliyet aranır. Konuyu ayrıntılı ele aldığımız [araç kiralama yaş sınırı](/blog/arac-kiralama-yas-siniri) yazımıza ve araç bazlı şartların listelendiği [kiralama koşulları](/kiralama-kosullari) sayfasına bakabilirsiniz.",
      },
      {
        type: "note",
        text: "Ehliyetiniz yenilenme sürecindeyse geçici belge ile kiralama yapılamaz; sürücü belgesinin aslı gerekir.",
      },
      {
        type: "p",
        text: "Belgeleriniz hazırsa [Pendik'teki ofisimizden](/pendik-arac-kiralama) veya Sabiha Gökçen'den aracınızı hemen teslim alabilirsiniz.",
      },
    ],
  },

  {
    slug: "arac-kiralama-yas-siniri",
    title: "Araç Kiralama Yaş Sınırı Kaçtır?",
    metaTitle: "Araç Kiralama Yaş Sınırı Kaçtır?",
    description:
      "Araç kiralamak için kaç yaşında olmak gerekir? Segment bazlı yaş şartları, ehliyet süresi ve genç sürücüler için seçenekler.",
    excerpt:
      "Segmente göre değişen yaş ve ehliyet şartları, genç sürücülerin kiralayabileceği araçlar.",
    keyword: "araç kiralama yaş sınırı",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Araç kiralamada tek bir yaş sınırı yoktur; şart, kiralayacağınız aracın segmentine göre değişir. Sigorta şirketlerinin risk değerlendirmesi bu farkın temel nedenidir.",
      },
      { type: "h2", text: "Segment bazlı yaş şartları" },
      {
        type: "ul",
        items: [
          "**Ekonomik segment:** 21 yaş ve en az 2 yıllık ehliyet.",
          "**Orta sınıf / otomatik vites:** 23 yaş ve en az 3 yıllık ehliyet.",
          "**SUV ve üst segment:** 25 yaş ve en az 3 yıllık ehliyet.",
        ],
      },
      {
        type: "p",
        text: "Her aracın kendi sayfasında yaş ve ehliyet şartı ayrıca belirtilmiştir; tam listeyi [kiralama koşulları](/kiralama-kosullari) sayfasındaki tablodan görebilirsiniz.",
      },
      { type: "h2", text: "Neden ehliyet süresi de aranıyor?" },
      {
        type: "p",
        text: "Yaşınız yeterli olsa bile ehliyetinizin belirli bir süreyi doldurmuş olması gerekir. Örneğin 24 yaşında ancak 1 yıllık ehliyeti olan bir sürücü, 21 yaş şartlı ekonomik segmentte de kiralama yapamaz. İki şart birlikte değerlendirilir.",
      },
      { type: "h2", text: "Genç sürücüler için seçenekler" },
      {
        type: "p",
        text: "21-23 yaş aralığındaysanız [Renault Clio](/araclar/renault-clio-kiralama) gibi ekonomik segment araçlarımızı kiralayabilirsiniz. Bu araçlar aynı zamanda şehir içi kullanımda en düşük yakıt maliyetine sahip olanlar.",
      },
      {
        type: "note",
        text: "Aracı sözleşmede adı geçmeyen bir kişinin kullanması sigorta kapsamını geçersiz kılar. Aracı eşinizin veya arkadaşınızın da kullanacaksa ek sürücü olarak sözleşmeye eklettirin.",
      },
      {
        type: "p",
        text: "Yaş şartını sağlıyorsanız [Pendik](/pendik-arac-kiralama) veya [Kartal](/kartal-arac-kiralama) adresinize aracınızı getirebiliriz.",
      },
    ],
  },

  {
    slug: "arac-kiralama-depozito-nedir",
    title: "Araç Kiralama Depozitosu Nedir, Ne Zaman İade Edilir?",
    metaTitle: "Araç Kiralama Depozitosu Nedir?",
    description:
      "Araç kiralamada depozito neden alınır, tutarı ne kadar olur, ne zaman iade edilir? Depozitodan kesinti yapılan durumlar.",
    excerpt:
      "Depozitonun amacı, tipik tutarlar, iade süreci ve hangi durumlarda kesinti yapıldığı.",
    keyword: "araç kiralama depozito",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Depozito, araç kiralamada en çok soru alan konulardan biri. Kısaca: kiralama süresince oluşabilecek hasar, ceza veya geçiş ücretleri için alınan geçici bir güvence bedelidir ve size aittir.",
      },
      { type: "h2", text: "Depozito ne kadar olur?" },
      {
        type: "p",
        text: "Tutar araç segmentine göre değişir. Ekonomik segmentte daha düşük, SUV ve üst segmentte daha yüksektir. Araç bazındaki güncel tutarları [kiralama koşulları](/kiralama-kosullari) sayfasındaki tabloda listeledik.",
      },
      { type: "h2", text: "Nasıl ödenir?" },
      {
        type: "ul",
        items: [
          "**Nakit** — teslim sırasında.",
          "**Havale / EFT** — teslimden önce.",
          "**Kredi kartı provizyonu** — kart limitinizde bloke edilir, tahsilat yapılmaz.",
        ],
      },
      {
        type: "p",
        text: "Kredi kartı provizyonunda para hesabınızdan çıkmaz, yalnızca limitiniz geçici olarak bloke edilir. Bankaya göre blokenin çözülmesi birkaç iş günü sürebilir.",
      },
      { type: "h2", text: "Ne zaman iade edilir?" },
      {
        type: "p",
        text: "Araç sorunsuz teslim edildiğinde depozito iade edilir. Trafik cezaları sisteme gecikmeli düştüğü için, ceza kontrolü tamamlanana kadar kısa bir bekleme süresi olabilir; bu süre teslim sırasında size net olarak bildirilir.",
      },
      { type: "h2", text: "Hangi durumlarda kesinti yapılır?" },
      {
        type: "ul",
        items: [
          "Kiralama süresince kesilen trafik cezaları",
          "HGS köprü ve otoyol geçiş ücretleri",
          "Teslimde tutanağa işlenmemiş yeni hasarlar",
          "Eksik yakıtla iade",
          "Anlaşılan kilometre limitinin aşılması",
        ],
      },
      {
        type: "note",
        text: "Aracı teslim alırken mevcut çizik ve hasarların tutanağa işlendiğinden emin olun, fotoğraf çekin. Depozito anlaşmazlıklarının neredeyse tamamı bu adımın atlanmasından kaynaklanır.",
      },
      {
        type: "p",
        text: "Depozito ve diğer koşullarımızı önceden konuşmak isterseniz WhatsApp'tan yazabilir, [araçlarımızı ve fiyatlarını](/araclar) inceleyebilirsiniz.",
      },
    ],
  },

  {
    slug: "istanbul-gunluk-arac-kiralama",
    title: "İstanbul'da Günlük Araç Kiralama Rehberi",
    metaTitle: "İstanbul'da Günlük Araç Kiralama",
    description:
      "İstanbul'da günlük araç kiralama nasıl yapılır? Fiyatlar, teslim noktaları, trafik ve otopark ipuçları, hangi aracı seçmelisiniz?",
    excerpt:
      "Bir günlüğüne araç kiralarken maliyeti, araç seçimini ve İstanbul trafiğine özgü püf noktalarını nasıl yönetirsiniz?",
    keyword: "istanbul günlük araç kiralama",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "İstanbul'da bir günlüğüne araç kiralamak, taksi ve toplu taşıma kombinasyonuna göre çoğu zaman hem daha ekonomik hem daha esnek. Ancak trafiği ve park sorununu hesaba katmadan yapılan bir seçim, avantajı hızla tersine çevirebilir.",
      },
      { type: "h2", text: "Günlük kiralama kime uygun?" },
      {
        type: "ul",
        items: [
          "Şehir dışından gelip 1-2 gün İstanbul'da kalacaklara",
          "Gün içinde birden fazla noktaya gitmesi gereken iş seyahatlerine",
          "Kendi aracı serviste olanlara",
          "Havalimanı transferi + gün içi kullanım ihtiyacı olanlara",
        ],
      },
      { type: "h2", text: "Hangi aracı seçmeli?" },
      {
        type: "p",
        text: "Şehir içinde kalacaksanız kompakt ve tercihen otomatik vitesli bir araç en mantıklısı: park kolaylığı ve trafikte konfor sağlar. [Hyundai i20](/araclar/hyundai-i20-kiralama) bu kullanım için tipik bir tercih. Bagajlı seyahat edecekseniz [Fiat Egea](/araclar/fiat-egea-kiralama) gibi bir sedan daha rahat eder.",
      },
      { type: "h2", text: "Kilometre limitine dikkat" },
      {
        type: "p",
        text: "Tek günlük kiralamalarda standart limit çoğu kullanım için fazlasıyla yeterlidir. Ancak aynı gün içinde şehirlerarası bir çıkış planlıyorsanız (örneğin Sapanca veya Şile), limiti önceden konuşun. Aşım ücretleri günlük fiyatın üzerine hızla eklenir.",
      },
      { type: "h2", text: "Trafik ve otopark" },
      {
        type: "p",
        text: "Anadolu Yakası'ndan Avrupa Yakası'na geçiş planlıyorsanız köprü geçiş saatlerini hesaba katın; sabah 07:30-10:00 ve akşam 17:00-20:00 aralıkları en yoğun saatler. Araçlarımızda HGS mevcut olduğu için geçişte sorun yaşamazsınız, ücretler teslim sonrası hesaplanır.",
      },
      { type: "h2", text: "Teslim noktaları" },
      {
        type: "p",
        text: "Anadolu Yakası'nda aynı gün teslimat yapıyoruz. [Pendik](/pendik-arac-kiralama), [Kartal](/kartal-arac-kiralama), [Maltepe](/maltepe-arac-kiralama) ve [Kadıköy](/kadikoy-arac-kiralama) için ayrı sayfalarımızda teslim süreleri ve noktaları yazılı. Uçakla geliyorsanız [Sabiha Gökçen araç kiralama](/sabiha-gokcen-arac-kiralama) sayfasına bakın.",
      },
      {
        type: "p",
        text: "Kiralama şartlarının tamamı için [kiralama koşulları](/kiralama-kosullari) sayfamızı inceleyebilirsiniz.",
      },
    ],
  },

  {
    slug: "arac-kiralarken-dikkat-edilmesi-gerekenler",
    title: "Araç Kiralarken Nelere Dikkat Edilmeli?",
    metaTitle: "Araç Kiralarken Nelere Dikkat Edilmeli?",
    description:
      "Araç kiralarken sözleşme, sigorta muafiyeti, hasar tutanağı, kilometre limiti ve yakıt politikası konusunda bilmeniz gereken 8 madde.",
    excerpt:
      "Sözleşmeyi imzalamadan önce kontrol etmeniz gereken 8 madde ve en sık yapılan hatalar.",
    keyword: "araç kiralarken nelere dikkat edilmeli",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Araç kiralamada yaşanan sorunların büyük bölümü, teslim anında beş dakika ayrılsa çıkmayacak sorunlardır. Aşağıdaki maddeler, sözleşmeyi imzalamadan önce kontrol etmeniz gerekenler.",
      },
      { type: "h2", text: "1. Hasar tutanağını birlikte doldurun" },
      {
        type: "p",
        text: "Araçtaki mevcut çizik, göçük ve cam çatlaklarının tutanağa işlendiğinden emin olun. Aracın dört köşesinden ve varsa hasarlı bölgelerden fotoğraf çekin, tarihi görünen bir şekilde saklayın. **İade sırasında yaşanan anlaşmazlıkların çoğu bu adımın atlanmasından çıkar.**",
      },
      { type: "h2", text: "2. Kasko muafiyetini sorun" },
      {
        type: "p",
        text: "Araç kaskolu olabilir ama hasar durumunda cebinizden çıkacak bir muafiyet tutarı bulunur. Bu rakamı ve hangi durumların kapsam dışı olduğunu (alkollü kullanım, ehliyetsiz kullanım, sözleşmede olmayan sürücü) mutlaka öğrenin.",
      },
      { type: "h2", text: "3. Kilometre limitini netleştirin" },
      {
        type: "p",
        text: "Günlük limit ve aşım ücreti sözleşmede yazılı olmalı. Şehirlerarası bir planınız varsa önceden ek paket tanımlatın; sonradan hesaplanan aşım ücretleri sürpriz olabiliyor.",
      },
      { type: "h2", text: "4. Yakıt politikasını öğrenin" },
      {
        type: "p",
        text: "En şeffaf yöntem \"aldığınız seviyede iade\" kuralıdır. Teslim alırken gösterge fotoğrafı çekin. Bazı firmaların uyguladığı \"dolu al, boş bırak\" modelinde kullanmadığınız yakıtın parasını ödersiniz.",
      },
      { type: "h2", text: "5. Depozito şartlarını konuşun" },
      {
        type: "p",
        text: "Tutar, ödeme yöntemi ve iade süresi baştan net olmalı. Ayrıntılar için [araç kiralama depozitosu](/blog/arac-kiralama-depozito-nedir) yazımıza bakabilirsiniz.",
      },
      { type: "h2", text: "6. Ek sürücüyü sözleşmeye ekletin" },
      {
        type: "p",
        text: "Aracı başka biri de kullanacaksa mutlaka sözleşmeye eklenmeli. Aksi halde bir kaza durumunda sigorta devreye girmez.",
      },
      { type: "h2", text: "7. Toplam tutarı yazılı isteyin" },
      {
        type: "p",
        text: "Günlük fiyat dışında teslim ücreti, ek sürücü, ek kilometre gibi kalemler varsa toplam tutarın yazılı olmasını isteyin. Sözleşmede olmayan bir kalem sonradan talep edilemez.",
      },
      { type: "h2", text: "8. İade koşullarını teyit edin" },
      {
        type: "p",
        text: "İade saati, gecikme toleransı ve farklı noktaya bırakma ücreti önceden belli olmalı. Genellikle 1 saati aşan gecikmeler tam gün olarak ücretlendirilir.",
      },
      {
        type: "note",
        text: "Kısa özet: hasar tutanağı, muafiyet tutarı ve toplam ücret — bu üçünü netleştirdiyseniz sorunların %90'ını baştan elemişsiniz demektir.",
      },
      {
        type: "p",
        text: "Bizim tüm şartlarımız [kiralama koşulları](/kiralama-kosullari) sayfasında açıkça yazılıdır. Araçları ve fiyatları [araçlar](/araclar) sayfasından inceleyebilir, [Pendik araç kiralama](/pendik-arac-kiralama) sayfasından teslim seçeneklerine bakabilirsiniz.",
      },
    ],
  },

  {
    slug: "kredi-kartsiz-arac-kiralama",
    title: "Kredi Kartsız Araç Kiralama Mümkün mü?",
    metaTitle: "Kredi Kartsız Araç Kiralama Mümkün mü?",
    description:
      "Kredi kartı olmadan araç kiralanır mı? Nakit ve havale ile depozito, banka kartıyla kiralama ve dikkat edilmesi gerekenler.",
    excerpt:
      "Kredi kartı olmadan da araç kiralanır — depozitoyu nakit veya havale ile karşılamanın koşulları.",
    keyword: "kredi kartsız araç kiralama",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Araç kiralama sektöründe yaygın uygulama, depozito için kredi kartı provizyonu almaktır. Ancak kredi kartı olmayan veya limitini bloke ettirmek istemeyen sürücüler için alternatifler var.",
      },
      { type: "h2", text: "Neden kredi kartı isteniyor?" },
      {
        type: "p",
        text: "Kredi kartı provizyonu, firma açısından hasar veya ceza durumunda hızlı bir güvence sağlar. Para hesabınızdan çıkmaz; limitinizin bir kısmı geçici olarak bloke edilir ve araç sorunsuz teslim edildiğinde çözülür.",
      },
      { type: "h2", text: "Kredi kartı olmadan nasıl kiralanır?" },
      {
        type: "p",
        text: "Bizde kredi kartı **zorunlu değildir**. Depozitoyu şu yollarla karşılayabilirsiniz:",
      },
      {
        type: "ul",
        items: [
          "**Nakit** — araç teslimi sırasında.",
          "**Havale / EFT** — teslimden önce hesabımıza.",
          "**Banka kartı** — ödeme için kullanılabilir.",
        ],
      },
      {
        type: "p",
        text: "Depozito, araç sorunsuz iade edildiğinde geri ödenir. Tutarlar araç segmentine göre değişir; güncel rakamları [kiralama koşulları](/kiralama-kosullari) sayfasındaki tablodan görebilirsiniz.",
      },
      { type: "h2", text: "Nakit depozitoda dikkat edilmesi gerekenler" },
      {
        type: "ul",
        items: [
          "Depozito tutarının sözleşmede yazılı olduğundan emin olun.",
          "Ödeme karşılığında belge alın.",
          "İade süresini ve yöntemini önceden netleştirin.",
          "Ceza ve HGS kontrolü nedeniyle kısa bir bekleme olabileceğini hesaba katın.",
        ],
      },
      {
        type: "note",
        text: "Nakit depozitoda belge almadan işlem yapmayın. Bu, hem sizin hem firmanın korunması için gereklidir.",
      },
      {
        type: "p",
        text: "Kredi kartı olmadan kiralama yapmak istiyorsanız WhatsApp'tan yazın, süreci baştan netleştirelim. Araç seçenekleri için [araçlar ve fiyatlar](/araclar), teslim noktaları için [Pendik araç kiralama](/pendik-arac-kiralama) sayfamıza bakabilirsiniz.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Yayın tarihine göre yeniden eskiye. */
export const sortedPosts = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

/** Bir yazı dışındaki diğer yazılar (ilgili içerik bloğu için). */
export function otherPosts(slug: string, limit = 3): Post[] {
  return sortedPosts.filter((p) => p.slug !== slug).slice(0, limit);
}
