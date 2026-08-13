import type { Order, TimelineEvent } from "@/types";

export const orders: Order[] = [
  {
    id: "ORD-551",
    quotationId: "Q-882",
    customerId: "C-1002",
    productName: "فيلم LDPE 120سم",
    material: "LDPE",
    quantityKg: 8000,
    dueDate: "2026-08-20",
    status: "in_production",
    priority: "normal",
  },
  {
    id: "ORD-552",
    quotationId: "Q-881",
    customerId: "C-1001",
    productName: "أكياس HDPE 40×60",
    material: "HDPE",
    quantityKg: 2000,
    dueDate: "2026-08-18",
    status: "planning",
    priority: "urgent",
  },
  {
    id: "ORD-548",
    quotationId: "Q-880",
    customerId: "C-1003",
    productName: "لفائف OPP",
    material: "OPP",
    quantityKg: 3500,
    dueDate: "2026-08-14",
    status: "qc",
    priority: "normal",
  },
  {
    id: "ORD-540",
    quotationId: "Q-870",
    customerId: "C-1001",
    productName: "أكياس HDPE",
    material: "HDPE",
    quantityKg: 1500,
    dueDate: "2026-08-12",
    status: "shipped",
    priority: "normal",
  },
];

export const orderTimeline: TimelineEvent[] = [
  { id: "T1", orderId: "ORD-551", label: "استلام الاستفسار", at: "2026-08-10T16:40:00+03:00", department: "sales" },
  { id: "T2", orderId: "ORD-551", label: "اكتمال المواصفات", at: "2026-08-10T17:15:00+03:00", department: "sales" },
  { id: "T3", orderId: "ORD-551", label: "إعداد عرض السعر", at: "2026-08-10T18:10:00+03:00", department: "sales" },
  { id: "T4", orderId: "ORD-551", label: "اعتماد العرض", at: "2026-08-11T09:00:00+03:00", department: "management" },
  { id: "T5", orderId: "ORD-551", label: "قبول العميل", at: "2026-08-11T12:20:00+03:00", department: "sales" },
  { id: "T6", orderId: "ORD-551", label: "إنشاء أمر الإنتاج", at: "2026-08-11T13:05:00+03:00", department: "production" },
  { id: "T7", orderId: "ORD-551", label: "حجز المواد", at: "2026-08-11T13:40:00+03:00", department: "inventory" },
  { id: "T8", orderId: "ORD-551", label: "بدء التصنيع", at: "2026-08-12T07:00:00+03:00", department: "production" },
];
