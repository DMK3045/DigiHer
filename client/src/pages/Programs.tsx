import { motion } from "framer-motion";
import { Code2, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const programs = [
  {
    icon: Code2,
    title: "Technical Bootcamps",
    description: "Intensive 12-week courses in Full Stack Development, Data Science, and UX Design."
  },
  {
    icon: Users,
    title: "Mentorship Circles",
    description: "Connect with industry leaders who provide guidance, code reviews, and career advice."
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "Hackathons and project-based learning to build your portfolio and solve real problems."
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
            <div className="text-[20vw] font-display font-bold leading-none whitespace-nowrap">
              GROW LEARN BUILD
            </div>
          </div>

          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Our Impact Programs</h1>
              <p className="text-lg text-muted-foreground">
                Designed to take you from beginner to job-ready professional, our programs are curated by industry experts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-border rounded-none hover:border-primary transition-colors duration-300 bg-card">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="font-display text-2xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
