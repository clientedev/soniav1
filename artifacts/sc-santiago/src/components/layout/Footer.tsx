import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import logoLight from "@/assets/images/logo-footer-transparent.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6 group bg-white rounded-xl px-4 py-3">
              <img
                src={logoLight}
                alt="SC Santiago Corretora de Seguros"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              13 anos de experiência protegendo famílias e empresas em todo o Brasil. Confiança, transparência e o cuidado que você merece.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-white transition-colors">Serviços</Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-6">Nossos Serviços</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/servicos" className="text-sm hover:text-white transition-colors">Seguro de Vida</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-white transition-colors">Plano de Saúde</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-white transition-colors">Consórcio</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-white transition-colors">Previdência Privada</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-white transition-colors">Seguro de Viagem</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">WhatsApp / Telefone</p>
                  <a href="https://wa.me/5511947179169" target="_blank" rel="noreferrer" className="text-sm text-white font-medium hover:text-primary transition-colors">+55 11 94717-9169</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">E-mail</p>
                  <a href="mailto:soniacsantiago@hotmail.com" className="text-sm text-white font-medium hover:text-primary transition-colors">soniacsantiago@hotmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Localização</p>
                  <p className="text-sm text-white font-medium">São Paulo, SP</p>
                  <p className="text-xs mt-1">Atendimento em todo o Brasil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} SC Santiago Corretora de Seguros de Vida. Todos os direitos reservados.</p>
          <p>CNPJ: 18.565.459/0001-06</p>
        </div>
      </div>
    </footer>
  );
}