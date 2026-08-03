import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import SITE from "@/constants/site";
import { MapPin, ShieldCheck, CheckCircle2, ArrowLeft, Phone, Calendar } from "lucide-react";
import BookingForm from "@/components/forms/BookingForm";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-parchment pb-20">
      {/* Top Banner Header */}
      <section className="bg-brand-emerald text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs text-brand-gold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-xs font-semibold mb-2">
                {project.approvalStatus}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold">{project.title}</h1>
              <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>{project.location}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-right">
              <span className="text-xs text-gray-300 block uppercase">Starting Price</span>
              <span className="text-2xl font-extrabold text-brand-gold">{project.startingPrice}</span>
              {project.pricePerSqYd && (
                <span className="text-xs text-gray-300 block mt-1">{project.pricePerSqYd}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Details & Gallery */}
        <div className="lg:col-span-2 space-y-10">
          {/* Main Cover Photo */}
          <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-gray-900">About {project.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>

            {/* Specs Quick Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <span className="text-xs text-gray-400 block">Plot Sizes</span>
                <span className="text-sm font-bold text-gray-800">{project.sqYardsRange}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Approval</span>
                <span className="text-sm font-bold text-gray-800">{project.approvalStatus}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Bank Loans</span>
                <span className="text-sm font-bold text-gray-800">
                  {project.bankLoanAvailable ? "Available (Up to 70%)" : "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Project Highlights / Amenities */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Project Highlights & Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-brand-parchment/60 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Site Visit Booking Box */}
        <div className="space-y-6">
          <div className="sticky top-28">
            <BookingForm />

            <div className="mt-6 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-xs text-gray-500">Need immediate assistance?</p>
              <a
                href={`tel:${SITE_DETAILS.phone}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-emerald hover:text-brand-gold transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Direct: {SITE_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
