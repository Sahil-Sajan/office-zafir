import Link from "next/link";

interface BreadcrumbProps {
  lang: string;
  trail: { label: string; href?: string }[];
}

export function Breadcrumb({ lang, trail }: BreadcrumbProps) {
  return (
    <>
      <Link
        href={`/${lang}`}
        className="sm:hidden flex items-center gap-1.5 text-[0.85rem] font-medium text-[#1C2420] no-underline mb-4 hover:text-[#234A3A]"
      >
        <span aria-hidden="true">←</span> Home
      </Link>
      <div className="hidden sm:flex items-center gap-2 text-[0.82rem] text-[#5B6961] mb-4 overflow-x-auto whitespace-nowrap">
        {trail.map((item, i) => (
          <span key={item.label} className="flex items-center gap-2 flex-none">
            {i > 0 && <span className="text-[#F0EADB]">·</span>}
            {item.href ? (
              <Link href={item.href === "/" ? `/${lang}` : `/${lang}${item.href}`} className="no-underline text-[#5B6961] hover:text-[#234A3A]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0E241C] font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </>
  );
}
