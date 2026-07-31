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
  /**
   * Google Business Profile Place ID — işletmenin Google'daki benzersiz
   * kimliği. Maps bağlantısı bundan üretilir, adres aramasından daha
   * güvenilirdir (yanlış konumu göstermez).
   */
  placeId: "ChIJkbgF8QLdyhQRh2Yln7VeizY",
  googleMaps:
    "https://www.google.com/maps/place/?q=place_id:ChIJkbgF8QLdyhQRh2Yln7VeizY",
  /** GBP "yorum yaz" kısa linki — tıklandığında doğrudan yıldız verme ekranı açılır. */
  googleReviewUrl: "https://g.page/r/CYdmJZ-1Xos2EBM/review",
} as const;

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
