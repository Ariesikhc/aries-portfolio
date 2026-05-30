"use client";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      company: "PT Tech Startup",
      position: "CEO",
      image: "/images/testimonials/client-1.jpg",
      rating: 5,
      text: "Aries adalah designer yang sangat profesional. Dia mengerti kebutuhan bisnis kami dan menghasilkan design yang tidak hanya cantik tapi juga efektif untuk marketing.",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      company: "Fashion Brand XYZ",
      position: "Marketing Manager",
      image: "/images/testimonials/client-2.jpg",
      rating: 5,
      text: "Kolaborasi dengan Aries luar biasa. Dia sangat responsif, mendengarkan feedback dengan baik, dan deliver hasil yang melebihi ekspektasi kami.",
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      company: "Komunitas Olahraga",
      position: "Ketua",
      image: "/images/testimonials/client-3.jpg",
      rating: 5,
      text: "Design jersey yang Aries buat untuk tim kami sangat keren! Anggota tim sangat puas dan banyak yang memesan merchandise tambahan.",
    },
    {
      id: 4,
      name: "Eka Putri",
      company: "E-Commerce Store",
      position: "Owner",
      image: "/images/testimonials/client-4.jpg",
      rating: 5,
      text: "Packaging design Aries membuat produk kami terlihat lebih premium. Sales meningkat signifikan setelah menggunakan design baru.",
    },
    {
      id: 5,
      name: "Rudi Hermawan",
      company: "Digital Agency",
      position: "Creative Director",
      image: "/images/testimonials/client-5.jpg",
      rating: 5,
      text: "Aries adalah rekan kerja yang excellent. Selalu siap collaborate, creative, dan hasil kerjanya konsisten berkualitas tinggi.",
    },
    {
      id: 6,
      name: "Maya Santoso",
      company: "Beauty & Wellness",
      position: "Brand Manager",
      image: "/images/testimonials/client-6.jpg",
      rating: 5,
      text: "Social media content yang Aries design sangat engaging. Followers kami meningkat dan engagement rate jauh lebih baik.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
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
            Testimonials
            <span className="block bg-gradient-to-r from-[#D41414] to-[#ffffff] bg-clip-text text-transparent">
              Client Feedback
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
            Apa yang klien saya katakan tentang pengalaman bekerja sama
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <div className="text-3xl sm:text-4xl font-black text-[#D41414]">{stat.number}</div>
                <p className="text-xs sm:text-sm text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-[#D41414]/50 transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-gradient-to-br from-[#D41414] to-[#310A69]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-white/60">{testimonial.position} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Jadilah Bagian Dari Kesuksesan Kami</h2>
          <p className="text-white/70 mb-8 text-lg">
            Bergabunglah dengan 50+ klien yang telah mempercayai saya untuk project mereka
          </p>
          <button className="rounded-full bg-[#D41414] px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700">
            Mulai Project Sekarang
          </button>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}
