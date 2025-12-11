import { Calendar } from "lucide-react";
import networkingImage from "@assets/generated_images/women_networking_event.png";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Events() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Upcoming Events</h1>
              <p className="text-lg text-muted-foreground">
                Join our workshops, hackathons, and networking sessions to connect and grow.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-0 border border-border">
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
      </main>
      <Footer />
    </div>
  );
}
