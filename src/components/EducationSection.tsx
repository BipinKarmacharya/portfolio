import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: "BE Computer Engineering",
    institution: "Lumbini Engineering College",
    university: "Pokhara University",
    period: "2022 – 2025",
    status: "Awaiting Final Result",
    icon: GraduationCap,
    highlights: [
      "Software Engineering",
      "Backend Development",
      "Database Systems",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Crimson Technical College",
    university: "CTEVT",
    period: "2017 – 2021",
    status: "Completed",
    icon: BookOpen,
    highlights: ["Programming", "Networking", "Computer Systems"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle,hsl(174_72%_50%/0.05),transparent_70%)]" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[radial-gradient(circle,hsl(220_60%_30%/0.08),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          My <span className="text-gradient">Education</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-2">
          Academic background & qualifications
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {education.map((edu, i) => {
              const Icon = edu.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex items-start mb-12 last:mb-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center animate-pulse-glow">
                      <Icon size={18} className="text-primary" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 card-shadow group">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono-code text-xs text-primary tracking-wider">
                          {edu.period}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            edu.status === "Completed"
                              ? "bg-primary/15 text-primary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-primary/70 mb-1">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mb-4">
                        {edu.university}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {edu.highlights.map((h) => (
                          <span
                            key={h}
                            className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                          >
                            <Award size={10} className="text-primary" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
