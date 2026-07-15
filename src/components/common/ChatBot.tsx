"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const QUICK_REPLIES = ["Track my order", "Become a seller", "Talk to support"];

const INITIAL_MESSAGE: Message = {
  id: 0,
  from: "bot",
  text: "Hi! I'm the Zafir360 assistant. Ask me about orders, selling, or wholesale — or tap a quick option below.",
};

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path
        d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8c-1.13 0-2.2-.23-3.18-.66L4 20l1.02-4.36A7.94 7.94 0 0 1 4 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <path d="M4 12h15.5M13 5.5 19.5 12 13 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function botReplyFor(text: string): string {
  const q = text.toLowerCase();
  if (q.includes("order") || q.includes("track")) {
    return "You can track any order from your account under Orders → Track Shipment. JayakHub updates delivery status live.";
  }
  if (q.includes("sell") || q.includes("seller") || q.includes("store")) {
    return "Opening a store takes about 5 minutes — head to Open Your Store to get started, free setup, commission only when you sell.";
  }
  if (q.includes("supplier") || q.includes("wholesale")) {
    return "For wholesale sourcing, check the Wholesale tab in the menu — every supplier is personally verified before listing.";
  }
  if (q.includes("support") || q.includes("human") || q.includes("agent")) {
    return "I'll flag this for our support team — you can also reach them directly on the Contact Support page for a faster reply.";
  }
  return "Got it — I've noted that. For anything urgent, our support team is one click away on the Contact Support page.";
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: Date.now(), from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: "bot", text: botReplyFor(trimmed) }]);
    }, 700);
  }

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[100]">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Zafir360 chat assistant"
          className="absolute bottom-[calc(100%+12px)] right-0 w-[calc(100vw-2rem)] max-w-[360px] h-[min(520px,70vh)] flex flex-col bg-white border border-[#F0EADB] rounded-[16px] shadow-[0_20px_50px_rgba(14,36,28,0.18)] overflow-hidden origin-bottom-right animate-[chatbotIn_200ms_ease-out] motion-reduce:animate-none"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-[#0E241C] text-white flex-none">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="relative flex-none flex items-center justify-center size-9 rounded-full bg-[#17362A] text-white">
                <ChatIcon />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-[#17362A] border-2 border-[#0E241C]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.92rem] font-bold leading-tight truncate">Zafir360 Assistant</span>
                <span className="block text-[0.72rem] text-white/60 leading-tight">Typically replies in minutes</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex-none flex items-center justify-center size-8 rounded-[8px] text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
            >
              <CloseIcon />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#FAF6EA]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] text-[0.85rem] leading-[1.5] px-3.5 py-2.5 rounded-[12px] ${
                  m.from === "bot"
                    ? "self-start bg-white border border-[#F0EADB] text-[#0E241C] rounded-bl-[4px]"
                    : "self-end bg-[#17362A] text-white rounded-br-[4px]"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="self-start flex items-center gap-1 bg-white border border-[#F0EADB] rounded-[12px] rounded-bl-[4px] px-3.5 py-3">
                <span className="size-[6px] rounded-full bg-[#5B6961] animate-bounce [animation-delay:-0.3s] motion-reduce:animate-none" />
                <span className="size-[6px] rounded-full bg-[#5B6961] animate-bounce [animation-delay:-0.15s] motion-reduce:animate-none" />
                <span className="size-[6px] rounded-full bg-[#5B6961] animate-bounce motion-reduce:animate-none" />
              </div>
            )}

            {messages.length === 1 && !typing && (
              <div className="flex flex-col gap-2 mt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="self-start text-left text-[0.82rem] font-medium px-3.5 py-2 rounded-[10px] border border-[#F0EADB] bg-white text-[#1C2420] hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150 cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex-none flex items-center gap-2 p-3 border-t border-[#F0EADB] bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Type your message"
              className="flex-1 min-w-0 px-3.5 py-2.5 text-[0.88rem] border border-[#F0EADB] rounded-[999px] bg-[#FAF6EA] text-[#0E241C] focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
              className="flex-none flex items-center justify-center size-10 rounded-full bg-[#17362A] text-white hover:bg-[#234A3A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="flex items-center justify-center size-14 rounded-full bg-[#17362A] text-white shadow-[0_10px_30px_rgba(23,54,42,0.35)] hover:bg-[#234A3A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer motion-reduce:transition-none"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}
