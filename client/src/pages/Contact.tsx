import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Web3Forms submission
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // User needs to replace this
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/254745414051", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-12 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our programs or want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <Card className="border-none shadow-lg bg-primary text-primary-foreground overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-display font-bold">Contact Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 mt-1 opacity-80" />
                        <div>
                          <p className="font-bold">Visit Us</p>
                          <p className="opacity-80">Nairobi Garage, Pinetree Plaza<br/>Ngong Road, Nairobi, Kenya</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 opacity-80" />
                        <div>
                          <p className="font-bold">Email Us</p>
                          <a href="mailto:info@the-cube.co.ke" className="opacity-80 hover:opacity-100 transition-opacity">
                            info@the-cube.co.ke
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 opacity-80" />
                        <div>
                          <p className="font-bold">Call Us</p>
                          <div className="opacity-80 space-y-1">
                            <a href="tel:+254115588872" className="block hover:opacity-100 transition-opacity">
                              +254 115 588 872
                            </a>
                            <a href="tel:+254745414051" className="block hover:opacity-100 transition-opacity">
                              +254 745 414 051
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                       <h4 className="font-bold mb-4">Quick Chat</h4>
                       <Button 
                        onClick={handleWhatsApp}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
                   <h3 className="text-xl font-display font-bold mb-4">Frequently Asked Questions</h3>
                   <div className="space-y-4">
                     <div>
                       <h4 className="font-bold text-sm mb-1">When is the next cohort?</h4>
                       <p className="text-sm text-muted-foreground">Our next cohort begins on October 1st, 2025. Applications close 2 weeks prior.</p>
                     </div>
                     <div>
                       <h4 className="font-bold text-sm mb-1">Is it really free?</h4>
                       <p className="text-sm text-muted-foreground">Yes! Thanks to our partners, our core bootcamps are fully scholarship-funded.</p>
                     </div>
                   </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-border shadow-xl">
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} className="h-12 bg-secondary/20" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="jane@example.com" {...field} className="h-12 bg-secondary/20" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Inquiry about mentorship" {...field} className="h-12 bg-secondary/20" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we help you?" 
                                  className="min-h-[150px] bg-secondary/20 resize-none" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {/* Hidden Web3Forms Access Key Input is handled in onSubmit, but we inform user here in comments */}
                        
                        <Button 
                          type="submit" 
                          className="w-full h-12 text-lg font-bold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
