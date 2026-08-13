import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { PageHeader } from "@/components/shared/page-header";
import { automationOpportunities } from "@/data/opportunities";

export default function AutomationPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="فرص الأتمتة"
        description="الأتمتة هنا تعني قواعد وبرمجيات حتمية: نقل بيانات، تنبيه، قالب، مسار اعتماد. ليست بديلاً عن الذكاء الاصطناعي ولا ادّعاءً بأن المصنع يعمل يدوياً اليوم."
        demo={false}
      />
      <OpportunityGrid items={automationOpportunities} />
    </div>
  );
}
