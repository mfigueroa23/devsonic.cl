import { useEffect, useState } from "react";
import { getIcon } from "../lib/icons";

type AboutItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export const About = () => {
  const [highlights, setHighlights] = useState<AboutItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_DOMAIN}/about`)
      .then((res) => res.json())
      .then((data: AboutItem[]) => setHighlights(data))
      .catch((err) => console.error("Failed to load about items:", err));
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="cursor-default text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="cursor-default text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering systems with purpose,{" "}
              <span className="font-serif italic font-normal text-white">
                standards, and security in mind
              </span>
            </h2>
            <div className="cursor-default space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                IT engineer focused on DevOps, infrastructure automation, and
                secure production-ready systems. My background combines
                hands-on experience in IT operations and system administration
                with formal training in software engineering.
              </p>
              <p>
                I have worked in security-oriented and production environments,
                supporting users, operating Linux-based systems, handling
                incidents, and collaborating with development teams during
                deployments. This experience shaped a pragmatic engineering
                mindset focused on stability, observability, and long-term
                system reliability.
              </p>
              <p>
                Alongside my technical work, I am an electronic music producer
                and DJ. Music reinforces discipline, creativity, and attention
                to detail — qualities I naturally apply to engineering,
                problem-solving, and continuous improvement.
              </p>
            </div>
            <div className="cursor-default glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to combine engineering, security, and creativity
                to design and operate digital systems that are reliable,
                well-structured, and sustainable in real production
                environments."
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.id}
                className="cursor-default glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  {getIcon(item.icon, { className: "w-6 h-6 text-primary" })}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
