"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { CONTENT_TYPES, type ContentType, type Plan } from "@/lib/types";
import { ContentResult } from "@/components/content-result";

const THEMES = [
  { value: "bpc", label: "BPC / LOAS" },
  { value: "pensao_morte", label: "Pensão por Morte" },
  { value: "aposentadoria_idade", label: "Aposentadoria por Idade" },
  { value: "aposentadoria_tempo", label: "Aposentadoria por Tempo de Contribuição" },
  { value: "aposentadoria_invalidez", label: "Aposentadoria por Incapacidade Permanente" },
  { value: "auxilio_doenca", label: "Auxílio por Incapacidade Temporária" },
  { value: "auxilio_acidente", label: "Auxílio-Acidente" },
  { value: "salario_maternidade", label: "Salário-Maternidade" },
  { value: "aposentadoria_especial", label: "Aposentadoria Especial" },
  { value: "revisao_beneficio", label: "Revisão de Benefício" },
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const userPlan = (session?.user as { plan?: string })?.plan || "basic";

  const [selectedType, setSelectedType] = useState<ContentType>("reels");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const isTypeAvailable = (typePlan: Plan) => {
    if (typePlan === "basic") return true;
    return userPlan === "pro";
  };

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedTheme) {
      setError("Selecione um tema");
      return;
    }

    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: selectedType,
          theme: selectedTheme,
          customTopic: customTopic || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao gerar conteúdo");
        return;
      }

      setResult(data.content);
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Criar Conteúdo</h1>
        <p className="text-muted mt-1">
          Selecione o tipo de conteúdo, o tema e gere em segundos
        </p>
      </div>

      <form onSubmit={handleGenerate} className="space-y-6">
        {/* Content Type Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Tipo de Conteúdo
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CONTENT_TYPES.map((type) => {
              const available = isTypeAvailable(type.plan);
              const isSelected = selectedType === type.value;

              return (
                <button
                  key={type.value}
                  type="button"
                  disabled={!available}
                  onClick={() => available && setSelectedType(type.value)}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : available
                      ? "border-border hover:border-primary/30 bg-background"
                      : "border-border bg-background opacity-50 cursor-not-allowed"
                  }`}
                >
                  {!available && (
                    <span className="absolute top-2 right-2 text-[10px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">
                      PRO
                    </span>
                  )}
                  <span className="text-2xl block mb-2">{type.icon}</span>
                  <span className="text-sm font-semibold text-foreground block">
                    {type.label}
                  </span>
                  <span className="text-xs text-muted block mt-0.5">
                    {type.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Theme Selection */}
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-foreground mb-1.5">
            Tema Previdenciário
          </label>
          <select
            id="theme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          >
            <option value="">Selecione um tema...</option>
            {THEMES.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.label}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Topic */}
        <div>
          <label htmlFor="customTopic" className="block text-sm font-medium text-foreground mb-1.5">
            Foco específico{" "}
            <span className="text-muted font-normal">(opcional)</span>
          </label>
          <input
            id="customTopic"
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Ex: BPC para autistas, Pensão por morte para companheiro(a)..."
          />
          <p className="text-xs text-muted mt-1">
            Descreva um ângulo específico para personalizar ainda mais o conteúdo
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-error/10 text-error text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Gerando conteúdo...
            </>
          ) : (
            "Gerar Conteúdo"
          )}
        </button>
      </form>

      {/* Result */}
      {result && <ContentResult content={result} />}
    </div>
  );
}
