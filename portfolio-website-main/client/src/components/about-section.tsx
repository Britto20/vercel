import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ cgpa: 0, skills: 0, internships: 0, languages: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          
          // Animate counters
          const targets = { cgpa: 9.5, skills: 10, internships: 2, languages: 3 };
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setCounts({
              cgpa: Number((targets.cgpa * progress).toFixed(1)),
              skills: Math.floor(targets.skills * progress),
              internships: Math.floor(targets.internships * progress),
              languages: Math.floor(targets.languages * progress),
            });
            
            if (step >= steps) {
              clearInterval(timer);
              setCounts(targets);
            }
          }, stepTime);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/50 dark:bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passions, and what drives me in the world of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern technology background"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">Hello! I'm Priyanshi Gupta</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I am a passionate Computer Science student from Uttaranchal Institute of Technology, Dehradun, 
              with a strong academic record (CGPA: 9.5/10) and a keen interest in software development. 
              My journey in technology is driven by curiosity and the desire to create innovative solutions 
              that make a real impact.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Currently pursuing my B.Tech in Computer Science, I have developed expertise in multiple 
              programming languages and frameworks including Java, Spring Boot, JavaScript, and more. 
              I enjoy tackling complex challenges and collaborating with teams to bring ideas to life.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">{counts.cgpa}</div>
                <div className="text-sm text-muted-foreground">CGPA/10</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">{counts.skills}</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">{counts.internships}</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">{counts.languages}</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/attached_assets/Resume.doc_1751694522630.docx';
                  link.download = 'Priyanshi_Gupta_Resume.docx';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
