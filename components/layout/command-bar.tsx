"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { findNavLabel } from "@/lib/nav";

type CommandBarProps = {
  onOpenMenu: () => void;
};

export function CommandBar({ onOpenMenu }: CommandBarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-gold/20 bg-background/95 backdrop-blur">
      <div className="flex min-h-[4.75rem] items-center justify-between gap-3 px-4 py-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="cursor-pointer lg:hidden"
            onClick={onOpenMenu}
            aria-label="فتح القائمة"
          >
            <Menu />
          </Button>
          <Link
            href="/"
            className="brand-arch relative hidden h-9 w-7 shrink-0 overflow-hidden border border-gold/50 bg-black sm:block"
            aria-label="الصفحة الرئيسية"
          >
            <Image src="/brand/logo.png" alt="" width={28} height={36} className="h-full w-full object-cover" />
          </Link>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{findNavLabel(pathname)}</p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              مركز عمليات صناعي — تصور استكشافي
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <DeveloperQr />
          <DemoBadge label="Demo Environment" className="hidden md:inline-flex" />
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden cursor-pointer border-gold/30 sm:inline-flex"
          >
            <Link href="/assessment">ساعدنا على فهم المصنع</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
