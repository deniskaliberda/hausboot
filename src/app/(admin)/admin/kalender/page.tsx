"use client";

import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { de } from "date-fns/locale";
import { format, addMonths } from "date-fns";
import {
  RefreshCw,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle2,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Demo blocked dates
const blockedPeriods = [
  {
    id: "1",
    start: "2026-03-15",
    end: "2026-03-19",
    reason: "booking" as const,
    label: "HB-2026-0012 – Familie Müller",
  },
  {
    id: "2",
    start: "2026-03-22",
    end: "2026-03-25",
    reason: "booking" as const,
    label: "HB-2026-0013 – Thomas Weber",
  },
  {
    id: "3",
    start: "2026-04-10",
    end: "2026-04-13",
    reason: "airbnb_sync" as const,
    label: "Airbnb-Buchung (synchronisiert)",
  },
  {
    id: "4",
    start: "2026-04-20",
    end: "2026-04-22",
    reason: "manual" as const,
    label: "Wartungsarbeiten",
  },
  {
    id: "5",
    start: "2026-05-01",
    end: "2026-05-04",
    reason: "maintenance" as const,
    label: "Saisonvorbereitung",
  },
];

const reasonConfig: Record<
  string,
  { label: string; variant: "default" | "secondary" | "destructive" | "outline" }
> = {
  booking: { label: "Buchung", variant: "default" },
  airbnb_sync: { label: "Airbnb", variant: "secondary" },
  manual: { label: "Manuell", variant: "outline" },
  maintenance: { label: "Wartung", variant: "destructive" },
};

export default function AdminCalendarPage() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [blockReason, setBlockReason] = useState("manual");
  const [syncing, setSyncing] = useState(false);

  const blockedDates = blockedPeriods.flatMap((period) => {
    const dates: Date[] = [];
    const start = new Date(period.start);
    const end = new Date(period.end);
    for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }
    return dates;
  });

  async function handleSync() {
    setSyncing(true);
    // TODO: Call /api/cron/ical-sync
    await new Promise((r) => setTimeout(r, 2000));
    setSyncing(false);
  }

  function handleBlockDates() {
    if (!selectedRange?.from || !selectedRange?.to) return;
    // TODO: POST to API to create blocked_dates entry
    alert(
      `Zeitraum ${format(selectedRange.from, "dd.MM.yyyy")} – ${format(selectedRange.to, "dd.MM.yyyy")} gesperrt (${blockReason})`
    );
    setSelectedRange(undefined);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold">Kalender</h1>
          <p className="mt-1 text-muted-foreground">
            Verfügbarkeit verwalten und Airbnb-Kalender synchronisieren.
          </p>
        </div>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
        >
          <RefreshCw
            className={cn("h-4 w-4", syncing && "animate-spin")}
          />
          {syncing ? "Synchronisiert..." : "Jetzt synchronisieren"}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Calendar */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Kalenderansicht</CardTitle>
            <CardDescription>
              Wählen Sie einen Zeitraum, um Daten zu sperren.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-4">
            <DayPicker
              mode="range"
              selected={selectedRange}
              onSelect={setSelectedRange}
              locale={de}
              numberOfMonths={2}
              disabled={blockedDates}
              modifiers={{
                blocked: blockedDates,
              }}
              modifiersClassNames={{
                blocked: "line-through text-muted-foreground opacity-50",
              }}
              className="p-0"
            />
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Block dates form */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Zeitraum sperren
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {selectedRange?.from && selectedRange?.to ? (
                <>
                  <div className="rounded-lg bg-muted p-3 text-sm">
                    <p className="font-medium">Ausgewählter Zeitraum:</p>
                    <p className="text-muted-foreground">
                      {format(selectedRange.from, "dd.MM.yyyy", {
                        locale: de,
                      })}{" "}
                      –{" "}
                      {format(selectedRange.to, "dd.MM.yyyy", { locale: de })}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Grund</label>
                    <select
                      value={blockReason}
                      onChange={(e) => setBlockReason(e.target.value)}
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="manual">Manuell gesperrt</option>
                      <option value="maintenance">Wartung</option>
                    </select>
                  </div>

                  <button
                    onClick={handleBlockDates}
                    className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Zeitraum sperren
                  </button>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Wählen Sie im Kalender einen Zeitraum aus, um diesen zu
                  sperren.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Sync Status */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Airbnb-Sync</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Letzte Synchronisierung: Heute, 14:30 Uhr</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Automatisch alle 30 Minuten</span>
              </div>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  iCal-Export-URL kopieren
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Blocked Periods List */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Gesperrte Zeiträume</CardTitle>
          <CardDescription>
            Alle aktuell gesperrten Zeiträume für dieses Hausboot.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {blockedPeriods.map((period) => (
              <div
                key={period.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <Badge variant={reasonConfig[period.reason].variant}>
                    {reasonConfig[period.reason].label}
                  </Badge>
                  <div>
                    <p className="text-sm font-medium">{period.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(period.start), "dd.MM.yyyy")} –{" "}
                      {format(new Date(period.end), "dd.MM.yyyy")}
                    </p>
                  </div>
                </div>
                {(period.reason === "manual" ||
                  period.reason === "maintenance") && (
                  <button
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-destructive hover:bg-destructive/10"
                    title="Sperre aufheben"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
