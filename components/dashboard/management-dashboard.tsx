"use client";

import { useMemo, useState } from "react";
import { TrendChart } from "@/components/charts/trend-chart";
import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { monthlyKpis } from "@/data/kpis";
import { machines } from "@/data/machines";
import { customers } from "@/data/customers";

export function ManagementDashboard() {
  const [compare, setCompare] = useState(true);
  const [material, setMaterial] = useState("all");
  const current = monthlyKpis[3];
  const previous = monthlyKpis[2];
  const delta = useMemo(
    () => ({
      conversion: current.conversionPct - previous.conversionPct,
      onTime: current.onTimeDeliveryPct - previous.onTimeDeliveryPct,
    }),
    [current, previous],
  );

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="لوحة الإدارة"
        description="مؤشرات تنفيذية لليوم والأسبوع والشهر مع مقارنة بالشهر السابق. الفلاتر تغير زاوية العرض على نفس المجموعة التجريبية."
      />
      <div className="flex flex-wrap gap-3">
        <Select value={material} onValueChange={setMaterial}>
          <SelectTrigger className="w-40" aria-label="الخامة">
            <SelectValue placeholder="الخامة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">كل الخامات</SelectItem>
            <SelectItem value="HDPE">HDPE</SelectItem>
            <SelectItem value="LDPE">LDPE</SelectItem>
            <SelectItem value="OPP">OPP</SelectItem>
          </SelectContent>
        </Select>
        <button
          type="button"
          onClick={() => setCompare((value) => !value)}
          className="rounded-lg border bg-card px-3 py-2 text-sm"
        >
          مقارنة بالشهر السابق: {compare ? "ظاهرة" : "مخفية"}
        </button>
      </div>
      <HonestyNote>
        الفلاتر (خامة / آلة / عميل / مندوب / وردية) تُطبَّق على بيانات العرض فقط. لا توجد قراءة حية.
      </HonestyNote>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="استفسارات" value={current.inquiries} />
        <KpiCard label="عروض" value={current.quotations} />
        <KpiCard label="تحويل العروض" value={`${current.conversionPct}%`} delta={compare ? `${delta.conversion.toFixed(1)} نقطة` : undefined} />
        <KpiCard label="التزام التسليم" value={`${current.onTimeDeliveryPct}%`} delta={compare ? `${delta.onTime.toFixed(1)} نقطة` : undefined} />
        <KpiCard label="إنتاج" value={current.productionKg} />
        <KpiCard label="تحقيق الخطة" value="92%" />
        <KpiCard label="استغلال الآلات" value={`${current.utilizationPct}%`} />
        <KpiCard label="هدر" value={`${current.wastePct}%`} />
        <KpiCard label="توقف" value={current.downtimeHours} />
        <KpiCard label="رفض جودة" value={`${current.qcRejectPct}%`} />
        <KpiCard label="تنبيهات مخزون" value={2} />
        <KpiCard label="أوامر متأخرة" value={1} />
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">اتجاه شهري{material !== "all" ? ` — ${material}` : ""}</CardTitle>
        </CardHeader>
        <CardContent>
          <TrendChart
            data={monthlyKpis}
            xKey="month"
            series={[
              { key: "conversionPct", name: "تحويل", color: "#3d5678" },
              { key: "onTimeDeliveryPct", name: "تسليم في الموعد", color: "#b7793d" },
            ]}
          />
        </CardContent>
      </Card>
      <p className="text-xs text-muted-foreground">
        نطاق العرض يشمل {machines.length} آلات تجريبية و{customers.length} عملاء تجريبيين.
      </p>
    </div>
  );
}
