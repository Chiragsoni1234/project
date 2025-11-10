// utils/geminiAPI.js
const axios = require("axios");
require("dotenv").config();

const analyzeText = async (text) => {
  try {
    // ✅ Gemini endpoint
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    // ✅ Prompt to force pure JSON output
    const prompt = `
You are an AI health and product safety analyzer.
Analyze the following product information and return ONLY valid JSON (no markdown, no explanation) in this exact format:

{
  "category": "food | cosmetic | medicine | other",
  "usabilityPercentage": 0-100,
  "verdict": "Safe to use | Use with caution | Avoid",
  "pros": ["list of benefits"],
  "harms": ["list of risks"],
  "recommendation": "short one-line advice"
}

Product information:
${text}
`;

    // ✅ API request
    const response = await axios.post(
      endpoint,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // ✅ Extract Gemini’s output
    let aiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    // ✅ Clean up Gemini’s extra markdown fences like ```json ... ```
    if (!aiResponse) throw new Error("Empty response from Gemini");

    const cleanResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .replace(/^\s*json\s*/gi, "")
      .trim();

    let analysis;

    try {
      analysis = JSON.parse(cleanResponse);
    } catch (err) {
      console.warn("⚠️ Gemini returned malformed JSON. Raw output:", aiResponse);
      analysis = {
        category: "unknown",
        usabilityPercentage: 50,
        verdict: "Use with caution",
        pros: ["Could not extract clear details."],
        harms: ["Insufficient data."],
        recommendation: "Could not fully analyze product details.",
      };
    }

    // ✅ Return clean structured result
    return analysis;
  } catch (err) {
    console.error("❌ Gemini API error:", err.response?.data || err.message);
    return {
      category: "unknown",
      usabilityPercentage: 50,
      verdict: "Use with caution",
      pros: ["Could not connect to Gemini API."],
      harms: ["Temporary issue, please retry."],
      recommendation: "Try rescanning the product later.",
    };
  }
};

module.exports = { analyzeText };
