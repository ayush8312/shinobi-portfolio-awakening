import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  const contactInfo = {
    email: "31860csaiml@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayush-mishra-4a9a8a185/",
    github: "https://github.com/ayush8312",
    portfolio: "https://ayush8312.github.io/Ayush-Mishra-Portfolio/"
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-secondary/20" />
      
      {/* Summoning Circle Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="summoning-circle w-96 h-96 opacity-20">
          <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 border border-accent/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ninja Scroll of</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a mission together? Reach out to this Developer Hokage 
            and let's create something legendary.
          </p>
        </div>

        {/* Main Contact Card */}
        <Card className="relative overflow-hidden chakra-glow p-8 md:p-12 mb-12">
          {/* Summoning Circle Animation */}
          <div 
            className={`absolute inset-0 transition-all duration-1000 ${
              isHovering ? 'opacity-30' : 'opacity-10'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="summoning-circle w-full h-full">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-8 border border-accent/30 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
            </div>
          </div>

          <div className="relative z-10">
            {/* Hokage Symbol */}
            <div className="text-6xl mb-6 animate-float">
              🎯
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-4">
              Reach the Hokage
            </h3>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you have a mission proposal, want to discuss collaboration, 
              or simply wish to connect with a fellow ninja of code, 
              don't hesitate to send a message.
            </p>

            {/* Primary Contact Button */}
            <div className="mb-8">
              <Button
                size="lg"
                className="jutsu-button px-8 py-4 text-lg font-semibold relative group"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                <Mail className="w-5 h-5 mr-3" />
                <span className="relative z-10">Send Message</span>
              </Button>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <Card 
                className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce">
                  <Mail className="w-8 h-8 mx-auto text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Direct Message</h4>
                <p className="text-sm text-muted-foreground break-all">
                  {contactInfo.email}
                </p>
              </Card>

              {/* LinkedIn */}
              <Card 
                className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(contactInfo.linkedin, '_blank')}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce">
                  <Linkedin className="w-8 h-8 mx-auto text-blue-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Professional Network</h4>
                <p className="text-sm text-muted-foreground">
                  Connect on LinkedIn
                </p>
              </Card>

              {/* GitHub */}
              <Card 
                className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(contactInfo.github, '_blank')}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce">
                  <Github className="w-8 h-8 mx-auto text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Code Repository</h4>
                <p className="text-sm text-muted-foreground">
                  Explore my GitHub
                </p>
              </Card>
            </div>
          </div>
        </Card>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            size="lg"
            className="px-6 py-3"
            onClick={() => window.open(contactInfo.portfolio, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Current Portfolio
          </Button>
          
          <Button
            variant="outline"
            size="lg" 
            className="px-6 py-3"
            onClick={() => {
              const resumeUrl = "https://drive.google.com/file/d/your-resume-id/view"; // Replace with actual resume link
              window.open(resumeUrl, '_blank');
            }}
          >
            📋 Download Resume
          </Button>
        </div>

        {/* Fun Fact */}
        <div className="mt-16 p-6 bg-muted/50 rounded-lg border border-primary/20">
          <p className="text-lg">
            <span className="text-primary font-semibold">Fun Fact:</span>{" "}
            <span className="text-muted-foreground">
              I usually respond to messages faster than Minato's Flying Thunder God technique! ⚡
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;