import type { Metadata } from "next";

import ProjectGrid from "@/components/cards/ProjectGrid";
import { PROJECTS_DATA } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore premium residential and plotted developments by High Vision Infra.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Our Projects
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Premium Communities
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Explore our thoughtfully planned developments designed for
            comfortable living and long-term investment.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom">
          <ProjectGrid projects={PROJECTS_DATA} />
        </div>
      </section>
    </main>
  );
          }
