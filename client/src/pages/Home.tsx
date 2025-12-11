import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import { BookOpen, Users, Laptop, Trophy, ArrowRight, Globe, Heart, PenTool, Crown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <HomeHero />
        
        {/* Stats Strip */}
        <div className="bg-primary text-white py-12">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div>
              <div className="text-4xl font-display font-bold mb-1">5,000+</div>
              <div className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">47</div>
              <div className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">120+</div>
              <div className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">Partner Companies</div>
            </div>
          </div>
        </div>

        {/* What is DigiHer Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Why DigiHer?</h2>
              <p className="text-muted-foreground text-lg">We provide everything you need to start your tech journey.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Hands-on Workshops</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn by doing. Our curriculum is project-based, ensuring you build a portfolio while you learn.
                </p>
              </div>
              
              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Global Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with thousands of women developers, attend meetups, and find your coding sisters.
                </p>
              </div>
              
              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Career Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From resume reviews to mock interviews, we help you land your first job in tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Theory of Change Section */}
        <section className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14B8A6] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Foundation</span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Theory of Change
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Through three synergistic foundations, we forge a comprehensive journey of empowerment. These elements 
                reinforce one another, forming an integrated strategy that uplifts young women in tech and positions them as leaders.
              </p>
            </motion.div>

            {/* Three Pillars - Circular Layout */}
            <div className="relative max-w-6xl mx-auto">
              {/* Connection Lines - Decorative Elements */}
              <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ height: '500px', top: '50px' }}>
                <svg viewBox="0 0 1200 500" className="w-full h-full" preserveAspectRatio="none">
                  {/* Curved connection lines */}
                  <motion.path
                    d="M 100 250 Q 600 150 1100 250"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,8"
                    className="text-primary/20"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 100 250 Q 600 350 1100 250"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,8"
                    className="text-primary/20"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.7 }}
                  />
                  {/* Central connection point */}
                  <motion.circle
                    cx="600"
                    cy="250"
                    r="12"
                    fill="currentColor"
                    className="text-primary/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Three Pillar Cards */}
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                {/* She Builds - Purple */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-0.5 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-background rounded-[22px] p-8 h-full flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <PenTool className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
                        She Builds
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        We strengthen young women's ability to connect with technology and cultivate technical skills, 
                        facilitating seamless entry into STEM fields and broadening pathways to rewarding career prospects.
                      </p>
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#8B5CF6]">
                          <Sparkles className="w-4 h-4" />
                          <span>Technical Mastery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* She Serves - Teal */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative group lg:-mt-8"
                >
                  <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-0.5 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-background rounded-[22px] p-8 h-full flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] bg-clip-text text-transparent">
                        She Serves
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        We encourage young women to become active contributors to their communities by leveraging creative 
                        tech solutions, nurturing an environment where service and meaningful innovation thrive.
                      </p>
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#14B8A6]">
                          <Globe className="w-4 h-4" />
                          <span>Community Impact</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* She Leads - Hot Pink */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-primary to-[#DB2777] p-0.5 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-background rounded-[22px] p-8 h-full flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#DB2777] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Crown className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-[#DB2777] bg-clip-text text-transparent">
                        She Leads
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        We guide young women to step into leadership roles, questioning and transforming traditional 
                        gender expectations to create more fulfilling, successful, and self-determined futures 
                        for both individuals and their wider communities.
                      </p>
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <Trophy className="w-4 h-4" />
                          <span>Leadership Excellence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Connection Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-16 text-center"
              >
                <div className="inline-block bg-primary/10 px-8 py-4 rounded-full border border-primary/20">
                  <p className="text-lg font-display font-semibold text-foreground">
                    United, these foundations drive enduring change
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <HomeTestimonials />

        {/* Alumni Logos */}
        <section className="py-20 border-y border-border bg-background">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10">Our alumni work at top companies</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple text logos for mockup purposes */}
              <h3 className="text-2xl font-bold text-gray-400">Google</h3>
              <h3 className="text-2xl font-bold text-gray-400">Microsoft</h3>
              <h3 className="text-2xl font-bold text-gray-400">Safaricom</h3>
              <h3 className="text-2xl font-bold text-gray-400">Andela</h3>
              <h3 className="text-2xl font-bold text-gray-400">Oracle</h3>
              <h3 className="text-2xl font-bold text-gray-400">Cellulant</h3>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="container mx-auto px-6 relative z-10">
             <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">Ready to start your journey?</h2>
             <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12">
               Join the waitlist for our next cohort and take the first step towards a career in technology.
             </p>
             <Link href="/workshops">
               <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-12 text-xl font-bold rounded-full shadow-2xl">
                 Apply Now <ArrowRight className="ml-2" />
               </Button>
             </Link>
             <p className="mt-6 text-sm opacity-70">No credit card required • Free introductory course</p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
