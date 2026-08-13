import { customers } from "@/data/customers";
import { crmStages, customerActivity, pipeline } from "@/data/crm";
import { extractedSpecs, inquiries } from "@/data/inquiries";
import { insights, monthlyKpis } from "@/data/kpis";
import { knowledgeAnswers } from "@/data/knowledge";
import { machines, productionJobs } from "@/data/machines";
import { materialLots, suppliers } from "@/data/materials";
import { orderTimeline, orders } from "@/data/orders";
import { qualityRecords } from "@/data/quality";
import { quotations } from "@/data/quotations";
import { shipments } from "@/data/shipments";

export function getCustomer(id: string) {
  return customers.find((item) => item.id === id);
}

export function getOrder(id: string) {
  return orders.find((item) => item.id === id);
}

export function getMachine(id: string) {
  return machines.find((item) => item.id === id);
}

export function jobsForMachine(machineId: string) {
  return productionJobs.filter((job) => job.machineId === machineId);
}

export function jobsForOrder(orderId: string) {
  return productionJobs.filter((job) => job.orderId === orderId);
}

export function shipmentsForOrder(orderId: string) {
  return shipments.filter((item) => item.orderId === orderId);
}

export function quotationsForInquiry(inquiryId: string) {
  return quotations.filter((item) => item.inquiryId === inquiryId);
}

export function lotsForSupplier(supplierId: string) {
  return materialLots.filter((item) => item.supplierId === supplierId);
}

export function timelineForOrder(orderId: string) {
  return orderTimeline.filter((item) => item.orderId === orderId);
}

export const catalog = {
  customers,
  inquiries,
  quotations,
  orders,
  machines,
  productionJobs,
  materialLots,
  suppliers,
  shipments,
  qualityRecords,
  insights,
  monthlyKpis,
  pipeline,
  crmStages,
  customerActivity,
  extractedSpecs,
  knowledgeAnswers,
};
