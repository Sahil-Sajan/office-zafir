import { DollarSign, ShoppingBag, Star, MessageSquare, TrendingUp, Package, Users, Zap } from "lucide-react";

export const sellerKpis = [
  {
    label: "Revenue This Month",
    value: "IQD 2,450,000",
    trend: "+23% vs last month",
    trendDir: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Orders to Process",
    value: "12",
    trend: "+5 new today",
    trendDir: "up" as const,
    icon: ShoppingBag,
  },
  {
    label: "Buyer Rating",
    value: "4.8",
    trend: "+0.2 this month",
    trendDir: "up" as const,
    icon: Star,
  },
  {
    label: "Response Rate",
    value: "99.2%",
    trend: "Top 5% sellers",
    trendDir: "up" as const,
    icon: MessageSquare,
  },
];

export const sellerRevenueTrend = [
  { month: "Jan", revenue: 1800000, orders: 89 },
  { month: "Feb", revenue: 2100000, orders: 102 },
  { month: "Mar", revenue: 1950000, orders: 95 },
  { month: "Apr", revenue: 2300000, orders: 118 },
  { month: "May", revenue: 2150000, orders: 108 },
  { month: "Jun", revenue: 2450000, orders: 156 },
  { month: "Jul", revenue: 2680000, orders: 142 },
];

export const sellerOrdersByStatus = [
  { status: "Pending", count: 12, fill: "#C9A853" },
  { status: "Processing", count: 8, fill: "#17362A" },
  { status: "Shipped", count: 28, fill: "#234A3A" },
  { status: "Delivered", count: 95, fill: "#5B6961" },
  { status: "Returned", count: 3, fill: "#B3422F" },
];

export const sellerRecentOrders = [
  { id: "ORD-4521", buyer: "Ahmed Trading Co.", items: 4, amount: "IQD 450,000", status: "Pending", date: "2026-07-14" },
  { id: "ORD-4520", buyer: "Baghdad Electronics", items: 2, amount: "IQD 320,000", status: "Processing", date: "2026-07-14" },
  { id: "ORD-4519", buyer: "Basra Imports LLC", items: 8, amount: "IQD 1,200,000", status: "Shipped", date: "2026-07-13" },
  { id: "ORD-4518", buyer: "Erbil Market", items: 1, amount: "IQD 85,000", status: "Delivered", date: "2026-07-13" },
  { id: "ORD-4517", buyer: "Mosul Trading", items: 3, amount: "IQD 275,000", status: "Delivered", date: "2026-07-12" },
];

export const sellerTopProducts = [
  { name: "Ceramic Tiles 60x60", sold: 342, revenue: "IQD 890,000" },
  { name: "LED Panel Light 60W", sold: 218, revenue: "IQD 654,000" },
  { name: "Steel Reinforcement Bar", sold: 156, revenue: "IQD 1,200,000" },
  { name: "PVC Pipe 4-inch", sold: 89, revenue: "IQD 312,000" },
];

export const sellerRecentActivity = [
  { icon: ShoppingBag, title: "New order received", description: "ORD-4521 from Ahmed Trading - IQD 450,000", time: "5 min ago", color: "text-blue-500 border-blue-200 bg-blue-50" },
  { icon: Star, title: "New 5-star review", description: "Baghdad Electronics rated LED Panel Light 5/5", time: "32 min ago", color: "text-yellow-500 border-yellow-200 bg-yellow-50" },
  { icon: MessageSquare, title: "New message", description: "Basra Imports asked about bulk pricing for Steel Bars", time: "1 hour ago", color: "text-purple-500 border-purple-200 bg-purple-50" },
  { icon: Package, title: "Order shipped", description: "ORD-4519 dispatched via JayakHub to Basra", time: "2 hours ago", color: "text-green-500 border-green-200 bg-green-50" },
  { icon: TrendingUp, title: "Revenue milestone", description: "Monthly revenue exceeded IQD 2.5M", time: "3 hours ago", color: "text-emerald-500 border-emerald-200 bg-emerald-50" },
  { icon: Users, title: "New follower", description: "Kurdish Imports started following your store", time: "5 hours ago", color: "text-indigo-500 border-indigo-200 bg-indigo-50" },
];
