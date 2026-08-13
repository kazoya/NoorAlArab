"use client";

import { useState } from "react";
import { MachineStatusBadge } from "@/components/shared/status-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { machines, productionJobs } from "@/data/machines";
import { formatNumber } from "@/lib/format";
import type { Machine } from "@/types";

export function MachineBoard() {
  const [selected, setSelected] = useState<Machine | null>(null);
  const job = selected ? productionJobs.find((item) => item.id === selected.currentJobId) : null;

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="ذكاء الآلات"
        description="بطاقات معدات تجريبية بأسماء محايدة. لا تمثل أسماء أو قدرات خطوط نور العرب."
        demoLabel="Demo equipment"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {machines.map((machine) => (
          <button key={machine.id} type="button" onClick={() => setSelected(machine)} className="text-right">
            <Card className="h-full shadow-sm transition hover:border-primary/40">
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-base">{machine.code}</CardTitle>
                  <p className="mt-1 text-xs text-muted-foreground">{machine.type}</p>
                </div>
                <MachineStatusBadge status={machine.status} />
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2 text-sm">
                <Stat label="هدف" value={`${formatNumber(machine.targetOutputKg)} كغ`} />
                <Stat label="فعلي" value={`${formatNumber(machine.actualOutputKg)} كغ`} />
                <Stat label="استغلال" value={`${machine.utilizationPct}%`} />
                <Stat label="هدر" value={`${machine.wasteKg} كغ`} />
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle>{selected.code}</DialogTitle>
              </DialogHeader>
              <div className="space-y-2 text-sm leading-7">
                <p>العمل الحالي: {job ? job.productName : "لا يوجد أمر مرتبط"}</p>
                <p>التوقف التراكمي التجريبي: {selected.downtimeHours} ساعة</p>
                <p>الصيانة التالية في السيناريو: {selected.nextMaintenance}</p>
                <p className="text-muted-foreground">هذه معدات تجريبية للعرض فقط.</p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="tabular font-medium">{value}</p>
    </div>
  );
}
