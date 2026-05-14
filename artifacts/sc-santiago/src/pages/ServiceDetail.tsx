import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import vidaImg from "@/assets/images/service-vida.png";
import saudeImg from "@/assets/images/service-saude.png";
import consorcioImg from "@/assets/images/service-consorcio.png";
import previdenciaImg from "@/assets/images/service-previdencia.png";
import viagemImg from "@/assets/images/service-viagem.png";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  benefits: string[];
  extras: { title: string; desc: string }[];
  image: string;
  color: string;
  contato: string;
}> = {
  vida: {
    title: "Seguro de Vida",
    subtitle: "A proteção que sua família merece",
    desc: "A proteção financeira que sua família precisa para viver com tranquilidade, não importa o que aconteça.",
    longDesc:
      "O Seguro de Vida é a forma mais responsável de garantir que as pessoas que você ama continuem com estabilidade financeira mesmo diante das adversidades. Com mais de 14 anos de experiência, a Sônia analisa o seu momento de vida e encontra a apólice ideal para o seu perfil — sem excessos e sem lacunas.",
    benefits: [
      "Cobertura para morte natural ou acidental",
      "Indenização por invalidez temporária ou permanente",
      "Cobertura para doenças graves",
      "Assistência funeral familiar",
      "Antecipação em caso de doença terminal",
      "Diária por internação hospitalar",
    ],
    extras: [
      { title: "Atendimento personalizado", desc: "Analisamos seu perfil para encontrar o plano exato que você precisa, sem pagar a mais do que o necessário." },
      { title: "Revisão periódica", desc: "Sua apólice é revisada regularmente para acompanhar as mudanças da sua vida." },
      { title: "Suporte em sinistros", desc: "Estamos ao seu lado em todo o processo de acionamento, do início ao recebimento da indenização." },
    ],
    image: vidaImg,
    color: "from-blue-900 to-blue-700",
    contato: "Seguro de Vida",
  },
  saude: {
    title: "Plano de Saúde",
    subtitle: "Saúde de qualidade para você e sua família",
    desc: "As melhores opções de planos de saúde para garantir acesso à medicina de ponta para você, sua família ou sua empresa.",
    longDesc:
      "Ter acesso a um bom plano de saúde é um dos maiores investimentos que você pode fazer. A SC Santiago trabalha com as principais operadoras do mercado para apresentar as opções mais completas e com o melhor custo-benefício para o seu perfil — seja individual, familiar ou empresarial.",
    benefits: [
      "Ampla rede referenciada de hospitais e laboratórios",
      "Planos com ou sem coparticipação",
      "Abrangência regional ou nacional",
      "Planos empresariais com condições especiais",
      "Cobertura para exames e consultas especializadas",
      "Opções com e sem carência reduzida",
    ],
    extras: [
      { title: "Comparação de planos", desc: "Analisamos e comparamos as melhores ofertas do mercado para você tomar a decisão certa." },
      { title: "Planos para empresas", desc: "Soluções especiais para proteger colaboradores e reduzir o absenteísmo na sua empresa." },
      { title: "Portabilidade", desc: "Orientamos sobre como mudar de plano sem perder carências já cumpridas." },
    ],
    image: saudeImg,
    color: "from-emerald-900 to-emerald-700",
    contato: "Plano de Saúde",
  },
  consorcio: {
    title: "Consórcio",
    subtitle: "Realize seus sonhos sem pagar juros",
    desc: "A forma mais inteligente e planejada de adquirir bens e serviços sem pagar juros abusivos.",
    longDesc:
      "O consórcio é a alternativa inteligente ao financiamento tradicional. Sem juros, com parcelas que cabem no seu orçamento e prazos flexíveis, é a forma mais segura de planejar a aquisição de um imóvel, veículo ou serviço. A Sônia ajuda você a escolher o consórcio certo e a entender todas as etapas do processo.",
    benefits: [
      "Sem cobrança de juros",
      "Parcelas que cabem no seu orçamento",
      "Possibilidade de usar o FGTS (para imóveis)",
      "Opções para imóveis, veículos e serviços",
      "Possibilidade de dar lance para antecipar a contemplação",
      "Grupos gerenciados pelas maiores administradoras do país",
    ],
    extras: [
      { title: "Planejamento sob medida", desc: "Calculamos o consórcio ideal para o seu objetivo, com prazo e parcela adequados à sua renda." },
      { title: "Acompanhamento das assembleias", desc: "Mantemos você informado sobre os sorteios e oportunidades de lance." },
      { title: "Sem burocracia", desc: "Cuidamos de toda a documentação e intermediação com a administradora." },
    ],
    image: consorcioImg,
    color: "from-amber-900 to-amber-700",
    contato: "Consórcio",
  },
  previdencia: {
    title: "Previdência Privada",
    subtitle: "Construa seu futuro com segurança",
    desc: "Construa um patrimônio sólido para o seu futuro, garantindo a manutenção do seu padrão de vida na aposentadoria.",
    longDesc:
      "A previdência privada é um dos instrumentos mais eficientes para garantir tranquilidade financeira no longo prazo. Seja para complementar a aposentadoria pública, planejar a sucessão patrimonial ou proteger o futuro dos filhos, a Sônia apresenta as melhores estratégias com base no seu perfil e horizonte de investimento.",
    benefits: [
      "Planejamento de longo prazo",
      "Benefícios fiscais com PGBL e VGBL",
      "Flexibilidade nas contribuições mensais",
      "Ferramenta eficiente para sucessão patrimonial",
      "Portabilidade entre planos sem incidência de IR",
      "Cobertura adicional por morte ou invalidez",
    ],
    extras: [
      { title: "PGBL ou VGBL?", desc: "Orientamos sobre qual modalidade é mais vantajosa para o seu perfil tributário." },
      { title: "Revisão de rentabilidade", desc: "Monitoramos a performance do seu plano e indicamos ajustes quando necessário." },
      { title: "Planejamento sucessório", desc: "A previdência é um instrumento eficaz para transferir patrimônio aos herdeiros sem inventário." },
    ],
    image: previdenciaImg,
    color: "from-purple-900 to-purple-700",
    contato: "Previdência Privada",
  },
  viagem: {
    title: "Seguro de Viagem",
    subtitle: "Viaje com tranquilidade pelo mundo",
    desc: "Viaje pelo Brasil ou pelo mundo com a certeza de que qualquer imprevisto será resolvido de forma rápida e eficiente.",
    longDesc:
      "Imprevistos podem acontecer em qualquer viagem — uma emergência médica, a perda da bagagem, o cancelamento de um voo. O Seguro de Viagem garante que você não vai enfrentar esses momentos sozinho, com assistência 24h em qualquer parte do mundo. A Sônia encontra o plano ideal para cada destino e perfil de viajante.",
    benefits: [
      "Assistência médica e hospitalar internacional",
      "Cobertura para extravio ou roubo de bagagem",
      "Cancelamento ou atraso de voos",
      "Assistência jurídica no exterior",
      "Traslado e repatriação médica",
      "Cobertura para atividades esportivas e aventura",
    ],
    extras: [
      { title: "Planos para cada destino", desc: "Diferentes coberturas para viagens nacionais, internacionais ou de intercâmbio." },
      { title: "Emissão rápida", desc: "Seu seguro fica pronto em minutos, mesmo na véspera da viagem." },
      { title: "Suporte 24h", desc: "Central de assistência disponível em português a qualquer hora, em qualquer país." },
    ],
    image: viagemImg,
    color: "from-sky-900 to-sky-700",
    contato: "Seguro de Viagem",
  },
};

const otherServices = [
  { slug: "vida", label: "Seguro de Vida" },
  { slug: "saude", label: "Plano de Saúde" },
  { slug: "consorcio", label: "Consórcio" },
  { slug: "previdencia", label: "Previdência Privada" },
  { slug: "viagem", label: "Seguro de Viagem" },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <main className="flex-1 w-full pt-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Serviço não encontrado</h1>
          <Button asChild>
            <Link href="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>
      </main>
    );
  }

  const related = otherServices.filter((s) => s.slug !== slug);

  return (
    <main className="flex-1 w-full pt-20">
      {/* Hero */}
      <section className="text-white py-20 md:py-36 relative overflow-hidden min-h-[60vh] flex items-center">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/servicos" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Todos os Serviços
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-8 max-w-2xl">{service.subtitle}</p>
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base bg-white text-foreground hover:bg-white/90"
              asChild
            >
              <Link href={`/contato?servico=${encodeURIComponent(service.contato)}`}>
                Solicitar Cotação Gratuita
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                O que está incluído
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.longDesc}</p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-14">
            Como trabalhamos com você
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.extras.map((extra, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{extra.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{extra.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-10">Outros serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
              >
                {s.label}
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para contratar {service.title}?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Entre em contato agora e receba uma cotação personalizada, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-base" asChild>
              <Link href={`/contato?servico=${encodeURIComponent(service.contato)}`}>
                Solicitar Cotação
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground gap-2"
              onClick={() => window.open("https://wa.me/5511947179169", "_blank")}
            >
              <Phone className="w-4 h-4" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
