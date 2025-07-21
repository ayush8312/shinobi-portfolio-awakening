import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import VFXEffect from '@/components/VFXEffect';

interface Weapon {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
  description: string;
  color: string;
}

const TechStackSection = () => {
  const [hoveredWeapon, setHoveredWeapon] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(true);
  const [showLightning, setShowLightning] = useState(false);

  const weapons: Weapon[] = [
    { name: "Python", category: "Primary Weapon", proficiency: 95, icon: "🐍", description: "The serpent's wisdom for data manipulation and AI", color: "text-blue-500" },
    { name: "JavaScript", category: "Dual Blades", proficiency: 88, icon: "⚡", description: "Lightning-fast frontend and backend mastery", color: "text-yellow-500" },
    { name: "React", category: "Shield Technique", proficiency: 90, icon: "⚛️", description: "Protective barrier for dynamic user interfaces", color: "text-cyan-500" },
    { name: "Node.js", category: "Shadow Clone", proficiency: 75, icon: "🟢", description: "Server-side multiplication technique", color: "text-green-500" },
    { name: "TensorFlow", category: "Mind Reading", proficiency: 85, icon: "🧠", description: "Artificial intelligence and machine learning jutsu", color: "text-orange-500" },
    { name: "SQL", category: "Data Sealing", proficiency: 82, icon: "🗃️", description: "Ancient scrolls of data manipulation", color: "text-purple-500" },
    { name: "PowerBI", category: "Visual Illusion", proficiency: 80, icon: "📊", description: "Transform data into powerful visual stories", color: "text-indigo-500" },
    { name: "Git", category: "Time Travel", proficiency: 85, icon: "🌀", description: "Master of version control and timeline management", color: "text-red-500" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsSpinning(false), 3000);
    
    // Lightning effect every 8 seconds
    const lightningInterval = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 2000);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(lightningInterval);
    };
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* VFX Effects */}
      <VFXEffect type="lightning-storm" trigger={showLightning} intensity="medium" />
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-foreground">Weapons Pouch:</span>{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tech Arsenal
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Every ninja needs their weapons. These are the tools and technologies 
          I've mastered in my journey to become a Full Stack Hokage.
        </p>
      </div>

      {/* Central Weapons Pouch */}
      <div className="max-w-4xl mx-auto relative">
        <div className="relative w-80 h-80 mx-auto mb-16">
          {/* Center Pouch */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary/50 rounded-full border-4 border-primary flex items-center justify-center text-4xl animate-chakra-pulse">
              🎒
            </div>
          </div>

          {/* Orbiting Weapons */}
          {weapons.map((weapon, index) => {
            const angle = (index * 360) / weapons.length;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={weapon.name}
                className={`absolute w-16 h-16 transition-all duration-500 cursor-pointer ${
                  isSpinning ? 'weapon-spin' : ''
                } ${hoveredWeapon === index ? 'scale-125 z-20' : 'scale-100 z-10'}`}
                style={{
                  left: `calc(50% + ${x}px - 2rem)`,
                  top: `calc(50% + ${y}px - 2rem)`,
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={() => setHoveredWeapon(index)}
                onMouseLeave={() => setHoveredWeapon(null)}
              >
                <div className="w-full h-full bg-card border-2 border-primary rounded-full flex items-center justify-center text-2xl chakra-glow">
                  {weapon.icon}
                </div>
                
                {/* Tooltip */}
                {hoveredWeapon === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 p-4 bg-card border border-primary rounded-lg shadow-lg animate-scroll-reveal z-30">
                    <h4 className="font-bold text-primary mb-1">{weapon.name}</h4>
                    <p className="text-xs text-accent mb-2">{weapon.category}</p>
                    <p className="text-sm text-muted-foreground mb-3">{weapon.description}</p>
                    
                    {/* Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Proficiency</span>
                        <span className="text-primary font-bold">{weapon.proficiency}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent rounded-full h-2 transition-all duration-1000"
                          style={{ width: `${weapon.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {weapons.map((weapon, index) => (
            <Card 
              key={weapon.name} 
              className="p-6 text-center chakra-glow hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{weapon.icon}</div>
              <h3 className="font-bold text-foreground mb-2">{weapon.name}</h3>
              <p className="text-sm text-accent mb-3">{weapon.category}</p>
              
              {/* Circular Progress */}
              <div className="relative w-16 h-16 mx-auto">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="hsl(var(--muted))"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - weapon.proficiency / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{weapon.proficiency}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Supporting Jutsu</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Docker", "AWS", "MongoDB", "PostgreSQL", "Redux", "TypeScript",
              "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter",
              "VS Code", "Postman", "Figma", "Linux"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;