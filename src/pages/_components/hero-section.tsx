import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background Image + Gradient -- Acumant style dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://hercules-cdn.com/file_23662nbPR4BuRrpo9VT8FQhE"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B2D]/95 via-[#0F1B2D]/80 to-[#0F1B2D]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#0097A7] font-semibold tracking-wider uppercase text-sm"
          >
            One stop solutions for your software needs
          </motion.p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] text-balance">
            Providing Brilliant Ideas for your Business.
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed text-justify">
            Leveraging innovative thinking and industry expertise to propel your
            company's growth trajectory forward.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#E85D2C] hover:to-[#E87D3A] shadow-lg shadow-[#FF6B35]/30 transition-all"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full border border-white/25 hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
