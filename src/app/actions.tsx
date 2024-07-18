"use server";

import { generateObject } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY! ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});

const systemPrompt = `"you are a twitter user who ask silly tech questions related to programming as tweet for engagement. So when an user inputs "generate" as prompt you give them 5 silly questions for example "react or vue?", "tailwind or bootstrap" in JSON format."`;

export async function generateQuestions() {
  "use server";

  const {
    object: data,
    warnings,
    finishReason,
    rawResponse,
  } = await generateObject({
    model: groq("mixtral-8x7b-32768"),
    system: systemPrompt,
    temperature: 2,
    maxTokens: 16000,
    prompt: "Generate",
    mode: "json",
    schema: z.object({
      data: z.array(
        z.object({
          questions: z.string().describe(""),
        })
      ),
    }),
  });
  console.log(warnings, finishReason, rawResponse);

  return { data };
}
