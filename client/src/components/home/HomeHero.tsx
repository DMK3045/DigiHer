import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/african_women_in_tech_hero_image.png";
import mentorshipImage from "@assets/generated_images/tech_workshop_mentorship.png";

export default function HomeHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Join the next cohort starting October 1st
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
              Teaching <br/>
              <span className="text-primary">Kenyan Women</span> <br/>
              How to Code
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              DigiHer provides free & affordable coding workshops, mentorship, and career support to help women enter the technology sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/workshops">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Start Learning Now
                </Button>
              </Link>
              <Link href="/mission">
                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-background/50 backdrop-blur hover:bg-background">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Beginner Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Certified Courses</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
             {/* Abstract shapes */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
             
             <div className="relative z-10 w-full max-w-md lg:max-w-full perspective-1000">
               {/* Second Image (Collage effect) */}
               <div className="absolute -top-16 -right-16 w-3/4 h-auto hidden md:block z-0">
                  <img 
                    src={mentorshipImage} 
                    alt="Mentorship session" 
                    className="w-full h-full rounded-2xl shadow-xl -rotate-6 border-4 border-white opacity-90"
                  />
               </div>

               {/* Main Image */}
               <div className="relative z-10">
                 <img 
                   src={heroImage} 
                   alt="Happy woman coding" 
                   className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white w-full"
                 />
               </div>
               
               {/* Floating badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 animate-bounce duration-[3000ms] z-20">
                 <div className="bg-green-100 p-2 rounded-full">
                   <CheckCircle className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="font-bold text-sm">Job Offer Received</p>
                   <p className="text-xs text-muted-foreground">Just now</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
