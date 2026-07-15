import type { ProductData } from "./products-data";

function priceValue(p: string) {
  const n = parseFloat(p.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function hashSlug(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const MONTHS = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

function buildSeries(product: ProductData) {
  const current = priceValue(product.price);
  const seed = hashSlug(product.slug);
  const points: number[] = [];
  let value = current * (1 + (seededRandom(seed) - 0.5) * 0.22);
  for (let i = 0; i < MONTHS.length - 1; i++) {
    points.push(value);
    const drift = (seededRandom(seed + i * 7) - 0.5) * 0.08;
    value = value * (1 + drift);
  }
  points.push(current);
  return points;
}

export default function PriceHistoryChart({ product }: { product: ProductData }) {
  const series = buildSeries(product);
  const max = Math.max(...series);
  const min = Math.min(...series);
  const range = max - min || 1;

  const width = 640;
  const height = 220;
  const padX = 36;
  const padY = 24;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;

  const coords = series.map((v, i) => {
    const x = padX + (i / (series.length - 1)) * plotW;
    const y = padY + plotH - ((v - min) / range) * plotH;
    return { x, y, v };
  });

  const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${(padY + plotH).toFixed(1)} L ${coords[0].x.toFixed(1)} ${(padY + plotH).toFixed(1)} Z`;

  const first = series[0];
  const last = series[series.length - 1];
  const pctChange = ((last - first) / first) * 100;

  return (
    <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
        <h3 className="text-[1rem] font-bold text-[#0E241C]">6-month price trend</h3>
        <span
          className={`text-[0.8rem] font-semibold px-2 py-[3px] rounded-[6px] ${
            pctChange <= 0 ? "bg-[#F0EADB] text-[#1F5C4D]" : "bg-[#FBEEE4] text-[#B3422F]"
          }`}
        >
          {pctChange <= 0 ? "▼" : "▲"} {Math.abs(pctChange).toFixed(1)}% vs {MONTHS[0]}
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[420px] h-auto" role="img" aria-label={`Price trend chart for ${product.name}, from $${first.toFixed(2)} to $${last.toFixed(2)}`}>
          {[0, 1, 2, 3].map((i) => {
            const y = padY + (plotH / 3) * i;
            return <line key={i} x1={padX} y1={y} x2={width - padX} y2={y} stroke="#F0EADB" strokeWidth={1} />;
          })}

          <defs>
            <linearGradient id={`price-fill-${product.slug}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#17362A" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#17362A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#price-fill-${product.slug})`} />
          <path d={linePath} fill="none" stroke="#17362A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

          {coords.map((c, i) => (
            <g key={i}>
              <circle
                cx={c.x}
                cy={c.y}
                r={i === coords.length - 1 ? 4.5 : 3}
                fill={i === coords.length - 1 ? "#C9A853" : "#17362A"}
                stroke="white"
                strokeWidth={1.5}
              >
                <title>{`${MONTHS[i]}: $${c.v.toFixed(2)}`}</title>
              </circle>
              <text x={c.x} y={height - 4} textAnchor="middle" fontSize="10.5" fill="#5B6961">
                {MONTHS[i]}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <p className="text-[0.76rem] text-[#5B6961] mt-3">
        Illustrative trend, not sourced from real historical order data — this platform has no pricing-history
        backend yet. Current unit price is exact: {product.price}.
      </p>
    </div>
  );
}
