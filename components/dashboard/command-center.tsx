"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BarCompare } from "@/components/charts/bar-compare";
import { TrendChart } from "@/components/charts/trend-chart";
import { DemoBadge, HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { MachineStatusBadge, ShipmentStatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categoryProduction, insights, monthlyKpis, productionTrend } from "@/data/kpis";
import { machines } from "@/data/machines";
import { pipeline } from "@/data/crm";
import { shipments } from "@/data/shipments";
import { crmStages } from "@/data/crm";
import { formatNumber } from "@/lib/format";
import type { Insight } from "@/types";

const ranges = [
  { id: "today", label: "اليوم" },
  { id: "week", label: "هذا الأسبوع" },
  { id: "month", label: "هذا الشهر" },
  { id: "prev", label: "الشهر السابق" },
] as const;

export function CommandCenter() {
  const [range, setRange] = useState<(typeof ranges)[number]["id"]>("month");
  const [insight, setInsight] = useState<Insight | null>(null);
  const current = monthlyKpis[3];
  const previous = monthlyKpis[2];

  const kpis = useMemo(() => {
    const factor = range === "today" ? 0.05 : range === "week" ? 0.24 : range === "prev" ? 0.92 : 1;
    return {
      inquiries: Math.round(current.inquiries * factor),
      quotations: Math.round(current.quotations * factor),
      production: Math.round(current.productionKg * factor),
      utilization: current.utilizationPct,
      waste: current.wastePct,
      downtime: Math.round(current.downtimeHours * factor),
    };
  }, [range, current]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold">مركز القيادة</h1>
            <DemoBadge label="Demo Environment" />
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            لوحة عمليات موحّدة للعرض. الأرقام مجموعة بيانات توضيحية وليست قراءة حية من المصنع.
          </p>
        </div>
        <Select value={range} onValueChange={(value) => setRange(value as typeof range)}>
          <SelectTrigger className="w-44" aria-label="الفترة">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ranges.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <HonestyNote>
        مقارنة بالشهر السابق في هذا العرض: الإنتاج {formatNumber(((current.productionKg - previous.productionKg) / previous.productionKg) * 100, 1)}٪،
        الهدر {formatNumber(current.wastePct - previous.wastePct, 1)} نقطة، التوقف {formatNumber(((current.downtimeHours - previous.downtimeHours) / previous.downtimeHours) * 100, 1)}٪.
        Illustrative Demo Dataset.
      </HonestyNote>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <KpiCard label="استفسارات" value={kpis.inquiries} hint="سيناريو تجريبي" />
        <KpiCard label="عروض أسعار" value={kpis.quotations} />
        <KpiCard label="إنتاج تقديري (كغ)" value={kpis.production} delta="+8.4% vs previous month" positive />
        <KpiCard label="استغلال الآلات" value={`${kpis.utilization}%`} />
        <KpiCard label="هدر" value={`${kpis.waste}%`} delta="-2.1%" positive />
        <KpiCard label="ساعات توقف" value={kpis.downtime} delta="-12%" positive />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">الإنتاج مقابل الخطة</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendChart
              data={productionTrend}
              xKey="day"
              series={[
                { key: "planned", name: "مخطط", color: "#8a8f99" },
                { key: "actual", name: "فعلي", color: "#3d5678" },
              ]}
            />
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">الإنتاج حسب فئة الخامة</CardTitle>
          </CardHeader>
          <CardContent>
            <BarCompare data={categoryProduction} xKey="category" yKey="kg" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base">حالة الآلات</CardTitle>
            <Button asChild variant="link" size="sm">
              <Link href="/machines">التفاصيل</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {machines.map((machine) => (
              <div key={machine.id} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2">
                <div>
                  <p className="text-sm font-medium">{machine.code}</p>
                  <p className="text-xs text-muted-foreground">{machine.type}</p>
                </div>
                <MachineStatusBadge status={machine.status} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">خط أنابيب الطلبات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pipeline.map((item) => (
              <div key={item.id} className="rounded-lg border px-3 py-2">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  {crmStages.find((stage) => stage.id === item.stage)?.label} · {item.owner}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">لمحات الذكاء</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {insights.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setInsight(item)}
                className="w-full rounded-lg border px-3 py-2 text-right transition hover:bg-muted/60"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">ثقة {Math.round(item.confidence * 100)}٪ · يحتاج اعتماداً بشرياً</p>
              </button>
            ))}
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">الشحنات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {shipments.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2">
                <div>
                  <p className="text-sm font-medium">{item.id}</p>
                  <p className="text-xs text-muted-foreground">{item.destination}</p>
                </div>
                <ShipmentStatusBadge status={item.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Dialog open={Boolean(insight)} onOpenChange={() => setInsight(null)}>
        <DialogContent>
          {insight ? (
            <>
              <DialogHeader>
                <DialogTitle>{insight.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-sm leading-7">
                <p>{insight.reason}</p>
                <p className="text-muted-foreground">البيانات المستخدمة: {insight.dataUsed.join("، ")}</p>
                <p>الثقة: {Math.round(insight.confidence * 100)}٪</p>
                <p>الإجراء المقترح: {insight.recommendedAction}</p>
                <p className="text-xs text-copper">لا يُنفَّذ تلقائياً — مراجعة موظف مطلوبة.</p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
