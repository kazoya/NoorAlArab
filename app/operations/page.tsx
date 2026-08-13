"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { orders, orderTimeline } from "@/data/orders";
import { departmentLabel, formatDateTime } from "@/lib/format";

export default function OperationsPage() {
  const [orderId, setOrderId] = useState(orders[0].id);
  const events = orderTimeline.filter((item) => item.orderId === orderId);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تتبع العمليات"
        description="خط زمني موحّد من الاستفسار حتى المتابعة، مع الوقت والقسم المسؤول."
      />
      <Select value={orderId} onValueChange={setOrderId}>
        <SelectTrigger aria-label="الأمر">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {orders.map((order) => (
            <SelectItem key={order.id} value={order.id}>
              {order.id} — {order.productName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="space-y-3">
        {(events.length ? events : [
          { id: "empty", orderId, label: "لا أحداث مسجّلة بعد في هذا الأمر التجريبي", at: orders.find((o) => o.id === orderId)?.dueDate ?? "", department: "management" as const },
        ]).map((event) => (
          <Card key={event.id} className="shadow-sm">
            <CardContent className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
              <div>
                <p className="font-medium">{event.label}</p>
                <p className="text-sm text-muted-foreground">{departmentLabel[event.department]}</p>
              </div>
              <p className="tabular text-sm text-muted-foreground">
                {event.at ? formatDateTime(event.at) : "—"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
