import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-[#0E0E0E] text-white">

      {/* Background Glow - Responsive */}
      <div className="absolute left-[-150px] top-[-150px] h-[300px] w-[300px] rounded-full bg-[#310A69] opacity-30 blur-[100px] sm:left-[-200px] sm:top-[-200px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />

      <div className="absolute bottom-[-150px] right-[-150px] h-[300px] w-[300px] rounded-full bg-[#D41414] opacity-20 blur-[100px] sm:bottom-[-200px] sm:right-[-200px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">

        <div className="mx-auto w-full max-w-7xl">
          
          {/* Hero Content - Grid Layout (Text + Image) */}
          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:gap-12 lg:gap-16">

            {/* Left: Text Content */}
            <div className="text-center md:text-left">

              {/* Small Badge */}
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl sm:mb-6 sm:px-5 sm:py-2">
                <span className="text-xs text-white/70 sm:text-sm">
                  Creative Printing & Branding Specialist
                </span>
              </div>

              {/* Main Heading - Responsive */}
              <h1 className="text-3xl font-black leading-tight text-red-500 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">

                Turning Ideas Into

                <span className="block bg-gradient-to-r from-[#D41414] to-[#ffffff] bg-clip-text text-transparent">
                  Powerful Visual Design
                </span>

              </h1>

              {/* Description - Responsive */}
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-8 sm:text-base md:mx-0 md:text-lg md:leading-relaxed lg:text-xl">

                Professional Printing Design, Product Design,
                Logo Branding, Jersey Design, Social Media Design,
                and Ready-to-Print Artwork for Modern Brands.

              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:gap-4 md:items-start sm:flex-row">

                <button className="w-full rounded-full bg-[#D41414] px-8 py-3 text-xs font-semibold uppercase tracking-wider transition duration-300 hover:scale-105 hover:bg-red-700 sm:w-auto sm:py-4 sm:text-sm">
                  Start Project
                </button>

                <button className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-3 text-xs font-semibold uppercase tracking-wider backdrop-blur-xl transition duration-300 hover:bg-white/10 sm:w-auto sm:py-4 sm:text-sm md:w-auto">
                  View Portfolio
                </button>

              </div>

            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D41414] to-[#310A69] rounded-3xl opacity-75 blur-lg" />
                
                {/* Profile Image Container */}
                <div className="relative bg-[#0E0E0E] rounded-3xl overflow-hidden border border-white/10 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  
                  {/* Profile Photo */}
                  <Image
                    src="/images/profile/foto-profil.jpg"
                    alt="Aries Ikhciar - Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                    priority
                  />
                  
                  {/* Fallback Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#310A69] to-[#D41414] opacity-50" />
                  
                  {/* Badge/Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold">Aries Ikhciar</h2>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">Creative Designer</p>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Bottom Info - Responsive Grid */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:gap-6 md:grid-cols-3 lg:mt-24">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6">
              <h3 className="text-2xl font-bold text-[#D41414] sm:text-3xl">
                100+
              </h3>

              <p className="mt-2 text-xs text-white/60 sm:text-sm">
                Design Projects Completed
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6">
              <h3 className="text-2xl font-bold text-[#D41414] sm:text-3xl">
                50+
              </h3>

              <p className="mt-2 text-xs text-white/60 sm:text-sm">
                Trusted Brand Clients
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6">
              <h3 className="text-2xl font-bold text-[#D41414] sm:text-3xl">
                5+
              </h3>

              <p className="mt-2 text-xs text-white/60 sm:text-sm">
                Years Creative Experience
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>

    <Footer />
    </>
  );
}