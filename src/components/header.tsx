import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils.ts";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const showSolid = isScrolled || isMobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolid
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="https://hercules-cdn.com/file_I2OfqhaiepsYNhRyb7BEKJJg"
              alt="Exensys"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FF6B35] after:transition-all hover:after:w-full",
                  showSolid
                    ? "text-[#1B2A4A]/70 hover:text-[#1B2A4A]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#E85D2C] hover:to-[#E87D3A] shadow-md shadow-[#FF6B35]/25 transition-all"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg",
              showSolid ? "text-[#1B2A4A]" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8ECF1]">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-[#1B2A4A]/70 hover:bg-[#F7F8FA] hover:text-[#1B2A4A] text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="mt-2 px-5 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
