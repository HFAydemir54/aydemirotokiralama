"use client";

import { useState } from "react";

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    // IBAN boşluksuz kopyalanır; banka formları boşluksuz kabul eder.
    await navigator.clipboard.writeText(value.replace(/\s+/g, label === "IBAN" ? "" : " "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</div>
      <div className="mt-2 flex items-center gap-3">
        <span className="flex-1 break-all font-mono text-base font-semibold text-primary sm:text-lg">
          {value}
        </span>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-light"
        >
          {copied ? "Kopyalandı ✓" : "Kopyala"}
        </button>
      </div>
    </div>
  );
}
