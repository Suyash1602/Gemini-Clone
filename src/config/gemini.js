/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/genai
 */

import { GoogleGenAI } from "@google/genai"; // Changed package name

const apiKey = "AIzaSyD93qiUIRPQsQr8uA01xFgEkjlJXOWb7sA";

// New way to instantiate the client
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

  // 1. Send the message. 'result' is the full response object (GenerateContentResult).
  const result = await chatSession.sendMessage({ message: prompt });

  // 2. CORRECT ACCESS: Access the .text property directly.
  // This is the fix for the "TypeError: result.text is not a function" error.
  const responseText = result.text; // <<-- FIX APPLIED HERE

  console.log(responseText);
  return responseText;
}

export default run;
