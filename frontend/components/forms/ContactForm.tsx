"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-card sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>

        <h2 className="mt-6 text-2xl font-bold text-brand-emerald">
          Thank You
        </h2>

        <p className="mt-3 text-gray-500">
          Your message has been received.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-xl bg-brand-gold px-5 py-3 font-semibold text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-card sm:p-8"
    >
      <h2 className="text-2xl font-bold text-brand-emerald">
        Send us a message
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Have a question? Send us your details.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your Name"
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-gold"
        />

        <input
          required
          name="phone"
          type="tel"
          placeholder="Mobile Number"
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-gold"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-gold sm:col-span-2"
        />

        <textarea
          required
          name="message"
          rows={6}
          placeholder="Your message..."
          className="resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-gold sm:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-brand-gold px-6 py-4 font-semibold text-white transition hover:bg-brand-goldHover"
      >
        Send Message
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        Contact storage will be connected in Phase 2.
      </p>
    </form>
  );
}
