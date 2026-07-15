interface Step {
  title: string;
  desc: string;
}

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="max-w-[760px] flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <span className="flex-none flex items-center justify-center size-9 rounded-full bg-[#F0EADB] border border-[#E2C368] text-[#17362A] font-semibold text-[0.9rem]">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[1rem] font-semibold text-[#0E241C] mb-1">{step.title}</h3>
                <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
