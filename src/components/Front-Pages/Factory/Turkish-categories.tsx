interface TurkishCategoriesProps {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}

export default function TurkishCategories({ categories, active, onSelect }: TurkishCategoriesProps) {
  return (
    <div className="max-w-[1180px] mx-auto px-7">
      <div className="flex gap-2 flex-wrap mb-9">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onSelect(c)}
            aria-pressed={active === c}
            className={`px-[14px] py-[7px] rounded-[999px] text-[0.82rem] font-medium transition-colors duration-150 cursor-pointer ${
              active === c ? "bg-[#0E241C] text-white" : "bg-white text-[#1C2420] border border-[#F0EADB] hover:border-[#17362A]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
