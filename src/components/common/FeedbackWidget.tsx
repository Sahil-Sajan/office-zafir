"use client";

import { useEffect, useState } from "react";

const CATEGORIES = ["Bug", "Idea", "Something else"] as const;

function FeedbackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Idea");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => {
      setSent(false);
      setMessage("");
      setCategory("Idea");
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
  };

  return (
    <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-[100]">
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Send feedback"
          className="absolute bottom-[calc(100%+12px)] left-0 w-[calc(100vw-2rem)] max-w-[320px] bg-white border border-[#F0EADB] rounded-[16px] shadow-[0_20px_50px_rgba(14,36,28,0.18)] overflow-hidden origin-bottom-left animate-[chatbotIn_200ms_ease-out] motion-reduce:animate-none"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-[#0E241C] text-white">
            <span className="text-[0.92rem] font-bold">Send feedback</span>
            <button
              type="button"
              onClick={close}
              aria-label="Close feedback form"
              className="flex items-center justify-center size-8 rounded-[8px] text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
            >
              <CloseIcon />
            </button>
          </div>

          {sent ? (
            <div className="px-5 py-8 text-center">
              <span className="text-2xl block mb-2">✓</span>
              <p className="text-[0.88rem] text-[#0E241C] font-semibold">Thanks — noted.</p>
              <p className="text-[0.78rem] text-[#5B6961] mt-1">
                This demo form doesn&rsquo;t reach a real inbox yet, but the flow works end to end.
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-[8px] text-[0.82rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
              <div className="flex gap-1.5">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`flex-1 px-2 py-1.5 rounded-[8px] text-[0.76rem] font-semibold border transition-colors duration-150 cursor-pointer ${
                      category === c
                        ? "bg-[#17362A] text-white border-[#17362A]"
                        : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <label className="flex flex-col gap-1.5 text-[0.8rem] font-semibold text-[#1C2420]">
                What&rsquo;s on your mind?
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's working or what's not…"
                  className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.85rem] font-normal outline-none focus:border-[#17362A] resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={!message.trim()}
                className="px-4 py-2.5 rounded-[8px] text-[0.85rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer"
              >
                Send feedback
              </button>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close feedback form" : "Send feedback"}
        aria-expanded={open}
        className="flex items-center gap-2 pl-3.5 pr-4 h-11 rounded-full bg-white border border-[#F0EADB] text-[#0E241C] shadow-[0_10px_24px_rgba(14,36,28,0.14)] hover:border-[#C9A853] hover:text-[#234A3A] transition-all duration-200 cursor-pointer motion-reduce:transition-none"
      >
        {open ? <CloseIcon /> : <FeedbackIcon />}
        <span className="hidden sm:inline text-[0.82rem] font-semibold">Feedback</span>
      </button>
    </div>
  );
}
