import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/african_women_in_tech_hero_image.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-6">
              Building the <br />
              <span className="text-primary">Future of Tech</span>
              <br /> in Kenya.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              DigiHer is a premier community empowering African women with the skills, mentorship, and network to lead in the digital economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-display font-bold text-lg h-14 px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-none font-display font-bold text-lg h-14 px-8 bg-transparent">
                Our Programs
              </Button>
            </div>
          </motion.div>
          
          <div className="mt-16 flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <div>
              <span className="block text-3xl font-display font-bold text-foreground">5K+</span>
              Community Members
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <span className="block text-3xl font-display font-bold text-foreground">100+</span>
              Mentors
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full w-full"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
            <img
              src={heroImage}
              alt="African women in tech"
              className="w-full h-full object-cover"
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent z-0 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary z-20 hidden lg:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
