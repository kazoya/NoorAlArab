"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { ShipmentStatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { shipments } from "@/data/shipments";
import { getCustomer, getOrder } from "@/lib/data";
import { formatDateTime } from "@/lib/format";
import type { Shipment } from "@/types";

const timeline = ["تجهيز", "جاهزة", "خرجت", "في الطريق", "تسليم", "تأكيد"];

export function ShipmentBoard() {
  const [selected, setSelected] = useState<Shipment | null>(null);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="التحكم اللوجستي"
        description="لوحة شحنات تجريبية مع خط زمني مفاهيمي. التكامل اللاحق قد يشمل تتبعاً، تطبيق مندوب، إشعار واتساب، وإثبات تسليم."
      />
      <div className="grid gap-3">
        {shipments.map((item) => {
          const customer = getCustomer(item.customerId);
          return (
            <button key={item.id} type="button" onClick={() => setSelected(item)} className="text-right">
              <Card className="shadow-sm transition hover:border-primary/40">
                <CardContent className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium">
                      {item.id} · {item.orderId}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customer?.name} — {item.destination}
                    </p>
                  </div>
                  <ShipmentStatusBadge status={item.status} />
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle>{selected.id}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-sm leading-7">
                <p>الأمر: {getOrder(selected.orderId)?.productName ?? selected.orderId}</p>
                <p>المركبة: {selected.vehicle}</p>
                <p>المندوب/السائق: {selected.driver}</p>
                <p>المغادرة: {selected.departureAt ? formatDateTime(selected.departureAt) : "لم تغادر"}</p>
                <p>الوصول المتوقع: {formatDateTime(selected.eta)}</p>
                <div className="flex flex-wrap gap-2">
                  {timeline.map((step) => (
                    <span key={step} className="rounded-full bg-muted px-2 py-1 text-xs">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
