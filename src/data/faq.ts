/**
 * SSS içerikleri.
 *
 * ⚠️ Cevaplardaki yaş, depozito, kilometre ve belge şartları ÖRNEK değerlerdir.
 * Kendi kiralama koşullarınıza göre güncelleyin — bu metinler hem sayfada
 * görünür hem de FAQPage schema'sına gider. Schema ile sayfadaki metin
 * birebir aynı olmak zorundadır.
 */

export type Faq = { q: string; a: string };

/** Ana sayfada gösterilen SSS */
export const homeFaqs: Faq[] = [
  {
    q: "Araç kiralamak için kaç yaşında olmak gerekir?",
    a: "Ekonomik segment araçlarımız için minimum 21 yaş, orta sınıf araçlar için 23 yaş, SUV ve üst segment araçlar için 25 yaş şartı aranmaktadır. Yaş şartı her aracın kendi sayfasında ayrıca belirtilmiştir.",
  },
  {
    q: "Minimum kiralama süresi nedir?",
    a: "Minimum kiralama süresi 1 gündür (24 saat). Haftalık ve aylık kiralamalarda günlük fiyat üzerinden indirim uygulanır.",
  },
  {
    q: "Depozito alınıyor mu?",
    a: "Evet, araç segmentine göre değişen bir depozito alınır; tutarı rezervasyon sırasında size net olarak bildiriyoruz. Depozito, araç sorunsuz teslim edildikten sonra iade edilir. Trafik cezası ve HGS geçişleri depozitodan mahsup edilebilir.",
  },
  {
    q: "Kredi kartı gerekiyor mu?",
    a: "Kredi kartı zorunlu değildir; depozitoyu nakit veya banka havalesi ile de karşılayabilirsiniz. Kredi kartı ile provizyon yöntemini tercih eden misafirlerimiz için bu seçenek de mevcuttur.",
  },
  {
    q: "Ehliyet süresi kaç yıl olmalı?",
    a: "Ehliyetinizin en az 2 yıllık olması gerekir. Üst segment ve SUV araçlarda bu şart 3 yıla çıkmaktadır.",
  },
  {
    q: "Sabiha Gökçen Havalimanı'ndan araç teslim alabilir miyim?",
    a: "Evet. Sabiha Gökçen Havalimanı'na araç teslimatı yapıyoruz. Uçuş numaranızı ve iniş saatinizi WhatsApp'tan iletmeniz yeterli; aracınız siz çıkışa geldiğinizde hazır olur. Gece inen uçuşlarda da teslimat yapıyoruz.",
  },
  {
    q: "Aracı farklı bir noktaya bırakabilir miyim?",
    a: "Evet, farklı noktaya teslim (tek yön) mümkündür. Mesafeye göre ek ücret uygulanabilir; rezervasyon sırasında net tutarı önceden bildiriyoruz.",
  },
];

/** /sss sayfasındaki ek sorular (ana sayfadakilere ek olarak gösterilir) */
export const extraFaqs: Faq[] = [
  {
    q: "Araç kiralamak için hangi belgeler gerekli?",
    a: "Geçerli sürücü belgesi (ehliyet), T.C. kimlik kartı veya pasaport ve kiralama sözleşmesi için iletişim bilgileriniz yeterlidir. Yabancı misafirlerimizde pasaport ve uluslararası geçerliliği olan ehliyet aranır.",
  },
  {
    q: "Günlük kilometre limiti var mı?",
    a: "Evet, standart olarak günde 250 km (SUV araçlarda 300 km) kilometre limiti uygulanır. Limit aşımında kilometre başına ücretlendirme yapılır. Şehirlerarası planınız varsa rezervasyon sırasında belirtin, ek kilometre paketi tanımlayalım.",
  },
  {
    q: "Yakıt politikanız nedir?",
    a: "Araç size hangi yakıt seviyesiyle teslim edildiyse aynı seviyede iade edilmelidir. Eksik yakıtla iade durumunda güncel pompa fiyatı üzerinden ücretlendirme yapılır.",
  },
  {
    q: "HGS ve trafik cezaları nasıl işliyor?",
    a: "Araçlarımızda HGS mevcuttur. Kiralama süresince yapılan köprü ve otoyol geçişleri ile kesilen trafik cezaları kiracıya aittir ve teslim sonrası faturalandırılır.",
  },
  {
    q: "Rezervasyonumu iptal edebilir miyim?",
    a: "Kiralama başlangıcından 24 saat öncesine kadar yapılan iptallerde herhangi bir ücret alınmaz.",
  },
  {
    q: "Araçlar sigortalı mı?",
    a: "Tüm araçlarımız trafik sigortası ve kaskoludur. Kaza durumunda uygulanacak muafiyet tutarı sözleşmede açıkça belirtilir.",
  },
  {
    q: "Aylık (uzun dönem) kiralama yapıyor musunuz?",
    a: "Evet. 30 gün ve üzeri kiralamalarda günlük fiyatlara göre önemli bir indirim uyguluyoruz. Kurumsal müşterilerimiz için faturalı ve çoklu araç seçenekleri mevcuttur.",
  },
  {
    q: "Ödeme seçenekleriniz neler?",
    a: "Nakit, banka havalesi/EFT ve kredi kartı ile ödeme kabul ediyoruz. Kurumsal kiralamalarda fatura düzenlenmektedir.",
  },
];

export const allFaqs: Faq[] = [...homeFaqs, ...extraFaqs];

/** Sabiha Gökçen sayfasına özel SSS */
export const airportFaqs: Faq[] = [
  {
    q: "Sabiha Gökçen'de araç teslimi nasıl yapılıyor?",
    a: "Uçuş numaranızı ve iniş saatinizi WhatsApp'tan bize iletiyorsunuz. Uçuşunuzu takip ediyor, siz bagajınızı alıp çıkışa geldiğinizde aracınızı teslim ediyoruz. Sözleşme işlemleri yerinde, birkaç dakika içinde tamamlanıyor.",
  },
  {
    q: "Havalimanı teslimatı ücretli mi?",
    a: "Teslimat koşullarını rezervasyon sırasında net olarak bildiriyoruz; sürpriz ücret çıkarmıyoruz. Güncel durum için WhatsApp'tan bize yazabilirsiniz.",
  },
  {
    q: "Gece inen uçuşlarda da araç teslim alabilir miyim?",
    a: "Evet. 7/24 hizmet verdiğimiz için gece yarısı inen uçuşlarda da teslimat yapıyoruz. Yeter ki uçuş bilginizi önceden paylaşın.",
  },
  {
    q: "Uçağım rötar yaparsa ne olur?",
    a: "Uçuşunuzu takip ettiğimiz için rötar durumunda teslim saatini otomatik olarak güncelliyoruz. Ek ücret talep etmiyoruz.",
  },
  {
    q: "Aracı havalimanına geri bırakabilir miyim?",
    a: "Evet, aracı Sabiha Gökçen'de teslim edebilirsiniz. Uçuş saatinizden yeterli süre önce bize haber vermeniz yeterli.",
  },
];

/** Araç detay sayfalarında gösterilen ortak sorular */
export function vehicleFaqs(vehicleName: string, minAge: number): Faq[] {
  return [
    {
      q: `${vehicleName} kiralamak için yaş şartı nedir?`,
      a: `${vehicleName} kiralayabilmek için en az ${minAge} yaşında olmanız gerekmektedir.`,
    },
    {
      q: `${vehicleName} için depozito ne kadar?`,
      a: `${vehicleName} için segmentine uygun bir depozito alınır ve araç sorunsuz teslim edildiğinde iade edilir. Güncel tutarı rezervasyon sırasında bildiriyoruz.`,
    },
    {
      q: `${vehicleName} aracını Sabiha Gökçen Havalimanı'ndan teslim alabilir miyim?`,
      a: `Evet. Uçuş bilginizi paylaşmanız halinde ${vehicleName} aracını Sabiha Gökçen Havalimanı'nda size teslim ediyoruz.`,
    },
  ];
}
