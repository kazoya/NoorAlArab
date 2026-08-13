"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  getWhatsAppPhoneDisplay,
  getWhatsAppPrefill,
  getWhatsAppUrl,
} from "@/lib/config";

export function WhatsAppQr() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const url = getWhatsAppUrl();
  const phone = getWhatsAppPhoneDisplay();
  if (!url) {
    return (
      <div className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
        أضيف رقم واتساب عبر NEXT_PUBLIC_WHATSAPP_PHONE لعرض رمز التواصل.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gold/40 bg-background p-4 shadow-[0_0_20px_rgb(201_162_39_/_0.08)]">
      <p className="mb-1 text-sm font-medium">تواصل مباشر عبر واتساب</p>
      {phone ? (
        <p className="mb-3 font-mono text-sm tracking-wide text-copper" dir="ltr">
          {phone}
        </p>
      ) : null}
      <div className="flex items-start gap-4">
        <div className="rounded-lg border border-gold/40 bg-white p-2">
          {mounted ? (
            <QRCodeSVG value={url} size={112} level="M" />
          ) : (
            <span className="block bg-white" style={{ width: 112, height: 112 }} />
          )}
        </div>
        <div className="space-y-2 text-xs leading-6 text-muted-foreground">
          <p>امسح الرمز أو اضغط الرابط لفتح محادثة برسالة جاهزة:</p>
          <p className="text-foreground">{getWhatsAppPrefill()}…</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            فتح واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
