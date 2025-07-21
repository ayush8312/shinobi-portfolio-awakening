import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-br from-secondary via-muted to-background overflow-hidden">
      {/* Chakra Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Ninja Creed */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Developer's Ninja Way
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "I will never give up on my code, no matter how complex the bug. 
              I will always strive to write clean, efficient solutions that serve the community."
            </p>
            <div className="flex items-center text-sm text-primary">
              <span className="mr-2">忍者の道</span>
              <span>(The Way of the Ninja)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Hokage Mountain", href: "#home" },
                { name: "Story Mode", href: "#about" },
                { name: "Jutsu Scrolls", href: "#projects" },
                { name: "Weapons Pouch", href: "#skills" },
                { name: "Chunin Exams", href: "#certifications" },
                { name: "Contact Scroll", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Connect</h3>
            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/ayush8312', '_blank')}
              >
                <Github className="w-4 h-4 mr-3" />
                GitHub Arsenal
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start hover:bg-blue-600 hover:text-white"
                onClick={() => window.open('https://www.linkedin.com/in/ayush-mishra-4a9a8a185/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-3" />
                LinkedIn Network
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start hover:bg-red-600 hover:text-white"
                onClick={() => window.open('mailto:31860csaiml@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-3" />
                Direct Message
              </Button>
            </div>
          </div>
        </div>

        {/* Hidden Leaf Village Symbol */}
        <div className="text-center mb-8">
          <div className="inline-block p-6 border-2 border-primary/30 rounded-full mb-4">
            <div className="text-4xl animate-chakra-pulse">🍃</div>
          </div>
          <p className="text-muted-foreground text-sm">
            Hidden Leaf Village • Developer Division
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              <span>and lots of chakra by Ayush Mishra</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved • Believe it! 🦊
            </div>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by React • TypeScript • Tailwind CSS • shadcn/ui
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Animated with the power of CSS and JavaScript jutsu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;