import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoDark from "@/assets/images/logo-header-transparent.png";

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
          ? "bg-[#252c3e]/95 backdrop-blur-md shadow-sm border-b border-white/10 py-2"
          : "bg-[#252c3e] py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src={logoDark}
              alt="SC Santiago Corretora de Seguros"
              style={{ transform: "scale(4)", transformOrigin: "left center" }}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-amber-300 relative py-2",
                      location === link.href ? "text-amber-300" : "text-white/85"
                    )}
                  >
                    {link.label}
                    {location === link.href && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
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
            className="md:hidden text-white p-2 -mr-2"
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
          "md:hidden absolute top-full left-0 right-0 bg-[#252c3e] border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
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
                  location === link.href ? "text-amber-300" : "text-white/85 hover:text-amber-300"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-white/10">
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