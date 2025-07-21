import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  jutsuType: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  icon: string;
  difficulty: 'Genin' | 'Chunin' | 'Jonin' | 'Hokage';
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Autism Spectrum Disorder Prediction",
      jutsuType: "Medical Healing Jutsu",
      description: "Advanced machine learning system using TensorFlow and React to predict autism spectrum disorders with high accuracy. Implements sophisticated algorithms for early detection and intervention.",
      technologies: ["Python", "TensorFlow", "React", "Scikit-learn", "Pandas", "NumPy"],
      features: [
        "Machine Learning Model with 95% accuracy",
        "Interactive React frontend",
        "Real-time prediction system", 
        "Data visualization dashboard",
        "Responsive design"
      ],
      github: "https://github.com/ayush8312/Autism_Spectrum_Disorder_Prediction",
      icon: "🧠",
      difficulty: "Hokage"
    },
    {
      title: "Data Hiding using Steganography",
      jutsuType: "Shadow Clone Jutsu",
      description: "Sophisticated steganography tool built with Python and Tkinter for secure data hiding within images. Implements advanced encoding techniques for covert communication.",
      technologies: ["Python", "Tkinter", "PIL", "NumPy", "Cryptography"],
      features: [
        "LSB steganography algorithm",
        "Image-based data hiding",
        "User-friendly GUI interface",
        "Multiple file format support",
        "Encryption capabilities"
      ],
      github: "https://github.com/ayush8312/Steganography",
      icon: "🥷",
      difficulty: "Jonin"
    },
    {
      title: "Network Intrusion Detection System",
      jutsuType: "Barrier Defense Jutsu",
      description: "Intelligent cybersecurity system using SVM and Pandas for real-time network threat detection. Provides comprehensive security monitoring and incident response.",
      technologies: ["Python", "SVM", "Pandas", "Scikit-learn", "NetworkX", "Matplotlib"],
      features: [
        "Real-time threat detection",
        "Machine learning classification",
        "Network traffic analysis",
        "Automated alert system",
        "Performance analytics"
      ],
      github: "#",
      icon: "🛡️",
      difficulty: "Jonin"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Genin': return 'bg-green-500';
      case 'Chunin': return 'bg-blue-500';
      case 'Jonin': return 'bg-purple-500';
      case 'Hokage': return 'bg-gradient-to-r from-primary to-accent';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Jutsu Scrolls:</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Project Arsenal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behold the powerful jutsu techniques mastered through countless missions. 
            Each scroll contains the secrets of advanced development arts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden chakra-glow hover:scale-105 transition-all duration-500 cursor-pointer ${
                selectedProject === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              {/* Difficulty Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge className={`${getDifficultyColor(project.difficulty)} text-white`}>
                  {project.difficulty}
                </Badge>
              </div>

              {/* Project Icon */}
              <div className="text-6xl text-center pt-8 pb-4 animate-float">
                {project.icon}
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                <div className="text-sm text-accent font-semibold mb-2">
                  {project.jutsuType}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 jutsu-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProject === index && (
                <div className="absolute inset-0 bg-card/95 backdrop-blur-sm p-6 flex flex-col justify-center animate-scroll-reveal">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{project.icon}</div>
                    <h4 className="text-lg font-bold text-primary">{project.title}</h4>
                  </div>
                  
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Key Features:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Tech Arsenal:</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more jutsu techniques in action?
          </p>
          <Button 
            size="lg" 
            className="jutsu-button px-8 py-4"
            onClick={() => window.open('https://github.com/ayush8312', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            Explore Full Arsenal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;