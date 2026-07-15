const base = "size-[18px]";

export function Rocket() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5c2.5 1.8 4 4.7 4 8.5 0 2.6-.7 4.9-1.8 6.7L12 20l-2.2-2.3C8.7 15.9 8 13.6 8 11c0-3.8 1.5-6.7 4-8.5Z" />
      <circle cx="12" cy="10.5" r="1.6" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15c-1.6.3-2.7 1.3-3.3 3 1.8.4 3.3 0 4.4-1M15.5 15c1.6.3 2.7 1.3 3.3 3-1.8.4-3.3 0-4.4-1" />
    </svg>
  );
}

export function Sparkles() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3l1.4 3.8L16 8l-3.6 1.4L11 13l-1.4-3.6L6 8l3.6-1.2L11 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 13l.9 2.4 2.3.9-2.3.9-.9 2.4-.9-2.4-2.3-.9 2.3-.9.9-2.4Z" />
    </svg>
  );
}

export function Storefront() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V6.5L6 4h12l2 2.5V9M4 9c0 1.4 1.1 2.5 2.4 2.5S8.8 10.4 8.8 9c0 1.4 1.2 2.5 2.6 2.5S13.9 10.4 13.9 9c0 1.4 1.2 2.5 2.6 2.5S19 10.4 19 9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 11.5V20h14v-8.5M10 20v-4.5h4V20" />
    </svg>
  );
}

function Tag() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.6 4H6a1 1 0 0 0-1 1v6.6c0 .27.1.52.3.7l9 9c.4.4 1 .4 1.4 0l6.3-6.3c.4-.4.4-1 0-1.4l-9-9a1 1 0 0 0-.4-.3Z" />
      <circle cx="9" cy="8" r="1.3" strokeWidth={1.5} />
    </svg>
  );
}

function Question() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.7 9.5a2.3 2.3 0 1 1 3.4 2c-.8.5-1.1 1-1.1 1.9" />
      <circle cx="12" cy="16.3" r=".2" strokeWidth={2.2} />
    </svg>
  );
}

export function Trophy() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5c0 2 1.6 3.5 3.6 3.5H8M16 5h2.5A1.5 1.5 0 0 1 20 6.5c0 2-1.6 3.5-3.6 3.5H16M10 15.5v2M14 15.5v2M8.5 20h7" />
    </svg>
  );
}

function UserPlus() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="10" cy="8.5" r="3.2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M18 8.5v4M20 10.5h-4" />
    </svg>
  );
}

export function ShieldCheck() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 5 6v5.5c0 4.6 3 7.7 7 9 4-1.3 7-4.4 7-9V6l-7-2.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4.3" />
    </svg>
  );
}

export function ClipboardList() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="6" y="4.5" width="12" height="16" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v-.5A1.5 1.5 0 0 1 10.5 2h3A1.5 1.5 0 0 1 15 3.5V4M9 10h6M9 13.5h6M9 17h4" />
    </svg>
  );
}

function MagnifierCheck() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="10.5" cy="10.5" r="6" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-4.6-4.6M8 10.6l1.6 1.6 3-3.2" />
    </svg>
  );
}

export function Building() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="8.5" width="8" height="11.5" strokeWidth={1.5} />
      <rect x="12" y="3.5" width="8" height="16.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 12h1M6.5 15h1M15 7h1M15 10h1M15 13h1M15 16h1" />
    </svg>
  );
}

export function ShoppingBag() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 8h11l1 12h-13l1-12Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function DocumentText() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.5h7l3 3v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6M9 14h6M9 17h4" />
    </svg>
  );
}

export function Cube() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 19 7v10l-7 3.5L5 17V7l7-3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7l7 3.5L19 7M12 10.5V20.5" />
    </svg>
  );
}

export function Globe() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h17M12 3.5c2 2.3 3 5.2 3 8.5s-1 6.2-3 8.5c-2-2.3-3-5.2-3-8.5s1-6.2 3-8.5Z" />
    </svg>
  );
}

export function GlobeAlt() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.9 9h16.2M3.9 15h16.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c2.5 2.5 3.8 5.6 3.8 8.5s-1.3 6-3.8 8.5" />
    </svg>
  );
}

export function Truck() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2.5" y="7" width="11" height="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10h4l3 3.2V16h-7v-6Z" />
      <circle cx="6.5" cy="17.5" r="1.6" strokeWidth={1.5} />
      <circle cx="16.5" cy="17.5" r="1.6" strokeWidth={1.5} />
    </svg>
  );
}

function Lifebuoy() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="3.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.3 6.3l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" />
    </svg>
  );
}

function ArrowsExchange() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8h13M4.5 8l3.5-3.5M4.5 8l3.5 3.5M19.5 16h-13M19.5 16l-3.5-3.5M19.5 16l-3.5 3.5" />
    </svg>
  );
}

export function Search() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="10.5" cy="10.5" r="6.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-5-5" />
    </svg>
  );
}

export function Wallet() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5A1.5 1.5 0 0 1 5.5 6h11A1.5 1.5 0 0 1 18 7.5v1H5.5A1.5 1.5 0 0 0 4 10v8a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 18v-8a1.5 1.5 0 0 0-1.5-1.5" />
      <rect x="4" y="8.5" width="16" height="11" rx="1.5" strokeWidth={1.5} />
      <circle cx="16" cy="14" r="1.3" strokeWidth={1.5} />
    </svg>
  );
}

export function Cog() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.7 6.3l-1.6 1.6M7.9 16.1l-1.6 1.6M17.7 17.7l-1.6-1.6M7.9 7.9 6.3 6.3" />
    </svg>
  );
}

export function ShoppingCart() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 4.5h2l2 12h10.5l1.8-8H6.4" />
      <circle cx="9.5" cy="19.5" r="1.3" strokeWidth={1.5} />
      <circle cx="16.5" cy="19.5" r="1.3" strokeWidth={1.5} />
    </svg>
  );
}

export function Heart({ filled = false }: { filled?: boolean }) {
  return (
    <svg
      className={base}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.2s-7.5-4.4-9.7-9.4C1 7.7 2.4 4.7 5.4 4c2-.5 3.9.4 5 2.1a5.1 5.1 0 0 1 5-2.1c3 .7 4.4 3.7 3.1 6.8-2.2 5-9.7 9.4-9.7 9.4Z"
      />
    </svg>
  );
}

export function Menu() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function Close() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Lock() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      <circle cx="12" cy="15" r="1.3" strokeWidth={1.5} />
    </svg>
  );
}

export function Cash() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2.5" y="6.5" width="19" height="11" rx="1.5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 6.5v11M18.5 6.5v11" />
    </svg>
  );
}

export function ChatBubble() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0-4.1 3.6-7.5 8-7.5s8 3.4 8 7.5-3.6 7.5-8 7.5c-1 0-2-.2-2.9-.6L4 20l1-3.4A7.1 7.1 0 0 1 4 12Z" />
    </svg>
  );
}

export function Link2() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5 14.5 9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 6.5l1.4-1.4a4 4 0 0 1 5.7 5.7L16.7 12M13 17.5l-1.4 1.4a4 4 0 0 1-5.7-5.7L7.3 12" />
    </svg>
  );
}

export function Phone() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M11 18h2" />
    </svg>
  );
}

export function PhoneCall() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4.5c0 8 6.5 14.5 14.5 14.5l.5-3.4-4-1.3-1.4 1.7a11 11 0 0 1-6.1-6.1l1.7-1.4-1.3-4L5 4.5Z" />
    </svg>
  );
}

export function Mail() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function MapPin() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6.5-6 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" strokeWidth={1.5} />
    </svg>
  );
}

export function CheckCircle() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.2 12.3l2.3 2.3 5.3-5.3" />
    </svg>
  );
}

export function Gift() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3.5" y="9.5" width="17" height="4" strokeWidth={1.5} />
      <rect x="4.5" y="13.5" width="15" height="7" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5v11M12 9.5c-1-2.5-2.5-4-4-4-1.2 0-2 .8-2 2s1.5 2 2 2M12 9.5c1-2.5 2.5-4 4-4 1.2 0 2 .8 2 2s-1.5 2-2 2" />
    </svg>
  );
}

export function ChartBar() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M11 20V4M18 20v-7" />
      <path strokeLinecap="round" d="M3 20.5h18" />
    </svg>
  );
}

export function TrendingUp() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 16.5 9.5 10.5 13.5 14.5 20.5 6.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.5h5.5V12" />
    </svg>
  );
}

export function Target() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="4.5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="1" strokeWidth={1.5} />
    </svg>
  );
}

export function Receipt() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3v-17Z" />
      <path strokeLinecap="round" d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" />
    </svg>
  );
}

export function Ruler() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 15 9 9.5l2.2 2.2L15.5 7.5 20.5 12.5 13 20 3.5 15Z" />
      <path strokeLinecap="round" d="M9 15l1.5-1.5M11.5 17.5 13 16M14 20l1.5-1.5" />
    </svg>
  );
}

export function Certificate() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3.5" y="4" width="17" height="12" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M7 8h10M7 11h6" />
      <circle cx="12" cy="18.5" r="2.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.3 20.6 9.5 23l2.5-1.2 2.5 1.2-.8-2.4" />
    </svg>
  );
}

export function Camera() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5h3l1.5-2h7L17 8.5h3v10H4v-10Z" />
      <circle cx="12" cy="13.5" r="3.2" strokeWidth={1.5} />
    </svg>
  );
}

export function Ship() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h16l-2 7H6l-2-7Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V6h8v5M12 3v3" />
    </svg>
  );
}

export function CurrencyExchange() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="9" cy="9" r="5.5" strokeWidth={1.5} />
      <circle cx="15" cy="15" r="5.5" strokeWidth={1.5} />
    </svg>
  );
}

export function Refresh() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 8.5a8 8 0 0 0-14.5-3M4 4.5v4h4M4 15.5a8 8 0 0 0 14.5 3M20 19.5v-4h-4" />
    </svg>
  );
}

export function BookOpen() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c-1.5-1.3-3.7-2-6.5-2v13c2.8 0 5 .7 6.5 2 1.5-1.3 3.7-2 6.5-2v-13c-2.8 0-5 .7-6.5 2ZM12 6.5v13" />
    </svg>
  );
}

export function HeartPulse() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7.5-4.4-9.5-9.4C1.3 7.6 2.7 4.6 5.7 4c2-.5 3.7.5 4.8 2.1a5 5 0 0 1 5-2.1c3 .6 4.4 3.6 3.1 6.7C16.6 15.6 12 20 12 20Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h2.5l1.5-3 2 5 1.5-3H16" />
    </svg>
  );
}

export function Plane() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 14.5 21 8l-6 6.5.8 5-3-2.3-2 2.3-.6-3.6L3 14.5Z" />
    </svg>
  );
}

export function Home() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-9Z" />
    </svg>
  );
}

export function Factory() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 20V11l5 3V11l5 3V8l5 3v9H3.5Z" />
      <path strokeLinecap="round" d="M7 20v-3M12 20v-3M17 20v-3" />
    </svg>
  );
}

export function Shirt() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4 12 6l3-2 4 3-2.5 3-1.5-1v11h-6V9l-1.5 1L5 7l4-3Z" />
    </svg>
  );
}

export function Sofa() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12V9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
      <rect x="3" y="12" width="18" height="6" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M4 18v2M20 18v2" />
    </svg>
  );
}

export function Vase() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5h6M9.5 3.5c-1 3-2.5 4.5-2.5 7.5 0 4 2.5 6 5 9 2.5-3 5-5 5-9 0-3-1.5-4.5-2.5-7.5" />
    </svg>
  );
}

export function HardHat() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16a8 8 0 0 1 16 0" />
      <rect x="2.5" y="16" width="19" height="2.5" rx="1" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M12 8v-3" />
    </svg>
  );
}

export function Jar() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="6" y="8.5" width="12" height="12" rx="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3.5" />
    </svg>
  );
}

export function Bolt() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3 5 13.5h5.5L11 21l8-11H13.5L13 3Z" />
    </svg>
  );
}

export function Laptop() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="5" width="16" height="10.5" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M2.5 19h19" />
    </svg>
  );
}

export function Wrench() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 9.3a4 4 0 0 1-5.4 5.4L4 20l-1.5-1.5 5.6-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6 1.5 1.5 2.3-2.6Z" />
    </svg>
  );
}

export function IdCard() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" strokeWidth={1.5} />
      <circle cx="8" cy="11" r="2" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M5.5 16c0-1.7 1.3-2.5 2.5-2.5s2.5.8 2.5 2.5M14 9.5h5M14 12.5h5M14 15.5h3" />
    </svg>
  );
}

export function Handshake() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 11.5 6 8l4 2.5-1.5 2 3 2 1.5-1.5L18 15l4-3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5 12 16l1.5-1.5" />
    </svg>
  );
}

export function OpenHands() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 14c2-4 4.5-6 6-7M21 14c-2-4-4.5-6-6-7M6 15c1.5 3 3.5 5 6 5.5 2.5-.5 4.5-2.5 6-5.5" />
    </svg>
  );
}

export function Megaphone() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4h3l6 4V6L6 10H3Z" />
      <path strokeLinecap="round" d="M16 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}

export function Mic() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="9" y="3" width="6" height="11" rx="3" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 11a6 6 0 0 0 12 0M12 17v3M9 20h6" />
    </svg>
  );
}

export function CreditCard() {
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="1.8" strokeWidth={1.5} />
      <path strokeLinecap="round" d="M2.5 9.5h19M6 14.5h4" />
    </svg>
  );
}

export const navIcons: Record<string, () => React.JSX.Element> = {
  rocket: Rocket,
  lifebuoy: Lifebuoy,
  arrowsExchange: ArrowsExchange,
  sparkles: Sparkles,
  storefront: Storefront,
  tag: Tag,
  question: Question,
  trophy: Trophy,
  userPlus: UserPlus,
  shieldCheck: ShieldCheck,
  clipboardList: ClipboardList,
  magnifierCheck: MagnifierCheck,
  building: Building,
  shoppingBag: ShoppingBag,
  documentText: DocumentText,
  cube: Cube,
  globe: Globe,
  globeAlt: GlobeAlt,
  truck: Truck,
};
