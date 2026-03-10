"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  MessageSquare,
  SprayCan,
  Settings,
  LogOut,
  Anchor,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/buchungen", label: "Buchungen", icon: BookOpen },
  { href: "/admin/kalender", label: "Kalender", icon: CalendarDays },
  { href: "/admin/anfragen", label: "Anfragen", icon: MessageSquare },
  { href: "/admin/reinigung", label: "Reinigung", icon: SprayCan },
  { href: "/admin/einstellungen", label: "Einstellungen", icon: Settings },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          Zur Webseite
        </Link>
      </div>
    </>
  );
}

export function AdminSidebar() {
  return (
    <aside className="hidden h-screen w-64 flex-col border-r bg-card lg:flex">
      <div className="flex items-center gap-2 border-b px-6 py-4">
        <Anchor className="h-6 w-6 text-primary" />
        <span className="font-serif text-lg font-bold">Admin</span>
      </div>
      <SidebarNav />
    </aside>
  );
}

export function AdminMobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-14 items-center gap-3 border-b bg-card px-4 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="border-b px-6 py-4">
            <span className="flex items-center gap-2">
              <Anchor className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">Admin</span>
            </span>
          </SheetTitle>
          <div className="flex flex-1 flex-col">
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2">
        <Anchor className="h-5 w-5 text-primary" />
        <span className="font-serif font-bold">Admin</span>
      </div>
    </header>
  );
}
