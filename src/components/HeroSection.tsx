import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Backend Developer",
  "Software Engineer",
  "Spring Boot Expert",
  "API Architect",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174_72%_50%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(220_60%_30%/0.1),transparent_60%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Terminal size={14} className="text-primary" />
            <span className="font-mono-code text-xs text-muted-foreground">
              ~/bipin-karmacharya
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Bipin </span>
            <span className="text-gradient">Karmacharya</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="h-10 flex items-center justify-center mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <span className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
            </span>
            <span className="w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </div>

          <p
            className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Computer Engineering graduate skilled in Java, Spring Boot & REST APIs.
            Passionate about building scalable, secure backend systems.
          </p>

          <div
            className="flex items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-shadow hover:scale-[1.02]"
            >
              <Mail size={18} />
              Get In Touch
            </a>
            <a
              href="https://github.com/BipinKarmacharya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-card hover:border-primary/50 hover:scale-105 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/bipin-karmacharya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-card hover:border-primary/50 hover:scale-105 transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
