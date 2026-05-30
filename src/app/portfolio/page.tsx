"use client";

import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "branding",
      image: "/images/portfolio/project-1.jpg",
      desc: "Complete brand identity untuk startup tech"
    },
    {
      id: 2,
      title: "Jersey Design Komunitas",
      category: "jersey",
      image: "/images/portfolio/project-2.jpg",
      desc: "Design jersey custom untuk komunitas olahraga"
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "social-media",
      image: "/images/portfolio/project-3.jpg",
      desc: "Content design untuk kampanye Instagram 3 bulan"
    },
    {
      id: 4,
      title: "Product Packaging",
      category: "product",
      image: "/images/portfolio/project-4.jpg",
      desc: "Packaging design untuk brand cosmetic lokal"
    },
    {
      id: 5,
      title: "Logo & Branding",
      category: "branding",
      image: "/images/portfolio/project-5.jpg",
      desc: "Logo dan brand guidelines untuk agency kreatif"
    },
    {
      id: 6,
      title: "Poster Design",
      category: "print",
      image: "/images/portfolio/project-6.jpg",
      desc: "Series poster untuk event musik dan festival"
    },
    {
      id: 7,
      title: "Social Media Kit",
      category: "social-media",
      image: "/images/portfolio/project-7.jpg",
      desc: "Instagram template dan brand assets"
    },
    {
      id: 8,
      title: "Brochure Design",
      category: "print",
      image: "/images/portfolio/project-8.jpg",
      desc: "Tripod brochure untuk resort dan travel"
    },
    {
      id: 9,
      title: "Team Jersey",
      category: "jersey",
      image: "/images/portfolio/project-9.jpg",
      desc: "Jersey design untuk tim esports profesional"
    },
  ];

  const categories = [
    { id: "all", label: "Semua Karya" },
    { id: "branding", label: "Branding" },
    { id: "jersey", label: "Jersey Design" },
    { id: "social-media", label: "Social Media" },
    { id: "product", label: "Product Design" },
    { id: "print", label: "Print" },
  ];

  const filtered = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <main className="relative overflow-hidden bg-[#0E0E0E] text-white">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-150px] h-[300px] w-[300px] rounded-full bg-[#310A69] opacity-30 blur-[100px] sm:left-[-200px] sm:top-[-200px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />

      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">
            Portfolio
            <span className="block bg-gradient-to-r from-[#D41414] to-[#ffffff] bg-clip-text text-transparent">
              Karya Terbaik
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
            Showcase dari 100+ projects yang telah diselesaikan untuk berbagai clients
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`rounded-full px-6 py-2 font-semibold transition ${
                  activeFilter === cat.id
                    ? "bg-[#D41414] text-white"
                    : "border border-white/20 bg-white/5 text-white/70 hover:border-white/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(item => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer hover:border-[#D41414] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#310A69] to-[#D41414]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => {
                      // Fallback jika image tidak ada
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#D41414]/20 text-[#D41414] text-xs font-semibold mb-3 capitalize">
                    {item.category.replace("-", " ")}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{item.desc}</p>
                  <button className="text-[#D41414] font-semibold text-sm hover:text-white transition flex items-center gap-2">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Tertarik dengan Style Saya?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Mari diskusikan bagaimana saya bisa membantu project Anda
          </p>
          <button className="rounded-full bg-[#D41414] px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700">
            Mulai Project
          </button>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}
