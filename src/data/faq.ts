/**
 * SSS içerikleri.
 *
 * Buradaki cevaplar işletme sahibinin bildirdiği GERÇEK kiralama koşullarına
 * göre yazılmıştır (1 Ağustos 2026). Koşullar değişirse burayı güncelleyin —
 * metinler hem sayfada görünür hem de FAQPage schema'sına gider, ikisi
 * birbiriyle birebir aynı olmak zorundadır.
 *
 * Doğrulanmış koşullar:
 *   - Yaş sınırı YOK; ehliyetin en az 2 yıllık olması yeterli
 *   - Depozito ALINMIYOR; yalnızca önceden araç ayırtmak isteyenlerden kapora
 *   - Kredi kartı GEÇMİYOR; nakit veya havale
 *   - Günlük 200 km kilometre sınırı
 *   - İptalde kapora iade edilmiyor
 *   - Havalimanına araç getiriliyor; diğer bölgelerde teslim ofisten yapılıyor
 *   - Ofis Sabiha Gökçen'e 15 dakika mesafede, 7/24 açık
 *   - Tüm araçlar sigortalı ve kaskolu
 */

export type Faq = { q: string; a: string };

/** Ana sayfada gösterilen SSS */
export const homeFaqs: Faq[] = [
  {
    q: "Araç kiralamak için yaş sınırı var mı?",
    a: "Yaş sınırımız bulunmuyor. Aradığımız tek şart, sürücü belgenizin en az 2 yıllık olmasıdır.",
  },
  {
    q: "Ehliyet süresi kaç yıl olmalı?",
    a: "Sürücü belgenizin en az 2 yıllık olması gerekir. Bu şart tüm araçlarımız için aynıdır.",
  },
  {
    q: "Depozito alıyor musunuz?",
    a: "Hayır, depozito almıyoruz. Yalnızca aracı ileri bir tarih için önceden ayırtmak isterseniz kapora alıyoruz.",
  },
  {
    q: "Ödemeyi nasıl yapabilirim?",
    a: "Nakit veya banka havalesi ile ödeme kabul ediyoruz. Kredi kartı geçmemektedir.",
  },
  {
    q: "Günlük kilometre sınırı var mı?",
    a: "Evet, günlük 200 km kilometre sınırı uygulanmaktadır. Daha fazla yol yapmayı planlıyorsanız rezervasyon sırasında bize belirtin.",
  },
  {
    q: "Sabiha Gökçen Havalimanı'ndan araç teslim alabilir miyim?",
    a: "Evet. Ofisimiz Sabiha Gökçen Havalimanı'na 15 dakikalık mesafededir ve havalimanına araç getiriyoruz. Teslim saatini WhatsApp'tan konuşarak belirliyoruz.",
  },
  {
    q: "Araç teslimi nerede yapılıyor?",
    a: "Havalimanı dışındaki teslimlerde araç, Pendik Çamçeşme'deki ofisimizden teslim edilmektedir. Sabiha Gökçen Havalimanı'na ise araç getiriyoruz.",
  },
];

/** /sss sayfasındaki ek sorular (ana sayfadakilere ek olarak gösterilir) */
export const extraFaqs: Faq[] = [
  {
    q: "Araç kiralamak için hangi belgeler gerekli?",
    a: "En az 2 yıllık geçerli sürücü belgesi ve kimlik belgeniz yeterlidir.",
  },
  {
    q: "Kapora nedir, ne zaman alınıyor?",
    a: "Kapora, aracı ileri bir tarih için önceden ayırtmak isteyen misafirlerimizden alınan ön ödemedir. Aracı hemen teslim alacaksanız kapora gerekmez.",
  },
  {
    q: "Rezervasyonumu iptal edersem kapora iade ediliyor mu?",
    a: "Kapora vererek araç ayırttıysanız ve rezervasyonu iptal ederseniz kapora iade edilmemektedir.",
  },
  {
    q: "Minimum kiralama süresi nedir?",
    a: "Minimum kiralama süresi 1 gündür. Haftalık ve aylık kiralama da yapıyoruz; bu sürelerdeki fiyatlar için bize yazabilirsiniz.",
  },
  {
    q: "Kilometre sınırını aşarsam ne oluyor?",
    a: "Günlük 200 km sınırı aşılırsa ek ücret uygulanır. Uzun yol planınız varsa rezervasyon sırasında belirtin, koşulları önceden netleştirelim.",
  },
  {
    q: "Araçlar sigortalı mı?",
    a: "Evet, tüm araçlarımız sigortalı ve kaskoludur.",
  },
  {
    q: "Çalışma saatleriniz nedir?",
    a: "Ofisimiz 7/24 açıktır. Gece geç saatlerde veya sabah erkenden de araç teslim alabilirsiniz.",
  },
  {
    q: "Haftalık ve aylık kiralama yapıyor musunuz?",
    a: "Evet, günlük kiralamanın yanında haftalık ve aylık kiralama da yapıyoruz. Bu sürelerdeki fiyatlar kiralama süresine göre değiştiği için WhatsApp'tan bilgi verebiliriz.",
  },
];

export const allFaqs: Faq[] = [...homeFaqs, ...extraFaqs];

/** Sabiha Gökçen sayfasına özel SSS */
export const airportFaqs: Faq[] = [
  {
    q: "Sabiha Gökçen Havalimanı'na araç getiriyor musunuz?",
    a: "Evet. Ofisimiz havalimanına 15 dakikalık mesafede olduğu için Sabiha Gökçen'e araç getiriyoruz. Teslim saatini önceden WhatsApp'tan konuşuyoruz.",
  },
  {
    q: "Havalimanı teslimi için ne yapmam gerekiyor?",
    a: "WhatsApp'tan kiralama tarihlerinizi ve havalimanına varış saatinizi yazmanız yeterli. Müsaitlik ve fiyat bilgisini paylaşıp teslim detaylarını birlikte belirliyoruz.",
  },
  {
    q: "Gece saatlerinde de araç teslim alabilir miyim?",
    a: "Ofisimiz 7/24 açıktır, gece saatlerinde de araç teslimi yapabiliyoruz. Saatini önceden bildirmeniz yeterli.",
  },
  {
    q: "Aracı havalimanında teslim edebilir miyim?",
    a: "İade planınızı rezervasyon sırasında konuşalım; havalimanı teslimi için önceden bilgi vermeniz yeterli.",
  },
  {
    q: "Ofisiniz havalimanına ne kadar uzaklıkta?",
    a: "Pendik Çamçeşme'deki ofisimiz Sabiha Gökçen Havalimanı'na yaklaşık 15 dakikalık mesafededir.",
  },
];

/** Araç detay sayfalarında gösterilen, araca özel sorular */
export function vehicleFaqs(vehicleName: string): Faq[] {
  return [
    {
      q: `${vehicleName} kiralamak için hangi şartlar gerekiyor?`,
      a: `${vehicleName} kiralamak için en az 2 yıllık sürücü belgesi yeterlidir. Yaş sınırı uygulamıyoruz ve depozito almıyoruz.`,
    },
    {
      q: `${vehicleName} için kilometre sınırı var mı?`,
      a: "Tüm araçlarımızda olduğu gibi günlük 200 km kilometre sınırı uygulanmaktadır.",
    },
    {
      q: `${vehicleName} aracını Sabiha Gökçen Havalimanı'nda teslim alabilir miyim?`,
      a: `Evet. Ofisimiz havalimanına 15 dakikalık mesafede olduğu için ${vehicleName} aracını Sabiha Gökçen'e getirebiliyoruz.`,
    },
  ];
}
