"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { demoIncomingRequest, extractedSpecs } from "@/data/inquiries";
import { computeUnitPrice, defaultPricingRates } from "@/data/quotations";
import type { PricingBreakdown } from "@/types";

const flow = [
  "واتساب / بريد",
  "ذكاء اصطناعي",
  "استخراج مواصفات",
  "تحقق",
  "محرك تسعير",
  "مسودة عرض",
  "اعتماد موظف",
  "سجل العملاء",
  "متابعة",
];

export function QuotationCopilot() {
  const [rates, setRates] = useState<PricingBreakdown>(defaultPricingRates);
  const [decision, setDecision] = useState<"pending" | "approved" | "rejected">("pending");
  const missing = extractedSpecs.filter((item) => item.requiredForPricing && !item.value);
  const unit = useMemo(() => computeUnitPrice(rates), [rates]);
  const qty = 2000;

  function updateRate(key: keyof PricingBreakdown, value: number) {
    setRates((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="مساعد المبيعات وعروض الأسعار"
        description="تدفق تفاعلي توضيحي: رسالة واردة، استخراج، نواقص، تسعير استرشادي، ثم اعتماد بشري. الأسعار ليست أسعار نور العرب."
        demoLabel="Illustrative pricing only"
      />

      <div className="flex flex-wrap gap-2">
        {flow.map((step) => (
          <Badge key={step} variant="outline" className="font-normal">
            {step}
          </Badge>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">رسالة واردة تجريبية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7">
            <p className="text-muted-foreground">
              {demoIncomingRequest.channel} · {demoIncomingRequest.customerName}
            </p>
            <p className="rounded-lg bg-muted/70 p-3">{demoIncomingRequest.rawMessage}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">استخراج المواصفات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {extractedSpecs.map((spec) => (
              <div key={spec.field} className="flex items-center justify-between gap-3 text-sm">
                <span>{spec.label}</span>
                <span className="tabular text-muted-foreground">
                  {spec.value ?? "غير متوفر"} · {Math.round(spec.confidence * 100)}٪
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-amber-200 bg-amber-50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base text-amber-950">معلومات ناقصة قبل التسعير</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-amber-950">
          <ul className="list-disc pr-5">
            {missing.map((item) => (
              <li key={item.field}>{item.label}</li>
            ))}
          </ul>
          <p className="mt-2">المسودة التالية تبقى تقديرية إلى أن تُستكمل هذه الحقول من المصنع أو العميل.</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">محرك التسعير — قابل للضبط</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {(
            [
              ["rawMaterial", "الخامة"],
              ["conversion", "تكلفة التحويل"],
              ["printing", "الطباعة"],
              ["packaging", "التعبئة"],
              ["wasteAllowance", "بدل الهدر"],
              ["logistics", "اللوجستيات"],
              ["margin", "الهامش"],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label>{label}</Label>
                <span className="tabular">{rates[key].toFixed(2)}</span>
              </div>
              <Slider
                min={0}
                max={2}
                step={0.01}
                value={[rates[key]]}
                onValueChange={([value]) => updateRate(key, value ?? 0)}
              />
            </div>
          ))}
          <div className="md:col-span-2 rounded-lg border bg-muted/40 p-4">
            <p className="text-sm text-muted-foreground">سعر الوحدة التوضيحي (دينار/كغ)</p>
            <p className="tabular text-3xl font-semibold">{unit.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">إجمالي تقديري لـ {qty} كغ: {(unit * qty).toFixed(0)} د.أ</p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">مسودة عرض Q-881</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-7">
            أكياس HDPE 40×60 — كمية تقديرية 2 طن. الطباعة مذكورة دون عدد ألوان. التعبئة والسماكة ناقصتان.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              disabled={decision !== "pending"}
              onClick={() => {
                setDecision("approved");
                toast.success("اعتُمد العرض تجريبياً. لم يُرسل للعميل.");
              }}
            >
              اعتماد المسودة
            </Button>
            <Button
              variant="outline"
              disabled={decision !== "pending"}
              onClick={() => {
                setDecision("rejected");
                toast.message("رُفضت المسودة. تبقى للمراجعة دون إرسال.");
              }}
            >
              رفض وإعادة التسعير
            </Button>
            <Input className="max-w-xs" placeholder="ملاحظة المراجع" aria-label="ملاحظة المراجع" />
          </div>
          <p className="text-sm text-muted-foreground">
            الحالة: {decision === "pending" ? "بانتظار موظف" : decision === "approved" ? "معتمد — غير مُرسل" : "مرفوض"}
          </p>
        </CardContent>
      </Card>
      <HumanInTheLoop note="المساعد يجهّز المسودة فقط. الإرسال التجاري يحتاج تفويضاً." />
    </div>
  );
}
