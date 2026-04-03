import { Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Yatrika – Smart Tour Planner",
    description:
      "A scalable backend system for tour planning with JWT authentication, role-based authorization, and 15+ protected REST APIs. Integrated FastAPI microservice for smart recommendations.",
    tags: ["Spring Boot", "PostgreSQL", "JWT", "FastAPI", "REST API"],
    github: "https://github.com/BipinKarmacharya/Yatrika-SmartTourPlanner",
    featured: true,
  },
  {
    title: "Digital Menu – Food Ordering",
    description:
      "A web-based food ordering and tracking management system built with core web technologies for seamless ordering experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BipinKarmacharya/digital-menu",
    featured: false,
  },
  {
    title: "FoodShare – Reduce Food Waste",
    description:
      "Web platform connecting food donors with nearby recipients in real-time to reduce food waste. Built during Grackathon 2023 – achieved 4th place.",
    tags: ["Hackathon", "Web Platform", "Real-time"],
    github: "https://github.com/BipinKarmacharya/FoodShare",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,hsl(174_72%_50%/0.04),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-2">
          Things I've built
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group flex flex-col rounded-2xl bg-card border transition-all duration-500 card-shadow overflow-hidden ${
                project.featured
                  ? "border-primary/30 hover:border-primary/60"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {/* Top accent bar */}
              <div
                className={`h-1 w-full ${
                  project.featured
                    ? "bg-gradient-to-r from-primary to-accent"
                    : "bg-border group-hover:bg-primary/40 transition-colors"
                }`}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder size={20} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="text-[10px] font-mono-code uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono-code"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
