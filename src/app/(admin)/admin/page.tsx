import {
  CalendarDays,
  BookOpen,
  MessageSquare,
  TrendingUp,
  Euro,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatEuro } from "@/lib/utils/currency";
import { formatDateShort } from "@/lib/utils/dates";

// Demo data — will be replaced with Supabase queries
const stats = {
  totalBookings: 24,
  pendingBookings: 3,
  revenue: 2450000, // cents
  openInquiries: 5,
};

const upcomingBookings = [
  {
    id: "1",
    booking_number: "HB-2026-0012",
    guest_name: "Familie Müller",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-03-15",
    check_out: "2026-03-19",
    status: "confirmed" as const,
    total_price: 155000,
  },
  {
    id: "2",
    booking_number: "HB-2026-0013",
    guest_name: "Thomas Weber",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-03-22",
    check_out: "2026-03-25",
    status: "confirmed" as const,
    total_price: 120000,
  },
  {
    id: "3",
    booking_number: "HB-2026-0014",
    guest_name: "Anna Schmidt",
    property: "Luxus Hausboot Dahme",
    check_in: "2026-04-01",
    check_out: "2026-04-05",
    status: "pending" as const,
    total_price: 175000,
  },
];

const recentInquiries = [
  {
    id: "1",
    inquiry_number: "OT-2026-0003",
    name: "Markus Fischer",
    event_type: "Firmenevent",
    preferred_date: "2026-04-10",
    status: "new" as const,
  },
  {
    id: "2",
    inquiry_number: "OT-2026-0004",
    name: "Julia Becker",
    event_type: "Geburtstag",
    preferred_date: "2026-05-20",
    status: "contacted" as const,
  },
];

const statusColors = {
  confirmed: "default" as const,
  pending: "secondary" as const,
  cancelled: "destructive" as const,
  completed: "outline" as const,
};

const statusLabels: Record<string, string> = {
  confirmed: "Bestätigt",
  pending: "Ausstehend",
  cancelled: "Storniert",
  completed: "Abgeschlossen",
  new: "Neu",
  contacted: "Kontaktiert",
  quoted: "Angebot gesendet",
};

const inquiryStatusColors = {
  new: "destructive" as const,
  contacted: "secondary" as const,
  quoted: "default" as const,
  confirmed: "default" as const,
  declined: "outline" as const,
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Willkommen zurück. Hier ist Ihre Übersicht.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardDescription>Buchungen gesamt</CardDescription>
            <CardTitle className="text-2xl">{stats.totalBookings}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <BookOpen className="h-3 w-3" />
              <span>{stats.pendingBookings} ausstehend</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Umsatz (Monat)</CardDescription>
            <CardTitle className="text-2xl">
              {formatEuro(stats.revenue)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>+12% zum Vormonat</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Nächster Check-in</CardDescription>
            <CardTitle className="text-2xl">
              {formatDateShort(upcomingBookings[0].check_in)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <span>{upcomingBookings[0].guest_name}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Offene Anfragen</CardDescription>
            <CardTitle className="text-2xl">{stats.openInquiries}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-amber-600">
              <MessageSquare className="h-3 w-3" />
              <span>2 unbeantwortet</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Bookings */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Anstehende Buchungen</CardTitle>
            <CardDescription>Die nächsten Check-ins</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {booking.booking_number}
                      </span>
                      <Badge variant={statusColors[booking.status]}>
                        {statusLabels[booking.status]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {booking.guest_name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDateShort(booking.check_in)} –{" "}
                      {formatDateShort(booking.check_out)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {formatEuro(booking.total_price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Inquiries */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Aktuelle Anfragen</CardTitle>
            <CardDescription>Oldtimer-Tour-Anfragen</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {inquiry.inquiry_number}
                      </span>
                      <Badge variant={inquiryStatusColors[inquiry.status]}>
                        {statusLabels[inquiry.status]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {inquiry.name} – {inquiry.event_type}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Wunschtermin: {formatDateShort(inquiry.preferred_date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Aufgaben</CardTitle>
          <CardDescription>Offene Aufgaben und Erinnerungen</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <span className="text-sm">
                Reinigung für HB-2026-0012 am 19.03. noch nicht bestätigt
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950">
              <Clock className="h-4 w-4 text-amber-600" />
              <span className="text-sm">
                2 Oldtimer-Anfragen seit 3+ Tagen unbeantwortet
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">
                Airbnb-Kalender zuletzt synchronisiert: heute 14:30 Uhr
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
