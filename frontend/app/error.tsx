"use client";

import { useEffect } from "react";
import { RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-parchment px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-black text-brand-gold">
          Oops!
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-brand-emerald">
          Something went wrong
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-goldHover"
          >
            <RefreshCcw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-gold px-6 py-3 font-semibold text-brand-emerald transition hover:bg-brand-gold hover:text-white"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
          }
