"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { buildAssessmentReport, defaultAssessment, loadAssessment } from "@/lib/assessment";
import { getDiscoveryFormUrl } from "@/lib/config";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

export default function AssessmentResultsPage() {
  const values = useSyncExternalStore(subscribe, loadAssessment, () => defaultAssessment);
  const formUrl = getDiscoveryFormUrl();

  const report = buildAssessmentReport(values);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="نتائج التقييم الأولي"
        description="Preliminary Assessment — درجات استرشادية من إجاباتكم، وليست قياساً علمياً معتمداً."
        demoLabel="Preliminary Assessment"
      />
      <div className="grid gap-4">
        <Score label="الجاهزية الرقمية" value={report.scores.digital} />
        <Score label="جاهزية البيانات" value={report.scores.data} />
        <Score label="قابلية الأتمتة" value={report.scores.automation} />
        <Score label="جاهزية الذكاء الاصطناعي" value={report.scores.ai} />
        <Score label="تعقيد التكامل" value={report.scores.integration} />
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">مكاسب سريعة محتملة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7">
          {report.wins.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <p className="text-muted-foreground">{report.note}</p>
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <Link href="/contact">طلب جلسة Discovery</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/assessment">تعديل الإجابات</Link>
        </Button>
        {formUrl ? (
          <Button asChild variant="secondary">
            <a href={formUrl} target="_blank" rel="noreferrer">
              فتح النموذج الكامل
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <Card className="shadow-sm">
      <CardContent className="pt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span>{label}</span>
          <span className="tabular">{value}</span>
        </div>
        <Progress value={value} />
      </CardContent>
    </Card>
  );
}
