export type NavItem = {
  href: string;
  label: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    id: "concept",
    label: "التصور",
    items: [
      { href: "/", label: "الرئيسية" },
      { href: "/overview", label: "التصور التنفيذي" },
      { href: "/workflow", label: "رحلة العملية" },
      { href: "/bottlenecks", label: "الاختناقات المحتملة" },
      { href: "/future", label: "من الوضع المكتشف إلى المستهدف" },
    ],
  },
  {
    id: "opportunities",
    label: "الفرص",
    items: [
      { href: "/automation", label: "فرص الأتمتة" },
      { href: "/ai", label: "فرص الذكاء الاصطناعي" },
    ],
  },
  {
    id: "operations",
    label: "العمليات",
    items: [
      { href: "/quotation", label: "المبيعات وعروض الأسعار" },
      { href: "/production", label: "الإنتاج الذكي" },
      { href: "/machines", label: "ذكاء الآلات" },
      { href: "/capacity", label: "الطاقة الإنتاجية" },
      { href: "/knowledge", label: "المعرفة الصناعية" },
      { href: "/materials", label: "المواد والموردون" },
      { href: "/quality", label: "الجودة" },
      { href: "/logistics", label: "اللوجستيات" },
      { href: "/crm", label: "إدارة العملاء" },
      { href: "/channels", label: "واتساب والبريد" },
    ],
  },
  {
    id: "management",
    label: "الإدارة",
    items: [
      { href: "/dashboard", label: "لوحة القيادة" },
      { href: "/management", label: "لوحة الإدارة" },
      { href: "/operations", label: "تتبع العمليات" },
      { href: "/roi", label: "العائد على الاستثمار" },
      { href: "/architecture", label: "البنية المقترحة" },
      { href: "/pilot", label: "خطة التنفيذ" },
      { href: "/pricing", label: "نماذج الارتباط" },
      { href: "/security", label: "الأمن والصلاحيات" },
    ],
  },
  {
    id: "discovery",
    label: "الاكتشاف",
    items: [
      { href: "/assessment", label: "التقييم" },
      { href: "/assessment/results", label: "نتائج التقييم" },
      { href: "/readiness", label: "جاهزية البيانات" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
];

export const mobilePrimaryNav: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/dashboard", label: "القيادة" },
  { href: "/assessment", label: "التقييم" },
  { href: "/contact", label: "تواصل" },
];

export function findNavLabel(pathname: string): string {
  if (pathname === "/") return "الرئيسية";
  for (const group of navGroups) {
    const match = group.items.find((item) => item.href === pathname);
    if (match) return match.label;
  }
  return "المنصة";
}
