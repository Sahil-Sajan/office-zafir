import Link from "next/link";

export default function RegistrationCta() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="border-l-[3px] border-[#17362A] py-4 px-5 bg-[#F0EADB] rounded-r-[6px] text-[0.92rem] text-[#332F27] leading-[1.6]">
          <strong>Not ready to apply yet?</strong> Read what verification actually checks for on the{" "}
          <Link href="/how-we-verify-suppliers" className="text-[#234A3A] underline">How We Verify</Link> page, or see the full{" "}
          <Link href="/supplier-benefits" className="text-[#234A3A] underline">Supplier Benefits</Link>.
        </div>
      </div>
    </section>
  );
}
