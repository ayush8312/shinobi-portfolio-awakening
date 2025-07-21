import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Simulate intro loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(introTimer);
    };
  }, []);

  if (showIntro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
        {/* Cinematic Intro */}
        <div className="text-center relative">
          {/* Background particles */}
          <div className="absolute inset-0 -m-20">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Intro Text */}
          <div className={`relative z-10 transition-all duration-2000 ${
            isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}>
            <div className="text-6xl mb-6 animate-chakra-pulse">🍃</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 typing-effect">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome to the Hidden Leaf Village
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-ninja-slide">
              Where code meets chakra...
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-glow" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation would go here if needed */}
      
      {/* Main Sections */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <StorySection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="skills">
          <TechStackSection />
        </section>
        
        <section id="certifications">
          <CertificationsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
