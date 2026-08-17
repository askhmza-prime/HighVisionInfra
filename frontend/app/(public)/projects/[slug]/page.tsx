import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { notFound } from "next/navigation";

import { PROJECTS_DATA } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS_DATA.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = PROJECTS_DATA.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-emerald py-12 text-white sm:py-20">
        <div className="container-custom">
          <Link
            href="/projects"
            className="text-sm text-white/60 transition hover:text-brand-gold"
          >
            ← Back to Projects
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
                {project.type}
              </span>

              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                {project.title}
              </h1>

              <div className="mt-5 flex items-center gap-2 text-white/70">
                <MapPin className="h-5 w-5 text-brand-gold" />
                {project.location}
              </div>

              <p className="mt-6 max-w-xl leading-8 text-white/70">
                {project.description}
              </p>

              <Link
                href={`/book-site-visit?project=${project.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-goldHover"
              >
                Book Site Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick information */}
      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <Home className="h-6 w-6 text-brand-gold" />

              <p className="mt-4 text-sm text-gray-500">
                Starting From
              </p>

              <h2 className="mt-1 text-2xl font-bold text-brand-emerald">
                {project.startingPrice}
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <MapPin className="h-6 w-6 text-brand-gold" />

              <p className="mt-4 text-sm text-gray-500">
                Plot Range
              </p>

              <h2 className="mt-1 text-2xl font-bold text-brand-emerald">
                {project.sqYardsRange}
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <ShieldCheck className="h-6 w-6 text-brand-gold" />

              <p className="mt-4 text-sm text-gray-500">
                Status
              </p>

              <h2 className="mt-1 text-2xl font-bold text-brand-emerald">
                {project.approvalStatus}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
                Project Highlights
              </span>

              <h2 className="mt-4 text-3xl font-bold text-brand-emerald">
                Designed around you.
              </h2>

              <div className="mt-8 space-y-4">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-gray-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold text-brand-emerald">
                Investment Information
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex justify-between gap-5 border-b pb-4">
                  <span className="text-gray-500">Starting Price</span>

                  <span className="font-semibold text-brand-emerald">
                    {project.startingPrice}
                  </span>
                </div>

                <div className="flex justify-between gap-5 border-b pb-4">
                  <span className="text-gray-500">Plot Range</span>

                  <span className="font-semibold text-brand-emerald">
                    {project.sqYardsRange}
                  </span>
                </div>

                <div className="flex justify-between gap-5 border-b pb-4">
                  <span className="text-gray-500">Bank Loan</span>

                  <span className="font-semibold text-brand-emerald">
                    {project.bankLoanAvailable
                      ? "Available"
                      : "Contact Us"}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-gray-500">Property Type</span>

                  <span className="font-semibold text-brand-emerald">
                    {project.type}
                  </span>
                </div>
              </div>

              <Link
                href={`/book-site-visit?project=${project.slug}`}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3 font-semibold text-white transition hover:bg-brand-goldHover"
              >
                Schedule a Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
