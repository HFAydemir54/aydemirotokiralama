/**
 * GERÇEK Google yorumları.
 *
 * Buradaki yorumların tamamı işletmenin Google Business Profile sayfasında
 * yayınlanmış GERÇEK müşteri yorumlarıdır (1 Ağustos 2026'da alındı).
 * Metinler birebir kopyalanmıştır; yazım hataları dahil düzeltme, kısaltma
 * veya güzelleştirme yapılmamıştır — müşterinin kendi ifadesi daha inandırıcı.
 *
 * ⚠️ ASLA uydurma yorum eklemeyin. Google Yorum Politikası ihlalidir ve
 * tespit edilmesi halinde işletme profiline zarar verir.
 *
 * `date` alanı ay hassasiyetindedir (YYYY-MM): Google "bir ay önce" gibi
 * göreli tarih gösterdiği için gün bilgisi uydurulmamıştır.
 *
 * Sitede ilk `FEATURED_COUNT` kadarı gösterilir (bkz. components/Reviews.tsx);
 * liste, en açıklayıcı yorumlar başta olacak şekilde sıralanmıştır.
 */

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** "2026-07" — ay hassasiyetinde */
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "Rümeysa Yıldız",
    rating: 5,
    date: "2026-07",
    text: "Son derece memnun kaldığımız bir kiralama deneyimi oldu. Araç temizliği, teslimat hızı ve personelin güler yüzlü yaklaşımı harikaydı. Hiçbir sorun yaşamadık. Kesinlikle tekrar tercih edeceğiz, herkese tavsiye ederim",
  },
  {
    author: "Rumeysa Açıkgöz",
    rating: 5,
    date: "2026-07",
    text: "İlk defa tercih ettik ve çok memnun kaldık. Araç son derece bakımlı ve konforluydu. Güvenilir, dürüst ve profesyonel bir firma. Bir sonraki seyahatimizde yine tercihlerimizde",
  },
  {
    author: "Tahir İşler",
    rating: 5,
    date: "2026-07",
    text: "Merhaba Arkadaşlar çok ilgili güler yüzlü ve yardımcı olma konusunda çok iyiler. Araçlar fazlasıyla temiz , aile için kullanıma da çok uygun. Herkese kesinlikle tavsiye ederim",
  },
  {
    author: "Muharrem Coşkun",
    rating: 5,
    date: "2026-07",
    text: "1 hafta önce araba kiraladım araçları gerçekten çok temiz ve hijyenik karşılamaları ve iletişimleri de çok olumlu",
  },
  {
    author: "Emrah Ayan",
    rating: 5,
    date: "2026-07",
    text: "Kiralamadan memnun kaldım araçlar temizdi fiyatda çok yardımcı oldular Yusuf beye teşekkür ediyorum gönül rahatlığıyla tercih edebilirsiniz",
  },
  {
    author: "Uğur Güngör",
    rating: 5,
    date: "2026-07",
    text: "Araç konfor ve mekanik olarak çok iyi müşteri hizmetlerinde bulunan personellerin ilgisi ve güleryüzlü olmasına çok sevindim tavsiye ederim",
  },
  {
    author: "Evren Yetimosmanoğlu",
    rating: 5,
    date: "2026-07",
    text: "Yusuf bey ilgili idi gayet hoş karşıladı araclarında düzgün ve bakımlı bütün ihtiyaçlarımızı karşıladı",
  },
  {
    author: "LEYLA",
    rating: 5,
    date: "2026-07",
    text: "Hizmetlerimden çok memnun kaldım araç temizlikleri çok güzeldi yanımdıca oldular teşekkür ederim tavsiye ederim",
  },
  {
    author: "Emre Kaymas",
    rating: 5,
    date: "2026-07",
    text: "Çok temiz bir işletme çalışanlar güler yüzlü sürekli araç kiraladığım bir işletme herkese tavsiye ederim",
  },
  {
    author: "nazım samet türk",
    rating: 5,
    date: "2025-09",
    text: "Yusuf bey oldukça ilgiliydi. Araç gayet temizdi. Müşteri memnuniyetini fazlasıyla karşıladı fiyat konusunda yardımcı oldu. Gönül rahatlığıyla tavsiye ederim",
  },
  {
    author: "Oğuzhan Gödek",
    rating: 5,
    date: "2026-07",
    text: "Yusuf bey benimle çok ilgilendi herseyde yardımcı oldu fiyat konusunda da yardımcı oldu çok memnun kaldım herkese tavsiye ederim",
  },
  {
    author: "Musa Yavuz",
    rating: 5,
    date: "2026-07",
    text: "Yusuf bey bizimle çok güzel ilgilendi araçları temiz güvenerek araç kiralayabilirsiniz.",
  },
  {
    author: "Nurullah Yayan",
    rating: 5,
    date: "2026-07",
    text: "Arkadaşlar çok ilgili ve yardımcı olma konusunda çok iyiler. Araçlar temiz, aile için kullanıma da çok uygun.",
  },
  {
    author: "ALİ CAM OTOMOTİV İNŞ SAN VE TİC LTD ŞTİ",
    rating: 5,
    date: "2026-07",
    text: "Yusuf beyle ilk defa ticaretimiz oldu kaşke daha önce tanışmış olsaydık şirketimiz için en doğru yolu Aydemir oto kiralama olarak seçtik",
  },
  {
    author: "Emirhan Altun",
    rating: 5,
    date: "2026-07",
    text: "Çok güzel karşılandım ilgi alaka için teşekkürler tamamen sorunsuz şekilde işlerimiz halettim teşekkürler",
  },
  {
    author: "Hasan Yüce",
    rating: 5,
    date: "2026-07",
    text: "Araçlarını çok temiz fiyat konusunda yardımcı oldular teşekkürler",
  },
  {
    author: "Melih can Güldü",
    rating: 5,
    date: "2026-07",
    text: "Kiraladığım araç çok konforlu ve bakımlıydı çok teşekkür ederim",
  },
  {
    author: "Sevki Karagöl",
    rating: 5,
    date: "2026-07",
    text: "İlgili, güler yüzlü ve kaliteli hizmet. Tekrar tercih edeceğim.",
  },
  {
    author: "Cuma Demir",
    rating: 5,
    date: "2026-07",
    text: "Sizin gibi şirketle çalıştığımız için çok memnunuz tavsiye ederim teşekkürler",
  },
  {
    author: "hazar gezici",
    rating: 5,
    date: "2026-07",
    text: "Kiralamada hiç bir sorun yaşamadık fiyatta yardımcı oldular",
  },
  {
    author: "Fatih Soral",
    rating: 5,
    date: "2026-07",
    text: "Çok memnun kaldık, personel ilgiliydi teşekkürler",
  },
  {
    author: "Hamza Avcı",
    rating: 5,
    date: "2026-07",
    text: "İlgi ve alaka için teşekkürler tekrar tercihim siz olucaksınız",
  },
  {
    author: "Çağrı ÇİFCİ",
    rating: 5,
    date: "2026-07",
    text: "Güvenilir bir yer araçlar temizdi",
  },
  {
    author: "AHMET",
    rating: 5,
    date: "2026-07",
    text: "Güvenilir bir firma gönül rahatlığıyla araç kiralayabilirsiniz.",
  },
  {
    author: "mete Şahin",
    rating: 5,
    date: "2026-07",
    text: "Araç kiralamadan çok memnun kaldım güvenilir bir yer herkese tavsiye ederim",
  },
  {
    author: "Veysel Yeşil",
    rating: 5,
    date: "2026-07",
    text: "Çok memnun kaldım iyiki sizi tercih etmişim teşekkürler",
  },
  {
    author: "Eyüp Çelik",
    rating: 5,
    date: "2026-07",
    text: "Çok iyi ilgilendim çok memnun kaldım herkes tavsiye ederim",
  },
  {
    author: "civan kılıç",
    rating: 5,
    date: "2026-07",
    text: "Araç kiralamasında çok memnun kaldım tavsiye ederim.",
  },
  {
    author: "Azad Gümüş",
    rating: 5,
    date: "2026-07",
    text: "Araç kiralamadan çok memnun kaldım herkese tavsiye ederim",
  },
  {
    author: "Samed Kalkan",
    rating: 5,
    date: "2026-07",
    text: "Çok memnun kaldım ilgi alaka çok iyiydi",
  },
  {
    author: "Ferhat Tuser",
    rating: 5,
    date: "2026-07",
    text: "Çok memnun kaldım herkese tavsiye ederim",
  },
  {
    author: "Sefacan Çullu",
    rating: 5,
    date: "2026-07",
    text: "ilgilerinden dolayı çok memnun kaldım tavsiye ederim.",
  },
  {
    author: "eslem aslan",
    rating: 5,
    date: "2026-07",
    text: "memnun kaldım bir daha tercih edeceğim.",
  },
  {
    author: "BEYTULLAH MALKOÇOĞLU",
    rating: 5,
    date: "2026-06",
    text: "Çok memnun kaldım",
  },
  {
    author: "Muhammed faruk Aytar",
    rating: 5,
    date: "2026-07",
    text: "Çok memnun kaldım",
  },
];

/**
 * Google'daki genel puan ve toplam yorum sayısı.
 *
 * Google profilindeki 36 değerlendirmenin tamamı 5 yıldız olduğu için
 * ortalama 5,0'dır. Yeni yorum geldikçe bu değerleri güncelleyin —
 * sitede yazan puan Google'daki gerçek puanla aynı olmalıdır.
 */
export const ratingSummary: { value: number; count: number } | null = {
  value: 5,
  count: 36,
};

/** Ana sayfada gösterilen yorum sayısı; gerisi Google'da. */
export const FEATURED_COUNT = 9;
