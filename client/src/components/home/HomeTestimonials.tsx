import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import testimonial1 from "@assets/generated_images/portrait_of_software_developer.png";
import testimonial2 from "@assets/generated_images/portrait_of_data_scientist.png";
import testimonial3 from "@assets/generated_images/portrait_of_ux_designer.png";
import testimonial4 from "@assets/generated_images/portrait_of_coding_student.png";

const testimonials = [
  {
    id: 1,
    name: "Wangari Maathai",
    rating: 5.0,
    date: "15 Nov, 2024",
    review: "I went from zero coding knowledge to a full-time Frontend Developer position at Safaricom in just 6 months. The mentorship at DigiHer is unmatched - they truly believe in your potential even when you don't see it yourself.",
    image: testimonial1,
    role: "Frontend Developer at Safaricom"
  },
  {
    id: 2,
    name: "Amina Juma",
    rating: 5.0,
    date: "8 Nov, 2024",
    review: "The community support kept me going when things got tough. Coming from a rural area, I never thought tech was for me, but DigiHer made it accessible and showed me that my background is my strength, not a limitation.",
    image: testimonial2,
    role: "Data Analyst at Cellulant"
  },
  {
    id: 3,
    name: "Nanjala Nyabola",
    rating: 4.9,
    date: "2 Nov, 2024",
    review: "DigiHer didn't just teach me UX design; they taught me how to think like a problem solver. The hands-on workshops and real-world projects gave me the confidence to apply for jobs I never thought I could get.",
    image: testimonial3,
    role: "UX Designer at Microsoft ADC"
  },
  {
    id: 4,
    name: "Zara Abdi",
    rating: 5.0,
    date: "28 Oct, 2024",
    review: "The workshops are so practical and fun! I've built 5 projects for my portfolio already, and I'm only halfway through the program. The instructors make complex concepts easy to understand.",
    image: testimonial4,
    role: "Software Engineering Student"
  },
  {
    id: 5,
    name: "Grace Wanjiku",
    rating: 5.0,
    date: "20 Oct, 2024",
    review: "As a single mother, I thought my tech dreams were over. DigiHer's flexible learning schedule and supportive community made it possible. I'm now a Junior Developer and my daughter is so proud!",
    image: testimonial1,
    role: "Junior Developer at Andela"
  },
  {
    id: 6,
    name: "Fatuma Hassan",
    rating: 4.9,
    date: "12 Oct, 2024",
    review: "The scholarship program changed my life. Without financial support, I couldn't have accessed quality tech education. Now I'm building apps that solve real problems in my community.",
    image: testimonial2,
    role: "Mobile App Developer"
  }
];

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle one active

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPositionForIndex = (index: number) => {
    const positions = [
      { y: -120, x: 0, scale: 0.75, opacity: 0.6 },      // Top
      { y: 0, x: 0, scale: 1, opacity: 1 },              // Middle (active)
      { y: 120, x: 0, scale: 0.75, opacity: 0.6 }        // Bottom
    ];

    // Calculate relative position based on active index
    let relativePos = (index - activeIndex + testimonials.length) % testimonials.length;
    
    // Show only 3 testimonials at a time: previous, current, next
    if (relativePos === 0) return positions[1]; // Current = middle (active)
    if (relativePos === 1) return positions[2]; // Next = bottom
    if (relativePos === testimonials.length - 1) return positions[0]; // Previous = top
    // Hide others
    return { y: 0, x: 0, scale: 0, opacity: 0 };
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-[#DB2777] rounded-full mb-4 mx-auto" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Success Stories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            See what our graduates say about their journey with DigiHer Kenya
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side - Rotating Avatars */}
          <div className="lg:col-span-4 relative h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border" style={{ transform: 'translateX(-50%)' }}>
              <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-[#DB2777]"
                initial={{ height: '0%' }}
                animate={{ height: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {/* Avatars */}
            <div className="relative w-full h-full flex items-center justify-center">
              {testimonials.map((testimonial, index) => {
                const position = getPositionForIndex(index);
                const isActive = index === activeIndex;
                const isVisible = position.opacity > 0;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute cursor-pointer"
                    animate={{
                      y: position.y,
                      x: position.x,
                      scale: position.scale,
                      opacity: position.opacity
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                      duration: 0.6
                    }}
                    onClick={() => setActiveIndex(index)}
                    style={{ zIndex: isActive ? 20 : 10 }}
                  >
                    <motion.div
                      className={`relative rounded-full overflow-hidden border-4 ${
                        isActive ? 'border-primary shadow-2xl' : 'border-background shadow-lg'
                      }`}
                      style={{
                        width: isActive ? '140px' : '100px',
                        height: isActive ? '140px' : '100px'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-primary to-[#DB2777] flex items-center justify-center text-white text-2xl font-bold">
                                ${testimonial.name.charAt(0)}
                              </div>
                            `;
                          }
                        }}
                      />
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                        />
                      )}
                    </motion.div>

                    {/* Name label for non-active items */}
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        className="absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2 whitespace-nowrap"
                      >
                        <div className="bg-background px-3 py-1 rounded-full shadow-md border border-border">
                          <p className="text-xs font-medium text-foreground">
                            {testimonial.name}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Review Content */}
          <div className="lg:col-span-8 relative min-h-[350px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Large Quote Mark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute -top-6 -left-2 md:-left-8"
                >
                  <Quote className="w-20 h-20 md:w-24 md:h-24 text-primary/10" strokeWidth={1.5} />
                </motion.div>

                <div className="bg-background rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl border border-border relative">
                  {/* Review Text */}
                  <blockquote className="text-lg md:text-xl lg:text-sm text-muted-foreground italic leading-relaxed mb-6 md:mb-8 relative z-10">
                    <span className="text-primary font-serif text-2xl md:text-3xl lg:text-4xl">"</span>
                    {testimonials[activeIndex].review}
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-border pt-6 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-md flex-shrink-0 relative">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full bg-gradient-to-br from-primary to-[#DB2777] flex items-center justify-center text-white text-sm font-bold">
                                  ${testimonials[activeIndex].name.charAt(0)}
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-xs text-primary font-medium  tracking-wide mb-2">
                          {testimonials[activeIndex].role}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="font-semibold text-xs text-foreground">
                              {testimonials[activeIndex].rating}
                            </span>
                          </div>
                          <span className="text-xs">on {testimonials[activeIndex].date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            index === activeIndex
                              ? 'bg-primary w-8 shadow-md'
                              : 'bg-muted hover:bg-primary/50 w-2.5'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Decorative gradient orbs */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/5 to-[#DB2777]/5 rounded-full blur-3xl -z-10" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#DB2777]/5 to-primary/5 rounded-full blur-3xl -z-10" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
