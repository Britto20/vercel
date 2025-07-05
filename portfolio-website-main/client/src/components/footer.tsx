import { Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 dark:bg-muted/20 text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Priyanshi Gupta</h3>
            <p className="text-muted-foreground mb-4">
              Passionate Full Stack Developer creating innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/priyanshi-gupta-a9415924a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Priya2993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Priyanshi2993/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                priyanshigupta61276@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 7321843577
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Dehradun, Uttarakhand
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Priyanshi Gupta. All rights reserved. Built with ❤️ and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}
