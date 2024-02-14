import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai";
import { StreamingTextResponse } from "ai";
import { ollama, streamText } from "modelfusion";

export const runtime = "edge";

export async function POST(req) {
  const { messages } = await req.json();

  const model = ollama.ChatTextGenerator({ model: "mistral" }).withChatPrompt();

  const prompt = {
    system: "You are an AI chatbot. Follow the user's instructions carefully.",
    messages: asChatMessages(messages),
  };

  const textStream = await streamText({ model, prompt });

  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}
