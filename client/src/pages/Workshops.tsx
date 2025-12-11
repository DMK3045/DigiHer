import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar, ArrowRight, Code, Database, BarChart, Brain, Server, Layout, Terminal, Cpu, Globe, Layers, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";

// Mock data structure based on the reference image
const workshops = [
  {
    id: "frontend",
    badge: "The Foundation",
    title: "Frontend",
    subtitle: "Development",
    description: "Build beautiful, interactive websites. The perfect starting point for your tech career.",
    level: "Absolute Beginners",
    duration: "3 Months",
    whoFor: "Creatives who want to build visual interfaces",
    included: [
      "HTML, CSS & JavaScript",
      "React.js Framework",
      "Responsive Design",
      "5 Real-life Projects",
      "GitHub Portfolio"
    ],
    skills: [
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Layout },
      { name: "JS", icon: Terminal },
      { name: "React", icon: Globe }
    ],
    color: "bg-pink-50",
    headerColor: "bg-pink-500",
    textColor: "text-pink-600",
    buttonVariant: "default" // Primary pink
  },
  {
    id: "backend",
    badge: "The Engine",
    title: "Backend",
    subtitle: "Development",
    description: "Power the web. Learn server-side logic, databases, and API architecture.",
    level: "Intermediate",
    duration: "4 Months",
    whoFor: "Logic-minded problem solvers",
    included: [
      "Node.js & Express",
      "SQL & NoSQL Databases",
      "API Development",
      "Authentication",
      "Cloud Deployment"
    ],
    skills: [
      { name: "Node", icon: Server },
      { name: "SQL", icon: Database },
      { name: "API", icon: Layers },
      { name: "Auth", icon: CheckCircle }
    ],
    color: "bg-purple-50",
    headerColor: "bg-purple-500",
    textColor: "text-purple-600",
    buttonVariant: "secondary" // Differentiator
  },
  {
    id: "datascience",
    badge: "The Analysis",
    title: "Data",
    subtitle: "Science",
    description: "Unlock insights. Master Python and statistical analysis to make data-driven decisions.",
    level: "Beginner Friendly",
    duration: "4 Months",
    whoFor: "Analytical thinkers & math lovers",
    included: [
      "Python Programming",
      "Pandas & NumPy",
      "Data Visualization",
      "Statistical Analysis",
      "Real-world Datasets"
    ],
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Data", icon: Database },
      { name: "Viz", icon: BarChart },
      { name: "Stats", icon: Activity }
    ],
    color: "bg-blue-50",
    headerColor: "bg-blue-500",
    textColor: "text-blue-600",
    buttonVariant: "outline"
  },
  {
    id: "ml",
    badge: "The Future",
    title: "Machine",
    subtitle: "Learning",
    description: "Build the future. Create intelligent systems using neural networks and AI.",
    level: "Advanced",
    duration: "5 Months",
    whoFor: "Innovators wanting to build AI",
    included: [
      "Neural Networks",
      "TensorFlow & Keras",
      "Computer Vision",
      "NLP Basics",
      "Model Deployment"
    ],
    skills: [
      { name: "AI", icon: Brain },
      { name: "TF", icon: Cpu },
      { name: "Model", icon: Layers },
      { name: "NLP", icon: MessageSquare }
    ],
    color: "bg-indigo-50",
    headerColor: "bg-indigo-500",
    textColor: "text-indigo-600",
    buttonVariant: "ghost"
  }
];

import { Activity, MessageSquare } from "lucide-react"; // Additional icons

export default function Workshops() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        
        {/* Header Section */}
        <section className="pt-20 pb-12 text-center bg-secondary/20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4 text-foreground">
              Start a new career with <span className="text-primary">DigiHer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Hands-on & mentorship-driven coding workshops for ambitious women.
              <br className="hidden md:block" />
              Just last month, <span className="font-bold text-primary">500+ women</span> joined DigiHer Workshops.
            </p>

            {/* Partner Logos Strip (Visual only) */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-xl font-bold font-display">Google</span>
               <span className="text-xl font-bold font-display">Microsoft</span>
               <span className="text-xl font-bold font-display">Safaricom</span>
               <span className="text-xl font-bold font-display">Meta</span>
               <span className="text-xl font-bold font-display">Andela</span>
            </div>
          </div>
        </section>

        {/* Main Pricing/Workshop Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
               <p className="text-sm text-muted-foreground mb-2">Already a DigiHer student? <a href="#" className="text-primary hover:underline">Log in to access materials</a></p>
               <h2 className="text-2xl md:text-3xl font-display font-bold">Choose the best path to reach your career goals</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex"
                >
                  <div className={`flex flex-col w-full rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl ${workshop.color}`}>
                    
                    {/* Badge Header */}
                    <div className={`${workshop.headerColor} text-white text-center py-2 text-xs font-bold tracking-widest uppercase`}>
                      {workshop.badge}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col h-full">
                      {/* Title Block */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-8 h-8 rounded-lg ${workshop.headerColor} flex items-center justify-center text-white`}>
                            <Code className="w-5 h-5" />
                          </div>
                          <h3 className="text-2xl font-display font-bold text-foreground leading-none">
                            DigiHer
                          </h3>
                        </div>
                        <div className={`text-3xl font-display font-bold ${workshop.textColor}`}>
                          {workshop.title} <span className="text-foreground text-xl block font-medium">{workshop.subtitle}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        {workshop.description}
                      </p>

                      {/* Apply Button (Replaces Price) */}
                      <div className="mb-8">
                         <Link href="/contact">
                           <Button className="w-full rounded-full font-bold text-lg h-12 shadow-md hover:translate-y-[-2px] transition-transform">
                             Apply Now
                           </Button>
                         </Link>
                         <p className="text-xs text-center mt-2 text-muted-foreground">Full scholarships available</p>
                      </div>

                      {/* Specs List */}
                      <div className="space-y-6 mb-8 flex-grow">
                        <div>
                          <p className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1 mb-1">
                            <Layers className="w-3 h-3" /> Level
                          </p>
                          <p className="font-medium text-sm">{workshop.level}</p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1 mb-1">
                            <Clock className="w-3 h-3" /> Duration
                          </p>
                          <p className="font-medium text-sm">{workshop.duration}</p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1 mb-1">
                            <CheckCircle className="w-3 h-3" /> Who is this for
                          </p>
                          <p className="font-medium text-sm leading-tight">{workshop.whoFor}</p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Included in this package</p>
                          <ul className="space-y-2">
                            {workshop.included.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className={`w-4 h-4 ${workshop.textColor} flex-shrink-0 mt-0.5`} />
                                <span className="text-xs">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Skills Grid */}
                      <div className="pt-6 border-t border-black/5">
                        <p className="text-xs font-bold uppercase text-muted-foreground mb-3">Skills you'll gain</p>
                        <div className="grid grid-cols-4 gap-2">
                          {workshop.skills.map((skill, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-1">
                              <div className="w-8 h-8 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center">
                                <skill.icon className={`w-4 h-4 ${workshop.textColor}`} />
                              </div>
                              <span className="text-[10px] font-medium text-muted-foreground">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Link */}
                      <div className="mt-6 text-center">
                         <a href="https://www.cubetechacademy.com/course" target="_blank" rel="noopener noreferrer" className={`text-xs font-bold ${workshop.textColor} hover:underline flex items-center justify-center gap-1`}>
                           Learn more about {workshop.title} <ArrowRight className="w-3 h-3" />
                         </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Stats */}
            <div className="mt-24 text-center">
              <p className="text-primary font-bold text-lg mb-2">246,398 women already enrolled</p>
              <div className="flex justify-center -space-x-4">
                 {[1,2,3,4,5].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-background overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
