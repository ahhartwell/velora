# Velora

Velora is an AI Business Analyst that helps companies understand their business using artificial intelligence.

## Features

- Upload business files
- Analyze business data with AI
- Discover problems
- Find opportunities
- Get recommendations
- Generate reports

## Technology

- Node.js
- Express
- OpenAI API

## Installation

```bash
npm install
```

## Environment

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

## Start

```bash
npm start
```

## Development

```bash
npm run dev
```

## API

### POST /api/analyze

Request:

```json
{
  "data": "Business data here..."
}
```

Response:

```json
{
  "summary": "",
  "problems": [],
  "opportunities": [],
  "recommendations": []
}
```