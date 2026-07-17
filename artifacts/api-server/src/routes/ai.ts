import { Router, type IRouter } from "express";
import { AiChatBody, AiChatResponse } from "@workspace/api-zod";

const router: IRouter = Router();

const LANGUAGE_NAMES: Record<string, string> = {
  ar: "Arabic",
  en: "English",
  ms: "Malay",
  id: "Indonesian",
  fr: "French",
  es: "Spanish",
};

router.post("/ai/chat", async (req, res): Promise<void> => {
  const parsed = AiChatBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  if (!process.env.AI_INTEGRATIONS_OPENAI_BASE_URL) {
    res.status(503).json({ error: "AI tutor is not configured yet" });
    return;
  }

  const { messages, language, gradeNumber } = parsed.data;
  const uiLanguage = LANGUAGE_NAMES[language] ?? "English";

  const systemPrompt = [
    "You are a warm, playful Arabic tutor for primary-school children in Malaysia following the national Bahasa Arab curriculum (Years 1-6).",
    gradeNumber ? `The learner is in Year ${gradeNumber}; keep vocabulary and grammar at that level.` : "Keep vocabulary and grammar simple and child-friendly.",
    `Explain things in ${uiLanguage}, but always show Arabic words fully vocalized (with tashkeel).`,
    "Use the four skills naming: الاستماع (listening), التحدث (speaking), القراءة (reading), الكتابة (writing) — always say تحدث, never كلام.",
    "Be encouraging, keep replies short (2-5 sentences), ask one small follow-up question to keep the child practicing. Never discuss unrelated or unsafe topics; gently steer back to learning Arabic.",
  ].join(" ");

  const { openai } = await import("@workspace/integrations-openai-ai-server");
  const completion = await openai.chat.completions.create({
    model: "gpt-5.6-luna",
    max_completion_tokens: 8192,
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: (m.role === "assistant" ? "assistant" : "user") as "assistant" | "user",
        content: m.content,
      })),
    ],
  });

  const reply = completion.choices[0]?.message?.content ?? "";
  req.log.info({ replyLength: reply.length }, "AI tutor reply generated");
  res.json(AiChatResponse.parse({ reply }));
});

export default router;
