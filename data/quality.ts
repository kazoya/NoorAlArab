import type { QualityRecord } from "@/types";

export const qualityRecords: QualityRecord[] = [
  {
    id: "QC-441",
    jobId: "JOB-760",
    stage: "بعد التصنيع",
    result: "pass",
    reason: null,
    recordedAt: "2026-08-12T06:40:00+03:00",
  },
  {
    id: "QC-442",
    jobId: "JOB-771",
    stage: "أثناء التشغيل",
    result: "pass",
    reason: null,
    recordedAt: "2026-08-12T14:10:00+03:00",
  },
  {
    id: "QC-438",
    jobId: "JOB-755",
    stage: "فحص نهائي",
    result: "reject",
    reason: "سماكة خارج النطاق — سيناريو تجريبي",
    recordedAt: "2026-08-10T19:05:00+03:00",
  },
  {
    id: "QC-436",
    jobId: "JOB-751",
    stage: "فحص طباعة",
    result: "reject",
    reason: "انزياح لون — سيناريو تجريبي",
    recordedAt: "2026-08-09T11:20:00+03:00",
  },
];

export const rejectionReasons = [
  { reason: "سماكة خارج النطاق", count: 6 },
  { reason: "انزياح طباعة", count: 4 },
  { reason: "ضعف لحام", count: 3 },
  { reason: "تلوث سطح", count: 2 },
  { reason: "أبعاد غير مطابقة", count: 2 },
];
