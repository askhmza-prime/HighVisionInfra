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
    <article className="group overflow-hidden rounded-3xl border border-brand-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-white">
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-brand-emerald">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <MapPin className="h-4 w-4 text-brand-gold" />
          <span>{location}</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Starting From
            </p>

            <h4 className="text-xl font-bold text-brand-emerald">
              {price}
            </h4>
          </div>

          <Link
            href={`/projects/${slug}`}
            className="rounded-xl bg-brand-gold p-3 text-white transition hover:bg-brand-goldHover"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
