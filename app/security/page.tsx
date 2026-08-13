import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  ["صلاحيات حسب الدور", "كل مستخدم يرى ما يخص قسمه فقط."],
  ["عزل الأقسام", "المبيعات لا ترى بالضرورة تكلفة الخامة الكاملة إن مُنع ذلك."],
  ["سجل تدقيق", "من اعتمد سعراً أو غيّر خطة يبقى أثراً."],
  ["صلاحيات الوثائق", "المساعد لا يجيب من مستند غير مصرّح به."],
  ["عزل البيانات", "بيئة العرض منفصلة عن أي بيانات إنتاج لاحقاً."],
  ["تشفير ونسخ احتياطي", "نقل وتخزين محميان مع سياسة استعادة."],
  ["أمن الواجهات", "مفاتيح الربط على الخادم فقط، لا في المتصفح."],
  ["سياسات الاعتماد", "الذكاء يقترح والإنسان يعتمد."],
  ["ذكر المصدر", "كل إجابة حساسة تُرفق بمستند."],
  ["ضبط البيانات الحساسة", "أسعار وخصوم وهويات لا تخرج دون تفويض."],
];

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="الأمن والصلاحيات"
        description="المنصة الصناعية لا تُقاس بجمال اللوحة فقط. التحكم في من يرى ماذا جزء من التصميم."
        demo={false}
      />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map(([title, text]) => (
          <Card key={title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
