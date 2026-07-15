export default function ArabicNote({ doc }: { doc: string }) {
  return (
    <div className="border-l-[3px] border-[#17362A] py-4 px-5 bg-[#F0EADB] rounded-r-[6px] text-[0.92rem] text-[#332F27] leading-[1.6] mt-6">
      <strong>Arabic version available.</strong> This {doc} is also available in Arabic. In case of any discrepancy, the Arabic version takes precedence for users in Iraq.
    </div>
  );
}
