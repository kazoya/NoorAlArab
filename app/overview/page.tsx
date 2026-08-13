import { ArrowLeft } from "lucide-react";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chain = [
  "عمليات المصنع الحالية",
  "بيانات مترابطة",
  "أتمتة",
  "ذكاء اصطناعي",
  "ذكاء تشغيلي",
  "قرارات الإدارة",
];

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="التصور التنفيذي"
        title="الهدف ليس إضافة ذكاء اصطناعي في كل مكان"
        description="الأتمتة لما يستحق الأتمتة. والبرمجيات الحتمية حيث تكون أوضح وأأمن. والذكاء الاصطناعي حيث يضيف استخراجاً أو استدلالاً أو لغة طبيعية أو رصد أنماط."
        demo={false}
      />

      <div className="mb-8 flex flex-wrap items-center gap-2">
        {chain.map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span className="rounded-full border bg-card px-3 py-1.5 text-sm shadow-sm">
              {item}
            </span>
            {index < chain.length - 1 ? (
              <ArrowLeft className="size-4 text-muted-foreground" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">ماذا يمكن أتمتته؟</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            نقل البيانات بين القنوات، قوالب العروض، التذكير، التنبيه، وتجميع التقارير. هذه
            أعمال تتكرر ويمكن للبرمجيات إنجازها بعد الاتفاق على القواعد.
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardTitle className="px-6 pt-6 text-base">أين يضيف الذكاء قيمة؟</CardTitle>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            قراءة رسالة غير منظمة، استخراج مواصفات ناقصة، الإجابة من مستندات المصنع،
            وتلخيص مؤشرات للإدارة. القرار النهائي يبقى بشرياً.
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">ماذا نحتاج منكم؟</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            فهم القنوات الحالية، طريقة التسعير، الآلات، الأنظمة المستخدمة، وما تريد الإدارة
            رؤيته يومياً وأسبوعياً. التقييم أدناه هو البداية.
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <HumanInTheLoop />
      </div>
    </div>
  );
}
