import { HumanInTheLoop } from "@/components/shared/human-loop";
import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { PageHeader } from "@/components/shared/page-header";
import { aiOpportunities } from "@/data/opportunities";

export default function AiPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="فرص الذكاء الاصطناعي"
        description="الذكاء الاصطناعي يُستخدم حيث توجد لغة غير منظمة أو استدلال أو تنبؤ. الأتمتة شيء آخر. التمييز أدناه يوضح ما يمكن تجريبه مبكراً وما يحتاج تاريخاً أو ربط آلات."
        demo={false}
      />
      <HumanInTheLoop />
      <OpportunityGrid items={aiOpportunities} />
    </div>
  );
}
