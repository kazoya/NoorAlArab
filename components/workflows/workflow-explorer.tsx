"use client";

import { useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workflowNodes } from "@/data/workflow";
import type { WorkflowNode } from "@/types";

export function WorkflowExplorer() {
  const [active, setActive] = useState<WorkflowNode>(workflowNodes[0]);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="رحلة العملية المرجعية"
        description="مرجع للنقاش وليس وصفاً مؤكداً لعمل نور العرب اليوم. اضغط أي مرحلة لمعرفة البيانات والاختناق المحتمل وفرصة الأتمتة."
        demoLabel="Reference Workflow — To Be Validated During Discovery"
      />
      <HonestyNote>
        كل عقدة قابلة للنقر. التفاصيل استشارية إلى أن تُطابق مع دورة العمل الفعلية أثناء الاكتشاف.
      </HonestyNote>
      <div className="mt-6 flex flex-wrap gap-2">
        {workflowNodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setActive(node)}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              active.id === node.id ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
            }`}
          >
            {index + 1}. {node.title}
          </button>
        ))}
      </div>
      <Card className="mt-6 shadow-sm">
        <CardHeader>
          <CardTitle>{active.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Field label="العملية الحالية" value={active.currentProcess} />
          <Field label="البيانات المطلوبة" value={active.requiredData.join(" · ")} />
          <Field label="اختناق محتمل" value={active.possibleBottleneck} />
          <Field label="فرصة أتمتة" value={active.automationOpportunity} />
          <Field label="فرصة ذكاء اصطناعي" value={active.aiOpportunity} />
          <Field label="مؤشر" value={active.kpi} />
          <div className="md:col-span-2">
            <p className="text-xs text-muted-foreground">متطلبات التكامل</p>
            <Badge variant="outline" className="mt-1 font-normal">
              {active.integration}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm leading-7">{value}</p>
    </div>
  );
}
