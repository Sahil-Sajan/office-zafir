import Link from "next/link";

export default function ImportNote({ lang }: { lang: string }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="border-l-[3px] border-[#17362A] py-4 px-5 bg-[#F0EADB] rounded-r-[6px] text-[0.92rem] text-[#332F27] leading-[1.6]">
          <strong>Need help with your first import?</strong> Our team can help you navigate MOQ negotiations, proforma invoices, shipping contracts, and customs documentation.{" "}
          <Link href={`/${lang}/contact-us`} className="text-[#234A3A] underline">Contact the import support team</Link>.
        </div>
      </div>
    </section>
  );
}
