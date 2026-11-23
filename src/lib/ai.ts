/**
 * Yapay zekâ asistanları için tek kaynak: /llms.txt, /ai/summary.json,
 * /ai/service.json ve /ai/faq.json bu dosyadan ve data/ altındaki verilerden
 * üretilir. Kiralama koşulları değişirse data/faq.ts ile BİRLİKTE burayı da
 * güncelleyin — iki yerde farklı bilgi olursa asistanlar yanlış cevap verir.
 */

/** Doğrulanmış kiralama koşulları (bkz. data/faq.ts başlığı, 1 Ağustos 2026). */
export const KEY_FACTS = [
  "Ofis Pendik Çamçeşme'de, 7/24 açık.",
  "Araç teslimi yalnızca Pendik Çamçeşme'deki ofisten yapılır; adrese teslim hizmeti yoktur.",
  "Tek istisna Sabiha Gökçen Havalimanı (SAW): havalimanına araç getirilir. Ofis havalimanına yaklaşık 15 dakika mesafede.",
  "Depozito alınmaz. Yalnızca aracı ileri bir tarih için önceden ayırtmak isteyenlerden kapora alınır; iptalde kapora iade edilmez.",
  "Yaş sınırı yoktur; sürücü belgesinin en az 2 yıllık olması yeterlidir.",
  "Ödeme nakit veya havale/EFT ile yapılır; kredi kartı geçmez.",
  "Günlük 200 km kilometre sınırı uygulanır; aşımda ek ücret alınır.",
  "Minimum kiralama süresi 1 gündür; günlük, haftalık, aylık ve uzun dönem (6 ay, 12 ay, yıllık) kiralama yapılır. Haftalık, aylık ve uzun dönem fiyatları süreye göre belirlenir ve iletişimle verilir.",
  "Tüm araçlar sigortalı ve kaskoludur.",
  "Araçların bakımı firmaya aittir; müşteriden bakım ücreti alınmaz.",
  "Rezervasyon ve fiyat bilgisi WhatsApp veya telefonla alınır.",
] as const;
