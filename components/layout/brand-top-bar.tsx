import { Mail, MapPin } from "lucide-react";
import {
  getCompanyWebsiteUrl,
  getContactEmails,
  getMapsUrl,
  siteConfig,
} from "@/lib/config";

export function BrandTopBar() {
  const emails = getContactEmails();
  const mapsUrl = getMapsUrl();
  const website = getCompanyWebsiteUrl();

  return (
    <div className="border-b border-black bg-[#111111] text-[11px] text-white/85">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-1.5 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-gold"
            >
              <MapPin className="size-3 text-gold" aria-hidden />
              <span>
                {siteConfig.city}، {siteConfig.country} · منذ {siteConfig.since}
              </span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3 text-gold" aria-hidden />
              {siteConfig.city}، {siteConfig.country} · منذ {siteConfig.since}
            </span>
          )}
          {emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="size-3 text-gold" aria-hidden />
              <span dir="ltr">{email}</span>
            </a>
          ))}
        </div>
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer font-medium tracking-wide text-gold transition-opacity hover:opacity-90"
        >
          nouralarab.com
        </a>
      </div>
    </div>
  );
}
