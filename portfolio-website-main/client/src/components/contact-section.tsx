import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  // Create particles
  const particles = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className="particle absolute"
      style={{
        left: `${(i + 1) * 20}%`,
        animationDelay: `${i * 2}s`,
      }}
    />
  ));

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 relative overflow-hidden">
      <div className="particles">
        {particles}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Let's Connect!</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:priyanshigupta61276@gmail.com"
                    className="text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    priyanshigupta61276@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+917321843577"
                    className="text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    +91 7321843577
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Dehradun, Uttarakhand, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/priyanshi-gupta-a9415924a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="text-primary w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Priya2993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="text-primary w-6 h-6" />
                </a>
                <a
                  href="https://leetcode.com/u/Priyanshi2993/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Code className="text-primary w-6 h-6" />
                </a>
                <a
                  href="mailto:priyanshigupta61276@gmail.com"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="text-primary w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Name"
                            className="bg-background/50 border-border text-foreground placeholder-muted-foreground focus:ring-accent focus:border-accent"
                          />
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
                        <FormLabel className="text-foreground font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className="bg-background/50 border-border text-foreground placeholder-muted-foreground focus:ring-accent focus:border-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-foreground font-semibold">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Subject"
                          className="bg-background/50 border-border text-foreground placeholder-muted-foreground focus:ring-accent focus:border-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Your message..."
                          className="bg-background/50 border-border text-foreground placeholder-muted-foreground focus:ring-accent focus:border-accent resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
