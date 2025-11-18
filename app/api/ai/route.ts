import { NextRequest } from "next/server"
import { InferenceClient } from "@huggingface/inference"
import { blob } from "stream/consumers"


const HF_TOKEN = process.env.HF_TOKEN
const inference = new InferenceClient(HF_TOKEN)
export const POST = async (request: NextRequest) => {
    const data = await request.json()

    const image = await inference.textToImage({
    model: "black-forest-labs/FLUX.1-schnell",
    inputs: data.prompt
 }) as any

 const buffer = await image.arrayBuffer();
 console.log(buffer)

    return new Response(buffer, {
        headers: {"Content-Type": "image/png"}
    })
}