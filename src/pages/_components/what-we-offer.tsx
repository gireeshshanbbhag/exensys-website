import { motion } from "motion/react";
import {
  Globe,
  Smartphone,
  Database,
  Code2,
  Printer,
  Users,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  color: string;
};

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Crafting the digital landscape, weaving static pages with dynamic functionalities, propelling businesses into the online realm.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#FF6B35",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Fusing user-friendly design with powerful features, shaping tailored mobile solutions for modern handheld devices.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#0097A7",
  },
  {
    icon: Database,
    title: "ERP & CRM",
    description:
      "Streamline business operations and customer interactions with integrated tools for efficient management and growth.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#1B2A4A",
  },
  {
    icon: Code2,
    title: "Custom Application Development",
    description:
      "Tailored solutions on .NET and JAVA platforms, leveraging cutting-edge technologies for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#FF8C42",
  },
  {
    icon: Printer,
    title: "IT Supplies",
    description:
      "Essential IT supplies including printers, toners, and cartridges for efficient document management workflows.",
    image:
      "https://images.unsplash.com/photo-1514996550219-62672472d03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#0097A7",
  },
  {
    icon: Users,
    title: "IT Staffing & Recruitment",
    description:
      "Connecting businesses with skilled professionals to drive technological innovation and meet industry demands.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#FF6B35",
  },
];

export default function WhatWeOffer() {
  return (
    <section
      id="services"
      className="py-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right bottom, #00a4ef, #00b1e9, #00bacd, #00bfa1, #00c06c, #54c050, #7dbf31, #a1bc00, #b9bd00, #d1bc00, #e8bb00, #ffb900)",
      }}
    >
      {/* Subtle pattern overlay for depth */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
            What We Offer
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Connecting customers with your brand
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* Image with overlay */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/40 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="h-10 w-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}12` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: service.color }} />
                    </div>
                    <h3 className="font-semibold text-[#1B2A4A]">{service.title}</h3>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed text-justify">
                    {service.description}
                  </p>
                  <a
                    href="#cta"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B35] hover:text-[#E85D2C] transition-colors"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
