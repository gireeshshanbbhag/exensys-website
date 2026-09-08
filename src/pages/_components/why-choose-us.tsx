import { motion } from "motion/react";
import { Lightbulb, TrendingUp, Award, HeadphonesIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const REASONS: Reason[] = [
  {
    icon: Lightbulb,
    title: "Smart Solutions",
    description:
      "Experience smart solutions tailored to your needs, revolutionizing your digital landscape with efficiency and innovation.",
    color: "#FF6B35",
  },
  {
    icon: TrendingUp,
    title: "High Conversions",
    description:
      "Elevate your business with our software solutions designed to maximize conversions and drive tangible results.",
    color: "#0097A7",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Unlock the expertise of our certified professionals, ensuring top-tier solutions tailored to your software needs.",
    color: "#1B2A4A",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Premium Support",
    description:
      "Experience our round-the-clock premium support, ensuring uninterrupted assistance for your software solutions.",
    color: "#FF8C42",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#0097A7] uppercase tracking-wider">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00a4ef] via-[#00c06c] to-[#ffb900] bg-clip-text text-transparent">
            Connecting people is our business
          </h2>
          <p className="mt-4 text-[#64748B] max-w-2xl mx-auto text-justify">
            Our tailored strategies and data-driven approach ensure your brand
            stands out amidst the online noise, fostering growth and engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow"
              >
                <div
                  className="h-14 w-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <Icon className="h-7 w-7" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B2A4A] mb-1">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
