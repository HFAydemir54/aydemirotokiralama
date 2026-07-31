"use client";

import { track } from "@/lib/analytics";
import { waLink } from "@/lib/site";

type Props = {
  /** WhatsApp'a ön-doldurulmuş mesaj */
  message: string;
  children: React.ReactNode;
  className?: string;
  /** GTM'de hangi butonun tıklandığını ayırt etmek için */
  label: string;
};

/**
 * Tüm WhatsApp CTA'ları bu bileşenden geçer; böylece her tıklama
 * `whatsapp_click` olayı olarak GTM'e `label` ile birlikte gider.
 */
export default function WhatsAppCta({
  message,
  children,
  className,
  label,
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { event_label: label })}
      className={className}
    >
      {children}
    </a>
  );
}
