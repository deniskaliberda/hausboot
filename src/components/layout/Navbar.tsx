"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Anchor } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/buchen", label: "Buchen" },
  { href: "/blog", label: "Blog" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Anchor className="h-5 w-5 text-primary" />
          <span className="font-serif text-lg font-bold tracking-tight">
            Luxus Hausboot
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buchen"
            className={cn(buttonVariants(), "rounded-full px-6")}
          >
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
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              href="/buchen"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), "mt-2 rounded-full")}
            >
              Jetzt buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
