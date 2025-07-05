import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Globe, Languages, GraduationCap } from "lucide-react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate progress bars
          const skills = {
            "Java": 90,
            "JavaScript": 85,
            "C++": 80,
            "SQL": 75,
            "Spring Boot": 85,
            "Git/GitHub": 80,
            "AWS": 70,
            "Linux/iOS": 75,
            "Data Structures": 90,
            "OOP": 85,
            "Problem Solving": 88,
            "Team Collaboration": 82,
          };

          Object.entries(skills).forEach(([skill, target]) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setProgressValues(prev => ({ ...prev, [skill]: current }));
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programmingLanguages = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 80 },
    { name: "SQL", level: 75 },
  ];

  const frameworks = [
    { name: "Spring Boot", level: 85 },
    { name: "Git/GitHub", level: 80 },
    { name: "AWS", level: 70 },
    { name: "Linux/iOS", level: 75 },
  ];

  const concepts = [
    { name: "Data Structures", level: 90 },
    { name: "OOP", level: 85 },
    { name: "Problem Solving", level: 88 },
    { name: "Team Collaboration", level: 82 },
  ];

  const languages = [
    { name: "English", level: "Full Professional Proficiency", icon: Globe },
    { name: "Hindi", level: "Full Professional Proficiency", icon: Languages },
    { name: "French", level: "Currently Learning", icon: GraduationCap },
  ];

  const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress
              value={progressValues[skill.name] || 0}
              className="h-3"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/50 dark:bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <SkillCategory title="Programming Languages" skills={programmingLanguages} />
          <SkillCategory title="Frameworks & Technologies" skills={frameworks} />
          <SkillCategory title="Concepts & Others" skills={concepts} />
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {languages.map((lang, index) => {
              const IconComponent = lang.icon;
              return (
                <div
                  key={lang.name}
                  className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"
                >
                  <IconComponent className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h4 className="text-xl font-bold text-foreground mb-2">{lang.name}</h4>
                  <p className="text-muted-foreground">{lang.level}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
