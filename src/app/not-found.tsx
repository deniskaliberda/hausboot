import Link from "next/link";
import { Anchor } from "lucide-react";
import { buttonVariants } from "@/lib/utils/button-variants";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Anchor className="h-12 w-12 text-primary" />
      <h1 className="mt-6 font-serif text-4xl font-bold">
        Seite nicht gefunden
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Die angeforderte Seite existiert leider nicht.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className={cn(buttonVariants())}>
          Zur Startseite
        </Link>
        <Link
          href="/buchen"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Jetzt buchen
        </Link>
      </div>
    </div>
  );
}
