import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  title: string;
  slug: string;
  location: string;
  price: string;
  image: string;
  type: string;
}

export default function ProjectCard({
  title,
  slug,
  location,
  price,
  image,
  type,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-brand-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-premium">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Image contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/35 via-transparent to-transparent opacity-70" />

        {/* Project Type */}
        <span className="absolute left-4 top-4 rounded-lg border border-white/30 bg-brand-emerald/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {type}
        </span>

        {/* Image corner detail */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-brand-gold/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-brand-emerald sm:text-2xl">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 shrink-0 text-brand-gold" />
          <span>{location}</span>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-brand-border pt-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Starting From
            </p>

            <p className="mt-1 text-lg font-semibold tracking-tight text-brand-emerald">
              {price}
            </p>
          </div>

          <Link
            href={`/projects/${slug}`}
            aria-label={`View ${title}`}
            className="group/action flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-emerald text-white transition-all duration-300 hover:bg-brand-gold hover:shadow-soft"
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
