"use client";

import { useState } from "react";
import { TrendChart } from "@/components/charts/trend-chart";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { consumptionTrend, materialLots, materialPriceHistory, suppliers } from "@/data/materials";

export default function MaterialsPage() {
  const [focus, setFocus] = useState(suppliers[0].id);
  const supplier = suppliers.find((item) => item.id === focus) ?? suppliers[0];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="المواد والموردون"
        description="مخزون ودرجات ومقارنة موردين بأسماء محايدة. لا تُطلب أسماء موردين حقيقيين إلا إذا اخترتم مشاركتها."
        demoLabel="DEMO ONLY"
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">المخزون التجريبي</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الخامة</TableHead>
                  <TableHead>المتوفر</TableHead>
                  <TableHead>محجوز</TableHead>
                  <TableHead>نقطة الطلب</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materialLots.map((lot) => (
                  <TableRow key={lot.id}>
                    <TableCell>{lot.grade}</TableCell>
                    <TableCell className="tabular">{lot.onHandKg}</TableCell>
                    <TableCell className="tabular">{lot.reservedKg}</TableCell>
                    <TableCell className="tabular">{lot.reorderPointKg}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">اتجاه الاستهلاك</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendChart
              data={consumptionTrend}
              xKey="week"
              series={[
                { key: "hdpe", name: "HDPE", color: "#3d5678" },
                { key: "ldpe", name: "LDPE", color: "#b7793d" },
              ]}
            />
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">مقارنة موردين تجريبية</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {suppliers.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFocus(item.id)}
              className={`rounded-xl border p-4 text-right ${focus === item.id ? "border-primary bg-primary/5" : ""}`}
            >
              <p className="font-medium">{item.alias}</p>
              <p className="mt-2 text-sm text-muted-foreground">تركيز: {item.gradeFocus}</p>
              <p className="text-sm">مؤشر سعر {item.priceIndex} · توريد {item.leadTimeDays} يوم</p>
              <p className="text-sm">جودة {item.qualityScore} · التزام {item.reliabilityScore}</p>
            </button>
          ))}
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground">
        المختار: {supplier.alias} — سعر تاريخي تجريبي في الرسم أدناه، مع دفعات قابلة للتتبع في السيناريو.
      </p>
      <TrendChart
        data={materialPriceHistory}
        xKey="month"
        series={[
          { key: "hdpe", name: "HDPE", color: "#3d5678" },
          { key: "ldpe", name: "LDPE", color: "#b7793d" },
          { key: "opp", name: "OPP", color: "#5b7c6a" },
        ]}
      />
    </div>
  );
}
