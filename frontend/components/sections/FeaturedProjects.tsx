import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectGrid from "@/components/cards/ProjectGrid";
import { PROJECTS_DATA } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Featured Projects
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-emerald sm:text-4xl">
              Discover Premium Communities
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-gray-600">
              Explore our premium plotted developments designed for
              comfortable living and long-term investment.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-gold px-5 py-3 font-semibold text-brand-emerald transition hover:bg-brand-gold hover:text-white"
          >
            View All
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Projects */}
        <ProjectGrid
          projects={PROJECTS_DATA}
          featuredOnly
        />
      </div>
    </section>
  );
}
