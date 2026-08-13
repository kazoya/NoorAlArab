"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { CommandBar } from "@/components/layout/command-bar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background">
      <aside className="fixed inset-y-0 right-0 z-40 hidden w-72 border-l bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
        <Brand />
        <ScrollArea className="flex-1 px-3">
          <SidebarNav />
        </ScrollArea>
      </aside>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-80 bg-sidebar p-0 text-sidebar-foreground">
          <SheetHeader className="sr-only">
            <SheetTitle>القائمة</SheetTitle>
          </SheetHeader>
          <Brand />
          <ScrollArea className="h-[calc(100dvh-5rem)] px-3">
            <SidebarNav onNavigate={() => setOpen(false)} />
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <div className="lg:pr-72">
        <CommandBar onOpenMenu={() => setOpen(true)} />
        <main className="px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:pb-10">{children}</main>
        <SiteFooter />
      </div>
      <MobileNav onMore={() => setOpen(true)} />
    </div>
  );
}

function Brand() {
  return (
    <div className="border-b border-sidebar-border px-5 py-5">
      <Link href="/" className="block">
        <p className="text-[11px] tracking-[0.18em] text-sidebar-primary uppercase">
          Industrial Intelligence
        </p>
        <p className="mt-1 text-base font-semibold text-sidebar-foreground">نور العرب</p>
        <p className="text-xs text-sidebar-foreground/60">تصور الذكاء الصناعي</p>
      </Link>
    </div>
  );
}
