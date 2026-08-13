import type { ExtractedSpec, Inquiry } from "@/types";

export const inquiries: Inquiry[] = [
  {
    id: "INQ-2401",
    customerId: "C-1001",
    channel: "whatsapp",
    receivedAt: "2026-08-11T09:14:00+03:00",
    subject: "طلب أكياس HDPE مع طباعة",
    rawMessage:
      "السلام عليكم، نحتاج عرض سعر لأكياس HDPE عرض 40 سم طول 60 سم كمية حوالي 2 طن، مع طباعة شعارنا، التسليم عمّان خلال أسبوعين إن أمكن.",
    status: "quoted",
  },
  {
    id: "INQ-2402",
    customerId: "C-1002",
    channel: "email",
    receivedAt: "2026-08-10T16:40:00+03:00",
    subject: "فيلم LDPE رول",
    rawMessage:
      "Please quote LDPE film rolls, width 120cm, 25 micron, 8 tons, natural color, delivery Irbid.",
    status: "converted",
  },
  {
    id: "INQ-2403",
    customerId: "C-1003",
    channel: "phone",
    receivedAt: "2026-08-12T11:05:00+03:00",
    subject: "لفائف OPP",
    rawMessage: "استفسار هاتفي عن لفائف OPP للتغليف — المواصفات غير مكتملة.",
    status: "open",
  },
];

export const demoIncomingRequest = {
  id: "INQ-DEMO-01",
  channel: "whatsapp" as const,
  receivedAt: "2026-08-13T10:22:00+03:00",
  customerName: "عميل تجريبي — شركة الأفق للتغليف",
  customerId: "C-1001",
  rawMessage:
    "السلام عليكم، نحتاج عرض سعر لأكياس HDPE عرض 40 سم طول 60 سم كمية حوالي 2 طن، مع طباعة شعارنا، التسليم عمّان خلال أسبوعين إن أمكن.",
};

export const extractedSpecs: ExtractedSpec[] = [
  { field: "customer", label: "العميل", value: "شركة الأفق للتغليف (تجريبي)", confidence: 0.94, requiredForPricing: true },
  { field: "product", label: "المنتج", value: "أكياس", confidence: 0.91, requiredForPricing: true },
  { field: "material", label: "الخامة", value: "HDPE", confidence: 0.96, requiredForPricing: true },
  { field: "width", label: "العرض", value: "40 سم", confidence: 0.93, requiredForPricing: true },
  { field: "length", label: "الطول", value: "60 سم", confidence: 0.93, requiredForPricing: true },
  { field: "thickness", label: "السماكة / الميكرون", value: null, confidence: 0.18, requiredForPricing: true },
  { field: "quantity", label: "الكمية", value: "حوالي 2 طن", confidence: 0.82, requiredForPricing: true },
  { field: "printing", label: "الطباعة", value: "نعم — شعار", confidence: 0.8, requiredForPricing: true },
  { field: "colors", label: "عدد الألوان", value: null, confidence: 0.12, requiredForPricing: true },
  { field: "packaging", label: "التعبئة", value: null, confidence: 0.1, requiredForPricing: true },
  { field: "destination", label: "الوجهة", value: "عمّان", confidence: 0.9, requiredForPricing: false },
  { field: "delivery", label: "موعد التسليم", value: "خلال أسبوعين", confidence: 0.77, requiredForPricing: false },
];
