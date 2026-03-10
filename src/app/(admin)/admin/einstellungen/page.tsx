"use client";

import { useState } from "react";
import {
  Save,
  Euro,
  Link2,
  Image,
  Calendar,
  Copy,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  // Demo settings — will be loaded from Supabase
  const [settings, setSettings] = useState({
    base_price: "350",
    cleaning_fee: "150",
    min_nights: "2",
    max_nights: "30",
    max_guests: "8",
    airbnb_ical_url: "",
    admin_email: "",
    cleaning_email: "",
    cleaning_name: "Reinigungsteam Berlin",
    checkout_time: "11:00",
    checkin_time: "15:00",
  });

  const [seasons, setSeasons] = useState([
    { name: "Hochsaison", price: "450", start: "2026-06-01", end: "2026-08-31" },
    { name: "Nebensaison", price: "280", start: "2026-11-01", end: "2026-02-28" },
  ]);

  function handleSave() {
    // TODO: Save to Supabase
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function copyExportUrl() {
    const url = `${window.location.origin}/api/ical/export?propertyId=1`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function updateSetting(key: string, value: string) {
    setSettings((s) => ({ ...s, [key]: value }));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold">Einstellungen</h1>
          <p className="mt-1 text-muted-foreground">
            Preise, Kontakte und Kalender-Synchronisation konfigurieren.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {saved ? (
            <>
              <Check className="h-4 w-4" />
              Gespeichert
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Speichern
            </>
          )}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pricing */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Euro className="h-4 w-4" />
              Preise
            </CardTitle>
            <CardDescription>
              Basispreise und Gebühren in Euro (brutto)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Basispreis pro Nacht (€)
                </label>
                <input
                  type="number"
                  value={settings.base_price}
                  onChange={(e) => updateSetting("base_price", e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Reinigungsgebühr (€)
                </label>
                <input
                  type="number"
                  value={settings.cleaning_fee}
                  onChange={(e) =>
                    updateSetting("cleaning_fee", e.target.value)
                  }
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Mindestaufenthalt (Nächte)
                </label>
                <input
                  type="number"
                  value={settings.min_nights}
                  onChange={(e) => updateSetting("min_nights", e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Max. Gäste</label>
                <input
                  type="number"
                  value={settings.max_guests}
                  onChange={(e) => updateSetting("max_guests", e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <Separator />

            {/* Seasonal Pricing */}
            <div>
              <h3 className="mb-3 text-sm font-medium">Saisonpreise</h3>
              <div className="space-y-3">
                {seasons.map((season, i) => (
                  <div
                    key={i}
                    className="grid gap-2 rounded-lg border p-3 sm:grid-cols-4"
                  >
                    <input
                      type="text"
                      value={season.name}
                      onChange={(e) => {
                        const updated = [...seasons];
                        updated[i] = { ...updated[i], name: e.target.value };
                        setSeasons(updated);
                      }}
                      placeholder="Name"
                      className="flex h-8 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <input
                      type="number"
                      value={season.price}
                      onChange={(e) => {
                        const updated = [...seasons];
                        updated[i] = { ...updated[i], price: e.target.value };
                        setSeasons(updated);
                      }}
                      placeholder="€/Nacht"
                      className="flex h-8 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <input
                      type="date"
                      value={season.start}
                      onChange={(e) => {
                        const updated = [...seasons];
                        updated[i] = { ...updated[i], start: e.target.value };
                        setSeasons(updated);
                      }}
                      className="flex h-8 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <input
                      type="date"
                      value={season.end}
                      onChange={(e) => {
                        const updated = [...seasons];
                        updated[i] = { ...updated[i], end: e.target.value };
                        setSeasons(updated);
                      }}
                      className="flex h-8 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                ))}
                <button
                  onClick={() =>
                    setSeasons([
                      ...seasons,
                      { name: "", price: "", start: "", end: "" },
                    ])
                  }
                  className="inline-flex h-8 items-center gap-1 rounded-md border border-dashed px-3 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  + Saison hinzufügen
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Check-in / Check-out & Contacts */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Check-in / Check-out
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-in ab</label>
                  <input
                    type="time"
                    value={settings.checkin_time}
                    onChange={(e) =>
                      updateSetting("checkin_time", e.target.value)
                    }
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-out bis</label>
                  <input
                    type="time"
                    value={settings.checkout_time}
                    onChange={(e) =>
                      updateSetting("checkout_time", e.target.value)
                    }
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle>Kontakte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Admin E-Mail (Benachrichtigungen)
                </label>
                <input
                  type="email"
                  value={settings.admin_email}
                  onChange={(e) =>
                    updateSetting("admin_email", e.target.value)
                  }
                  placeholder="owner@luxus-hausboote.de"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Reinigungsteam E-Mail
                </label>
                <input
                  type="email"
                  value={settings.cleaning_email}
                  onChange={(e) =>
                    updateSetting("cleaning_email", e.target.value)
                  }
                  placeholder="reinigung@example.de"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Reinigungsteam Name
                </label>
                <input
                  type="text"
                  value={settings.cleaning_name}
                  onChange={(e) =>
                    updateSetting("cleaning_name", e.target.value)
                  }
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </CardContent>
          </Card>

          {/* iCal Sync */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Link2 className="h-4 w-4" />
                Airbnb iCal-Sync
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Airbnb iCal-Import-URL
                </label>
                <input
                  type="url"
                  value={settings.airbnb_ical_url}
                  onChange={(e) =>
                    updateSetting("airbnb_ical_url", e.target.value)
                  }
                  placeholder="https://www.airbnb.com/calendar/ical/..."
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <p className="text-xs text-muted-foreground">
                  Wird alle 30 Minuten automatisch synchronisiert.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  iCal-Export-URL (für Airbnb)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`${typeof window !== "undefined" ? window.location.origin : ""}/api/ical/export?propertyId=1`}
                    className="flex h-9 w-full rounded-md border border-input bg-muted px-3 text-sm"
                  />
                  <button
                    onClick={copyExportUrl}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors hover:bg-muted"
                    title="URL kopieren"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Diese URL in Airbnb unter &quot;Kalender importieren&quot;
                  eintragen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
