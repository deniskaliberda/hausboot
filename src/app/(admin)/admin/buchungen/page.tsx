"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Eye,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
import { formatEuro } from "@/lib/utils/currency";
import { formatDateShort } from "@/lib/utils/dates";

// Demo data
const bookings = [
  {
    id: "1",
    booking_number: "HB-2026-0012",
    guest_name: "Familie Müller",
    guest_email: "mueller@example.com",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-03-15",
    check_out: "2026-03-19",
    nights: 4,
    guests: 6,
    status: "confirmed" as const,
    total_price: 155000,
    paid_at: "2026-03-01T14:30:00Z",
  },
  {
    id: "2",
    booking_number: "HB-2026-0013",
    guest_name: "Thomas Weber",
    guest_email: "weber@example.com",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-03-22",
    check_out: "2026-03-25",
    nights: 3,
    guests: 2,
    status: "confirmed" as const,
    total_price: 120000,
    paid_at: "2026-03-05T10:15:00Z",
  },
  {
    id: "3",
    booking_number: "HB-2026-0014",
    guest_name: "Anna Schmidt",
    guest_email: "schmidt@example.com",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-04-01",
    check_out: "2026-04-05",
    nights: 4,
    guests: 4,
    status: "pending" as const,
    total_price: 175000,
    paid_at: null,
  },
  {
    id: "4",
    booking_number: "HB-2026-0011",
    guest_name: "Peter Braun",
    guest_email: "braun@example.com",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-03-08",
    check_out: "2026-03-12",
    nights: 4,
    guests: 5,
    status: "completed" as const,
    total_price: 155000,
    paid_at: "2026-02-20T09:00:00Z",
  },
  {
    id: "5",
    booking_number: "HB-2026-0010",
    guest_name: "Lisa Hoffmann",
    guest_email: "hoffmann@example.com",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-03-01",
    check_out: "2026-03-04",
    nights: 3,
    guests: 3,
    status: "cancelled" as const,
    total_price: 120000,
    paid_at: "2026-02-15T16:45:00Z",
  },
];

const statusConfig: Record<
  string,
  { label: string; variant: "default" | "secondary" | "destructive" | "outline" }
> = {
  confirmed: { label: "Bestätigt", variant: "default" },
  pending: { label: "Ausstehend", variant: "secondary" },
  cancelled: { label: "Storniert", variant: "destructive" },
  completed: { label: "Abgeschlossen", variant: "outline" },
  refunded: { label: "Erstattet", variant: "destructive" },
};

export default function AdminBookingsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = bookings.filter((b) => {
    const matchesSearch =
      search === "" ||
      b.booking_number.toLowerCase().includes(search.toLowerCase()) ||
      b.guest_name.toLowerCase().includes(search.toLowerCase()) ||
      b.guest_email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold">Buchungen</h1>
        <p className="mt-1 text-muted-foreground">
          Alle Buchungen verwalten und einsehen.
        </p>
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Buchungsliste</CardTitle>
              <CardDescription>{filtered.length} Buchungen</CardDescription>
            </div>
            <div className="flex gap-2">
              {/* Search */}
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
              {/* Status filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="all">Alle Status</option>
                <option value="confirmed">Bestätigt</option>
                <option value="pending">Ausstehend</option>
                <option value="completed">Abgeschlossen</option>
                <option value="cancelled">Storniert</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Buchung</TableHead>
                <TableHead>Gast</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Check-out</TableHead>
                <TableHead>Nächte</TableHead>
                <TableHead>Betrag</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.booking_number}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{booking.guest_name}</p>
                      <p className="text-xs text-muted-foreground">
                        {booking.guest_email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{formatDateShort(booking.check_in)}</TableCell>
                  <TableCell>{formatDateShort(booking.check_out)}</TableCell>
                  <TableCell>{booking.nights}</TableCell>
                  <TableCell>{formatEuro(booking.total_price)}</TableCell>
                  <TableCell>
                    <Badge variant={statusConfig[booking.status].variant}>
                      {statusConfig[booking.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Link
                        href={`/admin/buchungen/${booking.id}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                        title="Details anzeigen"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      {booking.status === "confirmed" && (
                        <button
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-destructive hover:bg-destructive/10"
                          title="Stornieren"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="py-8 text-center text-muted-foreground">
                    Keine Buchungen gefunden.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
