import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-emerald shadow-sm">
          {project.type} Plots
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-gold transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-gray-400 block uppercase font-medium">
              Starting From
            </span>
            <span className="text-base font-extrabold text-brand-emerald">
              {project.startingPrice} <span className="text-xs font-normal text-gray-500">Onwards</span>
            </span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="w-9 h-9 rounded-full bg-brand-parchment hover:bg-brand-gold text-brand-emerald hover:text-white flex items-center justify-center transition-all duration-200"
            aria-label={`View details for ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
