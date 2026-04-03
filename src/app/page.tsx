import Link from "next/link";
import { PLANS } from "@/lib/types";

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-muted/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Prev<span className="text-primary">Lab</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#funcionalidades" className="text-muted hover:text-foreground transition-colors text-sm">
                Funcionalidades
              </a>
              <a href="#planos" className="text-muted hover:text-foreground transition-colors text-sm">
                Planos
              </a>
              <a href="#faq" className="text-muted hover:text-foreground transition-colors text-sm">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/auth/login"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Entrar
              </Link>
              <Link
                href="/auth/register"
                className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              Feito exclusivamente para advogados previdenciaristas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Crie conteúdo profissional em{" "}
              <span className="text-primary">minutos</span>, não em horas
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Roteiros para Reels, posts e carrosséis sobre BPC, Pensão por Morte,
              Aposentadoria e mais — tudo alinhado com as normas da OAB e pronto para publicar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Começar Gratuitamente
              </Link>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-surface transition-colors"
              >
                Ver Funcionalidades
              </a>
            </div>
            <p className="text-xs text-muted mt-4">
              Sem cartão de crédito. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Você se identifica?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Sabemos que advogados previdenciaristas enfrentam esses desafios diariamente
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏰",
                title: "Sem tempo para criar conteúdo",
                description:
                  "Entre audiências, petições e atendimentos, sobra pouco tempo para pesquisar trends e criar roteiros.",
              },
              {
                icon: "⚖️",
                title: "Medo de ferir normas da OAB",
                description:
                  "O marketing jurídico tem regras específicas. Um post errado pode gerar processo ético.",
              },
              {
                icon: "📉",
                title: "Perde clientes para quem aparece mais",
                description:
                  "Advogados que produzem conteúdo educativo atraem mais clientes. Quem não publica, fica invisível.",
              },
            ].map((pain) => (
              <div
                key={pain.title}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{pain.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pain.title}
                </h3>
                <p className="text-muted leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              O PrevLab gera conteúdo especializado usando IA avançada, já adaptado
              para as normas do marketing jurídico
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎬",
                title: "Roteiros para Reels",
                description:
                  "Scripts completos com hook poderoso, desenvolvimento e CTA. Prontos para gravar.",
                badge: "Básico",
              },
              {
                icon: "🖼️",
                title: "Posts Estáticos",
                description:
                  "Texto da arte, legenda completa com hashtags e direção de arte.",
                badge: "Básico",
              },
              {
                icon: "📑",
                title: "Carrosséis Educativos",
                description:
                  "7-10 slides com conteúdo progressivo que educa e posiciona você como autoridade.",
                badge: "Básico",
              },
              {
                icon: "🎯",
                title: "Tráfego Pago",
                description:
                  "Criativos completos para Meta Ads e Google Ads com copies e segmentação.",
                badge: "Pro",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      feature.badge === "Pro"
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Compliance OAB Automático",
                description:
                  "Todo conteúdo é gerado respeitando o Provimento 205/2021 e o Código de Ética da OAB.",
              },
              {
                icon: "📊",
                title: "10+ Temas Previdenciários",
                description:
                  "BPC, Pensão por Morte, Aposentadorias, Auxílios e muito mais — todos os nichos cobertos.",
              },
              {
                icon: "🤖",
                title: "IA Especializada",
                description:
                  "Powered by Claude da Anthropic. Conteúdo inteligente, preciso e atualizado.",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Planos simples e acessíveis
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Invista menos que o valor de um café por dia e transforme sua presença digital
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-background rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full font-medium">
                    Mais Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted">R$</span>
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <XIcon />
                      <span className="text-sm text-muted line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/register"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-surface text-foreground hover:bg-border"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "O conteúdo gerado está alinhado com as normas da OAB?",
                a: "Sim. Todo conteúdo é gerado respeitando o Provimento 205/2021 do CFOAB e o Código de Ética e Disciplina da OAB. Nossa IA é treinada para nunca fazer promessas de resultado, captação indevida ou linguagem sensacionalista.",
              },
              {
                q: "Preciso editar o conteúdo depois de gerado?",
                a: "O conteúdo é gerado pronto para usar, mas recomendamos que você personalize com seu tom de voz e experiências pessoais. Isso torna o conteúdo mais autêntico e conecta melhor com sua audiência.",
              },
              {
                q: "Quais temas previdenciários estão disponíveis?",
                a: "BPC/LOAS, Pensão por Morte, Aposentadoria por Idade, Aposentadoria por Tempo de Contribuição, Aposentadoria por Invalidez, Auxílio-Doença, Auxílio-Acidente, Salário-Maternidade, Aposentadoria Especial e Revisão de Benefícios.",
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim, sem fidelidade e sem multa. Você pode cancelar seu plano a qualquer momento e continuará tendo acesso até o fim do período pago.",
              },
              {
                q: "O que inclui o plano Pro que o Básico não tem?",
                a: "O plano Pro inclui roteiros completos para tráfego pago (Meta Ads e Google Ads), com copies otimizadas, sugestões de segmentação de público e estratégia de campanha.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-surface rounded-2xl p-6 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pare de perder tempo. Comece a criar conteúdo que atrai clientes.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a advogados previdenciaristas que já economizam horas por
            semana na criação de conteúdo.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-surface transition-colors shadow-lg"
          >
            Criar Minha Conta Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-lg font-bold text-background">
                Prev<span className="text-primary-light">Lab</span>
              </span>
            </div>
            <p className="text-sm">
              &copy; 2026 PrevLab. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
