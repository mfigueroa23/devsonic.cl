import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { Button } from "../componets/Button";
import { AnimatedBorderButton } from "../componets/AnimatedBorderButton";
import type React from "react";

type socialLinks = {
  icon: React.ReactNode;
  href: string;
};

const skills = [
  "Metasploit",
  "WireShark",
  "Nmap",
  "Bash",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Express",
  "Node.js",
  "Java",
  "Git",
  "Github Actions",
  "Docker",
  "Kubernetes",
  "Terraform",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Linux",
  "Windows Server",
  "CI/CD",
  "PRTG",
  "Nginx",
  "Apache",
  "Jboss",
  "HA Proxy",
  "SQL Server",
  "Jira",
  "Confluence",
  "Postman",
  "Burp Suite",
];

const socialMedialinks: socialLinks[] = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "http://github.com/mfigueroa23",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/mfigueroa23/",
  },
  { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/marcoo_f23" },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/marcoo.f23/",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:mfigueroa@devsonic.cl",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>
      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => {
          return (
            <div
              key={index}
              className="absolute w-1 h-1 rounded-full opacity-50"
              style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${
                  15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="cursor-default animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer † SysAdmin
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="cursor-default text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Secure <span className="text-primary glow-text">systems.</span>
                <br />
                Engineering <br />
                <span className="font-serif italic font-normal text-white">
                  mindset.
                </span>
              </h1>
              <p className="cursor-default text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi! I'm{" "}
                <span className="text-primary glow-text">Marco Figueroa</span>{" "}
                an IT engineer focused on DevOps, infrastructure automation, and
                secure systems built for production.
              </p>
            </div>
            {/* Call to actions */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={() => (location.href = "#contact")}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="/documents/curriculum.pdf"
                download
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <Download /> Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="cursor-default text-sm text-muted-foreground">
                Social Links:{" "}
              </span>
              {socialMedialinks.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right column - Profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-sm mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpeg"
                  alt="Marco Figueroa"
                  className="w-full aspect-¨[4/5] object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="cursor-default text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="cursor-default absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Building <br />
                    Secure Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="cursor-default text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills, ...skills].map((skill, index) => {
                return (
                  <div key={index} className="shrink-0 px-8 py-4">
                    <span className="cursor-default text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="cursor-default text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
