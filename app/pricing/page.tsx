import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const models = [
  {
    title: "اكتشاف وتقييم",
    text: "رسم الدورة، جرد الأنظمة، أولويات، ونطاق مبدئي.",
  },
  {
    title: "تنفيذ تجريبي",
    text: "مسار واحد يعمل مع بيانات حقيقية وصلاحيات واضحة.",
  },
  {
    title: "تكامل كامل",
    text: "ربط القنوات والإنتاج والمعرفة ولوحات الإدارة على مراحل.",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="نماذج الارتباط"
        description="لا سعر ثابت هنا. التكلفة تُحدَّد بعد فهم النطاق والأنظمة المطلوب ربطها."
        demo={false}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {models.map((model) => (
          <Card key={model.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{model.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>{model.text}</p>
              <p>يتم تحديد التكلفة بعد جلسة الاكتشاف وتحديد نطاق العمل والأنظمة المطلوب ربطها.</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button asChild>
        <Link href="/contact">طلب نطاق عمل وتقدير تكلفة</Link>
      </Button>
    </div>
  );
}
