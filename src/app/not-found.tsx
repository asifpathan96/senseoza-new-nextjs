import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-ambient">
      <section className="relative overflow-hidden bg-[#0D0D1A] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="hero-frame">
            <div className="hero-frame-inner rounded-[2.5rem] px-6 py-16 text-center sm:px-12">
              <p className="section-kicker mb-4">404</p>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Page not found
              </h1>
              <p className="mx-auto mt-4 max-w-md text-white/80">
                The page you are looking for does not exist. Head back home or explore our services.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="btn-glow inline-flex rounded-full px-6 py-3 text-sm font-semibold text-[#0D0D1A]"
                >
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
