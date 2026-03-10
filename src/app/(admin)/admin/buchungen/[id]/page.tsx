import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Clock,
  Users,
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
import { Separator } from "@/components/ui/separator";
import { formatEuro } from "@/lib/utils/currency";
import { formatDate, formatDateShort } from "@/lib/utils/dates";

// Demo data — will be replaced with Supabase query
const bookingsData: Record<string, {
  id: string;
  booking_number: string;
  guest: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zip: string;
    country: string;
  };
  property_name: string;
  property_slug: string;
  check_in: string;
  check_out: string;
  nights: number;
  num_adults: number;
  num_children: number;
  price_per_night: number;
  subtotal: number;
  cleaning_fee: number;
  total_price: number;
  status: "pending" | "confirmed" | "completed" | "cancelled" | "refunded";
  stripe_payment_intent_id: string | null;
  paid_at: string | null;
  created_at: string;
  special_requests: string | null;
  cleaning_status: "pending" | "notified" | "confirmed" | "completed";
  cleaning_staff: string;
}> = {
  "1": {
    id: "1",
    booking_number: "HB-2026-0012",
    guest: {
      first_name: "Maria",
      last_name: "Müller",
      email: "mueller@example.com",
      phone: "+49 170 1234567",
      address: "Hauptstraße 42",
      city: "Berlin",
      zip: "10115",
      country: "Deutschland",
    },
    property_name: "Luxus Hausboot mit Sauna, WLAN und Kamin",
    property_slug: "luxus-hausboot-dahme",
    check_in: "2026-03-15",
    check_out: "2026-03-19",
    nights: 4,
    num_adults: 4,
    num_children: 2,
    price_per_night: 35000,
    subtotal: 140000,
    cleaning_fee: 15000,
    total_price: 155000,
    status: "confirmed",
    stripe_payment_intent_id: "pi_3abc123def456",
    paid_at: "2026-03-01T14:30:00Z",
    created_at: "2026-03-01T14:25:00Z",
    special_requests: "Bitte Kinderbett im Schlafzimmer bereitstellen. Ankunft gegen 16 Uhr.",
    cleaning_status: "notified",
    cleaning_staff: "Reinigungsteam Berlin",
  },
};

const statusConfig: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  confirmed: { label: "Bestätigt", variant: "default" },
  pending: { label: "Ausstehend", variant: "secondary" },
  cancelled: { label: "Storniert", variant: "destructive" },
  completed: { label: "Abgeschlossen", variant: "outline" },
  refunded: { label: "Erstattet", variant: "destructive" },
};

const cleaningStatusConfig: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Ausstehend", variant: "secondary" },
  notified: { label: "Benachrichtigt", variant: "secondary" },
  confirmed: { label: "Bestätigt", variant: "default" },
  completed: { label: "Erledigt", variant: "outline" },
};

export default async function BookingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const booking = bookingsData[id];

  if (!booking) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/buchungen"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-3xl font-bold">
                {booking.booking_number}
              </h1>
              <Badge variant={statusConfig[booking.status].variant}>
                {statusConfig[booking.status].label}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Erstellt am {formatDate(booking.created_at)}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {booking.status === "confirmed" && (
            <>
              <button className="inline-flex h-9 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted">
                E-Mail senden
              </button>
              <button className="inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-4 text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90">
                Stornieren
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Info */}
        <div className="space-y-6 lg:col-span-2">
          {/* Booking Details */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Buchungsdetails
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Objekt</p>
                  <p className="font-medium">{booking.property_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gäste</p>
                  <p className="font-medium">
                    {booking.num_adults} Erwachsene
                    {booking.num_children > 0 &&
                      `, ${booking.num_children} Kinder`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Check-in</p>
                  <p className="font-medium">{formatDate(booking.check_in)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Check-out</p>
                  <p className="font-medium">{formatDate(booking.check_out)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nächte</p>
                  <p className="font-medium">{booking.nights}</p>
                </div>
              </div>
              {booking.special_requests && (
                <>
                  <Separator className="my-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Sonderwünsche
                    </p>
                    <p className="mt-1 text-sm">{booking.special_requests}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Guest Info */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Gast
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {booking.guest.first_name} {booking.guest.last_name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`mailto:${booking.guest.email}`}
                    className="text-primary hover:underline"
                  >
                    {booking.guest.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`tel:${booking.guest.phone}`}
                    className="text-primary hover:underline"
                  >
                    {booking.guest.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {booking.guest.address}, {booking.guest.zip}{" "}
                    {booking.guest.city}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cleaning */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Reinigung
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{booking.cleaning_staff}</p>
                  <p className="text-sm text-muted-foreground">
                    Reinigungstermin: {formatDate(booking.check_out)}
                  </p>
                </div>
                <Badge
                  variant={
                    cleaningStatusConfig[booking.cleaning_status].variant
                  }
                >
                  {cleaningStatusConfig[booking.cleaning_status].label}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Breakdown */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Preisübersicht
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {booking.nights} Nächte × {formatEuro(booking.price_per_night)}
                  </span>
                  <span>{formatEuro(booking.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Reinigungsgebühr</span>
                  <span>{formatEuro(booking.cleaning_fee)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Gesamt</span>
                  <span>{formatEuro(booking.total_price)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Zahlung
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge
                    variant={booking.paid_at ? "default" : "secondary"}
                  >
                    {booking.paid_at ? "Bezahlt" : "Offen"}
                  </Badge>
                </div>
                {booking.paid_at && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bezahlt am</span>
                    <span>{formatDateShort(booking.paid_at)}</span>
                  </div>
                )}
                {booking.stripe_payment_intent_id && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Stripe ID</span>
                    <span className="font-mono text-xs">
                      {booking.stripe_payment_intent_id.slice(0, 15)}...
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
