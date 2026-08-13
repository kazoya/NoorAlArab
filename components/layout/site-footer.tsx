import { Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import {
  getCompanyWebsiteUrl,
  getContactEmails,
  getDiscoveryFormUrl,
  getMapsUrl,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";

export function SiteFooter() {
  const whatsapp = getWhatsAppUrl();
  const emails = getContactEmails();
  const formUrl = getDiscoveryFormUrl();
  const mapsUrl = getMapsUrl();
  const website = getCompanyWebsiteUrl();

  return (
    <footer className="mt-16 border-t border-border/80 bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="brand-arch relative h-14 w-11 shrink-0 overflow-hidden border border-gold/50 bg-black">
              <BrandLogo alt={siteConfig.nameAr} />
            </span>
            <div>
              <p className="text-sm font-medium">لنبدأ من واقع المصنع، لا من الافتراضات.</p>
              <p className="text-xs text-muted-foreground">
                {siteConfig.nameAr} · منذ {siteConfig.since}
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            يمكن لاحقاً تشغيل رد آلي على استفسارات المواصفات أو الأسعار المصرّح بها عبر وكيل
            متخصص تُفهرس له مستندات المصنع مسبقاً. العروض الحساسة والتسعير النهائي يبقيان
            تحت اعتماد موظف مختص.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {whatsapp ? (
              <a
                className="cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                محادثة واتساب
              </a>
            ) : null}
            {mapsUrl ? (
              <a
                className="inline-flex cursor-pointer items-center gap-1 text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="size-3.5" aria-hidden />
                موقع المصنع على الخريطة
              </a>
            ) : null}
            <a
              className="cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              الموقع الرسمي
            </a>
            {formUrl ? (
              <a
                className="cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={formUrl}
                target="_blank"
                rel="noreferrer"
              >
                نموذج الاكتشاف الكامل
              </a>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5 text-sm">
            {emails.map((email) => (
              <a
                key={email}
                className="inline-flex cursor-pointer items-center gap-1.5 text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={`mailto:${email}`}
              >
                <Mail className="size-3.5" aria-hidden />
                <span dir="ltr">{email}</span>
              </a>
            ))}
          </div>
          <p className="text-xs leading-6 text-muted-foreground">
            هذا النموذج عبارة عن تصور تقني مستقل ومقترح أولي لأغراض العرض والنقاش، ولا يمثل
            نظاماً رسمياً تابعاً لشركة نور العرب للصناعات البلاستيكية.
          </p>
        </div>
        <div className="space-y-4">
          <WhatsAppQr />
          <div className="rounded-xl border border-gold/30 bg-[#111111] p-3">
            <p className="mb-2 text-xs text-white/75">للتواصل مع المبرمج امسح الرمز</p>
            <DeveloperQr />
          </div>
        </div>
      </div>
    </footer>
  );
}
