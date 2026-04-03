import { Code2, Server, Database, Shield, Wrench, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skillCategories: { title: string; icon: LucideIcon; skills: string[] }[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring Security", "REST APIs", "JWT", "JPA/Hibernate"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Maven"],
  },
  {
    title: "Concepts",
    icon: Shield,
    skills: ["API Security", "RBAC", "Exception Handling", "Database Design"],
  },
  {
    title: "Learning",
    icon: Sparkles,
    skills: ["ES6+", "Async/Await", "DOM", "Frontend Integration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(174_72%_50%/0.04),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-2">
          Technologies I work with
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(174_72%_50%/0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
