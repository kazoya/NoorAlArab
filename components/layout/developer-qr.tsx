"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getDeveloperWhatsAppUrl, siteConfig } from "@/lib/config";
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
  if (!url) return null;
  const size = compact ? 80 : 112;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex cursor-pointer items-center gap-2 rounded-xl border border-gold/40 bg-[#111111] p-2 text-white outline-none hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold/60"
      aria-label="امسح للتواصل مع المبرمج عبر واتساب"
    >
      <span className="rounded-md bg-white p-2">
        {mounted ? (
          <QRCodeSVG value={url} size={size} level="M" marginSize={4} bgColor="#ffffff" fgColor="#111111" />
        ) : (
          <span className="block bg-white" style={{ width: size, height: size }} />
        )}
      </span>
      <span className={cn("text-sm font-medium", compact && "sr-only")}>امسح</span>
      <span className="sr-only">{siteConfig.developer.nameAr}</span>
    </a>
  );
}
