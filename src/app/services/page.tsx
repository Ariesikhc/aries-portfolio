import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Logo & Branding",
      desc: "Menciptakan identitas visual yang memorable dan powerful untuk brand Anda",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography System"],
      price: "Mulai dari Rp.300.000",
      timeline: "7-14 hari"
    },
    {
      id: 2,
      icon: "👕",
      title: "Jersey & Apparel Design",
      desc: "Design custom jersey, kaos, dan merchandise dengan style yang trendy",
      features: ["Jersey Design", "Mockup Creation", "Print Ready Files", "Revisions Unlimited"],
      price: "Mulai dari Rp.85.000 per item",
      timeline: "3-7 hari"
    },
    {
      id: 3,
      icon: "📱",
      title: "Social Media Design",
      desc: "Konten visual yang engaging untuk semua platform media sosial Anda",
      features: ["Instagram Posts", "Stories", "Reels Thumbnails", "Feed Design"],
      price: "Mulai dari Rp.105.000",
      timeline: "3-5 hari"
    },
    {
      id: 4,
      icon: "📦",
      title: "Product Packaging",
      desc: "Design packaging yang menarik dan functional untuk produk Anda",
      features: ["3D Packaging Design", "Label Design", "Print Specifications", "Multiple Variations"],
      price: "Mulai dari Rp.1.500.000",
      timeline: "5-10 hari"
    },
    {
      id: 5,
      icon: "🖨️",
      title: "Print Design",
      desc: "Design untuk kebutuhan print seperti brosur, poster, dan materi marketing",
      features: ["Brochure Design", "Poster Design", "Business Cards", "Print-Ready Files"],
      price: "Mulai dari Rp.100.000",
      timeline: "5-7 hari"
    },
  ];

  const process = [
    { step: 1, title: "Konsultasi", desc: "Diskusi kebutuhan, visi, dan budget Anda" },
    { step: 2, title: "Research", desc: "Riset market, kompetitor, dan target audience" },
    { step: 3, title: "Konsep", desc: "Brainstorming dan pembuatan konsep awal" },
    { step: 4, title: "Design", desc: "Pembuatan design dengan attention to detail tinggi" },
    { step: 5, title: "Revisi", desc: "Revisi unlimited hingga Anda puas" },
    { step: 6, title: "Finalisasi", desc: "Deliver file dalam berbagai format yang dibutuhkan" },
  ];

  return (
    <>
      <main className="relative overflow-hidden bg-[#0E0E0E] text-white">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-150px] h-[300px] w-[300px] rounded-full bg-[#310A69] opacity-30 blur-[100px] sm:left-[-200px] sm:top-[-200px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
      <div className="absolute bottom-[-150px] right-[-150px] h-[300px] w-[300px] rounded-full bg-[#D41414] opacity-20 blur-[100px] sm:bottom-[-200px] sm:right-[-200px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />

      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">
            Services
            <span className="block bg-gradient-to-r from-[#D41414] to-[#ffffff] bg-clip-text text-transparent">
              Yang Kami Tawarkan
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
            Berbagai layanan design profesional untuk kebutuhan bisnis Anda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-[#D41414]/50 transition-all duration-300 hover:bg-white/10">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.desc}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Estimasi:</span>
                    <span className="text-[#D41414] font-semibold">{service.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Harga:</span>
                    <span className="text-[#D41414] font-semibold">{service.price}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 border-t border-white/10 pt-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D41414]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full rounded-full border border-[#D41414] bg-[#D41414]/10 py-2 font-semibold text-[#D41414] transition hover:bg-[#D41414] hover:text-white">
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center sm:text-4xl mb-16">Proses Kerja Saya</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D41414] to-[#310A69] font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#D41414] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Siap untuk Memulai Project?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Hubungi saya sekarang dan mari diskusikan kebutuhan design Anda
          </p>
          <button className="rounded-full bg-[#D41414] px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700">
            Hubungi Sekarang
          </button>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}
