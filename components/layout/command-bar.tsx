"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { findNavLabel } from "@/lib/nav";

type CommandBarProps = {
  onOpenMenu: () => void;
};

export function CommandBar({ onOpenMenu }: CommandBarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur">
      <div className="flex min-w-0 items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onOpenMenu}
          aria-label="فتح القائمة"
        >
          <Menu />
        </Button>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{findNavLabel(pathname)}</p>
          <p className="hidden text-xs text-muted-foreground sm:block">
            مركز عمليات صناعي — تصور استكشافي
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DemoBadge label="Demo Environment" />
        <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
          <Link href="/assessment">ساعدنا على فهم المصنع</Link>
        </Button>
      </div>
    </header>
  );
}
