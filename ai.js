const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function analyzeBusinessData(data){

    const prompt = `
You are Velora AI Business Analyst.

Analyze the following business data.

Return your answer ONLY as valid JSON.

Format:

{
  "summary":"",
  "problems":[
    "",
    "",
    ""
  ],
  "opportunities":[
    "",
    "",
    ""
  ],
  "recommendations":[
    "",
    "",
    ""
  ]
}

Business Data:

${data}
`;

    const response = await client.chat.completions.create({

        model: "gpt-5",

        messages: [

            {
                role: "system",
                content: "You are a professional AI Business Analyst."
            },

            {
                role: "user",
                content: prompt
            }

        ],

        temperature: 0.2

    });

    return JSON.parse(
        response.choices[0].message.content
    );

}

module.exports = analyzeBusinessData;