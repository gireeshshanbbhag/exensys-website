import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: StatItem[] = [
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Premium Support" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Team collaboration"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Accent card overlay -- Acumant orange gradient */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-xl p-5 shadow-lg shadow-[#FF6B35]/25">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-white/80">Years of Innovation</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-[#0097A7] uppercase tracking-wider">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-[#00a4ef] via-[#00c06c] to-[#ffb900] bg-clip-text text-transparent">
              Creative solutions deliver profits to your door
            </h2>
            <p className="mt-5 text-[#64748B] leading-relaxed text-justify">
              Unlock the power of creative solutions to drive profits straight to
              your door with innovative strategies and forward-thinking
              approaches. At the intersection of creativity and profitability, we
              ensure your business thrives in dynamic markets, setting you apart
              from the competition.
            </p>
            <p className="mt-4 text-[#64748B] leading-relaxed text-justify">
              Exensys prides itself on providing brilliant ideas for your
              business, leveraging innovative thinking and industry expertise to
              propel your company's growth trajectory forward.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#E85D2C] hover:to-[#E87D3A] shadow-md shadow-[#FF6B35]/25 transition-all"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* Stats Bar -- Acumant style with dividers */}
        <div className="mt-12 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center ${i < STATS.length - 1 ? "lg:border-r lg:border-[#E8ECF1]" : ""}`}
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-[#64748B] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
