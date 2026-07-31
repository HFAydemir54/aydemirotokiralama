/**
 * Tek kaynak: NAP (Name, Address, Phone) bilgileri.
 * Bu değerler Google Business Profile'daki bilgilerle BİREBİR aynı olmalıdır.
 * Değişiklik gerekirse sadece burayı güncelleyin — site geneli ve schema.org
 * çıktısı buradan beslenir.
 */
export const SITE = {
  name: "Aydemir Oto Kiralama",
  legalName: "Aydemir Oto Kiralama",
  url: "https://www.aydemirotokiralama.com",
  phoneDisplay: "0533 070 36 54",
  phoneE164: "+905330703654",
  whatsapp: "905330703654",
  email: "",
  address: {
    street: "Çamçeşme Mah. Katip Çelebi Cd. No:6/A",
    district: "Pendik",
    city: "İstanbul",
    postalCode: "34899",
    country: "TR",
  },
  geo: { lat: 40.8764, lng: 29.2552 },
  instagram: "https://www.instagram.com/aydemirotokiralama/",
  // TODO: Google Business Profile'ın kısa linkini buraya ekleyin (Maps > Paylaş).
  googleMaps:
    "https://maps.google.com/?q=Çamçeşme,+Katip+Çelebi+Cd+No:6/A,+34899+Pendik/İstanbul",
  // TODO: GBP'den "Yorum yaz" kısa linkini alıp buraya ekleyin.
  googleReviewUrl: "",
} as const;

/**
 * Fiyatların sitede gösterilip gösterilmeyeceği.
 *
 * ŞU AN `false`: data/vehicles.ts'teki fiyatlar örnek (mock) veri olduğu için
 * hiçbir tutar yayınlanmıyor; fiyat alanlarının yerinde "WhatsApp'tan fiyat
 * alın" çağrısı gösteriliyor. Bu, fiyat tablolarının ve schema.org Offer
 * verisinin uydurma rakamla yayına çıkmasını engeller.
 *
 * GERÇEK FİYATLAR GİRİLDİKTEN SONRA: data/vehicles.ts'teki tutarları
 * güncelleyin ve bu değeri `true` yapın — fiyat tabloları, kartlardaki
 * tutarlar, meta açıklamalardaki "₺X'den başlayan" ifadeleri ve Car/Offer
 * schema'sı otomatik olarak geri gelir.
 */
export const SHOW_PRICES: boolean = false;

export const ADDRESS_ONE_LINE =`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.district}/${SITE.address.city}`;

/** Ön-doldurulmuş WhatsApp linki üretir. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Merhaba, araç kiralama hakkında bilgi almak istiyorum."
);

/** Fiyatları ₺1.400 biçiminde yazar. */
export function formatPrice(value: number): string {
  return `₺${value.toLocaleString("tr-TR")}`;
}
