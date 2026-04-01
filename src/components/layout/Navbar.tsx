"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Anchor } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#das-boot", label: "Das Boot" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/buchen", label: "Buchen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-navy/60 backdrop-blur-xl supports-[backdrop-filter]:bg-navy/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Anchor className="h-5 w-5 text-copper" />
          <span className="font-serif text-lg font-bold tracking-tight text-cream">
            Luxus Hausboot
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/60 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buchen"
            className={cn(
              buttonVariants(),
              "rounded-full bg-copper px-6 text-navy hover:bg-copper-light"
            )}
          >
            Jetzt buchen
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-cream md:hidden hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-white/[0.06] bg-navy/95 px-4 pb-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-cream/80 hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/buchen"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants(),
                "mt-2 rounded-full bg-copper text-navy hover:bg-copper-light"
              )}
            >
              Jetzt buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
