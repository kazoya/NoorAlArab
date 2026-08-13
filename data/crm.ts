import type { CrmStage } from "@/types";

export type PipelineCard = {
  id: string;
  customerId: string;
  title: string;
  stage: CrmStage;
  owner: string;
  updatedAt: string;
};

export const pipeline: PipelineCard[] = [
  {
    id: "P-01",
    customerId: "C-1003",
    title: "استفسار OPP ناقص المواصفات",
    stage: "specs_pending",
    owner: "مندوب أ",
    updatedAt: "2026-08-12",
  },
  {
    id: "P-02",
    customerId: "C-1001",
    title: "عرض HDPE بانتظار الاعتماد",
    stage: "pricing",
    owner: "مندوب أ",
    updatedAt: "2026-08-11",
  },
  {
    id: "P-03",
    customerId: "C-1002",
    title: "طلب LDPE قيد التصنيع",
    stage: "production",
    owner: "مندوب ب",
    updatedAt: "2026-08-13",
  },
  {
    id: "P-04",
    customerId: "C-1001",
    title: "شحنة تجريبية في الطريق",
    stage: "delivered",
    owner: "مندوب أ",
    updatedAt: "2026-08-13",
  },
  {
    id: "P-05",
    customerId: "C-1002",
    title: "متابعة بعد تسليم سابق",
    stage: "follow_up",
    owner: "مندوب ب",
    updatedAt: "2026-08-10",
  },
];

export const crmStages: { id: CrmStage; label: string }[] = [
  { id: "new_inquiry", label: "استفسار جديد" },
  { id: "qualification", label: "تأهيل" },
  { id: "specs_pending", label: "مواصفات ناقصة" },
  { id: "pricing", label: "تسعير" },
  { id: "quotation_sent", label: "عرض مُرسل" },
  { id: "negotiation", label: "تفاوض" },
  { id: "won", label: "ربح" },
  { id: "lost", label: "خسارة" },
  { id: "production", label: "إنتاج" },
  { id: "delivered", label: "تسليم" },
  { id: "follow_up", label: "متابعة" },
];

export const customerActivity = [
  { at: "2026-08-11T09:14", type: "واتساب", detail: "رسالة طلب مواصفات أولية" },
  { at: "2026-08-11T10:02", type: "بريد", detail: "تأكيد بيانات العميل التجريبية" },
  { at: "2026-08-11T11:30", type: "عرض سعر", detail: "مسودة Q-881" },
  { at: "2026-08-11T15:10", type: "اتصال", detail: "توضيح الطباعة — لم يُحسم عدد الألوان" },
  { at: "2026-08-12T09:00", type: "اعتماد", detail: "بانتظار موظف مختص" },
  { at: "2026-08-12T13:05", type: "إنتاج", detail: "سيناريو أمر مرتبط عند القبول" },
  { at: "2026-08-13T07:40", type: "شحن", detail: "SHP-301 غادرت في البيانات التجريبية" },
  { at: "2026-08-13T09:00", type: "فاتورة", detail: "مسودة بعد التسليم" },
  { at: "2026-08-20T10:00", type: "متابعة", detail: "مهمة مجدولة بعد التسليم" },
];
