import { useEffect, useState } from 'react';

interface AnimatedCharacterProps {
  position: 'left' | 'right' | 'center';
  jutsuType: 'fire' | 'lightning' | 'shadow' | 'wind' | 'water';
  size?: 'small' | 'medium' | 'large';
  delay?: number;
}

const AnimatedCharacter = ({ position, jutsuType, size = 'medium', delay = 0 }: AnimatedCharacterProps) => {
  const [isActive, setIsActive] = useState(false);
  const [showVFX, setShowVFX] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, delay);

    const vfxTimer = setInterval(() => {
      setShowVFX(true);
      setTimeout(() => setShowVFX(false), 2000);
    }, 5000 + Math.random() * 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(vfxTimer);
    };
  }, [delay]);

  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'w-16 h-20';
      case 'large': return 'w-32 h-40';
      default: return 'w-24 h-30';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'left': return 'left-4 md:left-8';
      case 'right': return 'right-4 md:right-8';
      default: return 'left-1/2 transform -translate-x-1/2';
    }
  };

  const getJutsuVFX = () => {
    switch (jutsuType) {
      case 'fire':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Fire Ball */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce opacity-80">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full animate-pulse" />
              🔥
            </div>
            {/* Fire Trail */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-red-500/50 to-transparent animate-pulse" />
          </div>
        );
      
      case 'lightning':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Lightning Bolt */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-2xl animate-pulse text-blue-400">
              ⚡
            </div>
            {/* Lightning Aura */}
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping" />
            <div className="absolute inset-2 border border-cyan-300/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
        );

      case 'shadow':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Shadow Clones */}
            <div className="absolute -left-8 top-0 opacity-40 animate-fade-in">
              🥷
            </div>
            <div className="absolute -right-8 top-0 opacity-40 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              🥷
            </div>
            {/* Shadow Particles */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-500/60 rounded-full animate-float"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'wind':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Wind Spirals */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl animate-spin text-green-400">
              🌪️
            </div>
            {/* Wind Lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 bg-green-400/30 animate-pulse"
                style={{
                  width: `${20 + i * 10}%`,
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 5}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        );

      case 'water':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Water Droplets */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl animate-bounce text-blue-500">
              💧
            </div>
            {/* Water Ripples */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 border-2 border-blue-400/30 rounded-full animate-ping" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 border border-blue-300/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
        );
    }
  };

  return (
    <div className={`absolute bottom-8 ${getPositionClasses()} ${getSizeClasses()} z-0 pointer-events-none`}>
      {/* Character Base */}
      <div className={`relative w-full h-full transition-all duration-1000 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Ninja Character */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl animate-float">
          🥷
        </div>

        {/* Chakra Aura */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-full animate-pulse" />
        <div className="absolute inset-2 border border-primary/30 rounded-full animate-ping" />

        {/* VFX Effects */}
        {showVFX && (
          <div className="animate-scroll-reveal">
            {getJutsuVFX()}
          </div>
        )}

        {/* Battle Dust */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-muted/40 rounded-full animate-bounce"
              style={{
                left: `${i * 15}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BattleScene = () => {
  return (
    <>
      {/* Left Side Characters */}
      <AnimatedCharacter position="left" jutsuType="fire" size="medium" delay={500} />
      <AnimatedCharacter position="left" jutsuType="shadow" size="small" delay={2000} />
      
      {/* Right Side Characters */}
      <AnimatedCharacter position="right" jutsuType="lightning" size="medium" delay={1000} />
      <AnimatedCharacter position="right" jutsuType="wind" size="small" delay={3000} />
      
      {/* Center Background Character */}
      <AnimatedCharacter position="center" jutsuType="water" size="large" delay={1500} />
      
      {/* Flying Projectiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-lg animate-bounce"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '3s'
            }}
          >
            🔯
          </div>
        ))}
      </div>
      
      {/* Background Energy Waves */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"
            style={{
              top: `${25 + i * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BattleScene;