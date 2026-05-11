import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Heart, HeartPulse, Car, Building, Plane, ArrowRight, CheckCircle2, Users, Clock, MapPin, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero slideshow images
import heroSlide1 from "@/assets/images/hero-slide-1.png";
import heroSlide2 from "@/assets/images/hero-slide-2.png";
import heroSlide3 from "@/assets/images/hero-slide-3.png";
import heroSlide4 from "@/assets/images/hero-slide-4.png";

// Fallback image
import heroBg from "@/assets/images/hero-bg.png";
import soniaPortrait from "@/assets/images/sonia-portrait.png";
import partnersFull from "@/assets/images/parceiros-full.png";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const testimonials = [
  {
    name: "Francisco Fonseca",
    role: "Empresário",
    text: "Sou cliente da Sonia há mais de 17 anos, desde a empresa anterior que ela atuava. Tive o privilégio de acompanhar o início da sua trajetória como corretora, sendo um dos seus primeiros clientes.\n\nÉ raro encontrar uma profissional que una excelência técnica e sensibilidade humana com tanta naturalidade. Ao longo do atendimento, ficou evidente o alto nível de profissionalismo, a organização impecável e o compromisso genuíno em oferecer soluções adequadas, sempre com transparência e segurança. Cada orientação foi clara, responsável e cuidadosamente pensada, transmitindo confiança em todas as etapas do processo.\n\nAlém da competência, o que mais se destaca é o caráter íntegro e a gentileza no trato com as pessoas. O atendimento vai além do esperado: é atencioso, paciente e verdadeiramente interessado no bem-estar do cliente. Sônia personifica a profissional que constrói relações de confiança duradouras, e faz a diferença pela ética, pela dedicação, pelo conhecimento e pelo respeito.",
  },
  {
    name: "Tete Garcia",
    role: "Empresária",
    text: "Sônia é uma profissional altamente comprometida, dedicada a oferecer soluções que realmente façam diferença ao longo da jornada de seus clientes.\n\nSempre quando viajamos fazemos o seguro viagem, em uma ocasião minha mãe precisou de atendimento médico. Fomos prontamente orientados e direcionados com agilidade e profissionalismo!\n\nSeu trabalho é pautado por uma visão de longo prazo, prezando pelo cuidado e pela segurança de cada cliente. Destaca-se pela excelência no atendimento e pela forma ética e atenciosa com que conduz suas recomendações, tratando cada necessidade como se fosse de sua própria família.",
  },
  {
    name: "Ricardo T. F. Pires",
    role: "Médico",
    text: "Sou muito grato por ter a Sônia como minha corretora; admiro a seriedade e o desprendimento em encontrar a solução ideal pra mim e minha família. Isso vale ouro. Obrigado!",
  },
  {
    name: "Guilherme De J. M. Auada",
    role: "Médico",
    text: "Eu que agradeço, Sônia. Tenho total confiança em você. Ao ponto de confiar minha família a você e mudar todo o meu outro seguro. Agora estou em paz. Muito obrigado por tudo.",
  },
];

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
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/55" />
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
                <span>14 anos de experiência em proteção</span>
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
              <h3 className="text-3xl font-serif font-bold text-foreground mb-1">+14 Anos</h3>
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
                Nosso compromisso é em encontrar a melhor solução para você. Trabalhamos em parceria com as principais seguradoras do mercado para oferecer as opções mais adequadas ao seu perfil.
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src={soniaPortrait}
                  alt="Sônia Cristina Santiago"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white text-foreground p-7 rounded-2xl shadow-2xl max-w-[280px]">
                <div className="flex text-amber-400 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif italic text-lg leading-snug mb-3">
                  "Tenho total confiança nela. Agora estou em paz."
                </p>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">— Guilherme Auada, Médico</p>
              </div>
              <div className="hidden md:block absolute -top-6 -right-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="font-serif text-3xl font-bold leading-none">+14</p>
                <p className="text-xs uppercase tracking-wider mt-1 text-white/80">anos de experiência</p>
              </div>
            </div>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50/70">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Depoimentos</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              O que nossos clientes dizem
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Histórias reais de famílias e profissionais que confiam o seu futuro ao trabalho da Sônia.
            </p>
          </div>

          <div className="relative overflow-hidden py-10">
            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50/70 to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              {/* Double the array for seamless loop */}
              {[...testimonials, ...testimonials].map((t, index) => (
                <div
                  key={index}
                  className="max-w-[350px] md:max-w-[500px] bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all relative flex flex-col shrink-0"
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4 shrink-0" />

                  <div className="flex text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6 italic whitespace-pre-line text-sm md:text-base">
                    “{t.text}”
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-lg shrink-0">
                      {t.name
                        .split(" ")
                        .filter((w) => w.length > 1 && w[0] === w[0].toUpperCase())
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-foreground leading-tight">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img
              src={partnersFull}
              alt="Nossos Parceiros"
              className="w-full h-auto max-w-5xl rounded-2xl shadow-sm"
            />
          </motion.div>
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