import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import { PROJECTS_DATA } from "@/constants";
import { ShieldCheck, Award, TrendingUp, Users } from "lucide-react";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.isFeatured);

  return (
    <main className="min-h-screen bg-brand-parchment">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Value Proposition Stats Bar */}
      <section className="bg-brand-emerald text-white py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">100% Clear Title</h4>
              <p className="text-xs text-gray-300">DTCP / HMDA Approved</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Bank Loan Support</h4>
              <p className="text-xs text-gray-300">Instant Loan Pre-approvals</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">High Appreciation</h4>
              <p className="text-xs text-gray-300">Rapid Development Zones</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">500+ Buyers</h4>
              <p className="text-xs text-gray-300">Satisfied Property Owners</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
              Prime Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate mt-1">
              Featured Properties
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Explore our prime open plots in rapidly expanding growth corridors with ready infrastructure.
          </p>
        </div>

        <ProjectGrid projects={featuredProjects} showFilters={true} />
      </section>

      {/* 4. Book Free Site Visit Section */}
      <section className="py-20 bg-brand-slate text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
              VIP Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Ready to Inspect Your Future Plot?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We offer complimentary cab pick-and-drop services right from your home to our site locations. Accompanied by our dedicated real estate advisors to walk you through layout plans and legal approvals.
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                Free AC Cab Pick-Up & Drop
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                Live Spot-Booking Offers Available
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                Zero Consultation Fees
              </li>
            </ul>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <Testimonials />
    </main>
  );
}
