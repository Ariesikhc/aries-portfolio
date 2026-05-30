import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { category: "Design Specialties", items: ["Logo Design", "Branding", "Print Design", "Jersey Design", "Social Media Design"] },
    { category: "Other Skills", items: ["Concept Development", "Brand Guidelines", "File Preparation", "Color Theory"] },
  ];

  const experience = [
    { year: "2024 - Present", title: "Lead Creative Designer", company: "Aries Design Studio", desc: "Directing creative projects and leading design team" },
    { year: "2022 - 2024", title: "Senior Designer", company: "Creative Agency XYZ", desc: "Managing multiple branding and design projects" },
    { year: "2020 - 2022", title: "Graphic Designer", company: "Design Studio ABC", desc: "Creating visual content for various clients" },
  ];

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
            About
            <span className="block bg-gradient-to-r from-[#D41414] to-[#ffffff] bg-clip-text text-transparent">
              Aries Ikhciar
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
            Creative designer dengan passion untuk menciptakan visual design yang powerful dan meaningful
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D41414] to-[#310A69] rounded-2xl opacity-75 blur-lg" />
                <div className="relative bg-[#0E0E0E] rounded-2xl overflow-hidden border border-white/10 w-72 h-72 sm:w-80 sm:h-80">
                  <Image
                    src="/images/profile/foto-profil.jpg"
                    alt="Aries Ikhciar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 288px, 320px"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Cerita Saya</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Saya adalah creative designer dengan lebih dari 5 tahun pengalaman dalam menciptakan visual design yang impactful. 
                  Passion saya adalah membantu brands menemukan identity mereka yang unik dan memorable.
                </p>
                <p>
                  Spesialisasi saya meliputi logo branding, print design, product design, dan social media content yang stunning. 
                  Saya percaya bahwa setiap project adalah kesempatan untuk menciptakan sesuatu yang extraordinary.
                </p>
                <p>
                  Dengan pendekatan yang collaborative dan attention to detail yang tinggi, saya memastikan setiap deliverable 
                  melampaui ekspektasi client dan mencapai business goals mereka.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-[#D41414] px-8 py-3 font-semibold text-white transition hover:bg-red-700 hover:scale-105">
                  Download CV
                </button>
                <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-semibold backdrop-blur-xl transition hover:bg-white/10">
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center sm:text-4xl mb-16">Skills & Expertise</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((skill, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#D41414] mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <div className="h-2 w-2 rounded-full bg-[#D41414]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center sm:text-4xl mb-16">Experience</h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-[#D41414]">
                <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-[#D41414] border-4 border-[#0E0E0E]" />
                <div className="text-sm font-semibold text-[#D41414]">{exp.year}</div>
                <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                <p className="text-white/60 font-medium">{exp.company}</p>
                <p className="text-white/70 mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}
