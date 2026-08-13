import { ArrowLeft } from "lucide-react";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  "واتساب للأعمال / البريد",
  "استلام الرسالة",
  "تصنيف",
  "التعرف على العميل",
  "استخراج المواصفات",
  "سجل العملاء",
  "إنشاء مهمة",
  "مسار العرض",
  "اعتماد بشري",
  "الرد",
];

export default function ChannelsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="ذكاء واتساب والبريد"
        description="معمارية مفاهيمية لتوحيد القنوات. الرد الآلي ممكن لاحقاً عبر وكيل متخصص فُهرست له المعرفة، مع بقاء الاعتماد البشري للتسعير والعروض الحساسة."
        demo={false}
      />
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full border bg-card px-3 py-1.5 text-sm">{step}</span>
            {index < steps.length - 1 ? <ArrowLeft className="size-3.5 text-muted-foreground" /> : null}
          </div>
        ))}
      </div>
      <Card className="shadow-sm">
        <CardContent className="space-y-3 pt-6 text-sm leading-7 text-muted-foreground">
          <p>
            يمكن تدريب وكيل على الكتالوج والمواصفات وسياسات الأسعار المصرّح بها للرد على الاستفسارات
            المتكررة. ما يخرج عن النطاق يُحوَّل إلى موظف.
          </p>
          <p>
            لا يُرسل عرض سعر نهائي ولا يُعتمد خصم من الوكيل مباشرة. الإنسان يبقى في وسط القرار.
          </p>
        </CardContent>
      </Card>
      <HumanInTheLoop />
    </div>
  );
}
