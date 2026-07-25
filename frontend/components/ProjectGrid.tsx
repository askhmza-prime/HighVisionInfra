"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project, PropertyType } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
}

export default function ProjectGrid({ projects, showFilters = true }: ProjectGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", "Residential", "Commercial", "Premium"];

  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter((p) => p.type.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-emerald text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-gold"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid Display */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500 text-sm">No properties found in this category.</p>
        </div>
      )}
    </div>
  );
}
