# Hausboot-Vermietung Website

## Project Overview
Luxury houseboat rental website for Berlin-Schmöckwitz. Direct booking with Stripe + Oldtimer Tour inquiry page.

## Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + shadcn/ui (base-nova style)
- **Database**: Supabase (PostgreSQL + Auth + Storage)
- **Payments**: Stripe Checkout
- **Emails**: Resend + React Email
- **Deployment**: Vercel
- **Forms**: react-hook-form + Zod v4
- **Icons**: Lucide React

## Key Conventions
- All prices stored in **EUR cents** (integer), converted to display format only in UI
- Language: German (lang="de"), all user-facing text in German
- Fonts: next/font/google (self-hosted at build time by Next.js, DSGVO-safe)
- Use `cn()` from `@/lib/utils` for className merging
- Use shadcn/ui components from `@/components/ui/`
- Server Actions in `src/lib/actions/`
- Zod schemas in `src/lib/utils/validation.ts`

## Route Groups
- `(marketing)` - Public pages with Navbar + Footer
- `(legal)` - Legal pages (Impressum, Datenschutz, etc.)
- `(admin)` - Admin panel with sidebar, protected by Supabase Auth

## Database
- Supabase project, migrations in `supabase/migrations/`
- RLS enabled on all tables
- Service role key only in server-side code

## Important Legal Requirements (German Law)
- Impressum accessible within 2 clicks
- DSGVO/GDPR-compliant privacy policy
- Cookie consent banner before non-essential cookies
- Self-hosted fonts (no external CDN requests)
- All prices incl. MwSt (Preisangabenverordnung)
