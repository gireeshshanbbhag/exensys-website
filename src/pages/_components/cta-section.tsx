import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden relative">
          {/* Background -- Acumant dark navy gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B2D] via-[#162744] to-[#0F1B2D]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-14">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[3px] w-14 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to transform your business?
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed max-w-md text-justify">
                Schedule a call with our experts and let us help you create
                quality software products tailored to your needs.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/60">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <span className="text-sm">
                    Get a free consultation today
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <span className="text-sm">info@exensys.in</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <span className="text-sm">Hyderabad, India</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
            >
              <h3 className="text-xl font-semibold text-[#1B2A4A] mb-6">
                Tell us about your project
              </h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F8FA] border border-[#E8ECF1] text-[#1B2A4A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F8FA] border border-[#E8ECF1] text-[#1B2A4A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F8FA] border border-[#E8ECF1] text-[#1B2A4A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F8FA] border border-[#E8ECF1] text-[#1B2A4A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#E85D2C] hover:to-[#E87D3A] shadow-md shadow-[#FF6B35]/25 transition-all"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
