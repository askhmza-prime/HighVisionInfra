import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/constants";

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-parchment relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate">
            Trusted by Hundreds of Happy Families
          </h2>
          <p className="text-sm text-gray-600">
            Hear directly from buyers and investors who found their ideal property with High Vision Infra.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-brand-gold/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-emerald text-brand-gold flex items-center justify-center font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
