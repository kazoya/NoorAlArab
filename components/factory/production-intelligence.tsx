"use client";

import { useState } from "react";
import { BarCompare } from "@/components/charts/bar-compare";
import { TrendChart } from "@/components/charts/trend-chart";
import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { categoryProduction, monthlyKpis, productionTrend } from "@/data/kpis";
import { machines, productionJobs } from "@/data/machines";
import { orders } from "@/data/orders";
import { rejectionReasons } from "@/data/quality";
import { formatNumber } from "@/lib/format";

export function ProductionIntelligence() {
  const [month, setMonth] = useState("آب");
  const current = monthlyKpis.find((item) => item.month === month) ?? monthlyKpis[3];
  const previous = monthlyKpis[Math.max(0, monthlyKpis.findIndex((item) => item.month === month) - 1)];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="الإنتاج الذكي"
        description="لوحة تشغيل تجريبية: اليوم، الخطة مقابل الواقع، التوقف، الهدر، والجودة. لا تمثل قراءة المصنع."
        demoLabel="Illustrative Demo Dataset"
        actions={
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-36" aria-label="الشهر">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {monthlyKpis.map((item) => (
                <SelectItem key={item.month} value={item.month}>
                  {item.month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      />
      <HonestyNote>
        مقارنة توضيحية بالشهر السابق: إنتاج {formatNumber(((current.productionKg - previous.productionKg) / previous.productionKg) * 100, 1)}٪،
        هدر {formatNumber(current.wastePct - previous.wastePct, 1)}، توقف {formatNumber(((current.downtimeHours - previous.downtimeHours) / previous.downtimeHours) * 100, 1)}٪.
      </HonestyNote>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="إنتاج الشهر (كغ)" value={current.productionKg} />
        <KpiCard label="استغلال" value={`${current.utilizationPct}%`} />
        <KpiCard label="هدر" value={`${current.wastePct}%`} />
        <KpiCard label="توقف (ساعة)" value={current.downtimeHours} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">الإنتاج عبر الأيام</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendChart
              data={productionTrend}
              xKey="day"
              series={[
                { key: "planned", name: "خطة", color: "#8a8f99" },
                { key: "actual", name: "فعلي", color: "#3d5678" },
              ]}
            />
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">حسب فئة المنتج</CardTitle>
          </CardHeader>
          <CardContent>
            <BarCompare data={categoryProduction} xKey="category" yKey="kg" />
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">أسباب الرفض</CardTitle>
          </CardHeader>
          <CardContent>
            <BarCompare data={rejectionReasons} xKey="reason" yKey="count" color="#b7793d" />
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">أوامر الإنتاج</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الأمر</TableHead>
                  <TableHead>المنتج</TableHead>
                  <TableHead>الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.productName}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">الأعمال الجارية والصيانة</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          {productionJobs.length} أوامر تشغيل تجريبية على {machines.filter((item) => item.status === "running").length} خط يعمل.
          أقرب صيانة تجريبية: {machines.slice().sort((a, b) => a.nextMaintenance.localeCompare(b.nextMaintenance))[0]?.code}.
        </CardContent>
      </Card>
    </div>
  );
}
