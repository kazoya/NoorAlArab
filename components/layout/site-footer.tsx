import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { getContactEmail, getDiscoveryFormUrl, getWhatsAppUrl } from "@/lib/config";

export function SiteFooter() {
  const whatsapp = getWhatsAppUrl();
  const email = getContactEmail();
  const formUrl = getDiscoveryFormUrl();

  return (
    <footer className="mt-16 border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-medium">لنبدأ من واقع المصنع، لا من الافتراضات.</p>
          <p className="text-sm leading-7 text-muted-foreground">
            يمكن لاحقاً تشغيل رد آلي على استفسارات المواصفات أو الأسعار المصرّح بها عبر وكيل
            متخصص تُفهرس له مستندات المصنع مسبقاً. العروض الحساسة والتسعير النهائي يبقيان
            تحت اعتماد موظف مختص.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {whatsapp ? (
              <a className="text-primary underline-offset-4 hover:underline" href={whatsapp} target="_blank" rel="noreferrer">
                محادثة واتساب
              </a>
            ) : null}
            {email ? (
              <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}>
                بريد إلكتروني
              </a>
            ) : null}
            {formUrl ? (
              <a className="text-primary underline-offset-4 hover:underline" href={formUrl} target="_blank" rel="noreferrer">
                نموذج الاكتشاف الكامل
              </a>
            ) : null}
          </div>
          <p className="text-xs leading-6 text-muted-foreground">
            هذا النموذج عبارة عن تصور تقني مستقل ومقترح أولي لأغراض العرض والنقاش، ولا يمثل
            نظاماً رسمياً تابعاً لشركة نور العرب للصناعات البلاستيكية.
          </p>
        </div>
        <WhatsAppQr />
      </div>
    </footer>
  );
}
