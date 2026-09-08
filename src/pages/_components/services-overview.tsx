import { motion } from "motion/react";
import { Target, MessageSquare, Compass, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const SERVICES: ServiceItem[] = [
  {
    icon: Target,
    title: "Strategy",
    description:
      "Implementing cutting-edge strategies to optimize business processes, foster innovation, and drive sustainable growth.",
    color: "#FF6B35",
  },
  {
    icon: MessageSquare,
    title: "Consultancy",
    description:
      "Expert guidance and tailored solutions, empowering businesses to navigate complex challenges and achieve their goals.",
    color: "#0097A7",
  },
  {
    icon: Compass,
    title: "Positioning",
    description:
      "Strategic positioning leveraging market insights and industry expertise to elevate your brand and maximize advantage.",
    color: "#1B2A4A",
  },
  {
    icon: BarChart3,
    title: "Evaluation",
    description:
      "Thorough evaluations to assess performance, identify opportunities, and drive continuous improvement for your business.",
    color: "#FF8C42",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#0097A7] uppercase tracking-wider">
            How We Help
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00a4ef] via-[#00c06c] to-[#ffb900] bg-clip-text text-transparent">
            Transforming businesses with expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center p-7 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1B2A4A] mb-2">{service.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
