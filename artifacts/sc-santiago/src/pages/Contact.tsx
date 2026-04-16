import { useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  phone: z.string().min(10, { message: "Insira um telefone válido com DDD." }),
  service: z.string({ required_error: "Selecione um serviço de interesse." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [location] = useLocation();
  const { toast } = useToast();

  // Extract service from query string if available
  const searchParams = new URLSearchParams(window.location.search);
  const defaultService = searchParams.get("servico") || "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService,
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form submitted:", data);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato com você em breve.",
        variant: "default",
      });
      form.reset();
    }, 500);
  }

  return (
    <main className="flex-1 w-full pt-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Fale Conosco
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ouvir você. Tire suas dúvidas, solicite cotações ou agende uma consultoria especializada.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Telefone / WhatsApp</h3>
                      <a href="https://wa.me/5511947179169" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                        +55 11 94717-9169
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">E-mail</h3>
                      <a href="mailto:soniacsantiago@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                        soniacsantiago@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Localização</h3>
                      <p className="text-muted-foreground mt-1">
                        São Paulo, SP<br/>
                        Atendemos clientes em todo o Brasil.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Horário de Atendimento</h3>
                      <p className="text-muted-foreground mt-1">
                        Segunda a Sexta: 09h às 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Siga nossas redes sociais</h3>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                    <SiFacebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Envie uma mensagem</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} className="bg-gray-50 border-transparent focus-visible:bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="(11) 90000-0000" {...field} className="bg-gray-50 border-transparent focus-visible:bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} className="bg-gray-50 border-transparent focus-visible:bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviço de interesse</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-transparent focus:bg-white">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Seguro de Vida">Seguro de Vida</SelectItem>
                            <SelectItem value="Plano de Saúde">Plano de Saúde</SelectItem>
                            <SelectItem value="Consórcio">Consórcio</SelectItem>
                            <SelectItem value="Previdência Privada">Previdência Privada</SelectItem>
                            <SelectItem value="Seguro de Viagem">Seguro de Viagem</SelectItem>
                            <SelectItem value="Outros / Dúvida geral">Outros / Dúvida geral</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Como podemos te ajudar?" 
                            className="min-h-[120px] bg-gray-50 border-transparent focus-visible:bg-white resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full rounded-xl">
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117006.12879948064!2d-46.73669966141362!3d-23.593796851608436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de São Paulo"
        ></iframe>
      </section>
    </main>
  );
}