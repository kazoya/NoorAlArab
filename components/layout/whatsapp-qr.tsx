"use client";

import { QRCodeSVG } from "qrcode.react";
import { getWhatsAppPrefill, getWhatsAppUrl } from "@/lib/config";

export function WhatsAppQr() {
  const url = getWhatsAppUrl();
  if (!url) {
    return (
      <div className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
        أضيف رقم واتساب عبر NEXT_PUBLIC_WHATSAPP_PHONE لعرض رمز التواصل.
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-background p-4">
      <p className="mb-3 text-sm font-medium">تواصل مباشر عبر واتساب</p>
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-white p-2">
          <QRCodeSVG value={url} size={112} level="M" />
        </div>
        <div className="space-y-2 text-xs leading-6 text-muted-foreground">
          <p>امسح الرمز أو اضغط الرابط لفتح محادثة برسالة جاهزة:</p>
          <p className="text-foreground">{getWhatsAppPrefill()}…</p>
          <a href={url} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
            فتح واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
