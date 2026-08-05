const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function aiAnalyzer(data) {

    const prompt = `
You are an expert AI Business Analyst.

Analyze the following business information.

Business Data:

${data}

Return ONLY valid JSON using this structure:

{
  "summary": "...",
  "problems": [
    "...",
    "...",
    "..."
  ],
  "opportunities": [
    "...",
    "...",
    "..."
  ],
  "recommendations": [
    "...",
    "...",
    "..."
  ]
}
`;

    const response = await client.responses.create({

        model: "gpt-4.1-mini",

        input: prompt,

        temperature: 0.3

    });

    const text = response.output_text.trim();

    return JSON.parse(text);

}

module.exports = aiAnalyzer;