import type { MaterialLot, Supplier } from "@/types";

export const materialLots: MaterialLot[] = [
  {
    id: "MAT-HDPE-01",
    grade: "HDPE",
    onHandKg: 12400,
    reservedKg: 2000,
    reorderPointKg: 8000,
    supplierId: "SUP-A",
    batchCode: "LOT-D-118",
  },
  {
    id: "MAT-LDPE-01",
    grade: "LDPE",
    onHandKg: 6100,
    reservedKg: 8000,
    reorderPointKg: 9000,
    supplierId: "SUP-B",
    batchCode: "LOT-D-204",
  },
  {
    id: "MAT-OPP-01",
    grade: "OPP",
    onHandKg: 4300,
    reservedKg: 1200,
    reorderPointKg: 3500,
    supplierId: "SUP-C",
    batchCode: "LOT-D-077",
  },
  {
    id: "MAT-CPP-01",
    grade: "CPP",
    onHandKg: 2800,
    reservedKg: 0,
    reorderPointKg: 2500,
    supplierId: "SUP-A",
    batchCode: "LOT-D-051",
  },
];

export const suppliers: Supplier[] = [
  {
    id: "SUP-A",
    alias: "Supplier A",
    gradeFocus: "HDPE",
    priceIndex: 98,
    leadTimeDays: 12,
    qualityScore: 92,
    reliabilityScore: 88,
  },
  {
    id: "SUP-B",
    alias: "Supplier B",
    gradeFocus: "LDPE",
    priceIndex: 101,
    leadTimeDays: 9,
    qualityScore: 86,
    reliabilityScore: 91,
  },
  {
    id: "SUP-C",
    alias: "Supplier C",
    gradeFocus: "OPP",
    priceIndex: 96,
    leadTimeDays: 16,
    qualityScore: 89,
    reliabilityScore: 80,
  },
];

export const materialPriceHistory = [
  { month: "آذار", hdpe: 100, ldpe: 100, opp: 100, cpp: 100 },
  { month: "نيسان", hdpe: 102, ldpe: 99, opp: 101, cpp: 100 },
  { month: "أيار", hdpe: 101, ldpe: 103, opp: 100, cpp: 102 },
  { month: "حزيران", hdpe: 104, ldpe: 105, opp: 103, cpp: 103 },
  { month: "تموز", hdpe: 103, ldpe: 104, opp: 102, cpp: 101 },
  { month: "آب", hdpe: 105, ldpe: 106, opp: 104, cpp: 103 },
];

export const consumptionTrend = [
  { week: "أ1", hdpe: 4.2, ldpe: 6.1, opp: 2.4, cpp: 1.1 },
  { week: "أ2", hdpe: 3.8, ldpe: 5.4, opp: 2.8, cpp: 0.9 },
  { week: "أ3", hdpe: 4.6, ldpe: 7.2, opp: 2.1, cpp: 1.3 },
  { week: "أ4", hdpe: 4.1, ldpe: 6.8, opp: 2.6, cpp: 1.0 },
];
