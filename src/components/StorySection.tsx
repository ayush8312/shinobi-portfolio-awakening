import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TimelineEvent {
  year: string;
  rank: string;
  title: string;
  location: string;
  description: string;
  icon: string;
}

const StorySection = () => {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  const timeline: TimelineEvent[] = [
    {
      year: "2018",
      rank: "Academy Student",
      title: "Started the Journey",
      location: "Kendriya Vidyalaya",
      description: "Began learning the fundamentals of programming and discovered the path of a developer ninja.",
      icon: "🥷"
    },
    {
      year: "2020", 
      rank: "Genin",
      title: "First Programming Missions",
      location: "Self-taught Journey",
      description: "Mastered Python basics and completed first coding challenges. The ninja way was becoming clear.",
      icon: "🐍"
    },
    {
      year: "2021",
      rank: "Chunin",
      title: "Advanced Training",
      location: "PSIT Kanpur",
      description: "Entered Computer Science program. Learned data structures, algorithms, and web development jutsu.",
      icon: "⚡"
    },
    {
      year: "2022",
      rank: "Special Jonin",
      title: "Machine Learning Sage",
      location: "Advanced Projects",
      description: "Specialized in ML and AI. Created Autism Spectrum Disorder prediction system using TensorFlow.",
      icon: "🧠"
    },
    {
      year: "2023",
      rank: "Jonin",
      title: "Full Stack Mastery",
      location: "Professional Projects",
      description: "Achieved mastery in React, Python, and database technologies. Built comprehensive web applications.",
      icon: "🔥"
    },
    {
      year: "2024",
      rank: "Hokage Candidate",
      title: "Cybersecurity Expert",
      location: "Current Mission",
      description: "Developing Network Intrusion Detection Systems and preparing for leadership in tech.",
      icon: "🛡️"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleEvents(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-foreground">Story Mode:</span>{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            The Path of a Developer Ninja
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From academy student to Hokage candidate - witness the evolution of a code shinobi
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="max-w-4xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
        
        {timeline.map((event, index) => (
          <div 
            key={index}
            className={`timeline-item relative mb-16 transition-all duration-700 ${
              visibleEvents.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-index={index}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
              <div className="w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center text-2xl animate-chakra-pulse">
                {event.icon}
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-12' : 'mr-auto pr-12'}`}>
              <Card className={`p-6 chakra-glow hover:scale-105 transition-transform duration-300 ${
                index % 2 === 0 ? 'animate-ninja-slide' : 'animate-ninja-slide'
              }`}>
                {/* Rank Badge */}
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold rounded-full mb-3">
                  {event.rank}
                </div>
                
                {/* Year */}
                <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                
                {/* Title & Location */}
                <h3 className="text-xl font-semibold text-foreground mb-1">{event.title}</h3>
                <p className="text-accent font-medium mb-3">{event.location}</p>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Progression */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          <span className="text-foreground">Skills</span>{" "}
          <span className="text-primary">Evolution</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { skill: 'Python', level: 95, color: 'from-blue-500 to-blue-600' },
            { skill: 'React', level: 90, color: 'from-cyan-500 to-cyan-600' },
            { skill: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
            { skill: 'Machine Learning', level: 85, color: 'from-purple-500 to-purple-600' },
            { skill: 'SQL', level: 82, color: 'from-green-500 to-green-600' },
            { skill: 'PowerBI', level: 80, color: 'from-orange-500 to-orange-600' },
            { skill: 'Cybersecurity', level: 78, color: 'from-red-500 to-red-600' },
            { skill: 'Node.js', level: 75, color: 'from-emerald-500 to-emerald-600' }
          ].map((skill, index) => (
            <div key={skill.skill} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="hsl(var(--muted))"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 30}`}
                    strokeDashoffset={`${2 * Math.PI * 30 * (1 - skill.level / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;