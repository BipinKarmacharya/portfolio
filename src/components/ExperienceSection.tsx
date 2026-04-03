import { Briefcase, Trophy, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Web Development Instructor",
    company: "Lumbini Engineering College",
    date: "September 2024",
    description:
      "Conducted web development training for 50+ students covering HTML, CSS, and JavaScript fundamentals.",
    highlight: "50+ Students Trained",
  },
  {
    icon: Trophy,
    title: "4th Place – Grackathon 2023",
    company: "Hackathon Competition",
    date: "2023",
    description:
      'Developed "FoodShare", a web platform to reduce food waste by connecting donors with nearby recipients in real-time.',
    highlight: "Top 4 Finish",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,hsl(174_72%_50%/0.06),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-2">
          Professional journey & achievements
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div
                key={i}
                className="group relative grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start"
              >
                {/* Date column */}
                <div className="hidden md:flex flex-col items-end pt-2">
                  <span className="font-mono-code text-xs text-primary/80 tracking-wider">
                    {exp.date}
                  </span>
                </div>

                {/* Card */}
                <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 card-shadow group-hover:translate-x-1">
                  {/* Glow line on left */}
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-primary/20 rounded-full group-hover:bg-primary/60 transition-colors duration-500" />

                  <div className="flex items-start gap-4 pl-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <ArrowUpRight
                          size={14}
                          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p className="text-sm text-primary/70 mb-0.5">{exp.company}</p>
                      <span className="md:hidden font-mono-code text-xs text-muted-foreground">
                        {exp.date}
                      </span>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                      <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {exp.highlight}
                      </span>
                    </div>
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

export default ExperienceSection;
