const dateTime = new Intl.DateTimeFormat("ar-JO", {
  dateStyle: "medium",
  timeStyle: "short",
});

const dateOnly = new Intl.DateTimeFormat("ar-JO", {
  dateStyle: "medium",
});

export function formatDateTime(value: string) {
  return dateTime.format(new Date(value));
}

export function formatDate(value: string) {
  return dateOnly.format(new Date(value));
}

export function formatNumber(value: number, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export function formatPct(value: number, digits = 1) {
  return `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`;
}

export const departmentLabel: Record<string, string> = {
  sales: "المبيعات",
  production: "الإنتاج",
  quality: "الجودة",
  procurement: "المشتريات",
  inventory: "المخزون",
  logistics: "اللوجستيات",
  management: "الإدارة",
};

export const machineStatusLabel: Record<string, string> = {
  running: "تعمل",
  idle: "خاملة",
  setup: "تجهيز",
  maintenance: "صيانة",
  stopped: "متوقفة",
};

export const shipmentStatusLabel: Record<string, string> = {
  preparing: "تجهيز",
  ready: "جاهزة",
  dispatched: "خرجت",
  in_transit: "في الطريق",
  delivered: "سُلّمت",
  delayed: "متأخرة",
};
