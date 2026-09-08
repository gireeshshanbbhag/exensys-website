import { motion } from "motion/react";
import { CheckCircle2, Zap, Shield } from "lucide-react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Quality",
    description:
      "We deliver exceptional quality in every project, ensuring robust, scalable solutions that stand the test of time.",
    icon: CheckCircle2,
    color: "#FF6B35",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We maintain the highest standards of integrity, building trust through transparency and honest communication with every client.",
    icon: Shield,
    color: "#0097A7",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "We harness the latest technologies and methodologies to deliver forward-thinking solutions that keep you ahead of the curve.",
    icon: Zap,
    color: "#1B2A4A",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#0097A7] uppercase tracking-wider">
            Our Values
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00a4ef] via-[#00c06c] to-[#ffb900] bg-clip-text text-transparent">
            Principles of our work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] group hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all overflow-hidden"
              >
                {/* Large number watermark */}
                <span className="text-[80px] font-bold text-[#F7F8FA] absolute top-2 right-4 select-none leading-none">
                  {item.number}
                </span>
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}80)` }}
                />
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <Icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
