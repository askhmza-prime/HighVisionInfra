export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-parchment">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-brand-border border-t-brand-gold" />

        {/* Text */}
        <h2 className="mt-6 text-xl font-semibold text-brand-emerald">
          Loading...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we prepare your experience.
        </p>
      </div>
    </main>
  );
}
