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
 * ============================================================================
 * ⚠️ YAZARKEN UYULACAK KURALLAR
 * ============================================================================
 * 1. İşletmeye dair her ifade GERÇEK koşullarla uyumlu olmalıdır:
 *      - Yaş sınırı yok; en az 2 yıllık ehliyet
 *      - Depozito alınmıyor; ön rezervasyonda kapora, iptalde iade edilmiyor
 *      - Kredi kartı geçmiyor; nakit veya havale
 *      - Günlük 200 km sınırı
 *      - Teslim Pendik Çamçeşme ofisinden; Sabiha Gökçen'e araç getiriliyor
 *      - Ofis 7/24 açık, havalimanına 15 dakika
 *      - Araçlar sigortalı ve kaskolu
 *    Bu listede olmayan bir hizmet veya koşul yazılmaz.
 *
 * 2. Sektör geneline dair bilgiler ("çoğu firma şunu ister") ile bizim
 *    uygulamamız net biçimde ayrılmalıdır.
 *
 * 3. Internal linkler yalnızca VAR OLAN sayfalara verilir. Mevcut sayfalar:
 *      /araclar · /araclar/{renault-clio|fiat-egea|renault-taliant|peugeot-301}-kiralama
 *      /pendik- /kurtkoy- /kartal- /tuzla- /maltepe- /sancaktepe- /istanbul-arac-kiralama
 *      /sabiha-gokcen-arac-kiralama · /kiralama-kosullari · /sss · /iletisim
 * ============================================================================
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
    title: "Pendik Araç Kiralama Fiyatları",
    metaTitle: "Pendik Araç Kiralama Fiyatları",
    description:
      "Pendik'te araç kiralama fiyatları ne kadar? Güncel günlük fiyatlarımız, fiyatı etkileyen faktörler ve teklif alırken sormanız gereken sorular.",
    excerpt:
      "Güncel günlük fiyatlarımız, fiyatı neyin belirlediği ve teklif alırken hangi kalemleri sormanız gerektiği.",
    keyword: "pendik araç kiralama fiyatları",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Araç kiralama fiyatları araca, kiralama sürenize ve sezona göre değişir. Bu yazıda Pendik'teki güncel fiyatlarımızı, fiyatın neye göre değiştiğini ve teklif alırken nelere dikkat etmeniz gerektiğini anlattık.",
      },
      { type: "h2", text: "Güncel günlük fiyatlarımız" },
      {
        type: "p",
        text: "Filomuzda dört araç bulunuyor ve günlük fiyatlarımız şöyle:",
      },
      {
        type: "ul",
        items: [
          "[Renault Clio](/araclar/renault-clio-kiralama) — 2024 model, otomatik vites, benzinli: günlük **2.500 ₺**",
          "[Fiat Egea](/araclar/fiat-egea-kiralama) — 2022 model, otomatik vites, dizel: günlük **2.500 ₺**",
          "[Renault Taliant](/araclar/renault-taliant-kiralama) — 2022 model, otomatik vites, benzinli: günlük **2.500 ₺**",
          "[Peugeot 301](/araclar/peugeot-301-kiralama) — 2018 model, manuel vites, dizel: günlük **2.000 ₺**",
        ],
      },
      {
        type: "p",
        text: "Haftalık ve aylık kiralamalarda fiyat süreye göre değişiyor; bu yüzden sabit bir liste yayınlamıyoruz. Tarihlerinizi yazmanız yeterli, toplam tutarı hemen paylaşıyoruz. Tüm araçların güncel bilgisini [araçlar sayfamızda](/araclar) bulabilirsiniz.",
      },
      { type: "h2", text: "Fiyatı belirleyen faktörler" },
      {
        type: "ol",
        items: [
          "**Kiralama süresi.** Süre uzadıkça günlük maliyet düşer. Haftalık ve aylık kiralamalarda tek gün fiyatının altına inen bir tutar çıkıyor.",
          "**Vites tipi.** Otomatik vitesli araçlar manuel muadillerine göre daha yüksek fiyatlı. Manuel kullanabiliyorsanız Peugeot 301 en ekonomik seçeneğimiz.",
          "**Sezon.** Yaz ayları, resmi tatiller ve bayram dönemlerinde talep artıyor. Bu dönemlerde araç bulmak da zorlaşıyor; önceden rezervasyon yaptırmanızı öneririz.",
          "**Kullanacağınız kilometre.** Günlük 200 km sınırımız var. Şehirlerarası bir plan yapıyorsanız bunu baştan konuşalım.",
        ],
      },
      { type: "h2", text: "Fiyata neler dahil?" },
      {
        type: "p",
        text: "Açıkladığımız günlük fiyata sigorta ve kasko dahildir; araçlarımızın periyodik bakımları da bize aittir. Yakıt masrafı ve kiralama süresince kesilen trafik cezaları kiracıya aittir.",
      },
      {
        type: "note",
        text: "Depozito almıyoruz. Aracı hemen teslim alacaksanız herhangi bir ön ödeme gerekmez; yalnızca ileri bir tarih için araç ayırtmak isterseniz kapora alıyoruz.",
      },
      { type: "h2", text: "Teklif alırken sorun" },
      {
        type: "ul",
        items: [
          "Toplam tutar ne kadar, içinde neler var?",
          "Kilometre sınırı kaç km, aşarsam ne oluyor?",
          "Ödemeyi nasıl yapacağım?",
          "Aracı nereden teslim alacağım, iade nereye olacak?",
        ],
      },
      {
        type: "p",
        text: "Bizde ödeme nakit veya banka havalesiyle yapılıyor; kredi kartı geçmiyor. Tüm koşulların ayrıntısı [kiralama koşulları](/kiralama-kosullari) sayfamızda yazılı.",
      },
      { type: "h2", text: "Aracı nereden teslim alacaksınız?" },
      {
        type: "p",
        text: "Ofisimiz Pendik Çamçeşme'de, Katip Çelebi Caddesi üzerinde ve 7/24 açık. Araç teslimlerimizi buradan yapıyoruz. Sabiha Gökçen Havalimanı'na ise araç getiriyoruz — detaylar için [Sabiha Gökçen araç kiralama](/sabiha-gokcen-arac-kiralama) sayfamıza, bölgenizden ulaşım için [Pendik araç kiralama](/pendik-arac-kiralama) sayfamıza bakabilirsiniz.",
      },
    ],
  },

  {
    slug: "sabiha-gokcen-arac-kiralama-nasil-yapilir",
    title: "Sabiha Gökçen'den Araç Kiralama Nasıl Yapılır?",
    metaTitle: "Sabiha Gökçen'den Araç Kiralama Nasıl Yapılır?",
    description:
      "Sabiha Gökçen Havalimanı'nda araç kiralama adım adım: rezervasyon, teslim saati, gerekli belgeler ve dikkat edilmesi gerekenler.",
    excerpt:
      "Havalimanına araç getirme sürecinin adımları, gerekli belgeler ve teslim öncesi yapmanız gerekenler.",
    keyword: "sabiha gökçen araç kiralama nasıl yapılır",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Sabiha Gökçen Havalimanı'na indiğinizde aracınızın hazır olmasını istiyorsanız süreç oldukça basit. Pendik Çamçeşme'deki ofisimiz havalimanına yaklaşık 15 dakikalık mesafede olduğu için havalimanına araç getirebiliyoruz.",
      },
      { type: "h2", text: "1. WhatsApp'tan yazın" },
      {
        type: "p",
        text: "Kiralama tarihlerinizi, havalimanına varış saatinizi ve tercih ettiğiniz aracı iletmeniz yeterli. Aracı seçmekte kararsızsanız kullanım amacınızı yazın, size uygun olanı önerelim.",
      },
      { type: "h2", text: "2. Müsaitlik ve fiyat teyidi" },
      {
        type: "p",
        text: "Belirttiğiniz tarihlerde uygun araçları ve toplam tutarı paylaşıyoruz. Filomuzda dört araç var; yoğun dönemlerde müsaitlik sınırlı olabildiği için önceden yazmanızda fayda var. İleri bir tarih için araç ayırtmak isterseniz kapora alıyoruz.",
      },
      { type: "h2", text: "3. Teslim saatini belirleyin" },
      {
        type: "p",
        text: "Aracı havalimanına ne zaman getireceğimizi birlikte kararlaştırıyoruz. Ofisimiz 7/24 açık olduğu için gece saatlerinde de teslim yapabiliyoruz — geç saatte inen bir uçuşunuz varsa sorun olmaz.",
      },
      { type: "h2", text: "4. Belgelerinizi yanınızda bulundurun" },
      {
        type: "ul",
        items: [
          "En az 2 yıllık geçerli sürücü belgesi",
          "Kimlik belgesi",
        ],
      },
      {
        type: "p",
        text: "Yaş sınırı uygulamıyoruz; tek şartımız ehliyetinizin en az 2 yıllık olması. Ayrıntılar için [gerekli belgeler](/blog/arac-kiralama-icin-gerekli-belgeler) yazımıza bakabilirsiniz.",
      },
      { type: "h2", text: "5. Aracı teslim alın" },
      {
        type: "p",
        text: "Belirlediğimiz noktada sözleşmeyi tamamlayıp yola çıkıyorsunuz. Teslim sırasında aracı birlikte kontrol etmenizi ve mevcut durumu fotoğraflamanızı öneririz; bu, iadede yaşanabilecek anlaşmazlıkları baştan bitirir.",
      },
      {
        type: "note",
        text: "Ödeme nakit veya banka havalesiyle yapılıyor, kredi kartı geçmiyor. Havalimanına gelmeden önce ödeme yöntemini planlamanızda fayda var.",
      },
      { type: "h2", text: "Kiralama öncesi bilmeniz gerekenler" },
      {
        type: "ul",
        items: [
          "Günlük 200 km kilometre sınırı uygulanıyor.",
          "Depozito almıyoruz.",
          "Araçlarımız sigortalı ve kaskoludur.",
          "Kapora vererek ayırttığınız bir rezervasyonu iptal ederseniz kapora iade edilmiyor.",
        ],
      },
      {
        type: "p",
        text: "Havalimanı hizmetimizin tüm detayları ve sık sorulan sorular için [Sabiha Gökçen araç kiralama](/sabiha-gokcen-arac-kiralama) sayfamıza, havalimanına en yakın bölge olan [Kurtköy](/kurtkoy-arac-kiralama) için ilgili sayfamıza bakabilirsiniz.",
      },
    ],
  },

  {
    slug: "arac-kiralama-icin-gerekli-belgeler",
    title: "Araç Kiralamak İçin Gerekli Belgeler",
    metaTitle: "Araç Kiralamak İçin Gerekli Belgeler",
    description:
      "Araç kiralarken hangi belgeler isteniyor? Ehliyet, kimlik ve ödeme konusunda bilmeniz gerekenler.",
    excerpt:
      "Teslim noktasında yanınızda olması gerekenler ve ehliyet süresi şartının nedeni.",
    keyword: "araç kiralama gerekli belgeler",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Araç kiralama işlemi, doğru belgelerle geldiğinizde birkaç dakika sürer. Bizde istenen belgeler oldukça sade.",
      },
      { type: "h2", text: "Yanınızda olması gerekenler" },
      {
        type: "ul",
        items: [
          "**Sürücü belgesi (ehliyet).** En az 2 yıllık olmalı ve aslı yanınızda bulunmalı; fotokopi kabul edilmiyor.",
          "**Kimlik belgesi.** Sözleşme için gerekli.",
        ],
      },
      { type: "h2", text: "Yaş sınırı var mı?" },
      {
        type: "p",
        text: "Hayır. Sektörde birçok firma 21, 23 hatta 25 yaş şartı ararken bizde yaş sınırı bulunmuyor. Tek koşulumuz sürücü belgenizin en az 2 yıllık olması. Konuyu ayrıntılı ele aldığımız [araç kiralama yaş sınırı](/blog/arac-kiralama-yas-siniri) yazımıza bakabilirsiniz.",
      },
      { type: "h2", text: "Neden ehliyet süresi aranıyor?" },
      {
        type: "p",
        text: "Ehliyet süresi şartı sigorta kapsamıyla ilgilidir. Yeni ehliyet sahibi sürücüler için sigorta koşulları farklılaştığından, sektörde yaygın olarak belirli bir süre şartı aranır. Bizim uyguladığımız süre 2 yıldır ve tüm araçlarımız için aynıdır.",
      },
      { type: "h2", text: "Ödeme için ne gerekiyor?" },
      {
        type: "p",
        text: "Ödemeyi nakit veya banka havalesiyle yapabilirsiniz. Kredi kartı geçmemektedir — bu konuyu ayrıntılı anlattığımız [kredi kartsız araç kiralama](/blog/kredi-kartsiz-arac-kiralama) yazımız var.",
      },
      {
        type: "note",
        text: "Depozito almıyoruz. Yalnızca aracı ileri bir tarih için önceden ayırtmak isterseniz kapora alınır.",
      },
      {
        type: "p",
        text: "Belgeleriniz hazırsa [Pendik Çamçeşme'deki ofisimizden](/pendik-arac-kiralama) aracınızı teslim alabilirsiniz. Tüm koşullar [kiralama koşulları](/kiralama-kosullari) sayfamızda yazılı.",
      },
    ],
  },

  {
    slug: "arac-kiralama-yas-siniri",
    title: "Araç Kiralama Yaş Sınırı Kaçtır?",
    metaTitle: "Araç Kiralama Yaş Sınırı Kaçtır?",
    description:
      "Araç kiralamak için kaç yaşında olmak gerekir? Sektördeki yaygın uygulama ve bizim koşullarımız.",
    excerpt:
      "Sektörde yaygın yaş şartları, ehliyet süresinin neden daha belirleyici olduğu ve bizim uygulamamız.",
    keyword: "araç kiralama yaş sınırı",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Araç kiralamak isteyen genç sürücülerin en çok karşılaştığı engel yaş şartıdır. Ancak bu şart her firmada aynı değildir.",
      },
      { type: "h2", text: "Sektördeki yaygın uygulama" },
      {
        type: "p",
        text: "Araç kiralama firmalarının çoğu 21 yaş alt sınırı uygular; üst segment araçlarda bu şart 25 yaşa kadar çıkabilir. Bunun temel nedeni sigorta şirketlerinin genç sürücüleri daha yüksek riskli görmesidir. Bazı firmalar yaş şartını karşılamayan sürücülerden ek ücret talep eder.",
      },
      { type: "h2", text: "Bizim uygulamamız" },
      {
        type: "p",
        text: "**Yaş sınırı uygulamıyoruz.** Aradığımız tek şart sürücü belgenizin en az 2 yıllık olmasıdır ve bu koşul filomuzdaki tüm araçlar için aynıdır. 19 yaşında olup 2 yıllık ehliyeti olan bir sürücü de, 40 yaşında olup 2 yıllık ehliyeti olan bir sürücü de aynı koşullarla araç kiralayabilir.",
      },
      { type: "h2", text: "Neden yaş değil de ehliyet süresi?" },
      {
        type: "p",
        text: "Sürüş deneyimini belirleyen şey yaş değil, direksiyon başında geçirilen süredir. 2 yıllık ehliyet şartı, sürücünün trafiğe alışmış olmasını sağlayan makul bir eşiktir. Bu yaklaşım hem daha adil hem de pratikte daha anlamlı.",
      },
      {
        type: "note",
        text: "Aracı sözleşmede adı geçmeyen bir kişinin kullanması sigorta kapsamını geçersiz kılar. Aracı başkası da kullanacaksa teslim sırasında mutlaka belirtin.",
      },
      { type: "h2", text: "Hangi araçları kiralayabilirsiniz?" },
      {
        type: "p",
        text: "Yaş şartı olmadığı için filomuzdaki dört aracın tamamı size açık. Otomatik vites tercih ediyorsanız [Renault Clio](/araclar/renault-clio-kiralama), [Fiat Egea](/araclar/fiat-egea-kiralama) veya [Renault Taliant](/araclar/renault-taliant-kiralama); manuel kullanabiliyorsanız daha ekonomik olan [Peugeot 301](/araclar/peugeot-301-kiralama) uygun olur.",
      },
      {
        type: "p",
        text: "Diğer koşullar için [kiralama koşulları](/kiralama-kosullari) sayfamıza bakabilir, [Pendik](/pendik-arac-kiralama) veya [Kartal](/kartal-arac-kiralama) çevresinden ofisimize ulaşım bilgisini ilgili sayfalarda bulabilirsiniz.",
      },
    ],
  },

  {
    slug: "depozitosuz-arac-kiralama",
    title: "Depozitosuz Araç Kiralama Mümkün mü?",
    metaTitle: "Depozitosuz Araç Kiralama Mümkün mü?",
    description:
      "Araç kiralamada depozito neden alınır, depozitosuz kiralama mümkün müdür? Kapora ile depozito arasındaki fark.",
    excerpt:
      "Depozitonun sektördeki işlevi, kapora ile farkı ve bizde depozito alınmamasının ne anlama geldiği.",
    keyword: "depozitosuz araç kiralama",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Araç kiralarken en çok soru alan konulardan biri depozitodur. Birçok kiracı için bu tutar ciddi bir engel oluşturuyor. Peki depozito neden alınır ve depozitosuz kiralama mümkün mü?",
      },
      { type: "h2", text: "Depozito nedir, neden alınır?" },
      {
        type: "p",
        text: "Depozito, kiralama süresince oluşabilecek hasar veya ceza için firmanın aldığı geçici güvence bedelidir. Sektörde yaygın olarak nakit alınır ya da kredi kartından provizyon şeklinde bloke edilir; araç sorunsuz iade edildiğinde geri verilir. Tutar araç segmentine göre değişir ve bazı firmalarda oldukça yüksek olabilir.",
      },
      { type: "h2", text: "Bizde depozito yok" },
      {
        type: "p",
        text: "**Depozito almıyoruz.** Aracı hemen teslim alacaksanız herhangi bir ön ödeme yapmanız gerekmiyor. Bu, özellikle kart limitinin bloke edilmesini istemeyen veya nakit ayırmak zorunda kalmak istemeyen misafirlerimiz için önemli bir kolaylık.",
      },
      { type: "h2", text: "Peki kapora nedir?" },
      {
        type: "p",
        text: "Kapora, depozitodan farklı bir şeydir. Aracı **ileri bir tarih için önceden ayırtmak** isterseniz alınan ön ödemedir. Amacı, o tarihte aracın sizin adınıza rezerve edilmesini sağlamaktır.",
      },
      {
        type: "ul",
        items: [
          "**Depozito:** hasar/ceza güvencesi, teslimde alınır, iadede geri verilir — bizde yok.",
          "**Kapora:** rezervasyon ön ödemesi, sadece önceden ayırtmak isterseniz alınır.",
        ],
      },
      {
        type: "note",
        text: "Kapora vererek araç ayırttıysanız ve rezervasyonu iptal ederseniz kapora iade edilmemektedir. Tarihlerinizden emin olduğunuzda ayırtmanızı öneririz.",
      },
      { type: "h2", text: "Depozito yoksa hasar durumunda ne oluyor?" },
      {
        type: "p",
        text: "Araçlarımız sigortalı ve kaskoludur. Bu yüzden güvence için ayrıca depozito almaya gerek duymuyoruz. Teslim sırasında aracı birlikte kontrol ediyoruz; bu adımda aracın mevcut durumunu fotoğraflamanızı öneririz.",
      },
      {
        type: "p",
        text: "Kiralama koşullarımızın tamamını [kiralama koşulları](/kiralama-kosullari) sayfasında, güncel araç ve fiyatları [araçlar](/araclar) sayfasında bulabilirsiniz.",
      },
    ],
  },

  {
    slug: "kredi-kartsiz-arac-kiralama",
    title: "Kredi Kartsız Araç Kiralama",
    metaTitle: "Kredi Kartsız Araç Kiralama",
    description:
      "Kredi kartı olmadan araç kiralanır mı? Nakit ve havale ile araç kiralama koşulları.",
    excerpt:
      "Kredi kartı olmayan sürücüler için nakit ve havaleyle kiralama nasıl işliyor?",
    keyword: "kredi kartsız araç kiralama",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Araç kiralama sektöründe yaygın uygulama, ödeme ve depozito için kredi kartı istemektir. Kredi kartı olmayan ya da limitini bloke ettirmek istemeyen sürücüler bu nedenle zorluk yaşayabiliyor.",
      },
      { type: "h2", text: "Neden kredi kartı isteniyor?" },
      {
        type: "p",
        text: "Kredi kartı provizyonu, firmalar açısından depozitoyu hızlı ve kolay biçimde güvenceye almanın yoludur. Para hesaptan çıkmaz, limitin bir kısmı geçici olarak bloke edilir ve araç sorunsuz teslim edildiğinde çözülür. Ancak blokenin çözülmesi bankaya göre birkaç iş günü sürebilir.",
      },
      { type: "h2", text: "Bizde nasıl işliyor?" },
      {
        type: "p",
        text: "**Kredi kartı geçmiyor.** Ödemeyi nakit veya banka havalesi/EFT ile yapıyorsunuz. Ayrıca depozito da almadığımız için bloke edilecek bir tutar zaten söz konusu değil.",
      },
      {
        type: "p",
        text: "Bu, kredi kartı olmayan sürücüler için sürecin aslında daha basit olduğu anlamına geliyor: ne kart provizyonu ne de depozito derdi var.",
      },
      { type: "h2", text: "Nakit veya havale ile kiralarken" },
      {
        type: "ul",
        items: [
          "Toplam tutarın sözleşmede yazılı olduğundan emin olun.",
          "Ödeme karşılığında belge alın.",
          "Havale ile ödeyecekseniz teslim gününden önce planlayın.",
          "Aracı ileri bir tarihe ayırtacaksanız kapora ödemesini de aynı şekilde yapabilirsiniz.",
        ],
      },
      {
        type: "note",
        text: "Kapora ödediğiniz bir rezervasyonu iptal etmeniz durumunda kapora iade edilmez. Tarihlerinizden emin olduğunuzda ayırtmanızı öneririz.",
      },
      {
        type: "p",
        text: "Kiralama şartlarının tamamı [kiralama koşulları](/kiralama-kosullari) sayfamızda. Araç seçenekleri için [araçlar](/araclar), teslim noktası için [Pendik araç kiralama](/pendik-arac-kiralama) sayfamıza bakabilirsiniz.",
      },
    ],
  },

  {
    slug: "istanbul-gunluk-arac-kiralama",
    title: "İstanbul'da Günlük Araç Kiralama Rehberi",
    metaTitle: "İstanbul'da Günlük Araç Kiralama",
    description:
      "İstanbul'da günlük araç kiralama nasıl yapılır? Araç seçimi, kilometre planlaması ve trafik konusunda pratik bilgiler.",
    excerpt:
      "Bir günlüğüne araç kiralarken araç seçimi, kilometre planı ve İstanbul trafiğine özgü püf noktaları.",
    keyword: "istanbul günlük araç kiralama",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "İstanbul'da bir günlüğüne araç kiralamak, gün içinde birden fazla noktaya gidecekseniz taksi ve toplu taşıma kombinasyonundan çoğu zaman daha ekonomik ve esnek olur. Ancak doğru araç seçimi ve kilometre planı yapmazsanız bu avantaj kaybolabilir.",
      },
      { type: "h2", text: "Günlük kiralama kime uygun?" },
      {
        type: "ul",
        items: [
          "Şehir dışından gelip 1-2 gün İstanbul'da kalacaklar",
          "Gün içinde birden fazla noktaya gitmesi gereken iş seyahatleri",
          "Kendi aracı serviste olanlar",
          "Sabiha Gökçen'e inip şehir içinde araca ihtiyaç duyanlar",
        ],
      },
      { type: "h2", text: "Hangi aracı seçmeli?" },
      {
        type: "p",
        text: "İstanbul trafiğinde otomatik vites ciddi bir konfor farkı yaratır. Şehir içinde kalacaksanız kompakt bir araç park kolaylığı sağlar; [Renault Clio](/araclar/renault-clio-kiralama) bu kullanım için uygun bir tercih. Bagajlı seyahat edecekseniz sedan gövdeli [Fiat Egea](/araclar/fiat-egea-kiralama) veya [Renault Taliant](/araclar/renault-taliant-kiralama) daha rahat eder. Manuel vites kullanabiliyorsanız [Peugeot 301](/araclar/peugeot-301-kiralama) en ekonomik seçeneğimiz.",
      },
      { type: "h2", text: "Kilometre planınızı önceden yapın" },
      {
        type: "p",
        text: "Günlük 200 km kilometre sınırımız var. Şehir içi kullanım için bu sınır çoğu ihtiyacı fazlasıyla karşılıyor. Ancak aynı gün içinde şehir dışına çıkmayı planlıyorsanız (örneğin Şile, Ağva veya Sapanca yönü) bunu rezervasyon sırasında konuşalım.",
      },
      { type: "h2", text: "Trafiği hesaba katın" },
      {
        type: "p",
        text: "Anadolu Yakası'ndan Avrupa Yakası'na geçecekseniz köprü saatlerini planlayın; sabah 07:30-10:00 ve akşam 17:00-20:00 aralıkları en yoğun saatler. Aynı mesafe, saatine göre iki katı sürebiliyor.",
      },
      { type: "h2", text: "Aracı nereden alacaksınız?" },
      {
        type: "p",
        text: "Araç teslimimiz Pendik Çamçeşme'deki ofisimizden yapılıyor; ofisimiz 7/24 açık. Sabiha Gökçen Havalimanı'na ise araç getiriyoruz. Bölgenizden ofisimize ulaşım bilgisi için ilgili sayfalara bakabilirsiniz: [Pendik](/pendik-arac-kiralama), [Kartal](/kartal-arac-kiralama), [Maltepe](/maltepe-arac-kiralama), [Tuzla](/tuzla-arac-kiralama) veya genel bilgi için [İstanbul araç kiralama](/istanbul-arac-kiralama).",
      },
    ],
  },

  {
    slug: "arac-kiralarken-dikkat-edilmesi-gerekenler",
    title: "Araç Kiralarken Nelere Dikkat Edilmeli?",
    metaTitle: "Araç Kiralarken Nelere Dikkat Edilmeli?",
    description:
      "Araç kiralarken sözleşme, sigorta, kilometre sınırı ve teslim tutanağı konusunda bilmeniz gereken maddeler.",
    excerpt:
      "Sözleşmeyi imzalamadan önce kontrol etmeniz gereken maddeler ve en sık yapılan hatalar.",
    keyword: "araç kiralarken nelere dikkat edilmeli",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Araç kiralamada yaşanan sorunların büyük bölümü, teslim anında beş dakika ayrılsa hiç çıkmayacak sorunlardır. Aşağıdaki maddeler hangi firmadan kiralarsanız kiralayın işinize yarar.",
      },
      { type: "h2", text: "1. Aracı teslim alırken birlikte kontrol edin" },
      {
        type: "p",
        text: "Araçtaki mevcut çizik, göçük ve cam çatlaklarının kayda geçtiğinden emin olun. Aracın dört köşesinden fotoğraf çekin ve saklayın. **İade sırasında yaşanan anlaşmazlıkların çoğu bu adımın atlanmasından çıkar.** Yakıt göstergesinin de fotoğrafını çekin.",
      },
      { type: "h2", text: "2. Sigorta kapsamını öğrenin" },
      {
        type: "p",
        text: "Aracın sigortalı olup olmadığını ve hangi durumların kapsam dışı olduğunu sorun. Alkollü araç kullanımı, ehliyetsiz kullanım ve sözleşmede adı geçmeyen kişinin araç kullanması genellikle sigorta kapsamı dışındadır. Bizim araçlarımızın tamamı sigortalı ve kaskoludur.",
      },
      { type: "h2", text: "3. Kilometre sınırını netleştirin" },
      {
        type: "p",
        text: "Günlük kilometre sınırı ve aşım durumunda ne olacağı sözleşmede yazılı olmalı. Bizde günlük sınır 200 km; şehirlerarası planınız varsa baştan konuşuyoruz.",
      },
      { type: "h2", text: "4. Ödeme yöntemini önceden konuşun" },
      {
        type: "p",
        text: "Her firma her ödeme yöntemini kabul etmez. Bizde ödeme nakit veya banka havalesiyle yapılır, kredi kartı geçmez. Bunu teslim gününden önce planlamak işinizi kolaylaştırır.",
      },
      { type: "h2", text: "5. Depozito ve kapora farkını bilin" },
      {
        type: "p",
        text: "Depozito hasar güvencesidir, kapora ise rezervasyon ön ödemesi. Biz depozito almıyoruz; yalnızca ileri tarihli rezervasyonlarda kapora alıyoruz. Ayrıntı için [depozitosuz araç kiralama](/blog/depozitosuz-arac-kiralama) yazımıza bakabilirsiniz.",
      },
      { type: "h2", text: "6. Aracı kimin kullanacağını belirtin" },
      {
        type: "p",
        text: "Aracı başka biri de kullanacaksa bunu teslim sırasında mutlaka söyleyin. Sözleşmede adı geçmeyen bir sürücünün kaza yapması durumunda sigorta devreye girmez.",
      },
      { type: "h2", text: "7. Toplam tutarı ve teslim koşullarını yazılı isteyin" },
      {
        type: "p",
        text: "Kiralama süresi, toplam tutar, teslim ve iade noktası ile saati sözleşmede net olmalı. Sözleşmede yer almayan bir kalem sonradan talep edilemez.",
      },
      {
        type: "note",
        text: "Kısa özet: teslim tutanağı, sigorta kapsamı ve toplam ücret. Bu üçünü netleştirdiyseniz sorunların büyük kısmını baştan elemişsiniz demektir.",
      },
      {
        type: "p",
        text: "Bizim tüm şartlarımız [kiralama koşulları](/kiralama-kosullari) sayfasında açıkça yazılı. Sık sorulanlar için [SSS](/sss) sayfamıza, araç ve fiyatlar için [araçlar](/araclar) sayfamıza bakabilirsiniz.",
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
