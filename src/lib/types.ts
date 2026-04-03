export type Plan = "basic" | "pro";

export type ContentType = "reels" | "static" | "carousel" | "traffic";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  plan: Plan;
}

export const CONTENT_TYPES: {
  value: ContentType;
  label: string;
  description: string;
  plan: Plan;
  icon: string;
}[] = [
  {
    value: "reels",
    label: "Roteiro para Reels",
    description: "Scripts com hook, desenvolvimento e CTA para vídeos curtos",
    plan: "basic",
    icon: "🎬",
  },
  {
    value: "static",
    label: "Post Estático",
    description: "Arte + legenda completa para feed do Instagram",
    plan: "basic",
    icon: "🖼️",
  },
  {
    value: "carousel",
    label: "Carrossel",
    description: "Conteúdo educativo em slides para Instagram",
    plan: "basic",
    icon: "📑",
  },
  {
    value: "traffic",
    label: "Tráfego Pago",
    description: "Criativos completos para Meta Ads e Google Ads",
    plan: "pro",
    icon: "🎯",
  },
];

export const PLANS = [
  {
    name: "Básico",
    price: "29,99",
    period: "/mês",
    features: [
      "Roteiros para Reels ilimitados",
      "Posts estáticos ilimitados",
      "Carrosséis educativos",
      "10 temas previdenciários",
      "Histórico de conteúdos",
      "Compliance OAB automático",
    ],
    notIncluded: [
      "Roteiros de tráfego pago",
      "Segmentação de público sugerida",
      "Copies para anúncios",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Pro",
    price: "49,99",
    period: "/mês",
    features: [
      "Tudo do plano Básico",
      "Roteiros de tráfego pago",
      "Criativos para Meta Ads",
      "Copies otimizadas para anúncios",
      "Segmentação de público sugerida",
      "Estratégia de campanha",
      "Suporte prioritário",
    ],
    notIncluded: [],
    cta: "Quero o Pro",
    popular: true,
  },
];
