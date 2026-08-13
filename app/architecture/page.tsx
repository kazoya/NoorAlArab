import { ArrowLeft } from "lucide-react";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const layers = [
  {
    title: "المصادر",
    items: ["واتساب", "بريد", "موقع", "فريق المبيعات", "ERP", "Excel", "بيانات آلات", "مستودع", "جودة", "مشتريات", "لوجستيات"],
  },
  { title: "طبقة الربط", items: ["تكامل", "تطبيع", "صلاحيات الدخول"] },
  { title: "البيانات", items: ["قاعدة تشغيلية", "أرشيف وثائق"] },
  { title: "المحركات", items: ["أتمتة", "خدمات ذكاء", "معرفة / استرجاع"] },
  { title: "المنطق", items: ["قواعد التسعير", "الاعتماد", "التنبيه"] },
  {
    title: "التطبيقات",
    items: ["مساعد مبيعات", "ذكاء إنتاج", "مساعد معرفة", "عملاء", "لوحة إدارة", "لوجستيات"],
  },
  { title: "الحماية", items: ["أدوار", "تدقيق", "تشفير", "نسخ احتياطي", "أمن الواجهات", "اعتماد بشري"] },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="البنية المقترحة"
        description="طبقات واضحة من المصدر حتى التطبيق، مع الأمن والاعتماد البشري كطبقة أخيرة لا تُتجاوز."
        demo={false}
      />
      <div className="space-y-3">
        {layers.map((layer, index) => (
          <div key={layer.title}>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{layer.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span key={item} className="rounded-full border bg-muted/50 px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
            {index < layers.length - 1 ? (
              <div className="flex justify-center py-1">
                <ArrowLeft className="size-4 rotate-[-90deg] text-muted-foreground" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <HumanInTheLoop />
    </div>
  );
}
