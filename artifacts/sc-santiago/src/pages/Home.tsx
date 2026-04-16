import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Heart, HeartPulse, Car, Building, Plane, ArrowRight, CheckCircle2, Users, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero slideshow images
import heroSlide1 from "@/assets/images/hero-slide-1.png";
import heroSlide2 from "@/assets/images/hero-slide-2.png";
import heroSlide3 from "@/assets/images/hero-slide-3.png";
import heroSlide4 from "@/assets/images/hero-slide-4.png";

// Fallback image
import heroBg from "@/assets/images/hero-bg.png";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const services = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    desc: "Proteção financeira para sua família em momentos difíceis.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: HeartPulse,
    title: "Plano de Saúde",
    desc: "Acesso à saúde de qualidade para você e sua família.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Car,
    title: "Consórcio",
    desc: "Realize seus sonhos com planejamento e sem juros.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Building,
    title: "Previdência Privada",
    desc: "Garanta seu futuro com planejamento financeiro.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Plane,
    title: "Seguro de Viagem",
    desc: "Viaje com tranquilidade sabendo que está protegido.",
    color: "bg-sky-50 text-sky-600"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide]}
              alt="SC Santiago"
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* Transparent dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <Shield className="w-4 h-4 text-primary-foreground" />
                <span>13 anos de experiência em proteção</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Protegendo o que é mais valioso para você.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Planejamento financeiro e segurança para sua família e empresa com um atendimento humano, transparente e focado nas suas necessidades reais.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold" asChild>
                <Link href="/contato">Falar com um Consultor</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold bg-white/10 text-white border-white/30 hover:bg-white hover:text-foreground" asChild>
                <Link href="/servicos">Conhecer Serviços</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-12 rounded-2xl shadow-xl shadow-gray-200/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-1">+13 Anos</h3>
              <p className="text-muted-foreground font-medium">De Experiência Sólida</p>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-1">Centenas</h3>
              <p className="text-muted-foreground font-medium">De Famílias Protegidas</p>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-1">Todo o Brasil</h3>
              <p className="text-muted-foreground font-medium">Atendimento Nacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Nossa Abordagem</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Não vendemos apólices. Construímos relacionamentos e tranquilidade.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Acreditamos que cada pessoa e família é única. Por isso, nosso trabalho começa ouvindo você. Como sua consultora de bem-estar financeiro, a SC Santiago analisa seu momento de vida para desenhar a proteção exata que você precisa.
            </p>
            <Button variant="link" className="text-primary font-semibold group" asChild>
              <Link href="/sobre" className="flex items-center">
                Conheça nossa história
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Nossos Serviços</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Soluções completas para cada etapa da sua vida
              </h3>
            </div>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/servicos">Ver todos os detalhes</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group relative overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link href="/servicos" className="inline-flex items-center text-sm font-bold text-primary group/link">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-wider text-primary-foreground uppercase mb-3">Diferenciais</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Por que escolher a SC Santiago?
              </h3>
              <p className="text-white/70 text-lg mb-8">
                Nosso compromisso é com você, não com as seguradoras. Trabalhamos de forma independente para encontrar as melhores soluções do mercado para o seu perfil.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Atendimento consultivo e personalizado",
                  "Parceria com as maiores seguradoras do mercado",
                  "Acompanhamento e suporte em caso de sinistros",
                  "Revisão periódica das suas apólices"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contato">Agende uma Consulta Gratuita</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src={heroBg} 
                  alt="Professional service" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-foreground p-8 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex text-amber-400 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-medium text-lg leading-snug mb-4">
                  "A Sonia mudou nossa visão sobre seguros. Hoje nossa família dorme tranquila sabendo que estamos amparados."
                </p>
                <p className="text-sm text-muted-foreground font-bold">— Família Silva, São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Pronto para proteger o seu amanhã?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fale conosco hoje mesmo. Nossa equipe está pronta para entender suas necessidades e apresentar o plano ideal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base" asChild>
                <Link href="/contato">Enviar Mensagem</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white" onClick={() => window.open("https://wa.me/5511947179169", "_blank")}>
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}