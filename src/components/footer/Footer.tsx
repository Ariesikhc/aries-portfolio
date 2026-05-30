"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const contactLinks = [
    { icon: "📧", label: "Email", value: "aries@example.com", href: "mailto:aries@example.com" },
    { icon: "📱", label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/62812345678" },
    { icon: "📍", label: "Location", value: "Jakarta, Indonesia", href: "#" },
  ];

  const socialLinks = [
    { icon: "f", label: "Facebook", href: "#" },
    { icon: "ig", label: "Instagram", href: "#" },
    { icon: "in", label: "LinkedIn", href: "#" },
    { icon: "tw", label: "Twitter", href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Aries
              <span className="text-[#D41414]">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Creative designer passionate about creating meaningful visual design that drives business results.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/70 transition hover:border-[#D41414] hover:text-[#D41414] text-sm font-semibold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Logo & Branding",
                "Jersey Design",
                "Social Media Design",
                "Product Packaging",
                "Print Design",
                "Brand Consultation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 transition hover:text-white hover:translate-x-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition group"
                  >
                    <span className="text-lg mt-0.5 flex-shrink-0 group-hover:text-[#D41414]">{contact.icon}</span>
                    <div>
                      <div className="font-semibold text-white/80">{contact.label}</div>
                      <div className="text-xs text-white/60">{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} Aries Ikhciar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/60 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
