'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SocietalImpact() {
  return (
    <section className="bg-gradient-to-b from-[#001f36] to-[#003b5c] text-white font-sans min-h-screen relative overflow-hidden">
      {/* Subtle decorative gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-20 md:py-28 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-blue-200 font-semibold">
            Societal Impact
          </div>
          <h1 className="text-4xl md:text-5xl font-light mt-4 max-w-3xl mx-auto leading-tight">
            Empowering change through <span className="font-semibold text-blue-300">v10x</span> initiatives
          </h1>
          <p className="text-blue-100 mt-6 text-lg max-w-2xl mx-auto font-light">
            Building inclusive, sustainable, and impactful communities by sharing knowledge, innovation, and opportunities.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Card 1 */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-2xl">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-200 transition-colors duration-200"
              >
                v10x Foundation &gt;
              </Link>
              <p className="text-base font-light text-blue-100 mt-3 leading-relaxed">
                Free skill-building programs helping nonprofits and individuals scale impact through digital empowerment and leadership training.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-2xl">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Learning journey"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-200 transition-colors duration-200"
              >
                v10x Forward &gt;
              </Link>
              <p className="text-base font-light text-blue-100 mt-3 leading-relaxed">
                A free online learning path helping professionals develop leadership, collaboration, and innovation skills for a changing world.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90e7ba6b9a52?auto=format&fit=crop&w=1200&q=80"
                alt="Sustainable innovation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Link
                href="#"
                className="text-xl font-semibold text-gray-900 hover:text-blue-700 transition-colors duration-200"
              >
                Sustainable Inclusive Growth &gt;
              </Link>
              <p className="text-base font-light text-gray-700 mt-3 leading-relaxed">
                Partnering with organizations to innovate responsibly, achieve sustainable growth, and build inclusive futures for all communities.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
