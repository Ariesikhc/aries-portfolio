"use client";

import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Integrate with email service (EmailJS, SendGrid, etc)
    alert("Terima kasih! Pesan Anda telah dikirim. Saya akan segera merespons.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "ikhctiar@gmail.com", href: "mailto:ikhctiar@gmail.com" },
    { icon: "📱", label: "WhatsApp", value: "+62 813-1882-3247", href: "https://wa.me/6281318823247" },
    { icon: "📞", label: "Phone", value: "+62 813-1882-3247", href: "tel:+6281318823247" },
    { icon: "📍", label: "Location", value: "Jambi, Indonesia", href: "https://www.google.com/maps/place/pan_panstore+Jambi/@-1.620567,103.6234303,20z/data=!4m15!1m7!3m6!1s0x2e2588a55b4466dd:0x6d999f8e13c9a2e8!2span_panstore+Jambi!8m2!3d-1.6205499!4d103.6236804!16s%2Fg%2F11dd_thkcr!3m6!1s0x2e2588a55b4466dd:0x6d999f8e13c9a2e8!8m2!3d-1.6205499!4d103.6236804!15sCgxwYW5wYW4gc3RvcmVaDiIMcGFucGFuIHN0b3JlkgETbWVuc19jbG90aGluZ19zdG9yZeABAA!16s%2Fg%2F11dd_thkcr?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" },
  ];

  const socials = [
    { icon: "f", label: "Facebook", href: "#" },
    { icon: "in", label: "LinkedIn", href: "#" },
    { icon: "ig", label: "Instagram", href: "#" },
    { icon: "tw", label: "Twitter", href: "#" },
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
            Get In
            <span className="block bg-gradient-to-r from-[#D41414] to-[#ffffff] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
            Mari kita diskusikan tentang project Anda. Saya siap membantu mewujudkan visi Anda
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-xl transition focus:border-[#D41414] focus:outline-none focus:ring-1 focus:ring-[#D41414]"
                    placeholder="Nama Anda"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-xl transition focus:border-[#D41414] focus:outline-none focus:ring-1 focus:ring-[#D41414]"
                      placeholder="Email Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">No. HP</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-xl transition focus:border-[#D41414] focus:outline-none focus:ring-1 focus:ring-[#D41414]"
                      placeholder="No. HP Anda"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Jenis Project</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition focus:border-[#D41414] focus:outline-none focus:ring-1 focus:ring-[#D41414]"
                  >
                    <option value="">Pilih jenis project...</option>
                    <option value="branding">Logo & Branding</option>
                    <option value="jersey">Jersey Design</option>
                    <option value="social">Social Media Design</option>
                    <option value="product">Product Design</option>
                    <option value="print">Print Design</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-xl transition focus:border-[#D41414] focus:outline-none focus:ring-1 focus:ring-[#D41414] resize-none"
                    placeholder="Jelaskan kebutuhan project Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#D41414] py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#D41414] transition group"
                  >
                    <div className="text-3xl mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white/80 group-hover:text-white transition">{info.label}</h3>
                      <p className="text-white/60">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Ikuti Saya</h3>
                <div className="flex gap-4">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="h-12 w-12 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center hover:border-[#D41414] hover:bg-[#D41414]/10 transition font-semibold"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 p-6 rounded-lg border border-[#D41414]/30 bg-[#D41414]/5 backdrop-blur-xl">
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-[#D41414]">⏱️ Response Time:</span>
                  <br />
                  Saya akan merespons dalam 24 jam kerja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Lokasi</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/place/pan_panstore+Jambi/@-1.620567,103.6234303,20z/data=!4m15!1m7!3m6!1s0x2e2588a55b4466dd:0x6d999f8e13c9a2e8!2span_panstore+Jambi!8m2!3d-1.6205499!4d103.6236804!16s%2Fg%2F11dd_thkcr!3m6!1s0x2e2588a55b4466dd:0x6d999f8e13c9a2e8!8m2!3d-1.6205499!4d103.6236804!15sCgxwYW5wYW4gc3RvcmVaDiIMcGFucGFuIHN0b3JlkgETbWVuc19jbG90aGluZ19zdG9yZeABAA!16s%2Fg%2F11dd_thkcr?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
            />
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}
