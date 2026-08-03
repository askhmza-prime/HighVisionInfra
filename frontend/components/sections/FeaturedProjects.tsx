import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectGrid from "@/components/cards/ProjectGrid";
import { PROJECTS_DATA } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = PROJECTS_DATA.filter(
      (project) => project.isFeatured
        );

          return (
              <section className="bg-white py-20">
                    <div className="container-custom">
                            {/* Section Header */}
                                    <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                                              <div>
                                                          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
                                                                        Featured Projects
                                                                                    </span>

                                                                                                <h2 className="mt-3 text-3xl font-bold text-brand-emerald sm:text-4xl">
                                                                                                              Premium Developments
                                                                                                                          </h2>

                                                                                                                                      <p className="mt-4 max-w-2xl text-gray-600">
                                                                                                                                                    Explore our carefully planned residential communities,
                                                                                                                                                                  designed for comfortable living and long-term investment.
                                                                                                                                                                              </p>
                                                                                                                                                                                        </div>

                                                                                                                                                                                                  <Link
                                                                                                                                                                                                              href="/projects"
                                                                                                                                                                                                                          className="inline-flex items-center gap-2 rounded-xl border border-brand-gold px-5 py-3 text-sm font-semibold text-brand-emerald transition hover:bg-brand-gold hover:text-white"
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                View All Projects
                                                                                                                                                                                                                                                            <ArrowRight className="h-4 w-4" />
                                                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                      {/* Grid */}
                                                                                                                                                                                                                                                                                              <ProjectGrid
                                                                                                                                                                                                                                                                                                        projects={featuredProjects}
                                                                                                                                                                                                                                                                                                                  showFilters={false}
                                                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                      }