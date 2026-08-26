import { Menu, X } from "lucide-react";
import { Button } from "../componets/Button";
import { useState, useEffect } from "react";

type navLinks = {
  href: string;
  label: string;
}[];

const navigationLink: navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-250 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight cursor-pointer hover:text-primary"
        >
          MF<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navigationLink.map((navigationLink, index) => {
              return (
                <a
                  href={navigationLink.href}
                  key={index}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  {navigationLink.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => (location.href = "#contact")}>
            Contact Me
          </Button>
        </div>

        {/* Mobile nav button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="glass-strong animate-fade-i animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navigationLink.map((navigationLink, index) => {
              return (
                <a
                  href={navigationLink.href}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {navigationLink.label}
                </a>
              );
            })}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                location.href = "#contact";
              }}
              size="sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
