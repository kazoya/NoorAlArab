import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

type BrandMarkProps = {
  href?: string;
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
};

const sizes = {
  sm: { box: "h-11 w-9", img: 36 },
  md: { box: "h-14 w-11", img: 44 },
  lg: { box: "h-24 w-[4.75rem]", img: 76 },
} as const;

export function BrandMark({
  href = "/",
  className,
  showText = true,
  size = "md",
  tone = "dark",
}: BrandMarkProps) {
  const dim = sizes[size];
  const textMuted = tone === "dark" ? "text-sidebar-foreground/65" : "text-muted-foreground";
  const textMain = tone === "dark" ? "text-sidebar-foreground" : "text-foreground";

  const content = (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "brand-arch relative shrink-0 overflow-hidden border border-gold/70 bg-black shadow-[0_0_24px_rgb(234_179_8_/_0.18)]",
          dim.box,
        )}
      >
        <Image
          src="/brand/logo.png"
          alt={`${siteConfig.nameAr} — شعار نور العرب`}
          width={dim.img}
          height={dim.img}
          className="h-full w-full object-cover object-center"
          priority
        />
      </span>
      {showText ? (
        <span className="min-w-0 text-right">
          <span className={cn("block text-[10px] tracking-[0.2em] text-gold uppercase")}>
            Nour Al-Arab
          </span>
          <span className={cn("mt-0.5 block text-sm font-semibold leading-5", textMain)}>
            نور العرب
          </span>
          <span className={cn("block text-[11px] leading-4", textMuted)}>
            {siteConfig.productName}
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="block outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold/60">
      {content}
    </Link>
  );
}
