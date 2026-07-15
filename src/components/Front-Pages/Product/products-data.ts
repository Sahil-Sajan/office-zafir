import {
  stainless, stainless2, stainless3,
  induction, induction3,
  cottonblend, cottonblend2, cottonblend3,
  product1, castIron2, castIron3,
  portable2000w,
  refrigerator, refrigerator2,
  product4, fridge, bar3,
  towel2, towel3,
} from "@/utils/images";

export interface ProductData {
  slug: string;
  category: string;
  categorySlug: string;
  name: string;
  image: string;
  gallery: string[];
  tier: "retail" | "marketplace" | "wholesale";
  badges: { label: string; color: string }[];
  rating: string;
  reviews: number;
  sold: string;
  price: string;
  comparePrice?: string;
  moq: string;
  origin: string;
  hsCode: string;
  leadTime: string;
  incoterms: string;
  cartonQty: string;
  containerFit: string;
  variants: string[];
  priceTiers: { qty: string; price: string; savings: string }[];
  description: {
    included: string;
    materials: string;
    applications: string;
    warranty: string;
  };
  specs: { attribute: string; value: string }[];
  supplier: {
    name: string;
    location: string;
    founded: string;
    employees: string;
    facility: string;
    responseRate: string;
    yearsInBusiness: string;
    capacity: string;
    certifications: string;
  };
  reviewsList: { stars: string; text: string }[];
}

export const products: Record<string, ProductData> = {
  "stainless-steel-cookware-set": {
    slug: "stainless-steel-cookware-set",
    category: "Home Appliances & Electronics",
    categorySlug: "home-appliances-electronics",
    name: "Commercial-Grade Stainless Steel Cookware Set, 12-Piece",
    image: stainless.src,
    gallery: [stainless.src, stainless2.src, stainless3.src],
    tier: "wholesale",
    badges: [
      { label: "Verified Factory", color: "bg-[#17362A]" },
      { label: "New", color: "bg-[#17362A]" },
    ],
    rating: "4.8",
    reviews: 312,
    sold: "1,940 sold",
    price: "$18.40",
    comparePrice: "$22.00",
    moq: "200 units",
    origin: "Turkey",
    hsCode: "7323.93",
    leadTime: "18–25 days",
    incoterms: "FOB · CIF · DDP",
    cartonQty: "6 sets / carton",
    containerFit: "3,240 sets / 40ft",
    variants: ["Mirror Finish", "Brushed Finish", "Copper Base"],
    priceTiers: [
      { qty: "200 – 499 (MOQ)", price: "$18.40", savings: "—" },
      { qty: "500 – 999", price: "$16.90", savings: "8%" },
      { qty: "1,000 – 4,999", price: "$15.20", savings: "17%" },
      { qty: "5,000+ (full container)", price: "$13.75", savings: "25%" },
    ],
    description: {
      included: "3 saucepans, 2 frying pans, 1 stockpot, 1 sauté pan, 6 matching lids — full manufacturing spec sheet attached to the RFQ.",
      materials: "18/10 stainless steel body, aluminium-clad base. CE, FDA, and ISO 9001 certified factory — certification gallery on the supplier profile.",
      applications: "Rated for commercial kitchens and induction hobs; suited to marketplace resale as a retail kitchenware set.",
      warranty: "2-year manufacturing defect warranty. Dishwasher safe; hand wash recommended for the mirror finish.",
    },
    specs: [
      { attribute: "Gross weight / carton", value: "14.2 kg" },
      { attribute: "Net weight / set", value: "2.1 kg" },
      { attribute: "Carton dimensions", value: "58 × 40 × 32 cm" },
      { attribute: "Pallet quantity", value: "48 cartons" },
      { attribute: "20ft container", value: "1,560 sets" },
      { attribute: "40ft container", value: "3,240 sets" },
      { attribute: "Country of origin", value: "Turkey — Istanbul metal district" },
      { attribute: "HS code", value: "7323.93" },
    ],
    supplier: {
      name: "Anadolu Metal Sanayi",
      location: "Istanbul, Turkey",
      founded: "2004",
      employees: "180 employees",
      facility: "4,200 sqm facility",
      responseRate: "96% within 24h",
      yearsInBusiness: "21",
      capacity: "1.2M units / year",
      certifications: "ISO 9001, CE, FDA",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Lead time matched the RFQ quote within two days. Documentation was complete at handoff." },
      { stars: "★★★★★", text: "Mirror finish exactly like the factory photos. One carton had a dented lid, resolved via dispute centre." },
      { stars: "★★★★★", text: "Reordered for a second container without renegotiating — one-click reorder from order history." },
    ],
  },
  "commercial-induction-hob": {
    slug: "commercial-induction-hob",
    category: "Home Appliances & Electronics",
    categorySlug: "home-appliances-electronics",
    name: "Commercial Induction Hob, 3.5kW",
    image: induction.src,
    gallery: [induction.src, induction3.src, induction.src],
    tier: "retail",
    badges: [{ label: "-15%", color: "bg-[#B3422F]" }],
    rating: "4.6",
    reviews: 188,
    sold: "860 sold",
    price: "$64.00",
    comparePrice: "$75.00",
    moq: "50 units",
    origin: "China",
    hsCode: "8516.60",
    leadTime: "15 days",
    incoterms: "FOB · CIF",
    cartonQty: "2 units / carton",
    containerFit: "960 units / 40ft",
    variants: ["Single Zone", "Double Zone"],
    priceTiers: [
      { qty: "50 – 199 (MOQ)", price: "$64.00", savings: "—" },
      { qty: "200 – 499", price: "$59.00", savings: "8%" },
      { qty: "500 – 999", price: "$53.50", savings: "16%" },
      { qty: "1,000+ (full container)", price: "$48.00", savings: "25%" },
    ],
    description: {
      included: "Induction hob unit, power cable, control panel overlay, and printed manual — full spec sheet attached to the RFQ.",
      materials: "Ceramic glass top rated to 3.5kW, stainless steel housing. CE and RoHS certified factory line.",
      applications: "Built for commercial kitchens and canteens; also suited to marketplace resale as a premium home appliance.",
      warranty: "18-month manufacturing defect warranty. Wipe-clean surface; avoid abrasive cleaners on the glass top.",
    },
    specs: [
      { attribute: "Gross weight / carton", value: "9.6 kg" },
      { attribute: "Net weight / unit", value: "4.1 kg" },
      { attribute: "Carton dimensions", value: "42 × 38 × 12 cm" },
      { attribute: "Pallet quantity", value: "60 cartons" },
      { attribute: "20ft container", value: "460 units" },
      { attribute: "40ft container", value: "960 units" },
      { attribute: "Country of origin", value: "China — Guangdong appliance cluster" },
      { attribute: "HS code", value: "8516.60" },
    ],
    supplier: {
      name: "Guangzhou Home Appliance Co.",
      location: "Guangzhou, China",
      founded: "2011",
      employees: "240 employees",
      facility: "6,000 sqm facility",
      responseRate: "94% within 24h",
      yearsInBusiness: "14",
      capacity: "800K units / year",
      certifications: "CE, RoHS, ISO 9001",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Fast lead time, exactly 15 days from deposit to shipment. Power output matches the spec sheet." },
      { stars: "★★★★☆", text: "Good build quality. Control panel overlay peeled slightly after heavy use, supplier sent replacements free." },
      { stars: "★★★★★", text: "Ordered a second batch for our marketplace store — same quality, same price tier honoured." },
    ],
  },
  "cotton-blend-bedding-set": {
    slug: "cotton-blend-bedding-set",
    category: "Apparel & Textiles",
    categorySlug: "apparel-textiles",
    name: "Cotton Blend Bedding Set, Wholesale Carton",
    image: cottonblend.src,
    gallery: [cottonblend.src, cottonblend2.src, cottonblend3.src],
    tier: "marketplace",
    badges: [{ label: "Free Shipping", color: "bg-[#0E241C]" }],
    rating: "4.4",
    reviews: 96,
    sold: "2,310 sold",
    price: "$5.10",
    moq: "500 units",
    origin: "Turkey",
    hsCode: "6302.31",
    leadTime: "20 days",
    incoterms: "FOB · CIF · DDP",
    cartonQty: "20 sets / carton",
    containerFit: "9,600 sets / 40ft",
    variants: ["Queen", "King", "Single"],
    priceTiers: [
      { qty: "500 – 1,999 (MOQ)", price: "$5.10", savings: "—" },
      { qty: "2,000 – 4,999", price: "$4.70", savings: "8%" },
      { qty: "5,000 – 9,999", price: "$4.25", savings: "17%" },
      { qty: "10,000+ (full container)", price: "$3.85", savings: "25%" },
    ],
    description: {
      included: "1 fitted sheet, 1 flat sheet, 2 pillowcases per set — full manufacturing spec sheet attached to the RFQ.",
      materials: "60% cotton / 40% polyester blend, 180 thread count. OEKO-TEX certified factory — certification gallery on the supplier profile.",
      applications: "Suited to hotel, rental, and marketplace resale — bulk carton packing keeps landed cost low per set.",
      warranty: "Colour-fast guarantee for 30 washes. Machine washable, tumble dry low.",
    },
    specs: [
      { attribute: "Gross weight / carton", value: "18.4 kg" },
      { attribute: "Net weight / set", value: "0.9 kg" },
      { attribute: "Carton dimensions", value: "60 × 45 × 40 cm" },
      { attribute: "Pallet quantity", value: "40 cartons" },
      { attribute: "20ft container", value: "4,600 sets" },
      { attribute: "40ft container", value: "9,600 sets" },
      { attribute: "Country of origin", value: "Turkey — Bursa textile district" },
      { attribute: "HS code", value: "6302.31" },
    ],
    supplier: {
      name: "Marmara Tekstil",
      location: "Bursa, Turkey",
      founded: "2008",
      employees: "310 employees",
      facility: "8,500 sqm facility",
      responseRate: "97% within 24h",
      yearsInBusiness: "17",
      capacity: "3M sets / year",
      certifications: "OEKO-TEX, ISO 9001",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Colours held up exactly as promised after repeated washing. Great margin at the wholesale price tier." },
      { stars: "★★★★☆", text: "Good quality for the price. A few pillowcases arrived with loose stitching, minor issue." },
      { stars: "★★★★★", text: "Reordered twice already. Carton packing made customs clearance simple." },
    ],
  },
  "compact-double-door-refrigerator": {
    slug: "compact-double-door-refrigerator",
    category: "Home Appliances & Electronics",
    categorySlug: "home-appliances-electronics",
    name: "Compact Double-Door Refrigerator, 350L",
    image: refrigerator.src,
    gallery: [refrigerator.src, refrigerator2.src, refrigerator.src],
    tier: "wholesale",
    badges: [{ label: "New", color: "bg-[#17362A]" }],
    rating: "4.7",
    reviews: 140,
    sold: "610 sold",
    price: "$210.00",
    moq: "20 units",
    origin: "China",
    hsCode: "8418.21",
    leadTime: "22 days",
    incoterms: "FOB · CIF · DDP",
    cartonQty: "1 unit / carton",
    containerFit: "480 units / 40ft",
    variants: ["Silver", "Black", "White"],
    priceTiers: [
      { qty: "20 – 49 (MOQ)", price: "$210.00", savings: "—" },
      { qty: "50 – 99", price: "$194.00", savings: "8%" },
      { qty: "100 – 299", price: "$175.00", savings: "17%" },
      { qty: "300+ (full container)", price: "$158.00", savings: "25%" },
    ],
    description: {
      included: "Refrigerator unit, adjustable shelving, door bins, and power cable — full spec sheet attached to the RFQ.",
      materials: "Double-door frost-free compressor unit, steel cabinet with powder-coated finish. CE and RoHS certified factory line.",
      applications: "Suited to home kitchens, small offices, and marketplace resale as a compact household appliance.",
      warranty: "2-year compressor warranty. Wipe-clean interior; defrost every 3–6 months.",
    },
    specs: [
      { attribute: "Gross weight / unit", value: "38.5 kg" },
      { attribute: "Net weight / unit", value: "34.2 kg" },
      { attribute: "Carton dimensions", value: "60 × 58 × 145 cm" },
      { attribute: "Pallet quantity", value: "12 units" },
      { attribute: "20ft container", value: "220 units" },
      { attribute: "40ft container", value: "480 units" },
      { attribute: "Country of origin", value: "China — Guangdong appliance cluster" },
      { attribute: "HS code", value: "8418.21" },
    ],
    supplier: {
      name: "Guangzhou Home Appliance Co.",
      location: "Guangzhou, China",
      founded: "2011",
      employees: "240 employees",
      facility: "6,000 sqm facility",
      responseRate: "94% within 24h",
      yearsInBusiness: "14",
      capacity: "800K units / year",
      certifications: "CE, RoHS, ISO 9001",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Compact size but genuinely fits 350L worth of stock. Compressor is quiet." },
      { stars: "★★★★☆", text: "Arrived on schedule at 22 days. One dented door panel, resolved via dispute centre." },
      { stars: "★★★★★", text: "Reordered for our second storefront — same build quality as the first batch." },
    ],
  },
  "cast-iron-skillet-set": {
    slug: "cast-iron-skillet-set",
    category: "Home Appliances & Electronics",
    categorySlug: "home-appliances-electronics",
    name: "Cast Iron Skillet Set, 3-Piece",
    image: castIron2.src,
    gallery: [castIron2.src, castIron3.src, product1.src],
    tier: "retail",
    badges: [{ label: "-10%", color: "bg-[#B3422F]" }],
    rating: "4.9",
    reviews: 204,
    sold: "1,120 sold",
    price: "$22.50",
    comparePrice: "$25.00",
    moq: "150 units",
    origin: "Turkey",
    hsCode: "7323.91",
    leadTime: "18 days",
    incoterms: "FOB · CIF · DDP",
    cartonQty: "8 sets / carton",
    containerFit: "2,880 sets / 40ft",
    variants: ["Pre-Seasoned", "Enamel Coated"],
    priceTiers: [
      { qty: "150 – 399 (MOQ)", price: "$22.50", savings: "—" },
      { qty: "400 – 999", price: "$20.70", savings: "8%" },
      { qty: "1,000 – 2,999", price: "$18.65", savings: "17%" },
      { qty: "3,000+ (full container)", price: "$16.90", savings: "25%" },
    ],
    description: {
      included: "3 skillets (8\", 10\", 12\") pre-seasoned and ready to use — full manufacturing spec sheet attached to the RFQ.",
      materials: "Solid cast iron, pre-seasoned with a natural oil coating. Foundry certified to ISO 9001.",
      applications: "Rated for stovetop, oven, and open-flame cooking; suited to marketplace resale as premium cookware.",
      warranty: "Lifetime structural warranty against cracking. Hand wash and re-season after use.",
    },
    specs: [
      { attribute: "Gross weight / carton", value: "22.8 kg" },
      { attribute: "Net weight / set", value: "2.6 kg" },
      { attribute: "Carton dimensions", value: "44 × 34 × 30 cm" },
      { attribute: "Pallet quantity", value: "36 cartons" },
      { attribute: "20ft container", value: "1,380 sets" },
      { attribute: "40ft container", value: "2,880 sets" },
      { attribute: "Country of origin", value: "Turkey — Istanbul metal district" },
      { attribute: "HS code", value: "7323.91" },
    ],
    supplier: {
      name: "Anadolu Metal Sanayi",
      location: "Istanbul, Turkey",
      founded: "2004",
      employees: "180 employees",
      facility: "4,200 sqm facility",
      responseRate: "96% within 24h",
      yearsInBusiness: "21",
      capacity: "1.2M units / year",
      certifications: "ISO 9001, CE, FDA",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Pre-seasoning held up straight out of the carton — no re-seasoning needed before first use." },
      { stars: "★★★★★", text: "Heavy, well-cast, no warping on our induction test batch." },
      { stars: "★★★★☆", text: "Great margin at retail. A couple handles had rough edges, sanded down easily." },
    ],
  },
  "portable-induction-cooktop": {
    slug: "portable-induction-cooktop",
    category: "Home Appliances & Electronics",
    categorySlug: "home-appliances-electronics",
    name: "Portable Induction Cooktop, 2000W",
    image: portable2000w.src,
    gallery: [portable2000w.src, induction3.src, portable2000w.src],
    tier: "marketplace",
    badges: [{ label: "Best Seller", color: "bg-[#17362A]" }],
    rating: "4.5",
    reviews: 167,
    sold: "980 sold",
    price: "$29.90",
    moq: "80 units",
    origin: "China",
    hsCode: "8516.60",
    leadTime: "15 days",
    incoterms: "FOB · CIF",
    cartonQty: "4 units / carton",
    containerFit: "1,920 units / 40ft",
    variants: ["Black", "Silver"],
    priceTiers: [
      { qty: "80 – 249 (MOQ)", price: "$29.90", savings: "—" },
      { qty: "250 – 599", price: "$27.50", savings: "8%" },
      { qty: "600 – 1,499", price: "$24.80", savings: "17%" },
      { qty: "1,500+ (full container)", price: "$22.40", savings: "25%" },
    ],
    description: {
      included: "Cooktop unit, power cable, and printed manual — full spec sheet attached to the RFQ.",
      materials: "Ceramic glass top rated to 2000W, ABS housing. CE and RoHS certified factory line.",
      applications: "Built for home kitchens and single-burner setups; also suited to marketplace resale as a portable appliance.",
      warranty: "12-month manufacturing defect warranty. Wipe-clean surface; avoid abrasive cleaners on the glass top.",
    },
    specs: [
      { attribute: "Gross weight / carton", value: "8.4 kg" },
      { attribute: "Net weight / unit", value: "1.9 kg" },
      { attribute: "Carton dimensions", value: "36 × 32 × 24 cm" },
      { attribute: "Pallet quantity", value: "60 cartons" },
      { attribute: "20ft container", value: "920 units" },
      { attribute: "40ft container", value: "1,920 units" },
      { attribute: "Country of origin", value: "China — Guangdong appliance cluster" },
      { attribute: "HS code", value: "8516.60" },
    ],
    supplier: {
      name: "Guangzhou Home Appliance Co.",
      location: "Guangzhou, China",
      founded: "2011",
      employees: "240 employees",
      facility: "6,000 sqm facility",
      responseRate: "94% within 24h",
      yearsInBusiness: "14",
      capacity: "800K units / year",
      certifications: "CE, RoHS, ISO 9001",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Compact and reliable, holds temperature well for a portable unit." },
      { stars: "★★★★☆", text: "Good value at this price tier. Control dial felt a bit loose on one unit out of the batch." },
      { stars: "★★★★★", text: "Best seller for a reason — quick turnover in our marketplace store." },
    ],
  },
  "cotton-towel-set-hotel-grade": {
    slug: "cotton-towel-set-hotel-grade",
    category: "Apparel & Textiles",
    categorySlug: "apparel-textiles",
    name: "Cotton Towel Set, Hotel Grade",
    image: towel2.src,
    gallery: [towel2.src, towel3.src, towel2.src],
    tier: "wholesale",
    badges: [{ label: "Free Shipping", color: "bg-[#0E241C]" }],
    rating: "4.8",
    reviews: 88,
    sold: "1,540 sold",
    price: "$6.80",
    moq: "300 units",
    origin: "Turkey",
    hsCode: "6302.60",
    leadTime: "20 days",
    incoterms: "FOB · CIF · DDP",
    cartonQty: "24 sets / carton",
    containerFit: "8,400 sets / 40ft",
    variants: ["White", "Cream", "Grey"],
    priceTiers: [
      { qty: "300 – 999 (MOQ)", price: "$6.80", savings: "—" },
      { qty: "1,000 – 2,999", price: "$6.25", savings: "8%" },
      { qty: "3,000 – 7,999", price: "$5.65", savings: "17%" },
      { qty: "8,000+ (full container)", price: "$5.10", savings: "25%" },
    ],
    description: {
      included: "1 bath towel, 1 hand towel, 1 face towel per set — full manufacturing spec sheet attached to the RFQ.",
      materials: "100% combed cotton, 600 GSM. OEKO-TEX certified factory — certification gallery on the supplier profile.",
      applications: "Suited to hotel, spa, and marketplace resale — bulk carton packing keeps landed cost low per set.",
      warranty: "Colour-fast guarantee for 40 washes. Machine washable, tumble dry low.",
    },
    specs: [
      { attribute: "Gross weight / carton", value: "21.6 kg" },
      { attribute: "Net weight / set", value: "0.85 kg" },
      { attribute: "Carton dimensions", value: "55 × 42 × 38 cm" },
      { attribute: "Pallet quantity", value: "40 cartons" },
      { attribute: "20ft container", value: "4,000 sets" },
      { attribute: "40ft container", value: "8,400 sets" },
      { attribute: "Country of origin", value: "Turkey — Bursa textile district" },
      { attribute: "HS code", value: "6302.60" },
    ],
    supplier: {
      name: "Marmara Tekstil",
      location: "Bursa, Turkey",
      founded: "2008",
      employees: "310 employees",
      facility: "8,500 sqm facility",
      responseRate: "97% within 24h",
      yearsInBusiness: "17",
      capacity: "3M sets / year",
      certifications: "OEKO-TEX, ISO 9001",
    },
    reviewsList: [
      { stars: "★★★★★", text: "600 GSM feels genuinely hotel-grade. Absorbency held up after 40+ washes as promised." },
      { stars: "★★★★★", text: "Free shipping on the bulk order made the landed cost very competitive." },
      { stars: "★★★★☆", text: "Great quality overall. A couple of face towels had loose hems, minor issue." },
    ],
  },
  "mini-bar-fridge": {
    slug: "mini-bar-fridge",
    category: "Home Appliances & Electronics",
    categorySlug: "home-appliances-electronics",
    name: "Mini Bar Fridge, 90L",
    image: fridge.src,
    gallery: [fridge.src, bar3.src, product4.src],
    tier: "retail",
    badges: [{ label: "-8%", color: "bg-[#B3422F]" }],
    rating: "4.3",
    reviews: 52,
    sold: "290 sold",
    price: "$58.00",
    comparePrice: "$64.00",
    moq: "40 units",
    origin: "China",
    hsCode: "8418.21",
    leadTime: "20 days",
    incoterms: "FOB · CIF",
    cartonQty: "1 unit / carton",
    containerFit: "960 units / 40ft",
    variants: ["Black", "Silver", "Red"],
    priceTiers: [
      { qty: "40 – 99 (MOQ)", price: "$58.00", savings: "—" },
      { qty: "100 – 249", price: "$53.50", savings: "8%" },
      { qty: "250 – 599", price: "$48.30", savings: "17%" },
      { qty: "600+ (full container)", price: "$43.50", savings: "25%" },
    ],
    description: {
      included: "Mini fridge unit, glass shelf, and power cable — full spec sheet attached to the RFQ.",
      materials: "Compressor-cooled 90L unit, steel cabinet with reversible door. CE and RoHS certified factory line.",
      applications: "Suited to hotel rooms, offices, and marketplace resale as a compact household appliance.",
      warranty: "18-month compressor warranty. Wipe-clean interior; defrost every 3–6 months.",
    },
    specs: [
      { attribute: "Gross weight / unit", value: "16.4 kg" },
      { attribute: "Net weight / unit", value: "14.1 kg" },
      { attribute: "Carton dimensions", value: "48 × 45 × 50 cm" },
      { attribute: "Pallet quantity", value: "24 units" },
      { attribute: "20ft container", value: "460 units" },
      { attribute: "40ft container", value: "960 units" },
      { attribute: "Country of origin", value: "China — Guangdong appliance cluster" },
      { attribute: "HS code", value: "8418.21" },
    ],
    supplier: {
      name: "Guangzhou Home Appliance Co.",
      location: "Guangzhou, China",
      founded: "2011",
      employees: "240 employees",
      facility: "6,000 sqm facility",
      responseRate: "94% within 24h",
      yearsInBusiness: "14",
      capacity: "800K units / year",
      certifications: "CE, RoHS, ISO 9001",
    },
    reviewsList: [
      { stars: "★★★★★", text: "Right size for a small office breakroom. Quiet compressor, no complaints." },
      { stars: "★★★★☆", text: "Good value at the discounted price. Door seal was slightly loose on one unit." },
      { stars: "★★★★★", text: "Reordered a second batch — consistent build quality across both shipments." },
    ],
  },
};

export function getProduct(slug: string): ProductData {
  return products[slug] ?? products["stainless-steel-cookware-set"];
}

export function getRelatedProducts(slug: string): ProductData[] {
  return Object.values(products).filter((p) => p.slug !== slug);
}

export function getAllProducts(): ProductData[] {
  return Object.values(products);
}

export interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
}

export function getCategories(): CategoryInfo[] {
  const map = new Map<string, CategoryInfo>();
  for (const p of getAllProducts()) {
    const existing = map.get(p.categorySlug);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(p.categorySlug, { name: p.category, slug: p.categorySlug, count: 1 });
    }
  }
  return Array.from(map.values());
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): ProductData[] {
  return getAllProducts().filter((p) => p.categorySlug === slug);
}

export function searchProducts(query: string): ProductData[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllProducts().filter((p) =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.origin.toLowerCase().includes(q) ||
    p.supplier.name.toLowerCase().includes(q)
  );
}
