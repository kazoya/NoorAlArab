import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
  {
    title: "المرحلة 0 — الاكتشاف",
    items: ["رسم دورة العمل", "جرد الأنظمة", "توفر البيانات", "ترتيب الألم", "خط أساس للمؤشرات"],
  },
  {
    title: "المرحلة 1 — تجريب واحد",
    items: ["اختيار مسار عالي القيمة", "مرشح: مساعد العروض", "أو مساعد المعرفة", "أو لوحة الإدارة"],
  },
  {
    title: "المرحلة 2 — الربط",
    items: ["إدارة العملاء", "ERP إن وُجد", "بريد", "واتساب", "قواعد بيانات"],
  },
  {
    title: "المرحلة 3 — ذكاء الإنتاج",
    items: ["بيانات الآلات", "توقف", "هدر", "طاقة", "جودة"],
  },
  {
    title: "المرحلة 4 — ذكاء متقدم",
    items: ["توقع", "رصد أنماط", "توصيات", "تحسين"],
  },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="خطة التنفيذ"
        description="تدرّج واقعي. لا نبدأ بكل المصنع دفعة واحدة. التجريب يُختار بعد الاكتشاف لا قبله."
        demo={false}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {phases.map((phase) => (
          <Card key={phase.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{phase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pr-5 text-sm leading-7 text-muted-foreground">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
