import { API_KEY } from "./key";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { NextRequest } from "next/server";
import { streamText, convertToModelMessages } from "ai";

const deepseek = createDeepSeek({
    apiKey: API_KEY
})

export async function POST(request: NextRequest){
    const { messages } = await request.json()
    const result = streamText({
        model: deepseek('deepseek-chat'),
        messages: await convertToModelMessages(messages),
        system: "你是一个超级无敌，无所不知的人"
    })
    return result.toUIMessageStreamResponse()
}