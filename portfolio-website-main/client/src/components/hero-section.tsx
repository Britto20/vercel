import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Full Stack Developer", "Java Developer", "Spring Boot Expert", "Problem Solver"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[textIndex];
      
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === currentFullText.length) {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Create particles
  const particles = Array.from({ length: 9 }, (_, i) => (
    <div
      key={i}
      className="particle absolute"
      style={{
        left: `${(i + 1) * 10}%`,
        animationDelay: `${i}s`,
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-background via-primary/20 to-secondary/20 dark:from-background dark:via-primary/10 dark:to-secondary/10 relative overflow-hidden">
      <div className="particles">
        {particles}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-accent font-medium mb-4 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="gradient-text">Priyanshi</span>
              <br />
              <span className="text-foreground">Gupta</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16">
              <span className="typing">{currentText}</span>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
              Passionate Computer Science student with expertise in Java, Spring Boot, and modern web technologies. 
              I create innovative solutions that bridge the gap between creativity and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="https://www.linkedin.com/in/priyanshi-gupta-a9415924a/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Priya2993" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/Priyanshi2993/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110">
                <Code className="w-6 h-6" />
              </a>
              <a href="mailto:priyanshigupta61276@gmail.com" className="text-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end animate-float"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional developer workspace"
              className="rounded-full w-80 h-80 object-cover border-8 border-white/20 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
