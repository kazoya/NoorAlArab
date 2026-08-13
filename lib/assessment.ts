import { z } from "zod";

export const STORAGE_KEY = "nour-discovery-assessment";

const text = z.string();
const list = z.array(z.string());

export const assessmentSchema = z.object({
  requestChannels: list,
  monthlyQuotes: text,
  whoPrices: text,
  pricingInfo: text,
  missingSpecsFreq: text,
  quotesManual: text,
  followUp: text,
  hasCrm: text,
  oldQuotesSearchable: text,
  returningCustomers: text,
  relevantSpecs: list,
  specNotes: text,
  pricingMethod: list,
  pricesFollowMarket: text,
  approvalNeeded: text,
  discountApprover: text,
  machineCountTypes: text,
  machineProcesses: text,
  capacityUnits: text,
  shifts: text,
  changeover: text,
  downtimeTracked: text,
  planVsActual: text,
  scrapTracked: text,
  stopReasons: text,
  maintenanceRecords: text,
  scheduling: text,
  urgentOrders: text,
  qualityChecks: text,
  qualityStages: text,
  defectRecording: text,
  rejectCategorized: text,
  qualityDigital: text,
  certificates: text,
  qualityTrace: text,
  materialCategories: text,
  supplierManagement: text,
  multiSupplier: text,
  leadTimes: text,
  minStock: text,
  poProcess: text,
  priceHistory: text,
  lotTracking: text,
  supplierPerformance: text,
  inventoryRaw: text,
  inventoryWip: text,
  inventoryFg: text,
  warehouseLocations: text,
  stockAccuracy: text,
  fleet: text,
  vehicles: text,
  deliveryScheduling: text,
  shipmentTracking: text,
  exportDocs: text,
  hasReps: text,
  leadAssignment: text,
  visitRecording: text,
  salesTargets: text,
  systems: list,
  hasApi: text,
  canExport: text,
  dailyReports: text,
  weeklyReports: text,
  monthlyReports: text,
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const defaultAssessment: AssessmentValues = {
  requestChannels: [],
  monthlyQuotes: "",
  whoPrices: "",
  pricingInfo: "",
  missingSpecsFreq: "",
  quotesManual: "",
  followUp: "",
  hasCrm: "",
  oldQuotesSearchable: "",
  returningCustomers: "",
  relevantSpecs: [],
  specNotes: "",
  pricingMethod: [],
  pricesFollowMarket: "",
  approvalNeeded: "",
  discountApprover: "",
  machineCountTypes: "",
  machineProcesses: "",
  capacityUnits: "",
  shifts: "",
  changeover: "",
  downtimeTracked: "",
  planVsActual: "",
  scrapTracked: "",
  stopReasons: "",
  maintenanceRecords: "",
  scheduling: "",
  urgentOrders: "",
  qualityChecks: "",
  qualityStages: "",
  defectRecording: "",
  rejectCategorized: "",
  qualityDigital: "",
  certificates: "",
  qualityTrace: "",
  materialCategories: "",
  supplierManagement: "",
  multiSupplier: "",
  leadTimes: "",
  minStock: "",
  poProcess: "",
  priceHistory: "",
  lotTracking: "",
  supplierPerformance: "",
  inventoryRaw: "",
  inventoryWip: "",
  inventoryFg: "",
  warehouseLocations: "",
  stockAccuracy: "",
  fleet: "",
  vehicles: "",
  deliveryScheduling: "",
  shipmentTracking: "",
  exportDocs: "",
  hasReps: "",
  leadAssignment: "",
  visitRecording: "",
  salesTargets: "",
  systems: [],
  hasApi: "",
  canExport: "",
  dailyReports: "",
  weeklyReports: "",
  monthlyReports: "",
};

export const specOptions = [
  "فئة المنتج",
  "الخامة",
  "HDPE",
  "LDPE",
  "OPP",
  "CPP",
  "الأبعاد",
  "العرض",
  "الطول",
  "السماكة / الميكرون",
  "الوزن",
  "الكمية",
  "تكوين رول/كيس",
  "الطباعة",
  "عدد الألوان",
  "التعبئة",
  "الوجهة",
  "متطلبات التسليم",
  "مواصفات خاصة",
];

export const channelOptions = ["واتساب", "بريد", "هاتف", "مندوبو مبيعات", "موقع", "أخرى"];
export const pricingOptions = ["معادلة", "Excel", "ERP", "خبرة الموظف", "سعر الخامة", "طباعة", "زمن آلة", "تعبئة", "هدر", "لوجستيات", "هامش"];
export const systemOptions = [
  "ERP",
  "CRM",
  "محاسبة",
  "Excel",
  "Google Sheets",
  "واتساب",
  "بريد",
  "نماذج ورقية",
  "برامج آلات",
  "صيانة",
  "مستودع",
  "أخرى",
];

export function loadAssessment(): AssessmentValues {
  if (typeof window === "undefined") return defaultAssessment;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAssessment;
    return assessmentSchema.parse(JSON.parse(raw));
  } catch {
    return defaultAssessment;
  }
}

export function saveAssessment(values: AssessmentValues) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

function scoreFrom(values: AssessmentValues) {
  let digital = 20;
  if (values.systems.includes("ERP")) digital += 20;
  if (values.systems.includes("CRM") || values.hasCrm === "نعم") digital += 15;
  if (values.systems.includes("Excel") || values.systems.includes("Google Sheets")) digital += 10;
  if (values.qualityDigital === "نعم") digital += 10;
  if (values.systems.includes("نماذج ورقية")) digital -= 8;

  let data = 25;
  if (values.canExport === "نعم") data += 15;
  if (values.hasApi === "نعم") data += 20;
  if (values.oldQuotesSearchable === "نعم") data += 10;
  if (values.planVsActual === "نعم") data += 10;

  let automation = 20;
  if (values.quotesManual === "نعم") automation += 20;
  if (values.followUp.includes("يدوي") || values.followUp === "") automation += 10;
  if (values.requestChannels.length > 1) automation += 10;

  let ai = 15;
  if (values.requestChannels.includes("واتساب") || values.requestChannels.includes("بريد")) ai += 20;
  if (values.missingSpecsFreq) ai += 10;
  if (values.systems.length > 0) ai += 10;

  let integration = 30;
  if (values.systems.length >= 4) integration += 20;
  if (values.hasApi === "لا") integration += 15;
  if (values.hasApi === "نعم") integration -= 10;

  return {
    digital: clamp(digital),
    data: clamp(data),
    automation: clamp(automation),
    ai: clamp(ai),
    integration: clamp(integration),
  };
}

function clamp(value: number) {
  return Math.min(95, Math.max(15, value));
}

export function buildAssessmentReport(values: AssessmentValues) {
  const scores = scoreFrom(values);
  const wins: string[] = [];
  if (values.quotesManual === "نعم") wins.push("مساعد عروض الأسعار يمكن أن يختصر إعادة الكتابة بعد توثيق قواعد التسعير.");
  if (values.requestChannels.includes("واتساب")) wins.push("توحيد واتساب في سجل واحد خطوة سريعة وواضحة.");
  if (values.hasCrm !== "نعم") wins.push("سجل عملاء بسيط للمتابعة قد يعطي أثراً سريعاً.");
  if (values.dailyReports || values.weeklyReports) wins.push("لوحة إدارة تجريبية تُضبط على المؤشرات التي ذكرتموها.");
  if (!wins.length) wins.push("جلسة اكتشاف قصيرة كافية لتحديد أول تجريب عالي القيمة.");

  return {
    scores,
    wins,
    note: "تقييم أولي مبني على إجابات النموذج وليس قياساً علمياً ناضجاً.",
  };
}
