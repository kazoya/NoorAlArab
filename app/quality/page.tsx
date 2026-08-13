import { BarCompare } from "@/components/charts/bar-compare";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { qualityRecords, rejectionReasons } from "@/data/quality";
import { formatDateTime } from "@/lib/format";

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="الجودة"
        description="الفحوصات، أسباب الرفض، وإمكانية الربط لاحقاً بالآلة والدفعة والمشغّل. السجلات أدناه تجريبية."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">أسباب الرفض التجريبية</CardTitle>
          </CardHeader>
          <CardContent>
            <BarCompare data={rejectionReasons} xKey="reason" yKey="count" color="#b7793d" />
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">سجلات فحص</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المرحلة</TableHead>
                  <TableHead>النتيجة</TableHead>
                  <TableHead>الوقت</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qualityRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.stage}</TableCell>
                    <TableCell>{record.result === "pass" ? "قبول" : record.reason}</TableCell>
                    <TableCell>{formatDateTime(record.recordedAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
