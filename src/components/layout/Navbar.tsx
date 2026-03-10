"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Anchor } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/hausboote", label: "Hausboote" },
  { href: "/oldtimer-tour", label: "Oldtimer Tour" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Anchor className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold text-primary">
            Luxus Hausboote
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/hausboote" className={cn(buttonVariants())}>
            Jetzt buchen
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/hausboote"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), "mt-2")}
            >
              Jetzt buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
