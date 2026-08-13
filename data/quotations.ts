import type { PricingBreakdown, Quotation } from "@/types";

export const quotations: Quotation[] = [
  {
    id: "Q-881",
    inquiryId: "INQ-2401",
    customerId: "C-1001",
    status: "pending_approval",
    createdAt: "2026-08-11T11:30:00+03:00",
    validUntil: "2026-08-25",
    currency: "JOD",
    lineItems: [
      {
        id: "QL-1",
        description: "أكياس HDPE 40×60 — تسعير توضيحي فقط",
        material: "HDPE",
        quantityKg: 2000,
        unitPrice: 1.85,
      },
    ],
    notes: "الأسعار توضيحية ولا تمثل قائمة أسعار نور العرب.",
  },
  {
    id: "Q-882",
    inquiryId: "INQ-2402",
    customerId: "C-1002",
    status: "approved",
    createdAt: "2026-08-10T18:10:00+03:00",
    validUntil: "2026-08-24",
    currency: "JOD",
    lineItems: [
      {
        id: "QL-2",
        description: "فيلم LDPE 120سم / 25 ميكرون — تسعير توضيحي",
        material: "LDPE",
        quantityKg: 8000,
        unitPrice: 1.62,
      },
    ],
    notes: "سيناريو توضيحي بعد اعتماد موظف.",
  },
];

export const defaultPricingRates: PricingBreakdown = {
  rawMaterial: 1.05,
  conversion: 0.28,
  printing: 0.18,
  packaging: 0.06,
  wasteAllowance: 0.08,
  logistics: 0.07,
  margin: 0.13,
};

export function computeUnitPrice(rates: PricingBreakdown): number {
  return Number(
    (
      rates.rawMaterial +
      rates.conversion +
      rates.printing +
      rates.packaging +
      rates.wasteAllowance +
      rates.logistics +
      rates.margin
    ).toFixed(2),
  );
}
