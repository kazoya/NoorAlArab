import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import {
  getCompanyWebsiteUrl,
  getContactEmails,
  getDiscoveryFormUrl,
  getMapsUrl,
  getWhatsAppPhoneDisplay,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";

export default function ContactPage() {
  const whatsapp = getWhatsAppUrl();
  const emails = getContactEmails();
  const formUrl = getDiscoveryFormUrl();
  const mapsUrl = getMapsUrl();
  const website = getCompanyWebsiteUrl();
  const phone = getWhatsAppPhoneDisplay();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="لنبدأ من واقع المصنع، لا من الافتراضات."
        description="هذا التصور يوضح الإمكانيات التي يمكن بناؤها، لكن القيمة الحقيقية تبدأ بفهم دورة العمل الحالية والبيانات والأنظمة والأولويات التشغيلية. بعد الإجابة على أسئلة التقييم وعقد جلسة Discovery قصيرة، يمكن إعداد تصور أدق يتضمن نطاق المشروع، الأولويات، البنية التقنية، مراحل التنفيذ والتكلفة التقديرية."
        demo={false}
      />
      {phone ? (
        <p className="text-sm text-muted-foreground">
          واتساب المصنع:{" "}
          <span className="font-mono text-foreground" dir="ltr">
            {phone}
          </span>
        </p>
      ) : null}
      <div className="flex flex-col gap-2 rounded-xl border border-gold/20 bg-ochre/10 p-4 text-sm">
        <p className="font-medium text-foreground">البريد الإلكتروني</p>
        {emails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="inline-flex cursor-pointer items-center gap-2 text-copper underline-offset-4 hover:underline"
          >
            <Mail className="size-3.5" aria-hidden />
            <span dir="ltr">{email}</span>
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild className="cursor-pointer">
          <Link href="/assessment">إكمال تقييم المصنع</Link>
        </Button>
        {whatsapp ? (
          <Button asChild variant="outline" className="cursor-pointer border-gold/40">
            <a href={whatsapp} target="_blank" rel="noreferrer">
              طلب جلسة Discovery
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline" className="cursor-pointer">
            <Link href="/assessment">طلب جلسة Discovery</Link>
          </Button>
        )}
        {mapsUrl ? (
          <Button asChild variant="secondary" className="cursor-pointer">
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin className="size-4" aria-hidden />
              موقع المصنع
            </a>
          </Button>
        ) : null}
        <Button asChild variant="secondary" className="cursor-pointer">
          <a href={website} target="_blank" rel="noreferrer">
            الموقع الرسمي
          </a>
        </Button>
        {formUrl ? (
          <Button asChild variant="ghost" className="cursor-pointer">
            <a href={formUrl} target="_blank" rel="noreferrer">
              النموذج الكامل
            </a>
          </Button>
        ) : null}
      </div>
      <WhatsAppQr />
      <DeveloperQr />
      <HonestyNote>
        {siteConfig.recipient}، صُمم هذا النموذج ليكون بداية نقاش عملي حول ما يمكن للذكاء الاصطناعي
        والأتمتة إضافته إلى العمليات الصناعية في نور العرب. لا نفترض أننا نعرف المصنع أكثر من
        فريقه؛ لذلك صممنا مرحلة الاكتشاف أولاً، ثم نبني الحل حول البيانات والعمليات الفعلية.
      </HonestyNote>
    </div>
  );
}
