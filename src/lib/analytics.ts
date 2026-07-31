"use client";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** GTM dataLayer'a olay gönderir. GTM'de bu olaylar için tetikleyici tanımlayın. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
