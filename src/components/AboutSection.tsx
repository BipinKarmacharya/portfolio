import { Code2, Server, Database } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Dev", desc: "Spring Boot & REST APIs" },
  { icon: Database, label: "Database", desc: "PostgreSQL & MySQL" },
  { icon: Code2, label: "Clean Code", desc: "Scalable architecture" },
];

const stats = [
  { value: "15+", label: "GitHub Repos" },
  { value: "5+", label: "Projects" },
  { value: "1+", label: "Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-2">
          Get to know me better
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm a Computer Engineering graduate from Pokhara University. Currently working as a
              Java & Spring Boot Developer Intern at Oncore Software Solutions (outsourcing partner
              of Equifax). I specialize in building microservices, RESTful APIs, and backend systems.
              Passionate about clean architecture and eager to grow as a backend engineer.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-gradient mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 card-shadow text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsl(174_72%_50%/0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-foreground">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
