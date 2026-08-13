export type Department =
  | "sales"
  | "production"
  | "quality"
  | "procurement"
  | "inventory"
  | "logistics"
  | "management";

export type MachineStatus =
  | "running"
  | "idle"
  | "setup"
  | "maintenance"
  | "stopped";

export type ShipmentStatus =
  | "preparing"
  | "ready"
  | "dispatched"
  | "in_transit"
  | "delivered"
  | "delayed";

export type CrmStage =
  | "new_inquiry"
  | "qualification"
  | "specs_pending"
  | "pricing"
  | "quotation_sent"
  | "negotiation"
  | "won"
  | "lost"
  | "production"
  | "delivered"
  | "follow_up";

export type InquiryChannel = "whatsapp" | "email" | "phone" | "rep" | "website";

export type MaterialGrade = "HDPE" | "LDPE" | "OPP" | "CPP";

export type Difficulty = "low" | "medium" | "high";
export type Impact = "low" | "medium" | "high";
export type PilotFit = "strong" | "possible" | "later";

export type AiReadiness =
  | "available_now"
  | "needs_history"
  | "needs_iot";

export type Customer = {
  id: string;
  name: string;
  city: string;
  segment: string;
  ownerRep: string;
};

export type Inquiry = {
  id: string;
  customerId: string;
  channel: InquiryChannel;
  receivedAt: string;
  subject: string;
  rawMessage: string;
  status: "open" | "quoted" | "converted" | "lost";
};

export type ExtractedSpec = {
  field: string;
  label: string;
  value: string | null;
  confidence: number;
  requiredForPricing: boolean;
};

export type Quotation = {
  id: string;
  inquiryId: string;
  customerId: string;
  status: "draft" | "pending_approval" | "approved" | "rejected" | "sent";
  createdAt: string;
  validUntil: string;
  currency: "JOD";
  lineItems: QuotationLine[];
  notes: string;
};

export type QuotationLine = {
  id: string;
  description: string;
  material: MaterialGrade;
  quantityKg: number;
  unitPrice: number;
};

export type PricingBreakdown = {
  rawMaterial: number;
  conversion: number;
  printing: number;
  packaging: number;
  wasteAllowance: number;
  logistics: number;
  margin: number;
};

export type Order = {
  id: string;
  quotationId: string;
  customerId: string;
  productName: string;
  material: MaterialGrade;
  quantityKg: number;
  dueDate: string;
  status:
    | "confirmed"
    | "planning"
    | "in_production"
    | "qc"
    | "packaging"
    | "ready"
    | "shipped"
    | "delivered";
  priority: "normal" | "urgent";
};

export type Machine = {
  id: string;
  code: string;
  type: string;
  status: MachineStatus;
  currentJobId: string | null;
  targetOutputKg: number;
  actualOutputKg: number;
  utilizationPct: number;
  downtimeHours: number;
  wasteKg: number;
  nextMaintenance: string;
};

export type ProductionJob = {
  id: string;
  orderId: string;
  machineId: string;
  productName: string;
  plannedKg: number;
  actualKg: number;
  startedAt: string;
  shift: "A" | "B";
};

export type MaterialLot = {
  id: string;
  grade: MaterialGrade;
  onHandKg: number;
  reservedKg: number;
  reorderPointKg: number;
  supplierId: string;
  batchCode: string;
};

export type Supplier = {
  id: string;
  alias: string;
  gradeFocus: MaterialGrade;
  priceIndex: number;
  leadTimeDays: number;
  qualityScore: number;
  reliabilityScore: number;
};

export type Shipment = {
  id: string;
  orderId: string;
  customerId: string;
  destination: string;
  vehicle: string;
  driver: string;
  status: ShipmentStatus;
  departureAt: string | null;
  eta: string;
  confirmedAt: string | null;
};

export type QualityRecord = {
  id: string;
  jobId: string;
  stage: string;
  result: "pass" | "reject";
  reason: string | null;
  recordedAt: string;
};

export type Insight = {
  id: string;
  title: string;
  severity: "info" | "watch" | "action";
  reason: string;
  dataUsed: string[];
  confidence: number;
  recommendedAction: string;
  requiresApproval: boolean;
};

export type WorkflowNode = {
  id: string;
  title: string;
  currentProcess: string;
  requiredData: string[];
  possibleBottleneck: string;
  automationOpportunity: string;
  aiOpportunity: string;
  kpi: string;
  integration: string;
};

export type Bottleneck = {
  id: string;
  title: string;
  department: Department;
  description: string;
  signalToInvestigate: string;
};

export type OpportunityCard = {
  id: string;
  title: string;
  summary: string;
  impact: Impact;
  requiredData: string[];
  difficulty: Difficulty;
  dependencies: string[];
  pilotFit: PilotFit;
  readiness?: AiReadiness;
};

export type TimelineEvent = {
  id: string;
  orderId: string;
  label: string;
  at: string;
  department: Department;
};

export type KnowledgeAnswer = {
  id: string;
  question: string;
  answer: string;
  citations: { title: string; note: string }[];
};

export type MonthlyKpi = {
  month: string;
  productionKg: number;
  wastePct: number;
  downtimeHours: number;
  utilizationPct: number;
  inquiries: number;
  quotations: number;
  conversionPct: number;
  onTimeDeliveryPct: number;
  qcRejectPct: number;
};

export type ReadinessRow = {
  source: string;
  exists: "unknown" | "yes" | "partial" | "no";
  digital: "unknown" | "yes" | "partial" | "no";
  structured: "unknown" | "yes" | "partial" | "no";
  historicalDepth: string;
  accessible: "unknown" | "yes" | "partial" | "no";
  api: "unknown" | "yes" | "no";
  quality: "unknown" | "low" | "medium" | "high";
  aiReadiness: string;
};
