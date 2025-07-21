import { useEffect, useState } from 'react';

interface VFXEffectProps {
  type: 'explosion' | 'chakra-surge' | 'lightning-storm' | 'fire-tornado' | 'ice-shards';
  intensity?: 'low' | 'medium' | 'high';
  duration?: number;
  trigger?: boolean;
}

const VFXEffect = ({ type, intensity = 'medium', duration = 3000, trigger }: VFXEffectProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      const timer = setTimeout(() => setIsActive(false), duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  const getIntensityClass = () => {
    switch (intensity) {
      case 'low': return 'opacity-30 scale-75';
      case 'high': return 'opacity-90 scale-125';
      default: return 'opacity-60 scale-100';
    }
  };

  const renderExplosion = () => (
    <div className={`absolute inset-0 pointer-events-none ${getIntensityClass()}`}>
      {/* Central Explosion */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-gradient-radial from-yellow-400 via-orange-500 to-red-600 rounded-full animate-ping" />
        <div className="absolute inset-4 bg-gradient-radial from-white via-yellow-300 to-transparent rounded-full animate-pulse" />
      </div>
      
      {/* Explosion Particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        const distance = 100;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        
        return (
          <div
            key={i}
            className="absolute w-4 h-4 bg-orange-500 rounded-full animate-bounce"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        );
      })}
    </div>
  );

  const renderChakraSurge = () => (
    <div className={`absolute inset-0 pointer-events-none ${getIntensityClass()}`}>
      {/* Chakra Waves */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border-2 border-primary/40 rounded-full animate-ping"
          style={{
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s'
          }}
        />
      ))}
      
      {/* Floating Chakra Orbs */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const renderLightningStorm = () => (
    <div className={`absolute inset-0 pointer-events-none ${getIntensityClass()}`}>
      {/* Lightning Bolts */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl text-blue-400 animate-pulse"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          ⚡
        </div>
      ))}
      
      {/* Electric Field */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 animate-pulse" />
      
      {/* Thunder Lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 bg-blue-400/60 animate-pulse"
          style={{
            width: '100%',
            top: `${20 + i * 15}%`,
            animationDelay: `${i * 0.4}s`,
            clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
          }}
        />
      ))}
    </div>
  );

  const renderFireTornado = () => (
    <div className={`absolute inset-0 pointer-events-none ${getIntensityClass()}`}>
      {/* Tornado Spiral */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-32 animate-spin">
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 opacity-60 rounded-full" 
             style={{ clipPath: 'polygon(50% 0%, 30% 100%, 70% 100%)' }} />
      </div>
      
      {/* Fire Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-lg animate-spin"
          style={{
            left: `${40 + Math.random() * 20}%`,
            top: `${30 + Math.random() * 40}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${1 + Math.random()}s`
          }}
        >
          🔥
        </div>
      ))}
    </div>
  );

  const renderIceShards = () => (
    <div className={`absolute inset-0 pointer-events-none ${getIntensityClass()}`}>
      {/* Ice Shards */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl text-cyan-300 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          💎
        </div>
      ))}
      
      {/* Frost Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-cyan-500/10 to-blue-500/20 animate-pulse" />
      
      {/* Ice Crystals */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  );

  if (!isActive) return null;

  const renderEffect = () => {
    switch (type) {
      case 'explosion': return renderExplosion();
      case 'chakra-surge': return renderChakraSurge();
      case 'lightning-storm': return renderLightningStorm();
      case 'fire-tornado': return renderFireTornado();
      case 'ice-shards': return renderIceShards();
      default: return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10 animate-scroll-reveal">
      {renderEffect()}
    </div>
  );
};

export default VFXEffect;