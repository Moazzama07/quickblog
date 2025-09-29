import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const models = await genAI.listModels();
    console.log("Available Models:");
    models.forEach(m => {
      console.log(`- ${m.name} | supports: ${m.supportedGenerationMethods}`);
    });
  } catch (err) {
    console.error("Error listing models:", err.message);
  }
}

listModels();
