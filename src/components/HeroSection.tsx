import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import BattleScene from '@/components/BattleScene';
import VFXEffect from '@/components/VFXEffect';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showVFX, setShowVFX] = useState(false);
  
  const titles = [
    "Developer Shinobi",
    "Code Ninja",
    "Data Sage",
    "Full Stack Hokage"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
      setShowVFX(true);
      setTimeout(() => setShowVFX(false), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Chakra Particles Background */}
      <div className="chakra-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="chakra-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hidden Leaf Village Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary/20" />
      
      {/* Hokage Mountain Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-secondary/30 to-transparent" 
           style={{
             clipPath: 'polygon(0 100%, 20% 60%, 40% 80%, 60% 40%, 80% 70%, 100% 50%, 100% 100%)'
           }} />

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        
        {/* Ninja Greeting */}
        <div className="mb-8 animate-ninja-slide">
          <p className="text-lg text-muted-foreground mb-2">
            隠れ里の忍者 (Hidden Village Ninja)
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="block text-foreground mb-2">Ayush</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fire-dance">
            Mishra
          </span>
        </h1>

        {/* Dynamic Subtitle */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary typing-effect">
            {titles[textIndex]}
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Master of Python, React, and the art of transforming ideas into powerful digital solutions.
          Currently on a mission to become the ultimate Full Stack Hokage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="jutsu-button px-8 py-4 text-lg font-semibold relative group"
          >
            <span className="relative z-10">View Jutsu Scrolls</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground chakra-glow"
          >
            Contact Hokage
          </Button>
        </div>

        {/* Ninja Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>

      {/* Battle Scene Background */}
      <BattleScene />
      
      {/* VFX Effects */}
      <VFXEffect type="chakra-surge" trigger={showVFX} intensity="medium" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;