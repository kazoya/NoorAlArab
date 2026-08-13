"use client";

import { useMemo, useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { machines } from "@/data/machines";

export function CapacityEngine() {
  const [machineId, setMachineId] = useState(machines[0].id);
  const [quantity, setQuantity] = useState(2000);
  const [rate, setRate] = useState(180);
  const [setup, setSetup] = useState(45);
  const [shiftHours, setShiftHours] = useState(8);
  const [plannedDown, setPlannedDown] = useState(0.5);

  const result = useMemo(() => {
    const available = Math.max(shiftHours - plannedDown, 0.25);
    const hours = quantity / Math.max(rate, 1) + setup / 60;
    const load = hours / available;
    const conflict = load > 1;
    const alternative = machines.find((item) => item.id !== machineId && item.status !== "maintenance");
    return { hours, load, conflict, alternative };
  }, [quantity, rate, setup, shiftHours, plannedDown, machineId]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="محرك الطاقة الإنتاجية"
        description="أداة مفاهيمية لتقدير زمن التصنيع وتحميل الخط. التوصية الحقيقية تحتاج قدرات آلات ومعدلات إنتاج محققة."
      />
      <HonestyNote>
        التوصيات الفعلية تتطلب بيانات قدرة الآلة ومعدل الإنتاج بعد التحقق الميداني.
      </HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">مدخلات تقديرية</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label>الآلة</Label>
            <Select value={machineId} onValueChange={setMachineId}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {machines.map((machine) => (
                  <SelectItem key={machine.id} value={machine.id}>
                    {machine.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Field label="الكمية (كغ)" value={quantity} onChange={setQuantity} />
          <Field label="معدل متوقع (كغ/ساعة)" value={rate} onChange={setRate} />
          <Field label="تجهيز (دقيقة)" value={setup} onChange={setSetup} />
          <Field label="ساعات الوردية" value={shiftHours} onChange={setShiftHours} />
          <Field label="توقف مخطط (ساعة)" value={plannedDown} onChange={setPlannedDown} step={0.1} />
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardContent className="space-y-2 pt-6 text-sm leading-7">
          <p>الزمن التقديري: {result.hours.toFixed(1)} ساعة</p>
          <p>تحميل الخط: {(result.load * 100).toFixed(0)}٪</p>
          <p>الإنجاز التقديري: خلال {Math.ceil(result.hours / Math.max(shiftHours - plannedDown, 0.25))} وردية</p>
          <p>
            {result.conflict
              ? `تعارض محتمل على هذا الخط. بديل للنقاش: ${result.alternative?.code ?? "غير متاح في السيناريو"}`
              : "لا يظهر تعارض في هذا التقدير التوضيحي."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        type="number"
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}
