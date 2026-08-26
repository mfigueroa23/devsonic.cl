import { useEffect, useState } from "react";

type Experience = {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string;
  current: boolean;
};

export const Experience = () => {
  const [experience, setExperience] = useState<Experience[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_DOMAIN}/experience`)
      .then((res) => res.json())
      .then((data: Experience[]) => setExperience(data))
      .catch((err) => console.error("Failed to load experience:", err));
  }, []);

  const parseTechnologies = (raw: string): string[] => {
    try {
      return JSON.parse(raw);
    } catch {
      return raw.split(",").map((t) => t.trim()).filter(Boolean);
    }
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="cursor-default text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="cursor-default text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes
            </span>
          </h2>
          <p className="cursor-default text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional journey, showcasing roles, and
            education.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-90" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="cursor-default text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="cursor-default text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="cursor-default text-muted-foreground">{exp.company}</p>
                    <p className="cursor-default text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {parseTechnologies(exp.technologies).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="cursor-default px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
