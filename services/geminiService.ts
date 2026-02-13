import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMarketingIdeas = async (
  brandName: string,
  industry: string,
  targetAudience: string
): Promise<string> => {
  try {
    const ai = getClient();
    const prompt = `
      Act as a world-class creative director for a digital marketing agency.
      I need 3 innovative marketing campaign ideas for a client.
      
      Client Details:
      - Brand Name: ${brandName}
      - Industry: ${industry}
      - Target Audience: ${targetAudience}

      Output Format:
      Return the result in clean HTML format (no markdown code blocks, just the inner HTML) using <h3> for titles and <p> for descriptions. 
      Do not include <html> or <body> tags.
      Make it catchy and professional.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "<p>Sorry, I couldn't generate ideas at this moment.</p>";
  } catch (error) {
    console.error("Error generating marketing ideas:", error);
    throw error;
  }
};
