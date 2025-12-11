import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import mentorshipImage from "@assets/generated_images/tech_workshop_mentorship.png";

export default function Mission() {
  const benefits = [
    "Industry-led curriculum designed for modern tech roles",
    "1-on-1 mentorship from senior engineers and leaders",
    "Access to exclusive job opportunities and internships",
    "A supportive sisterhood of like-minded innovators"
  ];

  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={mentorshipImage}
                alt="Mentorship session"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-background p-8 shadow-xl max-w-xs hidden md:block border border-border">
              <p className="font-display font-bold text-xl mb-2">"DigiHer changed my career trajectory completely."</p>
              <p className="text-sm text-muted-foreground">— Sarah M., Software Engineer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
              Bridging the Gender Gap in Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that talent is evenly distributed, but opportunity is not. 
              DigiHer exists to provide the platform, resources, and community needed 
              for Kenyan women to thrive in the global digital economy.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
