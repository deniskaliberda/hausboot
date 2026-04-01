import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Tipps & Inspiration für Ihren Hausboot-Urlaub",
  description:
    "Reisetipps, Ausflugsziele und Insider-Wissen für Ihren Aufenthalt auf dem Luxus-Hausboot in Berlin-Schmöckwitz an der Dahme.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Blog
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
          Tipps &amp; Inspiration
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Alles rund um Ihren Hausboot-Urlaub in Berlin-Schmöckwitz
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:shadow-lg"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={800}
                height={450}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  {post.category}
                </span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold leading-snug group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Weiterlesen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
