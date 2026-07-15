import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-7 py-20">
      <div className="max-w-[560px] text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-5">
          ◆ Page Not Found
        </span>

        <h1
          className="leading-none tracking-[-0.03em] text-[clamp(5rem,3.5rem+7vw,9rem)] text-[#0E241C]"
          style={{ fontFamily: "Georgia, 'Times New Roman', ui-serif, serif" }}
        >
          4<span className="italic font-medium text-[#C9A853]">0</span>4
        </h1>

        <p className="text-[1.1rem] text-[#1C2420] mt-4 leading-[1.6]">
          This page wandered off the shipping route.
        </p>
        <p className="text-[0.92rem] text-[#5B6961] mt-1.5 max-w-[420px] mx-auto leading-[1.6]">
          The link may be broken, or the page may have moved. Let&rsquo;s get you back to the marketplace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(23,54,42,0.32)] transition-all duration-200"
          >
            Return Home
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/search-products"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
