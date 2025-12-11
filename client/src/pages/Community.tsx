import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroImage from "@assets/generated_images/african_women_in_tech_hero_image.png";

export default function Community() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
                Join 5,000+ Women <br/><span className="text-primary">Making History</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our community is more than just a network. It's a movement. Connect, collaborate, and create the future of technology in Africa with us.
              </p>
            </div>

            <div className="relative h-[60vh] w-full overflow-hidden mb-16">
              <img 
                src={heroImage} 
                alt="Community members" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="h-16 px-10 text-xl font-display font-bold rounded-none bg-primary hover:bg-primary/90 text-white">
                   Join DigiHer on Slack
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
