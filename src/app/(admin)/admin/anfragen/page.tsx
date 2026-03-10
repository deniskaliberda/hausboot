"use client";

import { useState } from "react";
import { Search, Mail, Phone, Building2, Calendar, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDateShort } from "@/lib/utils/dates";

// Demo data
const inquiries = [
  {
    id: "1",
    inquiry_number: "OT-2026-0001",
    name: "Stefan Neumann",
    email: "neumann@firma.de",
    phone: "+49 170 1234567",
    company: "Neumann GmbH",
    event_type: "Firmenevent",
    preferred_date: "2026-04-15",
    num_guests: 12,
    message:
      "Wir planen ein Team-Event für unsere Abteilung und interessieren uns für die Oldtimer-Tour mit Übernachtung.",
    status: "new" as const,
    created_at: "2026-03-08T10:30:00Z",
  },
  {
    id: "2",
    inquiry_number: "OT-2026-0002",
    name: "Claudia Richter",
    email: "c.richter@email.de",
    phone: "+49 171 9876543",
    company: null,
    event_type: "Geburtstag",
    preferred_date: "2026-05-20",
    num_guests: 8,
    message:
      "Ich möchte meinen 50. Geburtstag mit einer besonderen Tour feiern.",
    status: "contacted" as const,
    created_at: "2026-03-06T14:15:00Z",
  },
  {
    id: "3",
    inquiry_number: "OT-2026-0003",
    name: "Markus Fischer",
    email: "fischer@consulting.de",
    phone: "+49 172 5555555",
    company: "Fischer Consulting",
    event_type: "Firmenevent",
    preferred_date: "2026-04-10",
    num_guests: 15,
    message:
      "Suchen ein besonderes Erlebnis für unsere Kundenveranstaltung.",
    status: "quoted" as const,
    created_at: "2026-03-04T09:00:00Z",
  },
  {
    id: "4",
    inquiry_number: "OT-2026-0004",
    name: "Julia Becker",
    email: "julia.b@web.de",
    phone: "+49 173 1111111",
    company: null,
    event_type: "Junggesellenabschied",
    preferred_date: "2026-06-12",
    num_guests: 10,
    message:
      "Mein bester Freund heiratet und wir suchen ein unvergessliches JGA-Erlebnis!",
    status: "confirmed" as const,
    created_at: "2026-03-01T16:45:00Z",
  },
  {
    id: "5",
    inquiry_number: "OT-2026-0005",
    name: "Hans Krüger",
    email: "krueger@mail.de",
    phone: "+49 174 2222222",
    company: null,
    event_type: "Sonstiges",
    preferred_date: "2026-04-25",
    num_guests: 6,
    message: "Familienausflug mit Oldtimer-Erlebnis.",
    status: "declined" as const,
    created_at: "2026-02-28T11:30:00Z",
  },
];

const statusConfig: Record<
  string,
  { label: string; variant: "default" | "secondary" | "destructive" | "outline" }
> = {
  new: { label: "Neu", variant: "destructive" },
  contacted: { label: "Kontaktiert", variant: "secondary" },
  quoted: { label: "Angebot gesendet", variant: "default" },
  confirmed: { label: "Bestätigt", variant: "default" },
  declined: { label: "Abgelehnt", variant: "outline" },
};

export default function AdminInquiriesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = inquiries.filter((inq) => {
    const matchesSearch =
      search === "" ||
      inq.inquiry_number.toLowerCase().includes(search.toLowerCase()) ||
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold">Anfragen</h1>
        <p className="mt-1 text-muted-foreground">
          Oldtimer-Tour-Anfragen verwalten.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">Gesamt</p>
            <p className="text-2xl font-bold">{inquiries.length}</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">Neu</p>
            <p className="text-2xl font-bold text-red-600">
              {inquiries.filter((i) => i.status === "new").length}
            </p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">In Bearbeitung</p>
            <p className="text-2xl font-bold text-amber-600">
              {
                inquiries.filter(
                  (i) => i.status === "contacted" || i.status === "quoted"
                ).length
              }
            </p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent>
            <p className="text-sm text-muted-foreground">Bestätigt</p>
            <p className="text-2xl font-bold text-green-600">
              {inquiries.filter((i) => i.status === "confirmed").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Inquiry List */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Anfragenliste</CardTitle>
              <CardDescription>{filtered.length} Anfragen</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Suchen..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-9 rounded-md border border-input bg-background pl-9 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="all">Alle Status</option>
                <option value="new">Neu</option>
                <option value="contacted">Kontaktiert</option>
                <option value="quoted">Angebot gesendet</option>
                <option value="confirmed">Bestätigt</option>
                <option value="declined">Abgelehnt</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {filtered.map((inquiry) => (
              <div key={inquiry.id}>
                <button
                  onClick={() =>
                    setExpandedId(
                      expandedId === inquiry.id ? null : inquiry.id
                    )
                  }
                  className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <Badge variant={statusConfig[inquiry.status].variant}>
                      {statusConfig[inquiry.status].label}
                    </Badge>
                    <div>
                      <p className="font-medium">
                        {inquiry.inquiry_number} – {inquiry.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {inquiry.event_type} · {inquiry.num_guests} Gäste ·
                        Wunschtermin {formatDateShort(inquiry.preferred_date)}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatDateShort(inquiry.created_at)}
                  </span>
                </button>

                {expandedId === inquiry.id && (
                  <div className="border-t bg-muted/30 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="text-primary hover:underline"
                          >
                            {inquiry.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={`tel:${inquiry.phone}`}
                            className="text-primary hover:underline"
                          >
                            {inquiry.phone}
                          </a>
                        </div>
                        {inquiry.company && (
                          <div className="flex items-center gap-2 text-sm">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span>{inquiry.company}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            Wunschtermin:{" "}
                            {formatDateShort(inquiry.preferred_date)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{inquiry.num_guests} Gäste</span>
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-sm font-medium">Nachricht:</p>
                        <p className="text-sm text-muted-foreground">
                          {inquiry.message}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <select
                        defaultValue={inquiry.status}
                        className="h-9 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="new">Neu</option>
                        <option value="contacted">Kontaktiert</option>
                        <option value="quoted">Angebot gesendet</option>
                        <option value="confirmed">Bestätigt</option>
                        <option value="declined">Abgelehnt</option>
                      </select>
                      <button className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                        Status aktualisieren
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="py-8 text-center text-muted-foreground">
                Keine Anfragen gefunden.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
