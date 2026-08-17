import type { Metadata } from "next";
import Image from "next/image";

import GALLERY_DATA from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the High Vision Infra project and development gallery.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Gallery
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Explore Our Developments
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            A visual look at our projects, spaces and developments.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_DATA.map((item) => (
              <article
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <span className="text-xs uppercase tracking-wider text-brand-gold">
                    {item.category}
                  </span>

                  <h2 className="mt-1 font-semibold text-white">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
                    }
