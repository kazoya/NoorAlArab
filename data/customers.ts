import type { Customer } from "@/types";

export const customers: Customer[] = [
  {
    id: "C-1001",
    name: "عميل تجريبي — شركة الأفق للتغليف",
    city: "عمّان",
    segment: "تغليف غذائي",
    ownerRep: "مندوب أ",
  },
  {
    id: "C-1002",
    name: "عميل تجريبي — مؤسسة الواحة التجارية",
    city: "إربد",
    segment: "أكياس صناعية",
    ownerRep: "مندوب ب",
  },
  {
    id: "C-1003",
    name: "عميل تجريبي — توزيع البحر",
    city: "العقبة",
    segment: "أفلام وتعبئة",
    ownerRep: "مندوب أ",
  },
];
