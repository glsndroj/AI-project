import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export async function POST(request: Request) {
  const body = await request.json();
  const {prompt} = await body
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: ` you are owner billiard club, user asking free table and price. you have 8 table, and 2 snooker vip room, vip room price per hour: 20$ pool billiard price: 1hour 10$, happy hour 1pm-5pm price: 6$, after 8pm only serve for adults 18+, 
        user question: ${prompt}
    `
  })
  console.log(result.text);
  return Response.json({ message: "Success"})
}
