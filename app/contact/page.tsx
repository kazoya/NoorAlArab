import Link from "next/link";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { getContactEmail, getDiscoveryFormUrl, getWhatsAppUrl } from "@/lib/config";

export default function ContactPage() {
  const whatsapp = getWhatsAppUrl();
  const email = getContactEmail();
  const formUrl = getDiscoveryFormUrl();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="لنبدأ من واقع المصنع، لا من الافتراضات."
        description="هذا التصور يوضح الإمكانيات التي يمكن بناؤها، لكن القيمة الحقيقية تبدأ بفهم دورة العمل الحالية والبيانات والأنظمة والأولويات التشغيلية. بعد الإجابة على أسئلة التقييم وعقد جلسة Discovery قصيرة، يمكن إعداد تصور أدق يتضمن نطاق المشروع، الأولويات، البنية التقنية، مراحل التنفيذ والتكلفة التقديرية."
        demo={false}
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/assessment">إكمال تقييم المصنع</Link>
        </Button>
        {whatsapp ? (
          <Button asChild variant="outline">
            <a href={whatsapp} target="_blank" rel="noreferrer">
              طلب جلسة Discovery
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/assessment">طلب جلسة Discovery</Link>
          </Button>
        )}
        {formUrl ? (
          <Button asChild variant="secondary">
            <a href={formUrl} target="_blank" rel="noreferrer">
              النموذج الكامل
            </a>
          </Button>
        ) : null}
        {email ? (
          <Button asChild variant="ghost">
            <a href={`mailto:${email}`}>مراسلة بريدية</a>
          </Button>
        ) : null}
      </div>
      <WhatsAppQr />
      <HonestyNote>
        م. محمد أبو خليفة، صُمم هذا النموذج ليكون بداية نقاش عملي حول ما يمكن للذكاء الاصطناعي
        والأتمتة إضافته إلى العمليات الصناعية في نور العرب. لا نفترض أننا نعرف المصنع أكثر من
        فريقه؛ لذلك صممنا مرحلة الاكتشاف أولاً، ثم نبني الحل حول البيانات والعمليات الفعلية.
      </HonestyNote>
    </div>
  );
}
