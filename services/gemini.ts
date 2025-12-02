/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const GEMINI_MODEL = 'gemini-3-pro-preview';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TopicContext {
  id: string;
  title: string;
  description: string;
  verses: string;
}

export async function getBiblicalAdvice(
  history: ChatMessage[],
  currentMessage: string,
  topic: TopicContext
): Promise<string> {
  
  const systemInstruction = `You are a wise, compassionate, and non-judgmental Biblical Counselor.
  
  CURRENT CONTEXT:
  The user is seeking help with: "${topic.title}".
  The core issue they are facing relates to: "${topic.description}".
  
  FOUNDATIONAL SCRIPTURES FOR THIS TOPIC:
  ${topic.verses}

  YOUR MISSION:
  1. Listen with Empathy: Validate the user's feelings. Do not be dismissive.
  2. Biblical Wisdom: Offer guidance rooted in the Bible.
  3. Actionable Hope: Provide practical spiritual steps.
  4. Tone: Warm, calm, encouraging. Speak like a caring wise friend.
  
  FORMATTING RULES (IMPORTANT):
  - Use Markdown for structure.
  - SCRIPTURES: Always wrap scripture quotes in blockquotes (start line with >). Include reference.
  - STEPS: Use bullet points (- or *) for actionable steps.
  - EMPHASIS: Use **bold** for key comforting thoughts or headers.
  - Keep paragraphs short and readable.

  SAFETY:
  If the user mentions self-harm or suicide, prioritize safety: gently urge them to seek professional help or call emergency services immediately, while offering emotional support.

  Keep responses concise (under 250 words) to encourage conversation.`;

  try {
    // Format history for the API
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: GEMINI_MODEL,
      config: {
        systemInstruction,
        temperature: 0.7, // Warm and creative but grounded
      },
      history: formattedHistory
    });

    const result = await chat.sendMessage({ message: currentMessage });
    return result.text || "I am here with you. Could you share a bit more?";
    
  } catch (error: any) {
    // Detailed error logging
    console.error("Biblical Counseling AI Error:", {
      message: error.message,
      status: error.status,
      stack: error.stack,
      raw: error
    });

    // Handle specific error cases with compassionate messages
    if (error.status === 401 || error.status === 403) {
      return "I am currently unable to access the service (Authentication Issue). Please verify the configuration or try again later.";
    }
    
    if (error.status === 429) {
      return "I am currently reflecting on many requests. Please take a moment of silence and try again shortly.";
    }

    if (error.status === 500 || error.status === 503) {
      return "The service is temporarily unavailable. Please accept my apologies and try again in a few moments.";
    }

    if (error.message && (error.message.includes('fetch failed') || error.message.includes('Network request failed'))) {
      return "It seems we are having trouble connecting. Please check your internet connection so we can continue our conversation.";
    }

    if (error.message && error.message.includes('SAFETY')) {
      return "I cannot fulfill this specific request due to safety guidelines, but I am here to listen if you would like to rephrase or discuss something else.";
    }

    // Generic fallback
    return "I apologize, I am having trouble connecting right now. Please take a moment to breathe, and try again in a few seconds.";
  }
}