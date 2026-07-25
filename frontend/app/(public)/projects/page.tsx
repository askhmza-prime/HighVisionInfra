"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/constants";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // Filter projects by title/location and property type
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "All" ||
      project.type.toLowerCase() === selectedType.toLowerCase();

    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-brand-parchment py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
            Our Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-slate">
            Explore Open Plots & Estates
          </h1>
          <p className="text-sm text-gray-600">
            Browse through our verified, DTCP & HMDA approved plotting developments in prime growth corridors.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or location (e.g. Shadnagar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-brand-parchment/60 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 hidden lg:block mr-2" />
            {["All", "Residential", "Commercial", "Premium"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedType === type
                    ? "bg-brand-emerald text-white shadow-sm"
                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-brand-gold"
                }`}
              >
                {type === "All" ? "All Types" : type}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid Results */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 space-y-3">
            <p className="text-gray-500 font-medium">No projects match your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("All");
              }}
              className="text-xs text-brand-gold font-semibold underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
