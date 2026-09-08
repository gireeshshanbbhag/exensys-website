import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Incredible job! Their web development team transformed our outdated website into a modern, user-friendly platform that's boosted our online presence significantly. Highly recommend!",
    name: "Mannan Burhan",
    title: "Business Owner",
  },
  {
    quote:
      "Exceptional service! The web development services provided were top-notch, exceeding our expectations. Their attention to detail and quick turnaround time were impressive. We couldn't be happier with the results!",
    name: "Principal Rana",
    title: "Managing Director",
  },
  {
    quote:
      "Working with them was a breeze! From conceptualization to execution, their web development team demonstrated professionalism and expertise at every step. Our new website not only looks stunning but also performs flawlessly.",
    name: "Hannan Burhan",
    title: "CEO & Founder",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-12 bg-[#F7F8FA] relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-[#0097A7] uppercase tracking-wider">
          Testimonials
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00a4ef] via-[#00c06c] to-[#ffb900] bg-clip-text text-transparent inline-block">
          What they say about us
        </h2>
        <p className="mt-4 text-[#64748B] max-w-xl mx-auto text-justify">
          Discover what our clients have to say about their experience with our
          services.
        </p>

        <div className="mt-8 relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] max-w-2xl mx-auto relative"
            >
              {/* Orange accent top bar */}
              <div className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]" />
              <Quote className="h-10 w-10 text-[#FF6B35]/20 mx-auto mb-6" />
              <p className="text-[#1B2A4A]/80 text-lg leading-relaxed italic text-justify">
                {`"${testimonial.quote}"`}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-[#1B2A4A]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#64748B]">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="h-10 w-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-[#F7F8FA] transition-colors text-[#1B2A4A]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
                    : "w-2.5 bg-[#E8ECF1] hover:bg-[#CBD5E1]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="h-10 w-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-[#F7F8FA] transition-colors text-[#1B2A4A]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
