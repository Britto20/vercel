import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Uttaranchal Institute of Technology",
      location: "Dehradun, Uttarakhand",
      period: "2022 - 2026",
      grade: "9.5/10 CGPA",
      borderColor: "border-primary",
      textColor: "text-primary",
    },
    {
      degree: "CBSE 12th Grade",
      field: "Science Stream",
      institution: "Delhi Public School Gaya",
      location: "Bihar, India",
      period: "2022",
      grade: "70%",
      borderColor: "border-secondary",
      textColor: "text-secondary",
    },
    {
      degree: "CBSE 10th Grade",
      field: "All Subjects",
      institution: "Delhi Public School Gaya",
      location: "Bihar, India",
      period: "2020",
      grade: "85%",
      borderColor: "border-accent",
      textColor: "text-accent",
    },
  ];

  const experience = [
    {
      title: "Technical Intern",
      company: "Rishi Kirti Technologies Pvt. Ltd.",
      location: "Noida, India (Offline)",
      period: "June - July 2024",
      tag: "Recent",
      tagColor: "bg-primary/10 text-primary",
      borderColor: "border-primary",
      achievements: [
        'Developed "Fiy Link", a Linktree clone with Java and Spring framework',
        "Implemented CRUD operations and RESTful APIs",
        "Tested APIs with Postman and collaborated using GitHub",
        "Enhanced technical skills in corporate environment",
      ],
    },
    {
      title: "C++ & Data Structure Training",
      company: "Slog Solutions Pvt Ltd",
      location: "Online Training Program",
      period: "June - July 2023",
      tag: "6 Weeks",
      tagColor: "bg-secondary/10 text-secondary",
      borderColor: "border-secondary",
      achievements: [
        "Completed comprehensive 6-week training program",
        "Learned fundamental data structures concepts",
        "Strengthened problem-solving skills in C++",
        "Developed algorithms and coding solutions",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Education & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional experiences that have shaped my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-xl shadow-lg border-l-4 ${item.borderColor}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground">{item.degree}</h4>
                      <p className={`${item.textColor} font-semibold`}>{item.field}</p>
                      <p className="text-muted-foreground">{item.institution}</p>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </p>
                      <p className={`text-lg font-bold ${item.textColor}`}>{item.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-xl shadow-lg border-l-4 ${item.borderColor}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground">{item.title}</h4>
                      <p className="text-primary font-semibold">{item.company}</p>
                      <p className="text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <CheckCircle className="text-primary mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
