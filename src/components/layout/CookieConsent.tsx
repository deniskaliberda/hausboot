"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie_consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    const prefs: CookiePreferences = { essential: true, analytics: true };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setVisible(false);
  }

  function reject() {
    const prefs: CookiePreferences = { essential: true, analytics: false };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t bg-background p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl text-sm text-muted-foreground">
          <p>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
            Webseite zu bieten. Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="underline hover:text-foreground">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" onClick={reject}>
            Ablehnen
          </Button>
          <Button onClick={accept}>Akzeptieren</Button>
        </div>
      </div>
    </div>
  );
}
