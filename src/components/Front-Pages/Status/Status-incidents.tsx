export default function StatusIncidents() {
  return (
    <div className="px-4 sm:px-7 pb-16">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-[1.1rem] font-bold text-[#0E241C] mb-4">Past incidents</h2>
        <div className="border border-[#F0EADB] rounded-[12px] p-8 text-center">
          <span className="text-2xl block mb-2">✓</span>
          <p className="text-[0.9rem] text-[#5B6961]">No incidents reported in the last 90 days.</p>
        </div>
      </div>
    </div>
  );
}
