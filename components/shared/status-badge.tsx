import { Badge } from "@/components/ui/badge";
import { machineStatusLabel, shipmentStatusLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

const machineTone: Record<string, string> = {
  running: "bg-emerald-50 text-emerald-800 border-emerald-200",
  idle: "bg-slate-50 text-slate-700 border-slate-200",
  setup: "bg-amber-50 text-amber-800 border-amber-200",
  maintenance: "bg-sky-50 text-sky-800 border-sky-200",
  stopped: "bg-rose-50 text-rose-800 border-rose-200",
};

const shipmentTone: Record<string, string> = {
  preparing: "bg-slate-50 text-slate-700 border-slate-200",
  ready: "bg-sky-50 text-sky-800 border-sky-200",
  dispatched: "bg-indigo-50 text-indigo-800 border-indigo-200",
  in_transit: "bg-amber-50 text-amber-800 border-amber-200",
  delivered: "bg-emerald-50 text-emerald-800 border-emerald-200",
  delayed: "bg-rose-50 text-rose-800 border-rose-200",
};

export function MachineStatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={cn("font-normal", machineTone[status])}>
      {machineStatusLabel[status] ?? status}
    </Badge>
  );
}

export function ShipmentStatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={cn("font-normal", shipmentTone[status])}>
      {shipmentStatusLabel[status] ?? status}
    </Badge>
  );
}
