import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5511947179169"
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50",
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-10 pointer-events-none"
      )}
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-full mr-4 bg-white text-foreground text-sm font-medium py-2 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Como posso ajudar?
      </span>
    </a>
  );
}