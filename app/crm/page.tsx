"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { crmStages, customerActivity, pipeline } from "@/data/crm";
import { getCustomer } from "@/lib/data";

export default function CrmPage() {
  const [stage, setStage] = useState<(typeof crmStages)[number]["id"] | "all">("all");
  const items = stage === "all" ? pipeline : pipeline.filter((item) => item.stage === stage);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="إدارة العملاء والمتابعة"
        description="خط أنابيب من الاستفسار حتى المتابعة بعد التسليم. المراحل للعرض ويمكن إعادة ضبطها بعد الاكتشاف."
      />
      <div className="flex flex-wrap gap-2">
        <FilterChip active={stage === "all"} onClick={() => setStage("all")} label="الكل" />
        {crmStages.map((item) => (
          <FilterChip
            key={item.id}
            active={stage === item.id}
            onClick={() => setStage(item.id)}
            label={item.label}
          />
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {getCustomer(item.customerId)?.name} · {item.owner} · {item.updatedAt}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">خط زمني لعميل تجريبي</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {customerActivity.map((event) => (
            <div key={`${event.at}-${event.type}`} className="flex gap-3 text-sm">
              <span className="tabular w-36 shrink-0 text-muted-foreground">{event.at}</span>
              <span className="font-medium">{event.type}</span>
              <span className="text-muted-foreground">{event.detail}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm ${active ? "bg-primary text-primary-foreground" : "bg-card"}`}
    >
      {label}
    </button>
  );
}
