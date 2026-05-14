import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Images
import vidaImg from "@/assets/images/service-vida.png";
import saudeImg from "@/assets/images/service-saude.png";
import consorcioImg from "@/assets/images/service-consorcio.png";
import previdenciaImg from "@/assets/images/service-previdencia.png";
import viagemImg from "@/assets/images/service-viagem.png";

const servicesList = [
  {
    id: "vida",
    title: "Seguro de Vida",
    desc: "A proteção financeira que sua família precisa para viver com tranquilidade, não importa o que aconteça.",
    benefits: [
      "Cobertura para morte natural ou acidental",
      "Indenização por invalidez temporária ou permanente",
      "Cobertura para doenças graves",
      "Assistência funeral familiar"
    ],
    image: vidaImg,
    reverse: false
  },
  {
    id: "saude",
    title: "Plano de Saúde",
    desc: "As melhores opções de planos de saúde para garantir acesso à medicina de ponta para você, sua família ou sua empresa.",
    benefits: [
      "Ampla rede referenciada de hospitais e laboratórios",
      "Planos com ou sem coparticipação",
      "Opções com abrangência regional ou nacional",
      "Planos empresariais com condições especiais"
    ],
    image: saudeImg,
    reverse: true
  },
  {
    id: "consorcio",
    title: "Consórcio",
    desc: "A forma mais inteligente e planejada de adquirir bens e serviços sem pagar juros abusivos.",
    benefits: [
      "Sem cobrança de juros",
      "Prazos flexíveis que cabem no seu bolso",
      "Possibilidade de usar o FGTS (para imóveis)",
      "Opções para imóveis, veículos, e serviços"
    ],
    image: consorcioImg,
    reverse: false
  },
  {
    id: "previdencia",
    title: "Previdência Privada",
    desc: "Construa um patrimônio sólido para o seu futuro, garantindo a manutenção do seu padrão de vida na aposentadoria.",
    benefits: [
      "Planejamento de longo prazo",
      "Benefícios fiscais (PGBL/VGBL)",
      "Flexibilidade nas contribuições",
      "Ferramenta eficiente para sucessão patrimonial"
    ],
    image: previdenciaImg,
    reverse: true
  },
  {
    id: "viagem",
    title: "Seguro de Viagem",
    desc: "Viaje pelo Brasil ou pelo mundo com a certeza de que qualquer imprevisto será resolvido de forma rápida e eficiente.",
    benefits: [
      "Assistência médica e hospitalar internacional",
      "Cobertura para extravio de bagagem",
      "Cancelamento ou atraso de voos",
      "Assistência jurídica no exterior"
    ],
    image: viagemImg,
    reverse: false
  }
];

export default function Services() {
  return (
    <main className="flex-1 w-full pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos um portfólio completo de soluções financeiras e de proteção para garantir a segurança da sua família e do seu patrimônio.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        {servicesList.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
                {/* Image */}
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="font-bold text-foreground mb-4 text-lg">Principais Vantagens:</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="rounded-full shadow-sm" asChild>
                      <Link href={`/servicos/${service.id}`}>
                        Saiba mais
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full shadow-sm" asChild>
                      <Link href={`/contato?servico=${service.title}`}>
                        Solicitar Cotação
                      </Link>
                    </Button>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Não tem certeza de qual é a melhor opção?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Nossa equipe de consultores especialistas está pronta para analisar seu perfil e montar um plano sob medida para você.
          </p>
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-8 text-base" asChild>
            <Link href="/contato">Falar com um Consultor Especialista</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}