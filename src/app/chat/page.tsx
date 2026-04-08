"use client";

import { FormEvent, useState, useRef, useEffect } from "react";

import { useChat } from "@ai-sdk/react";

export default function ChatPage() {
  const lastRef = useRef<HTMLDivElement | null>(null)
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat()

  useEffect(() => {
    lastRef.current?.scrollIntoView( { behavior: 'smooth'} )
  }, [messages])


  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    sendMessage({text: input})
    setInput("");
  };

  return (
    <main className="min-h-screen bg-[#f2fff2] px-4 py-8">
      <div className="mx-auto flex h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#b8e6b8] bg-[#e9fbe9] shadow">
        <header className="border-b border-[#b8e6b8] bg-[#d9f7d9] px-5 py-4">
          <h1 className="text-lg font-semibold text-[#1f5c2a]">Green Chat</h1>
          <p className="text-sm text-[#3f7a49]">A simple chat page</p>
        </header>

        <section className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((msg, index) => (
            <div
              key={msg.id + index}
              className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-[#7adf87] text-[#103817]"
                  : "mr-auto bg-white text-[#2a5f33]"
              }`}
            >
              {msg.parts.map((part, index) => {
                if (part.type === "text") {
                  return <div key={`${msg.id}-${index}`}>{part.text}</div>;
                }
                return null;
              })}
            </div>
          ))}
          <div ref={lastRef}></div>
        </section>

        <form
          onSubmit={handleSend}
          className="flex gap-2 border-t border-[#b8e6b8] bg-[#dff8df] p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-[#9fdaa5] bg-white px-3 py-2 text-sm outline-none placeholder:text-[#77a57d] focus:ring-2 focus:ring-[#8fdc99]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#66c874] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#57b766]"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
