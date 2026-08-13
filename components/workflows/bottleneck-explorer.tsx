"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bottlenecks } from "@/data/workflow";
import { departmentLabel } from "@/lib/format";
import type { Department } from "@/types";

const filters: { id: "all" | Department; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "sales", label: "المبيعات" },
  { id: "production", label: "الإنتاج" },
  { id: "quality", label: "الجودة" },
  { id: "procurement", label: "المشتريات" },
  { id: "inventory", label: "المخزون" },
  { id: "logistics", label: "اللوجستيات" },
  { id: "management", label: "الإدارة" },
];

export function BottleneckExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const items = useMemo(
    () => (filter === "all" ? bottlenecks : bottlenecks.filter((item) => item.department === filter)),
    [filter],
  );

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="مستكشف الاختناقات المحتملة"
        description="لا ندّعي أن نور العرب تعاني من هذه النقاط. هي أسئلة تحقق تُغلق أو تُؤكَّد أثناء الاكتشاف."
        demoLabel="اختناقات محتملة للتحقق"
      />
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              filter === item.id ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <CardHeader>
              <p className="text-xs text-copper">{departmentLabel[item.department]}</p>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>{item.description}</p>
              <p>إشارة للتحقق: {item.signalToInvestigate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
