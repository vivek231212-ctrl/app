
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getSmartRecommendation = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is looking for food recommendations on Boketto app. 
      User request: "${userQuery}". 
      Respond with a short, encouraging sentence explaining which nutritional profile they should focus on (e.g., higher protein for muscle building, or low fat for weight loss).`,
      config: {
        systemInstruction: "You are a friendly nutrition expert for the Boketto food app.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Focus on balanced macronutrients for your daily energy!";
  }
};
