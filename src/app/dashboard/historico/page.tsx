"use client";

import { useEffect, useState } from "react";
import { ContentResult } from "@/components/content-result";

interface HistoryItem {
  id: string;
  type: string;
  theme: string;
  title: string;
  content: string;
  createdAt: string;
}

const TYPE_LABELS: Record<string, string> = {
  reels: "Reels",
  static: "Post Estático",
  carousel: "Carrossel",
  traffic: "Tráfego Pago",
};

const TYPE_ICONS: Record<string, string> = {
  reels: "🎬",
  static: "🖼️",
  carousel: "📑",
  traffic: "🎯",
};

export default function HistoricoPage() {
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch("/api/history");
        if (res.ok) {
          const data = await res.json();
          setItems(data);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Histórico</h1>
        <p className="text-muted mb-8">Seus conteúdos gerados anteriormente</p>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 bg-background rounded-xl border border-border animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Histórico</h1>
      <p className="text-muted mb-8">Seus conteúdos gerados anteriormente</p>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-background rounded-2xl border border-border">
          <p className="text-4xl mb-4">📝</p>
          <p className="text-foreground font-medium mb-1">
            Nenhum conteúdo gerado ainda
          </p>
          <p className="text-muted text-sm">
            Vá para &quot;Criar Conteúdo&quot; e gere seu primeiro roteiro!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setSelectedItem(selectedItem?.id === item.id ? null : item)
              }
              className={`w-full text-left bg-background rounded-xl border p-4 transition-all hover:border-primary/30 ${
                selectedItem?.id === item.id
                  ? "border-primary"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {TYPE_ICONS[item.type] || "📄"}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {TYPE_LABELS[item.type] || item.type} — {item.theme}
                  </p>
                  <p className="text-xs text-muted">
                    {new Date(item.createdAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-muted transition-transform ${
                    selectedItem?.id === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          ))}

          {selectedItem && <ContentResult content={selectedItem.content} />}
        </div>
      )}
    </div>
  );
}
