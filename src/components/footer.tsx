import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#cta" },
] as const;

const SERVICE_LINKS = [
  "Web Development",
  "Mobile Apps",
  "ERP & CRM",
  "Custom Development",
  "IT Staffing",
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1B2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top accent line */}
        <div className="h-[2px] w-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="https://hercules-cdn.com/file_I2OfqhaiepsYNhRyb7BEKJJg"
                alt="Exensys"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed text-justify">
              One stop solutions for your software needs. Leveraging innovative
              thinking and industry expertise to propel your company's growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-[#FF6B35]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-[#FF6B35]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="/#services"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-[#FF6B35]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Mail className="h-4 w-4 mt-0.5 text-[#FF6B35] shrink-0" />
                <span>info@exensys.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 mt-0.5 text-[#FF6B35] shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
            <a
              href="https://exensys.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-[#FF6B35] hover:text-[#FF8C42] transition-colors"
            >
              exensys.in <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {year} Exensys. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/#hero" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="/#hero" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
