"use client";

import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable, Column, StatusBadge } from "@/components/dashboard/DataTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { PageHeader } from "@/components/dashboard/PageHeader";
import {
  supplierKpis,
  supplierRevenueTrend,
  supplierRevenueByCategory,
  supplierConversionFunnel,
  supplierIncomingRfqs,
  supplierActiveOrders,
  supplierRecentActivity,
} from "@/data/mock/supplier-mock";
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
  BarChart,
  Bar,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Filter } from "lucide-react";

interface SupplierDashboardViewProps {
  lang: string;
}

export function SupplierDashboardView({ lang }: SupplierDashboardViewProps) {
  const rfqColumns: Column<Record<string, unknown>>[] = [
    { key: "id", label: "RFQ", render: (_, row) => <span className="font-medium">{String(row.id)}</span> },
    { key: "buyer", label: "Buyer" },
    { key: "product", label: "Product" },
    { key: "value", label: "Value" },
    { key: "deadline", label: "Deadline", className: "text-muted-foreground" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={String(val)} /> },
  ];

  const orderColumns: Column<Record<string, unknown>>[] = [
    { key: "id", label: "Order", render: (_, row) => <span className="font-medium">{String(row.id)}</span> },
    { key: "buyer", label: "Buyer" },
    { key: "value", label: "Value" },
    { key: "progress", label: "Progress", className: "text-center" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={String(val)} /> },
    { key: "eta", label: "ETA", className: "text-muted-foreground" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Supplier Dashboard"
        subtitle="Manage your RFQs, orders, and buyer relationships — all from one place."
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
        {supplierKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ChartCard
          title="Revenue Trend"
          subtitle="Monthly revenue in USD"
          className="lg:col-span-2"
        >
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={supplierRevenueTrend}>
                <defs>
                  <linearGradient id="supplierRevGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#17362A" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#17362A" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5DED2" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#5B6961" }} />
                <YAxis tick={{ fontSize: 12, fill: "#5B6961" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#FFF", border: "1px solid #E5DED2", borderRadius: "8px", fontSize: "12px" }}
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
                />
                <Area type="monotone" dataKey="revenue" stroke="#17362A" strokeWidth={2} fill="url(#supplierRevGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Revenue by Category" subtitle="Product breakdown">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={supplierRevenueByCategory}
                  cx="50%"
                  cy="45%"
                  innerRadius={55}
                  outerRadius={90}
                  dataKey="value"
                  nameKey="category"
                  paddingAngle={3}
                >
                  {supplierRevenueByCategory.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#FFF", border: "1px solid #E5DED2", borderRadius: "8px", fontSize: "12px" }}
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
                />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "10px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Conversion Funnel */}
      <ChartCard title="RFQ Conversion Funnel" subtitle="From inquiry to completed order">
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={supplierConversionFunnel} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5DED2" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 12, fill: "#5B6961" }} />
              <YAxis type="category" dataKey="stage" tick={{ fontSize: 11, fill: "#5B6961" }} width={120} />
              <Tooltip
                contentStyle={{ backgroundColor: "#FFF", border: "1px solid #E5DED2", borderRadius: "8px", fontSize: "12px" }}
              />
              <Bar dataKey="count" fill="#17362A" radius={[0, 4, 4, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* Tables Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard
          title="Incoming RFQs"
          subtitle="Buyer inquiries awaiting response"
          actions={<Badge variant="secondary" className="bg-red-accent/10 text-red-accent">{supplierIncomingRfqs.filter(r => r.status === "New").length} new</Badge>}
        >
          <DataTable columns={rfqColumns} data={supplierIncomingRfqs as unknown as Record<string, unknown>[]} />
        </ChartCard>

        <ChartCard title="Active Orders" subtitle="Orders in progress">
          <DataTable columns={orderColumns} data={supplierActiveOrders as unknown as Record<string, unknown>[]} />
        </ChartCard>
      </div>

      {/* Activity Feed */}
      <ChartCard title="Recent Activity" subtitle="Latest updates and notifications">
        <ActivityFeed items={supplierRecentActivity} />
      </ChartCard>
    </div>
  );
}
