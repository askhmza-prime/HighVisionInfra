"use client";

import { FormEvent, useEffect, useState } from "react";
import { CalendarDays, Mail, Phone, User } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { PROJECTS_DATA } from "@/data/projects";

export default function BookingForm() {
  const searchParams = useSearchParams();

  const projectFromUrl = searchParams.get("project") ?? "";

  const [submitted, setSubmitted] = useState(false);

  const [project, setProject] = useState(projectFromUrl);

  useEffect(() => {
    setProject(projectFromUrl);
  }, [projectFromUrl]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Phase 1:
    // frontend-only submission state.
    // Backend storage will be connected in Phase 2.

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-card sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>

        <h2 className="mt-6 text-2xl font-bold text-brand-emerald">
          Request Received
        </h2>

        <p className="mx-auto mt-3 max-w-lg leading-7 text-gray-500">
          Thank you. Your site visit request has been recorded in this
          frontend prototype. Actual lead storage will be connected in
          Phase 2.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-xl bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-goldHover"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-bold text-brand-emerald">
        Site Visit Details
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Fill in the details below and our team can contact you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </span>

            <div className="relative">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-brand-gold" />

              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-brand-gold"
              />
            </div>
          </label>

          {/* Phone */}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Mobile Number
            </span>

            <div className="relative">
              <Phone className="absolute left-3 top-3.5 h-5 w-5 text-brand-gold" />

              <input
                required
                name="phone"
                type="tel"
                placeholder="+91"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-brand-gold"
              />
            </div>
          </label>

          {/* Email */}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </span>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-brand-gold" />

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-brand-gold"
              />
            </div>
          </label>

          {/* Project */}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Project
            </span>

            <select
              required
              name="project"
              value={project}
              onChange={(event) => setProject(event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-brand-gold"
            >
              <option value="">Select a project</option>

              {PROJECTS_DATA.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>

          {/* Date */}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Date
            </span>

            <div className="relative">
              <CalendarDays className="absolute left-3 top-3.5 h-5 w-5 text-brand-gold" />

              <input
                required
                name="date"
                type="date"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-brand-gold"
              />
            </div>
          </label>

          {/* Time */}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Time
            </span>

            <input
              required
              name="time"
              type="time"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-gold"
            />
          </label>
        </div>

        {/* Message */}
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">
            Message
          </span>

          <textarea
            name="message"
            rows={4}
            placeholder="Anything you'd like us to know?"
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-gold"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-brand-gold px-6 py-4 font-semibold text-white transition hover:bg-brand-goldHover"
        >
          Request Site Visit
        </button>

        <p className="text-center text-xs text-gray-400">
          Secure frontend form • Lead storage will be connected in Phase 2.
        </p>
      </form>
    </div>
  );
      }
