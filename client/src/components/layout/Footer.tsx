import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-3xl font-display font-bold tracking-tighter text-white mb-6 block">
                DigiHer<span className="text-primary">.</span>
              </a>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg mb-6">
              Empowering the next generation of female tech leaders in Kenya and beyond.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@the-cube.co.ke" className="hover:text-primary transition-colors">
                  info@the-cube.co.ke
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+254115588872" className="hover:text-primary transition-colors">
                    +254 115 588 872
                  </a>
                  <a href="tel:+254745414051" className="hover:text-primary transition-colors">
                    +254 745 414 051
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/workshops"><a className="hover:text-primary transition-colors">Bootcamps</a></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">School Outreach</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; 2025 DigiHer Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
