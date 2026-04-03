import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const TEMAS_PREVIDENCIARIOS: Record<string, string> = {
  bpc: "Benefício de Prestação Continuada (BPC/LOAS) - benefício assistencial para idosos e pessoas com deficiência de baixa renda",
  pensao_morte: "Pensão por Morte - benefício previdenciário pago aos dependentes do segurado falecido",
  aposentadoria_idade: "Aposentadoria por Idade - benefício para segurados que atingem idade mínima e carência",
  aposentadoria_tempo: "Aposentadoria por Tempo de Contribuição - regras de transição após Reforma da Previdência",
  aposentadoria_invalidez: "Aposentadoria por Incapacidade Permanente (antiga invalidez) - benefício por incapacidade total e permanente",
  auxilio_doenca: "Auxílio por Incapacidade Temporária (antigo auxílio-doença) - benefício por incapacidade temporária",
  auxilio_acidente: "Auxílio-Acidente - indenização por sequela de acidente que reduz capacidade de trabalho",
  salario_maternidade: "Salário-Maternidade - benefício durante afastamento por nascimento ou adoção",
  aposentadoria_especial: "Aposentadoria Especial - benefício para quem trabalha exposto a agentes nocivos",
  revisao_beneficio: "Revisão de Benefício - possibilidade de revisão de benefícios com erro de cálculo ou direito não reconhecido",
};

const SYSTEM_PROMPT_BASE = `Você é um especialista em marketing jurídico para advogados previdenciaristas no Brasil.

REGRAS OBRIGATÓRIAS - COMPLIANCE OAB (Provimento 205/2021 e Código de Ética da OAB):
1. NUNCA prometa resultados ("garanto sua aposentadoria", "100% de aprovação")
2. NUNCA use linguagem sensacionalista ou mercantilista
3. NUNCA faça captação indevida de clientes (proibido termos como "ligue agora", "vagas limitadas")
4. NUNCA use termos depreciativos sobre o INSS ou outros profissionais
5. SEMPRE mantenha tom informativo e educativo
6. SEMPRE respeite o sigilo profissional
7. PODE usar linguagem acessível e didática para o público leigo
8. PODE compartilhar informação jurídica de interesse público
9. PODE indicar área de atuação e especialização
10. O conteúdo deve ser EDUCATIVO, posicionando o advogado como autoridade no tema
11. NUNCA inclua valores de honorários no conteúdo
12. Use linguagem empática e humana, sem ser apelativa

DIRETRIZES DE CONTEÚDO:
- Use dados e legislação atualizados (Reforma da Previdência EC 103/2019)
- Cite artigos de lei quando relevante, mas de forma acessível
- Foque em educar o público sobre seus direitos previdenciários
- O CTA deve ser sutil: "Consulte um advogado especialista", "Busque orientação profissional"
- Hooks devem gerar curiosidade sem ser clickbait falso`;

export async function generateReelsScript(
  theme: string,
  customTopic?: string
): Promise<string> {
  const temaInfo = TEMAS_PREVIDENCIARIOS[theme] || theme;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    system: SYSTEM_PROMPT_BASE,
    messages: [
      {
        role: "user",
        content: `Crie um roteiro completo para Reels/Short sobre: ${temaInfo}
${customTopic ? `Foco específico: ${customTopic}` : ""}

Estrutura OBRIGATÓRIA do roteiro:

## HOOK (0-3 segundos)
- Frase de abertura que capture atenção imediata
- Deve gerar curiosidade ou identificação
- Pode usar pergunta retórica ou afirmação impactante (sem sensacionalismo)

## DESENVOLVIMENTO (3-45 segundos)
- Divida em 3-4 blocos curtos e objetivos
- Cada bloco deve ter uma informação valiosa
- Use linguagem simples e acessível
- Inclua dados ou legislação relevante de forma didática

## CTA (45-60 segundos)
- Chamada para ação sutil e dentro das normas da OAB
- Posicione o advogado como autoridade
- Sugira que o espectador busque orientação profissional

## INFORMAÇÕES ADICIONAIS
- Sugestão de texto para legenda
- 5 hashtags relevantes
- Sugestão de música/tendência de áudio
- Dica de edição visual

Formate o roteiro com marcações claras de tempo e ações visuais entre [colchetes].`,
      },
    ],
  });

  return (response.content[0] as { text: string }).text;
}

export async function generateStaticPost(
  theme: string,
  customTopic?: string
): Promise<string> {
  const temaInfo = TEMAS_PREVIDENCIARIOS[theme] || theme;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    system: SYSTEM_PROMPT_BASE,
    messages: [
      {
        role: "user",
        content: `Crie um post estático para Instagram sobre: ${temaInfo}
${customTopic ? `Foco específico: ${customTopic}` : ""}

Entregue:

## TEXTO DA ARTE
- Título principal (máximo 8 palavras, impactante e informativo)
- Subtítulo complementar (1 linha)
- Texto de apoio se necessário (máximo 2 linhas)

## LEGENDA COMPLETA
- Abertura com hook
- Desenvolvimento informativo (3-5 parágrafos curtos)
- CTA dentro das normas OAB
- 10 hashtags estratégicas (mix de volume alto e nichadas)

## DIREÇÃO DE ARTE
- Paleta de cores sugerida
- Estilo visual recomendado
- Elementos gráficos sugeridos
- Dica de tipografia`,
      },
    ],
  });

  return (response.content[0] as { text: string }).text;
}

export async function generateCarousel(
  theme: string,
  customTopic?: string
): Promise<string> {
  const temaInfo = TEMAS_PREVIDENCIARIOS[theme] || theme;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 3000,
    system: SYSTEM_PROMPT_BASE,
    messages: [
      {
        role: "user",
        content: `Crie um carrossel educativo para Instagram sobre: ${temaInfo}
${customTopic ? `Foco específico: ${customTopic}` : ""}

Estrutura OBRIGATÓRIA (7-10 slides):

## SLIDE 1 - CAPA
- Título chamativo e informativo (sem sensacionalismo)
- Subtítulo que gere curiosidade
- Instrução: "Arraste para o lado"

## SLIDES 2 a 8 - CONTEÚDO
- Cada slide com UM ponto principal
- Título do slide + texto de apoio (máx 3 linhas por slide)
- Informações progressivas que construam conhecimento
- Use números, dados e legislação quando relevante

## SLIDE 9 - RESUMO/CONCLUSÃO
- Recapitule os pontos principais
- Reforce a importância de buscar orientação profissional

## SLIDE 10 - CTA
- Chamada para ação dentro das normas OAB
- Posicione o advogado como referência no tema
- Sugira salvar o post e compartilhar

## EXTRAS
- Legenda completa com hashtags
- Direção de arte (cores, estilo, tipografia)
- Dica de melhor horário para publicação`,
      },
    ],
  });

  return (response.content[0] as { text: string }).text;
}

export async function generateTrafficScript(
  theme: string,
  customTopic?: string
): Promise<string> {
  const temaInfo = TEMAS_PREVIDENCIARIOS[theme] || theme;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 3000,
    system: `${SYSTEM_PROMPT_BASE}

REGRAS ADICIONAIS PARA TRÁFEGO PAGO:
- O conteúdo será usado em anúncios pagos (Meta Ads, Google Ads)
- Deve seguir TODAS as políticas de publicidade das plataformas
- Além das normas OAB, respeitar políticas de anúncios do Meta/Google
- Foco em educação e posicionamento, NUNCA em promessa de resultado
- Copy deve ser persuasiva mas ética e informativa`,
    messages: [
      {
        role: "user",
        content: `Crie um pacote completo de criativos para tráfego pago sobre: ${temaInfo}
${customTopic ? `Foco específico: ${customTopic}` : ""}

Entregue TODOS os seguintes formatos:

## 1. ANÚNCIO EM VÍDEO (15-30 segundos)
### Versão A - Problema/Solução
- Hook (0-5s): Identifique a dor do público
- Desenvolvimento (5-20s): Apresente informação valiosa
- CTA (20-30s): Direcionamento ético e profissional

### Versão B - Educativo
- Hook (0-5s): Dado ou informação surpreendente
- Desenvolvimento (5-20s): Explique de forma didática
- CTA (20-30s): Convite para saber mais

## 2. ANÚNCIO ESTÁTICO (IMAGEM)
### Versão A
- Headline principal
- Texto de apoio
- CTA do botão

### Versão B
- Headline alternativa
- Texto de apoio
- CTA do botão

## 3. COPY PARA ANÚNCIO (TEXTO DO AD)
### Copy Curta (até 125 caracteres)
### Copy Média (até 250 caracteres)
### Copy Longa (até 500 caracteres)

## 4. SEGMENTAÇÃO SUGERIDA
- Público-alvo detalhado
- Interesses para segmentação
- Faixa etária recomendada
- Palavras-chave para Google Ads

## 5. ESTRATÉGIA
- Objetivo de campanha recomendado
- Funil sugerido
- Sugestão de landing page`,
      },
    ],
  });

  return (response.content[0] as { text: string }).text;
}

export const AVAILABLE_THEMES = Object.entries(TEMAS_PREVIDENCIARIOS).map(
  ([value, label]) => ({
    value,
    label: label.split(" - ")[0],
    description: label.split(" - ")[1] || "",
  })
);
