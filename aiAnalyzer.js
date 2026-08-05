const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


async function analyzeBusinessData(data) {

    const prompt = `
You are Velora AI Business Analyst.

Analyze the following business data.

Your mission:
- Identify the most important business problems.
- Discover growth opportunities.
- Suggest practical actions.

Return ONLY valid JSON.

Format:

{
  "summary": "",
  "problems": [
    "",
    "",
    ""
  ],
  "opportunities": [
    "",
    "",
    ""
  ],
  "recommendations": [
    "",
    "",
    ""
  ]
}


Business Data:

${data}
`;


    const response = await client.chat.completions.create({

        model: "gpt-5-mini",

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content: "You are Velora AI Business Analyst."
            },
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.2

    });


    const analysis = response.choices[0].message.content;


    return JSON.parse(analysis);

}


module.exports = analyzeBusinessData;