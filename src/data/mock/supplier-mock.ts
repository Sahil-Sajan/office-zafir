import { DollarSign, FileText, Package, Clock, TrendingUp, MessageSquare, Truck, Users } from "lucide-react";

export const supplierKpis = [
  {
    label: "Open RFQs",
    value: "24",
    trend: "+8 new this week",
    trendDir: "up" as const,
    icon: FileText,
  },
  {
    label: "Active Orders",
    value: "18",
    trend: "$420,000 in pipeline",
    trendDir: "up" as const,
    icon: Package,
  },
  {
    label: "Total GMV (USD)",
    value: "$2.4M",
    trend: "+18% vs last quarter",
    trendDir: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Avg Response Time",
    value: "4.2h",
    trend: "Within 24h SLA",
    trendDir: "up" as const,
    icon: Clock,
  },
];

export const supplierRevenueTrend = [
  { month: "Jan", revenue: 280000, orders: 32 },
  { month: "Feb", revenue: 320000, orders: 38 },
  { month: "Mar", revenue: 295000, orders: 35 },
  { month: "Apr", revenue: 380000, orders: 42 },
  { month: "May", revenue: 350000, orders: 40 },
  { month: "Jun", revenue: 420000, orders: 48 },
  { month: "Jul", revenue: 350000, orders: 38 },
];

export const supplierRevenueByCategory = [
  { category: "Ceramics & Tiles", value: 680000, fill: "#17362A" },
  { category: "LED Lighting", value: 520000, fill: "#C9A853" },
  { category: "Steel & Metal", value: 440000, fill: "#234A3A" },
  { category: "Plumbing", value: 380000, fill: "#5B6961" },
  { category: "Electrical", value: 380000, fill: "#B3422F" },
];

export const supplierConversionFunnel = [
  { stage: "RFQs Received", count: 248 },
  { stage: "Quotes Sent", count: 195 },
  { stage: "Quotes Accepted", count: 89 },
  { stage: "Orders Confirmed", count: 72 },
  { stage: "Orders Completed", count: 68 },
];

export const supplierIncomingRfqs = [
  { id: "RFQ-891", buyer: "Ahmed Trading Co.", product: "Ceramic Tiles 60x60", quantity: "5,000 pcs", value: "$45,000", deadline: "2026-07-20", status: "New" },
  { id: "RFQ-890", buyer: "Baghdad Imports", product: "LED Panel Light 60W", quantity: "2,000 pcs", value: "$18,000", deadline: "2026-07-22", status: "In Progress" },
  { id: "RFQ-889", buyer: "Erbil Construction", product: "Steel Rebar 12mm", quantity: "50 tons", value: "$35,000", deadline: "2026-07-25", status: "New" },
  { id: "RFQ-888", buyer: "Basra Electronics", product: "PVC Pipe 4-inch", quantity: "3,000 pcs", value: "$12,000", deadline: "2026-07-18", status: "Quoted" },
  { id: "RFQ-887", buyer: "Mosul Hardware", product: "Copper Wire 2.5mm", quantity: "10,000 meters", value: "$8,500", deadline: "2026-07-19", status: "New" },
];

export const supplierActiveOrders = [
  { id: "ORD-3201", buyer: "Ahmed Trading Co.", product: "Ceramic Tiles (Mixed)", value: "$67,000", status: "In Production", progress: "65%", eta: "2026-07-28" },
  { id: "ORD-3199", buyer: "Baghdad Imports", product: "LED Panel Lights", value: "$24,000", status: "QC", progress: "90%", eta: "2026-07-18" },
  { id: "ORD-3197", buyer: "Erbil Construction", product: "Steel Rebar Bundle", value: "$52,000", status: "Ready to Ship", progress: "100%", eta: "2026-07-16" },
  { id: "ORD-3195", buyer: "Kurdish Imports", product: "PVC Fittings Set", value: "$15,000", status: "In Production", progress: "40%", eta: "2026-08-01" },
];

export const supplierRecentActivity = [
  { icon: FileText, title: "New RFQ received", description: "RFQ-891 from Ahmed Trading for 5,000 Ceramic Tiles", time: "12 min ago", color: "text-blue-500 border-blue-200 bg-blue-50" },
  { icon: MessageSquare, title: "Buyer message", description: "Baghdad Imports asking about LED Panel lead time", time: "45 min ago", color: "text-purple-500 border-purple-200 bg-purple-50" },
  { icon: TrendingUp, title: "Quote accepted", description: "RFQ-889 accepted by Erbil Construction - $35,000", time: "2 hours ago", color: "text-green-500 border-green-200 bg-green-50" },
  { icon: Package, title: "Order confirmed", description: "ORD-3197 moved to Ready to Ship - Steel Rebar", time: "3 hours ago", color: "text-emerald-500 border-emerald-200 bg-emerald-50" },
  { icon: Truck, title: "Shipment dispatched", description: "ORD-3193 picked up by Aramex - heading to Basra", time: "5 hours ago", color: "text-indigo-500 border-indigo-200 bg-indigo-50" },
  { icon: Users, title: "New buyer registered", description: "Sulaymaniyah Hardware created a B2B account", time: "6 hours ago", color: "text-orange-500 border-orange-200 bg-orange-50" },
];
