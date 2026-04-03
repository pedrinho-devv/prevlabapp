import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  generateReelsScript,
  generateStaticPost,
  generateCarousel,
  generateTrafficScript,
} from "@/lib/anthropic";

const generateSchema = z.object({
  type: z.enum(["reels", "static", "carousel", "traffic"]),
  theme: z.string().min(1),
  customTopic: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = generateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos" },
        { status: 400 }
      );
    }

    const { type, theme, customTopic } = parsed.data;

    // Check plan access
    if (type === "traffic" && session.user.plan !== "pro") {
      return NextResponse.json(
        { error: "Roteiros de tráfego pago são exclusivos do plano Pro" },
        { status: 403 }
      );
    }

    let content: string;

    switch (type) {
      case "reels":
        content = await generateReelsScript(theme, customTopic);
        break;
      case "static":
        content = await generateStaticPost(theme, customTopic);
        break;
      case "carousel":
        content = await generateCarousel(theme, customTopic);
        break;
      case "traffic":
        content = await generateTrafficScript(theme, customTopic);
        break;
    }

    // Save to database
    const saved = await prisma.content.create({
      data: {
        userId: session.user.id,
        type,
        theme,
        title: `${type} - ${theme}${customTopic ? ` - ${customTopic}` : ""}`,
        content,
      },
    });

    return NextResponse.json({ id: saved.id, content });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Erro ao gerar conteúdo. Tente novamente." },
      { status: 500 }
    );
  }
}
