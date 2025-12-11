import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, GraduationCap, Heart, Globe, Lightbulb, Shield } from "lucide-react";
import mentorshipImage from "@assets/generated_images/tech_workshop_mentorship.png";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Mission() {
  const benefits = [
    "Industry-led curriculum designed for modern tech roles",
    "1-on-1 mentorship from senior engineers and leaders",
    "Access to exclusive job opportunities and internships",
    "A supportive sisterhood of like-minded innovators"
  ];

  const targetAreas = [
    {
      icon: Target,
      title: "Rural Communities",
      description: "Reaching girls in underserved rural areas where technology education is limited or non-existent, breaking down geographical barriers to opportunity."
    },
    {
      icon: Users,
      title: "Marginalized Groups",
      description: "Supporting girls from economically disadvantaged backgrounds, single-parent households, and communities with limited access to quality education."
    },
    {
      icon: Heart,
      title: "First-Generation Learners",
      description: "Empowering girls who are the first in their families to pursue higher education or enter the tech industry, creating generational change."
    }
  ];

  const skillsProvided = [
    {
      icon: GraduationCap,
      title: "Digital Literacy Fundamentals",
      description: "Building foundational computer skills, internet navigation, and digital communication tools essential for modern workplaces."
    },
    {
      icon: Lightbulb,
      title: "Programming & Software Development",
      description: "Teaching in-demand programming languages (Python, JavaScript, Java), web development, mobile app development, and software engineering principles."
    },
    {
      icon: Globe,
      title: "Digital Marketing & E-commerce",
      description: "Equipping girls with skills in social media marketing, content creation, SEO, and online business management to create income-generating opportunities."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Data Management",
      description: "Providing knowledge in data protection, cybersecurity basics, and database management - critical skills in today's digital economy."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={mentorshipImage}
                    alt="Mentorship session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-background p-8 shadow-xl max-w-xs hidden md:block border border-border">
                  <p className="font-display font-bold text-xl mb-2">"DigiHer changed my career trajectory completely."</p>
                  <p className="text-sm text-muted-foreground">— Sarah M., Software Engineer</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
                <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                  Bridging the Gender Gap in Technology
                </h1>
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

        {/* Targeting Rural and Marginal Girls Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Focus</span>
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
                Reaching the Underserved: Rural and Marginal Girls
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At DigiHer Kenya, we recognize that the digital divide disproportionately affects girls in rural and marginalized communities. 
                These young women face unique challenges including limited access to technology, cultural barriers, financial constraints, and 
                lack of role models in the tech industry. Our mission is to bridge this gap by bringing world-class digital skills training 
                directly to their communities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {targetAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-secondary/30 p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <area.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-display font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/10 p-8 rounded-lg border border-primary/20"
            >
              <h3 className="text-2xl font-display font-bold mb-4">Our Approach</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Community-Centered Programs</h4>
                  <p className="text-muted-foreground">
                    We partner with local community centers, schools, and organizations to bring our programs directly to rural areas, 
                    eliminating transportation barriers and ensuring accessibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scholarship & Financial Support</h4>
                  <p className="text-muted-foreground">
                    Recognizing financial constraints, we provide full scholarships, learning materials, and in some cases, 
                    internet connectivity support to ensure no girl is left behind due to economic circumstances.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Sensitivity & Mentorship</h4>
                  <p className="text-muted-foreground">
                    Our programs are designed with cultural awareness, featuring local mentors who understand the unique challenges 
                    these girls face and can provide relatable guidance and support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Flexible Learning Models</h4>
                  <p className="text-muted-foreground">
                    We offer both in-person workshops in rural centers and hybrid online-offline models that accommodate 
                    varying levels of internet connectivity and personal responsibilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Development Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Skills Development</span>
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
                Equipping Girls with Future-Ready Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our comprehensive curriculum is designed to transform rural and marginal girls into confident, skilled professionals 
                ready to compete in the global digital economy. We focus on practical, market-relevant skills that lead to meaningful 
                employment and entrepreneurship opportunities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {skillsProvided.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <skill.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-lg border border-border"
            >
              <h3 className="text-2xl font-display font-bold mb-6">Additional Skills & Support</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Soft Skills Development
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Communication, teamwork, problem-solving, and leadership skills essential for professional success.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Entrepreneurship Training
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Business planning, financial literacy, and startup guidance to help girls create their own opportunities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Career Guidance & Placement
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Resume building, interview preparation, and connections to job opportunities with partner companies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Continuous Learning Support
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Access to online resources, ongoing mentorship, and alumni networks for lifelong learning and growth.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-display font-bold mb-4">Our Impact Promise</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By focusing on rural and marginal girls, we're not just teaching technical skills—we're breaking cycles of poverty, 
                  challenging gender norms, and creating pathways to economic independence. Every girl we train becomes a role model 
                  in her community, inspiring others and proving that geographic location and economic background don't define potential. 
                  Together, we're building a more inclusive digital future for Kenya, one girl at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
