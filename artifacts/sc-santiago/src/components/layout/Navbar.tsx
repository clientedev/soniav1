import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-foreground">SC Santiago</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Corretora de Seguros</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative py-2",
                      location === link.href ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {link.label}
                    {location === link.href && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              className="rounded-full shadow-sm hover:shadow-md transition-all gap-2"
              onClick={() => window.open("https://wa.me/5511947179169", "_blank")}
            >
              <Phone className="w-4 h-4" />
              <span>Fale Conosco</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block text-lg font-medium py-2 transition-colors",
                  location === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-gray-100">
            <Button
              className="w-full rounded-full gap-2"
              onClick={() => window.open("https://wa.me/5511947179169", "_blank")}
            >
              <Phone className="w-4 h-4" />
              <span>Fale Conosco pelo WhatsApp</span>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}