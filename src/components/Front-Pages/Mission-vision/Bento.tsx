export default function MissionVisionBento() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#0E241C] text-white rounded-[16px] p-[36px] flex flex-col justify-between min-h-[260px]">
            <div>
              <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/75">
                Our Mission
              </span>
              <h3 className="text-[1.4rem] font-bold mt-2">Democratise trade for Iraq.</h3>
            </div>
            <p className="text-white/80 text-[0.95rem] leading-[1.65] mt-4">
              To build the infrastructure that connects Iraqi businesses to global supply chains — making it as simple to import a container from Istanbul as it is to order locally.
            </p>
          </div>
          <div className="bg-[#17362A] text-white rounded-[16px] p-[36px] flex flex-col justify-between min-h-[260px]">
            <div>
              <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/85">
                Our Vision
              </span>
              <h3 className="text-[1.4rem] font-bold mt-2">Iraq's commerce backbone.</h3>
            </div>
            <p className="text-white/85 text-[0.95rem] leading-[1.65] mt-4">
              A future where every Iraqi entrepreneur — from a market stall to a factory — can access world-class tools, verified suppliers, and seamless payments without leaving Iraq.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
