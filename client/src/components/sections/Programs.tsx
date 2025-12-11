import { motion } from "framer-motion";
import { Code2, Users, Lightbulb, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import networkingImage from "@assets/generated_images/women_networking_event.png";

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
    <section id="programs" className="py-24 relative overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <div className="text-[20vw] font-display font-bold leading-none whitespace-nowrap">
          GROW LEARN BUILD
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Impact Programs</h2>
          <p className="text-lg text-muted-foreground">
            Designed to take you from beginner to job-ready professional, our programs are curated by industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        {/* Feature Event Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-0 border border-border">
          <div className="bg-primary text-primary-foreground p-12 lg:p-20 flex flex-col justify-center">
            <span className="font-bold tracking-widest uppercase mb-6 block opacity-80">Next Big Event</span>
            <h3 className="text-4xl font-display font-bold mb-6">Nairobi Tech Week 2025</h3>
            <p className="text-lg mb-8 opacity-90">
              Join 500+ women in technology for a week of workshops, panels, and networking opportunities.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="w-6 h-6" />
              <span className="text-xl font-medium">October 15-20, 2025</span>
            </div>
            <button className="self-start bg-white text-primary px-8 py-4 font-display font-bold hover:bg-gray-100 transition-colors">
              Register Now
            </button>
          </div>
          <div className="relative h-full min-h-[400px]">
            <img 
              src={networkingImage} 
              alt="Networking event" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
