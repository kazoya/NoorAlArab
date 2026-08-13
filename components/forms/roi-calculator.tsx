"use client";

import { useMemo, useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RoiInput = {
  quotesPerMonth: number;
  minutesPerQuote: number;
  hourlyCost: number;
  followUps: number;
  downtimeHours: number;
  downtimeCost: number;
  wastePct: number;
  monthlyProductionValue: number;
  adminHours: number;
  implementationCost: number;
  monthlySoftware: number;
};

const empty: RoiInput = {
  quotesPerMonth: 0,
  minutesPerQuote: 0,
  hourlyCost: 0,
  followUps: 0,
  downtimeHours: 0,
  downtimeCost: 0,
  wastePct: 0,
  monthlyProductionValue: 0,
  adminHours: 0,
  implementationCost: 0,
  monthlySoftware: 0,
};

export function RoiCalculator() {
  const [values, setValues] = useState<RoiInput>(empty);

  const result = useMemo(() => {
    const quoteHours = (values.quotesPerMonth * values.minutesPerQuote) / 60;
    const timeSaved = quoteHours * 0.45 + values.followUps * 0.25 + values.adminHours * 0.3;
    const laborSave = timeSaved * values.hourlyCost;
    const downSave = values.downtimeHours * values.downtimeCost * 0.15;
    const wasteSave = (values.wastePct / 100) * values.monthlyProductionValue * 0.08;
    const monthly = laborSave + downSave + wasteSave - values.monthlySoftware;
    const annual = monthly * 12;
    const payback = monthly > 0 ? values.implementationCost / monthly : null;
    const roi =
      values.implementationCost > 0
        ? ((annual - values.implementationCost) / values.implementationCost) * 100
        : null;
    return { timeSaved, monthly, annual, payback, roi };
  }, [values]);

  function set<K extends keyof RoiInput>(key: K, value: number) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="حاسبة العائد"
        description="أدخلوا أرقامكم. الحقول فارغة عمداً ولا نضع تقديرات باسم المصنع."
        demo={false}
      />
      <HonestyNote>
        هذه تقديرات استرشادية تعتمد بالكامل على البيانات التي يتم إدخالها وليست وعداً بتحقيق وفر مالي محدد.
      </HonestyNote>
      <div className="grid gap-4 sm:grid-cols-2">
        <Num label="طلبات العرض / شهر" value={values.quotesPerMonth} onChange={(v) => set("quotesPerMonth", v)} />
        <Num label="دقائق لكل عرض" value={values.minutesPerQuote} onChange={(v) => set("minutesPerQuote", v)} />
        <Num label="تكلفة الساعة (د.أ)" value={values.hourlyCost} onChange={(v) => set("hourlyCost", v)} />
        <Num label="متابعات يدوية / شهر" value={values.followUps} onChange={(v) => set("followUps", v)} />
        <Num label="ساعات توقف / شهر" value={values.downtimeHours} onChange={(v) => set("downtimeHours", v)} />
        <Num label="تكلفة ساعة التوقف" value={values.downtimeCost} onChange={(v) => set("downtimeCost", v)} />
        <Num label="نسبة الهدر %" value={values.wastePct} onChange={(v) => set("wastePct", v)} />
        <Num label="قيمة إنتاج شهرية" value={values.monthlyProductionValue} onChange={(v) => set("monthlyProductionValue", v)} />
        <Num label="ساعات إدارية / شهر" value={values.adminHours} onChange={(v) => set("adminHours", v)} />
        <Num label="تكلفة التنفيذ" value={values.implementationCost} onChange={(v) => set("implementationCost", v)} />
        <Num label="تكلفة البرمجيات الشهرية" value={values.monthlySoftware} onChange={(v) => set("monthlySoftware", v)} />
      </div>
      <Card className="shadow-sm">
        <CardContent className="grid gap-2 pt-6 text-sm leading-7">
          <p>وقت موفَّر تقديري / شهر: {result.timeSaved.toFixed(1)} ساعة</p>
          <p>وفر تشغيلي شهري تقديري: {result.monthly.toFixed(0)} د.أ</p>
          <p>وفر سنوي تقديري: {result.annual.toFixed(0)} د.أ</p>
          <p>فترة الاسترداد: {result.payback == null ? "أدخل تكلفة التنفيذ ووفراً موجباً" : `${result.payback.toFixed(1)} شهر`}</p>
          <p>العائد التقديري: {result.roi == null ? "—" : `${result.roi.toFixed(0)}٪`}</p>
        </CardContent>
      </Card>
    </div>
  );
}

function Num({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        type="number"
        min={0}
        value={Number.isFinite(value) ? value : 0}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
      />
    </div>
  );
}
