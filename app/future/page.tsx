import { ArrowLeft } from "lucide-react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

const pairs = [
  ["قراءة الاستفسار يدوياً", "استخراج بمساعدة الذكاء"],
  ["مراجعة مواصفات يدوية", "تحقق اكتمال آلي"],
  ["صياغة عرض يدوية", "مساعد عروض الأسعار"],
  ["متابعة مشتتة", "مسار إدارة عملاء"],
  ["تقارير إنتاج لاحقة", "لوحة تشغيل حية"],
  ["بيانات آلة تاريخية غير مستخدمة", "ذكاء إنتاج"],
  ["مستندات موزعة", "مساعد معرفة مع المصدر"],
  ["تقارير بعد الحدث", "تنبيهات استباقية"],
];

export default function FuturePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="من الوضع الذي سنكتشفه إلى الوضع المستهدف"
        description="لا نفترض أن الوضع الحالي يدوي. العمود الأيمن هو الاتجاه بعد التحقق، لا حكم على المصنع اليوم."
        demo={false}
      />
      <HonestyNote>
        المقارنة للوضوح. الحالة الفعلية تُكتب بعد جلسة الاكتشاف.
      </HonestyNote>
      <div className="space-y-3">
        {pairs.map(([from, to]) => (
          <Card key={from} className="shadow-sm">
            <CardContent className="flex flex-col items-start gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm">{from}</span>
              <ArrowLeft className="hidden size-4 text-muted-foreground sm:block" />
              <span className="text-sm font-medium text-primary">{to}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
