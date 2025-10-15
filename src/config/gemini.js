/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/genai
 */

import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyD93qiUIRPQsQr8uA01xFgEkjlJXOWb7sA";

const ai = new GoogleGenAI({ apiKey });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = ai.chats.create({
    model: "gemini-2.5-flash",
    generationConfig,
    history: [],
  });

  // Send message and get response
  const result = await chatSession.sendMessage({ message: prompt });

  // Get raw response text with preserved formatting
  const responseText = result.text;
  console.log(responseText);

  // Return formatted text
  return {
    text: responseText,
    formattedText: true, // Flag to indicate text has formatting
  };
}

export default run;
