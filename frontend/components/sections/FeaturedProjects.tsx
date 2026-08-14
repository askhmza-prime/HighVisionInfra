import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProjectGrid from "@/components/cards/ProjectGrid";
import { PROJECTS_DATA } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Featured Projects
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-brand-emerald sm:text-4xl lg:text-5xl">
              Places worth
              <span className="font-serif font-normal italic text-brand-gold">
                {" "}coming home to.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Explore thoughtfully planned developments in promising
              locations, designed around comfortable living and long-term
              value.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-3 rounded-xl border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-emerald transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:shadow-soft"
          >
            <span>View All Projects</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-parchment transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
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
