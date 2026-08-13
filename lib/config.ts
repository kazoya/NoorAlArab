function readPublic(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export const siteConfig = {
  nameAr: "نور العرب للصناعات البلاستيكية",
  nameEn: "Nour Al Arab for Plastic Industries",
  productName: "تصور الذكاء الصناعي",
  recipient: "م. محمد أبو خليفة",
  recipientRole: "إدارة الإنتاج",
  country: "الأردن",
} as const;

export function getDiscoveryFormUrl(): string {
  return readPublic("NEXT_PUBLIC_DISCOVERY_FORM_URL");
}

export function getContactEmail(): string {
  return readPublic("NEXT_PUBLIC_CONTACT_EMAIL");
}

export function getWhatsAppPhone(): string {
  return readPublic("NEXT_PUBLIC_WHATSAPP_PHONE").replace(/[^\d]/g, "");
}

export function getWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_WHATSAPP_PREFILL") ||
    "مرحباً مهندس محمد أبوخليفة لطفاً أود التحدث بخصوص "
  );
}

export function getWhatsAppUrl(extra = ""): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  const text = `${getWhatsAppPrefill()}${extra}`.trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getSiteUrl(): string {
  return readPublic("NEXT_PUBLIC_SITE_URL") || "http://localhost:3000";
}

export const hasOpenAiKey = Boolean(process.env.OPENAI_API_KEY);
