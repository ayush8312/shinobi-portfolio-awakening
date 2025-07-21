import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  icon: string;
  link?: string;
  difficulty: 'Genin' | 'Chunin' | 'Jonin';
  year: string;
}

const CertificationsSection = () => {
  const [visibleCerts, setVisibleCerts] = useState<Set<number>>(new Set());

  const certifications: Certification[] = [
    {
      title: "Cybersecurity Fundamentals",
      issuer: "LinkedIn Learning",
      description: "Advanced training in network security, threat detection, and incident response. Mastered the art of digital defense.",
      skills: ["Network Security", "Threat Analysis", "Incident Response", "Vulnerability Assessment"],
      icon: "🛡️",
      difficulty: "Jonin",
      year: "2024"
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      description: "Demonstrated proficiency in Java development, object-oriented programming, and algorithmic problem solving.",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      icon: "☕",
      difficulty: "Chunin", 
      year: "2023"
    },
    {
      title: "Python Mastery",
      issuer: "HackerRank",
      description: "Certified expertise in Python programming, demonstrating advanced knowledge in data manipulation and automation.",
      skills: ["Python", "Data Analysis", "Automation", "Scripting"],
      icon: "🐍",
      difficulty: "Jonin",
      year: "2023"
    },
    {
      title: "HTML Fundamentals",
      issuer: "Simplilearn",
      description: "Foundation certification in HTML markup, semantic web development, and modern web standards.",
      skills: ["HTML5", "Web Standards", "Semantic Markup", "Accessibility"],
      icon: "🌐",
      difficulty: "Genin",
      year: "2022"
    },
    {
      title: "JavaScript Essentials",
      issuer: "Infosys Springboard",
      description: "Comprehensive JavaScript training covering ES6+, DOM manipulation, and modern development practices.",
      skills: ["JavaScript", "ES6+", "DOM", "Event Handling"],
      icon: "⚡",
      difficulty: "Chunin",
      year: "2023"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCerts(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const certElements = document.querySelectorAll('.cert-item');
    certElements.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Genin': return 'bg-green-500';
      case 'Chunin': return 'bg-blue-500'; 
      case 'Jonin': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Chunin Exams:</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications Earned
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each certification represents a trial overcome, a skill mastered, and a step closer to becoming Hokage.
            These scrolls bear witness to dedication and expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-item transition-all duration-700 ${
                visibleCerts.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="group relative overflow-hidden chakra-glow hover:scale-105 transition-all duration-500 h-full">
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 text-4xl animate-float">
                  {cert.icon}
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getDifficultyColor(cert.difficulty)} text-white`}>
                    {cert.difficulty} Level
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 pt-16">
                  {/* Year */}
                  <div className="text-sm text-accent font-semibold mb-2">
                    Achieved {cert.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-primary font-medium mb-4">{cert.issuer}</p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Skills Mastered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  {cert.link && (
                    <div className="mt-6">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">
            Certification Journey
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Skills Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            The journey of learning never ends. More certifications are always in progress.
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold animate-glow">
            🎯 Currently pursuing: AWS Cloud Practitioner
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;