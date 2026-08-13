"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  getDeveloperWhatsAppPhoneDisplay,
  getDeveloperWhatsAppUrl,
  siteConfig,
} from "@/lib/config";
import { cn } from "@/lib/utils";

type DeveloperQrProps = {
  compact?: boolean;
};

export function DeveloperQr({ compact = false }: DeveloperQrProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const url = getDeveloperWhatsAppUrl();
  const phone = getDeveloperWhatsAppPhoneDisplay();
  if (!url) return null;

  const size = compact ? 56 : 76;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex cursor-pointer items-center gap-3 rounded-xl border border-gold/50 bg-[#111111] px-2.5 py-2 text-white shadow-[0_0_24px_rgb(201_162_39_/_0.18)] outline-none transition-shadow hover:shadow-[0_0_28px_rgb(201_162_39_/_0.32)] focus-visible:ring-2 focus-visible:ring-gold/60",
      )}
      aria-label="للتواصل مع المبرمج امسح الرمز"
      title="للتواصل مع المبرمج امسح الرمز"
    >
      <span className="qr-pulse-ring relative flex shrink-0 items-center justify-center">
        <span className="qr-glow-halo" aria-hidden />
        <span className="qr-orbit" aria-hidden />
        <span className="relative z-10 rounded-md bg-white p-1 ring-1 ring-gold/50">
          {mounted ? (
            <QRCodeSVG value={url} size={size} level="M" />
          ) : (
            <span className="block bg-white" style={{ width: size, height: size }} />
          )}
        </span>
      </span>
      <span className={cn("min-w-0 text-right leading-snug", compact && "sr-only")}>
        <span className="block text-[11px] font-semibold tracking-wide text-gold">
          للتواصل مع المبرمج
        </span>
        <span className="mt-0.5 block text-[12px] text-white/90">امسح الرمز</span>
        <span className="mt-0.5 hidden font-mono text-[10px] text-white/65 sm:block" dir="ltr">
          {phone}
        </span>
        <span className="sr-only">
          {siteConfig.developer.nameAr} — واتساب
        </span>
      </span>
    </a>
  );
}
