import { motion } from "framer-motion";
import { Shield, Target, Heart, Award, CheckCircle2 } from "lucide-react";
import aboutHeader from "@/assets/images/about-header.png";

export default function About() {
  return (
    <main className="flex-1 w-full pt-20">
      {/* Header */}
      <section className="relative py-24 bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeader} 
            alt="Escritório profissional" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossa História
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Há mais de uma década, dedicamos nosso tempo a proteger o que é mais importante: a segurança e o futuro dos nossos clientes e de suas famílias.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                A trajetória da SC Santiago
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A SC Santiago Corretora de Seguros nasceu do propósito da fundadora Sônia Cristina Santiago: transformar a forma como as pessoas enxergam o seguro de vida e o planejamento financeiro no Brasil.
                </p>
                <p>
                  Com mais de 14 anos de experiência, construímos uma reputação baseada em confiança, transparência e relacionamentos duradouros. Não somos apenas corretores somos consultores de bem-estar financeiro.
                </p>
                <p>
                  Sediados em São Paulo e atuando em todo o Brasil, acreditamos que cada família tem uma história única. Por isso, desenvolvemos estratégias personalizadas, sempre ao lado das seguradoras mais sólidas do mercado.
                </p>
                <p>
                  Nosso maior compromisso é garantir que as famílias que confiam em nós nunca enfrentem sozinhas os imprevistos da vida.
                </p>
              </div>
              
              <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="font-bold text-foreground text-xl mb-2">Mensagem da Fundadora</h3>
                <p className="italic text-muted-foreground">
                  "Meu maior compromisso é garantir que nenhuma família que confie em nosso trabalho passe por dificuldades financeiras em momentos de luto ou imprevistos. O seguro de vida é o maior ato de amor que alguém pode deixar."
                </p>
                <p className="mt-4 font-semibold text-primary">— Sonia Cristina Santiago</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl h-full">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer proteção patrimonial e segurança financeira para famílias e empresas, com consultoria estratégica e produtos de excelência.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl h-full">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida nacionalmente pela dedicação em atendimento humanizado e pela entrega de soluções personalizadas de proteção.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl h-full sm:col-span-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Valores</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Ética inegociável</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Transparência total</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Foco no cliente</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Excelência técnica</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Facts */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">14+</div>
              <div className="text-primary-foreground font-medium">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">100%</div>
              <div className="text-primary-foreground font-medium">Atendimento Nacional</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">+Top</div>
              <div className="text-primary-foreground font-medium">Seguradoras Parceiras</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">24h</div>
              <div className="text-primary-foreground font-medium">Suporte ao Cliente</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}