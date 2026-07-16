import { DollarSign, ShoppingBag, Truck, FileText, TrendingUp, Package, MessageSquare, CreditCard } from "lucide-react";

export const wholesaleKpis = [
  {
    label: "Active Orders",
    value: "8",
    trend: "3 in production",
    trendDir: "neutral" as const,
    icon: ShoppingBag,
  },
  {
    label: "Total Spent (USD)",
    value: "$124,500",
    trend: "+32% vs last quarter",
    trendDir: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Pending Deliveries",
    value: "5",
    trend: "2 arriving this week",
    trendDir: "neutral" as const,
    icon: Truck,
  },
  {
    label: "RFQs Sent",
    value: "14",
    trend: "6 awaiting quotes",
    trendDir: "neutral" as const,
    icon: FileText,
  },
];

export const wholesaleSpendingTrend = [
  { month: "Jan", spent: 18000, orders: 4 },
  { month: "Feb", spent: 22000, orders: 5 },
  { month: "Mar", spent: 19500, orders: 4 },
  { month: "Apr", spent: 28000, orders: 7 },
  { month: "May", spent: 25000, orders: 6 },
  { month: "Jun", spent: 32000, orders: 8 },
  { month: "Jul", spent: 24500, orders: 5 },
];

export const wholesaleOrdersByStatus = [
  { status: "Awaiting Payment", count: 2, fill: "#C9A853" },
  { status: "In Production", count: 3, fill: "#17362A" },
  { status: "In Transit", count: 2, fill: "#234A3A" },
  { status: "Delivered", count: 15, fill: "#5B6961" },
  { status: "Disputed", count: 1, fill: "#B3422F" },
];

export const wholesaleActiveShipments = [
  { id: "SHP-1042", order: "ORD-3201", origin: "Istanbul, Turkey", destination: "Baghdad Port", carrier: "Aramex", status: "In Transit", eta: "2026-07-22", progress: "65%" },
  { id: "SHP-1041", order: "ORD-3199", origin: "Guangzhou, China", destination: "Basra Port", carrier: "DSV", status: "In Transit", eta: "2026-07-28", progress: "40%" },
  { id: "SHP-1040", order: "ORD-3197", origin: "Istanbul, Turkey", destination: "Erbil Warehouse", carrier: "Agility", status: "Customs", eta: "2026-07-17", progress: "88%" },
];

export const wholesaleRecentOrders = [
  { id: "ORD-3205", supplier: "Yilmaz Ceramic Factory", items: 6, amount: "$45,000", status: "In Production", date: "2026-07-12" },
  { id: "ORD-3203", supplier: "Guangzhou LED Tech", items: 3, amount: "$18,000", status: "Shipped", date: "2026-07-10" },
  { id: "ORD-3201", supplier: "Yilmaz Ceramic Factory", items: 4, amount: "$67,000", status: "In Transit", date: "2026-07-08" },
  { id: "ORD-3199", supplier: "Shanghai Steel Works", items: 2, amount: "$24,000", status: "In Transit", date: "2026-07-05" },
  { id: "ORD-3197", supplier: "Istanbul Plumbing Co.", items: 8, amount: "$12,000", status: "Delivered", date: "2026-07-01" },
];

export const wholesalePendingRfqs = [
  { id: "RFQ-201", supplier: "Yilmaz Ceramic Factory", product: "Marble Tiles 80x80", quantity: "10,000 pcs", sent: "2026-07-10", deadline: "2026-07-17", status: "Awaiting Quote" },
  { id: "RFQ-200", supplier: "Guangzhou LED Tech", product: "Smart LED Bulb 12W", quantity: "5,000 pcs", sent: "2026-07-08", deadline: "2026-07-15", status: "Quote Received" },
  { id: "RFQ-199", supplier: "Shanghai Steel Works", product: "Galvanized Sheet 1mm", quantity: "20 tons", sent: "2026-07-05", deadline: "2026-07-12", status: "Expired" },
];

export const wholesaleRecentActivity = [
  { icon: Truck, title: "Shipment arriving soon", description: "SHP-1040 clears customs in Baghdad - ETA tomorrow", time: "1 hour ago", color: "text-green-500 border-green-200 bg-green-50" },
  { icon: CreditCard, title: "Payment reminder", description: "ORD-3205 proforma invoice due in 3 days - $45,000", time: "3 hours ago", color: "text-yellow-500 border-yellow-200 bg-yellow-50" },
  { icon: FileText, title: "RFQ quote received", description: "RFQ-200 from Guangzhou LED Tech - $16,500 for 5K bulbs", time: "5 hours ago", color: "text-blue-500 border-blue-200 bg-blue-50" },
  { icon: Package, title: "Order confirmed", description: "ORD-3205 production started at Yilmaz Factory", time: "1 day ago", color: "text-purple-500 border-purple-200 bg-purple-50" },
  { icon: MessageSquare, title: "Supplier message", description: "Istanbul Plumbing shipped remaining items from ORD-3197", time: "1 day ago", color: "text-indigo-500 border-indigo-200 bg-indigo-50" },
  { icon: TrendingUp, title: "Spending milestone", description: "Total spend exceeded $120K this quarter", time: "2 days ago", color: "text-emerald-500 border-emerald-200 bg-emerald-50" },
];
