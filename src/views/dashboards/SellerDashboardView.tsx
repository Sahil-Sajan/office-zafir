"use client";

import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable, Column, StatusBadge } from "@/components/dashboard/DataTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { PageHeader } from "@/components/dashboard/PageHeader";
import {
  sellerKpis,
  sellerRevenueTrend,
  sellerOrdersByStatus,
  sellerRecentOrders,
  sellerTopProducts,
  sellerRecentActivity,
} from "@/data/mock/seller-mock";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

interface SellerDashboardViewProps {
  lang: string;
}

export function SellerDashboardView({ lang }: SellerDashboardViewProps) {
  const orderColumns: Column<Record<string, unknown>>[] = [
    { key: "id", label: "Order", render: (_, row) => <span className="font-medium">{String(row.id)}</span> },
    { key: "buyer", label: "Buyer" },
    { key: "items", label: "Items", className: "text-center" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={String(val)} /> },
    { key: "date", label: "Date", className: "text-muted-foreground" },
  ];

  const productColumns: Column<Record<string, unknown>>[] = [
    { key: "name", label: "Product", render: (_, row) => <span className="font-medium">{String(row.name)}</span> },
    { key: "sold", label: "Sold", className: "text-center" },
    { key: "revenue", label: "Revenue" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Seller Command Center"
        subtitle="Your marketplace at a glance — real-time overview of orders, revenue, and performance."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        }
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sellerKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ChartCard
          title="Revenue Trend"
          subtitle="Monthly revenue in IQD"
          className="lg:col-span-2"
        >
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sellerRevenueTrend}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#17362A" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#17362A" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5DED2" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#5B6961" }} />
                <YAxis
                  tick={{ fontSize: 12, fill: "#5B6961" }}
                  tickFormatter={(val) => `${(val / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5DED2",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value) => [`IQD ${Number(value).toLocaleString()}`, "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#17362A"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Orders by Status" subtitle="Current distribution">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sellerOrdersByStatus}
                  cx="50%"
                  cy="45%"
                  innerRadius={55}
                  outerRadius={90}
                  dataKey="count"
                  nameKey="status"
                  paddingAngle={3}
                >
                  {sellerOrdersByStatus.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5DED2",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "11px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Tables + Activity Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Recent Orders" subtitle="Latest 5 orders">
          <DataTable columns={orderColumns} data={sellerRecentOrders as unknown as Record<string, unknown>[]} />
        </ChartCard>

        <ChartCard title="Top Products" subtitle="Best sellers this month">
          <DataTable columns={productColumns} data={sellerTopProducts as unknown as Record<string, unknown>[]} />
        </ChartCard>
      </div>

      {/* Activity Feed */}
      <ChartCard title="Recent Activity" subtitle="Latest updates and notifications">
        <ActivityFeed items={sellerRecentActivity} />
      </ChartCard>
    </div>
  );
}
