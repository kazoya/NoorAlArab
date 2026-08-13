import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { readinessMatrix } from "@/data/readiness";

const levels = [
  { id: "1", title: "المستوى 1 — رقمنة", text: "نقل العمل من الورق والذاكرة إلى سجلات قابلة للبحث." },
  { id: "2", title: "المستوى 2 — ربط", text: "جمع القنوات والأنظمة في تدفق واحد." },
  { id: "3", title: "المستوى 3 — أتمتة", text: "قواعد وتنبيهات ومسارات اعتماد دون إعادة إدخال." },
  { id: "4", title: "المستوى 4 — ذكاء", text: "استخراج وتنبؤ ومساعدة بعد توفر بيانات كافية." },
];

export default function ReadinessPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="جاهزية البيانات والذكاء"
        description="المصفوفة تبدأ بـ «غير معروف» عمداً. موقع كل عملية على المستويات الأربعة يُحدَّد بعد الاكتشاف."
        demo={false}
      />
      <div className="grid gap-3 md:grid-cols-4">
        {levels.map((level) => (
          <Card key={level.id} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm">{level.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{level.text}</CardContent>
          </Card>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المصدر</TableHead>
              <TableHead>موجود؟</TableHead>
              <TableHead>رقمي؟</TableHead>
              <TableHead>منظّم؟</TableHead>
              <TableHead>عمق تاريخي</TableHead>
              <TableHead>قابل للوصول؟</TableHead>
              <TableHead>API؟</TableHead>
              <TableHead>الجودة</TableHead>
              <TableHead>جاهزية الذكاء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {readinessMatrix.map((row) => (
              <TableRow key={row.source}>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.exists}</TableCell>
                <TableCell>{row.digital}</TableCell>
                <TableCell>{row.structured}</TableCell>
                <TableCell>{row.historicalDepth}</TableCell>
                <TableCell>{row.accessible}</TableCell>
                <TableCell>{row.api}</TableCell>
                <TableCell>{row.quality}</TableCell>
                <TableCell>{row.aiReadiness}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
