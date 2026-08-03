import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-parchment px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-black text-brand-gold">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-brand-emerald">
          Page Not Found
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-goldHover"
          >
            <Home className="h-5 w-5" />
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-gold px-6 py-3 font-semibold text-brand-emerald transition hover:bg-brand-gold hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
