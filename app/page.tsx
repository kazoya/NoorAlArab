import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { title: "استكشف التصور", text: "شاهد كيف يمكن ربط المبيعات والإنتاج والمعرفة والإدارة." },
  { title: "أجب عن التقييم", text: "كل إجابة تقرّب هذا النموذج من واقع المصنع." },
  { title: "جلسة اكتشاف", text: "بعدها نحدد النطاق والأولوية والتكلفة التقديرية." },
];

export default function HomePage() {
  return (
    <div className="industrial-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-4xl py-6 sm:py-12">
        <p className="text-xs font-medium tracking-[0.18em] text-copper uppercase">
          مقترح أولي مخصص
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          نحو مصنع أكثر ذكاءً وترابطاً
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          تصور أولي لمنظومة ذكاء صناعي تربط المبيعات، عروض الأسعار، الإنتاج، المعرفة
          التشغيلية، المشتريات، الجودة، اللوجستيات والإدارة ضمن تدفق بيانات موحّد.
        </p>
        <p className="mt-4 text-sm font-medium">
          مقترح أولي مخصص لشركة نور العرب للصناعات البلاستيكية
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          إلى عناية م. محمد أبو خليفة — إدارة الإنتاج
        </p>

        <HonestyNote>
          هذه المنصة تصور استكشافي وليست افتراضاً بأن العمليات الحالية في المصنع تعمل بهذه
          الصورة. يمكننا تقديم حلول وتقديرات أكثر دقة بعد فهم دورة العمل والأنظمة والبيانات
          الفعلية لديكم.
        </HonestyNote>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/overview">
              استكشف التصور
              <ArrowLeft />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/assessment">ساعدنا على فهم المصنع</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/assessment">ابدأ التقييم الأولي</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-4 pb-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title} className="shadow-sm">
            <CardContent className="pt-6">
              <p className="text-xs text-copper">0{index + 1}</p>
              <h2 className="mt-2 font-medium">{step.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
