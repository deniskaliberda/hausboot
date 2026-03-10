"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Mail,
  Phone,
  Calendar,
  Home,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatDateShort } from "@/lib/utils/dates";

// Demo data
const cleaningTasks = [
  {
    id: "1",
    booking_number: "HB-2026-0012",
    property_name: "Luxus Hausboot Dahme",
    guest_name: "Familie Müller",
    cleaning_date: "2026-03-19",
    staff_name: "Elena Popov",
    staff_email: "elena@reinigung.de",
    staff_phone: "+49 176 1234567",
    status: "confirmed" as const,
    notified_at: "2026-03-01T14:30:00Z",
    confirmed_at: "2026-03-01T16:00:00Z",
  },
  {
    id: "2",
    booking_number: "HB-2026-0013",
    property_name: "Luxus Hausboot Dahme",
    guest_name: "Thomas Weber",
    cleaning_date: "2026-03-25",
    staff_name: "Elena Popov",
    staff_email: "elena@reinigung.de",
    staff_phone: "+49 176 1234567",
    status: "notified" as const,
    notified_at: "2026-03-05T10:15:00Z",
    confirmed_at: null,
  },
  {
    id: "3",
    booking_number: "HB-2026-0014",
    property_name: "Luxus Hausboot Dahme",
    guest_name: "Anna Schmidt",
    cleaning_date: "2026-04-05",
    staff_name: "Elena Popov",
    staff_email: "elena@reinigung.de",
    staff_phone: "+49 176 1234567",
    status: "pending" as const,
    notified_at: null,
    confirmed_at: null,
  },
  {
    id: "4",
    booking_number: "HB-2026-0011",
    property_name: "Luxus Hausboot Dahme",
    guest_name: "Peter Braun",
    cleaning_date: "2026-03-12",
    staff_name: "Elena Popov",
    staff_email: "elena@reinigung.de",
    staff_phone: "+49 176 1234567",
    status: "completed" as const,
    notified_at: "2026-02-20T09:00:00Z",
    confirmed_at: "2026-02-20T11:00:00Z",
  },
];

const statusConfig: Record<
  string,
  {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    icon: typeof CheckCircle2;
    color: string;
  }
> = {
  pending: {
    label: "Ausstehend",
    variant: "secondary",
    icon: Clock,
    color: "text-muted-foreground",
  },
  notified: {
    label: "Benachrichtigt",
    variant: "secondary",
    icon: Mail,
    color: "text-amber-600",
  },
  confirmed: {
    label: "Bestätigt",
    variant: "default",
    icon: CheckCircle2,
    color: "text-green-600",
  },
  completed: {
    label: "Erledigt",
    variant: "outline",
    icon: CheckCircle2,
    color: "text-muted-foreground",
  },
};

export default function AdminCleaningPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? cleaningTasks
      : cleaningTasks.filter((t) => t.status === filter);

  const upcoming = cleaningTasks.filter(
    (t) => t.status !== "completed"
  ).length;
  const needsAction = cleaningTasks.filter(
    (t) => t.status === "pending" || t.status === "notified"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold">Reinigung</h1>
        <p className="mt-1 text-muted-foreground">
          Reinigungsaufträge verwalten und Status verfolgen.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">Anstehend</p>
            <p className="text-2xl font-bold">{upcoming}</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">Aktion nötig</p>
            <p className="text-2xl font-bold text-amber-600">{needsAction}</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">Erledigt (gesamt)</p>
            <p className="text-2xl font-bold">
              {cleaningTasks.filter((t) => t.status === "completed").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {[
          { value: "all", label: "Alle" },
          { value: "pending", label: "Ausstehend" },
          { value: "notified", label: "Benachrichtigt" },
          { value: "confirmed", label: "Bestätigt" },
          { value: "completed", label: "Erledigt" },
        ].map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`inline-flex h-8 items-center rounded-md px-3 text-sm font-medium transition-colors ${
              filter === f.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filtered.map((task) => {
          const config = statusConfig[task.status];
          const StatusIcon = config.icon;

          return (
            <Card key={task.id}>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div
                      className={`mt-0.5 rounded-full bg-muted p-2 ${config.color}`}
                    >
                      <StatusIcon className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {task.booking_number}
                        </span>
                        <Badge variant={config.variant}>{config.label}</Badge>
                      </div>

                      <div className="grid gap-2 text-sm sm:grid-cols-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Home className="h-3.5 w-3.5" />
                          <span>{task.property_name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            Reinigung am{" "}
                            {formatDateShort(task.cleaning_date)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-3.5 w-3.5" />
                          <span>{task.staff_email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{task.staff_phone}</span>
                        </div>
                      </div>

                      {task.notified_at && (
                        <p className="text-xs text-muted-foreground">
                          Benachrichtigt:{" "}
                          {formatDateShort(task.notified_at)}
                          {task.confirmed_at &&
                            ` · Bestätigt: ${formatDateShort(task.confirmed_at)}`}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {task.status === "pending" && (
                      <button className="inline-flex h-8 items-center gap-1 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                        <Mail className="h-3 w-3" />
                        Benachrichtigen
                      </button>
                    )}
                    {task.status === "notified" && (
                      <button className="inline-flex h-8 items-center gap-1 rounded-md border px-3 text-xs font-medium transition-colors hover:bg-muted">
                        <Mail className="h-3 w-3" />
                        Erneut senden
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {filtered.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            Keine Reinigungsaufträge in dieser Kategorie.
          </div>
        )}
      </div>
    </div>
  );
}
