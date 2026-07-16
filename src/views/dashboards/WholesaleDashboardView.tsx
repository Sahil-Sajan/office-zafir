"use client";

import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable, Column, StatusBadge } from "@/components/dashboard/DataTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { PageHeader } from "@/components/dashboard/PageHeader";
import {
  wholesaleKpis,
  wholesaleSpendingTrend,
  wholesaleOrdersByStatus,
  wholesaleActiveShipments,
  wholesaleRecentOrders,
  wholesalePendingRfqs,
  wholesaleRecentActivity,
} from "@/data/mock/wholesale-mock";
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
import { Badge } from "@/components/ui/badge";
import { Download, Filter } from "lucide-react";

interface WholesaleDashboardViewProps {
  lang: string;
}

export function WholesaleDashboardView({ lang }: WholesaleDashboardViewProps) {
  const shipmentColumns: Column<Record<string, unknown>>[] = [
    { key: "id", label: "Shipment", render: (_, row) => <span className="font-medium">{String(row.id)}</span> },
    { key: "origin", label: "Origin" },
    { key: "destination", label: "Destination" },
    { key: "carrier", label: "Carrier" },
    { key: "progress", label: "Progress", className: "text-center" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={String(val)} /> },
    { key: "eta", label: "ETA", className: "text-muted-foreground" },
  ];

  const orderColumns: Column<Record<string, unknown>>[] = [
    { key: "id", label: "Order", render: (_, row) => <span className="font-medium">{String(row.id)}</span> },
    { key: "supplier", label: "Supplier" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={String(val)} /> },
    { key: "date", label: "Date", className: "text-muted-foreground" },
  ];

  const rfqColumns: Column<Record<string, unknown>>[] = [
    { key: "id", label: "RFQ", render: (_, row) => <span className="font-medium">{String(row.id)}</span> },
    { key: "supplier", label: "Supplier" },
    { key: "product", label: "Product" },
    { key: "quantity", label: "Qty" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={String(val)} /> },
    { key: "deadline", label: "Deadline", className: "text-muted-foreground" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Wholesale Dashboard"
        subtitle="Track your orders, shipments, and RFQs across all suppliers."
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
        {wholesaleKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ChartCard
          title="Spending Trend"
          subtitle="Monthly spend in USD"
          className="lg:col-span-2"
        >
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wholesaleSpendingTrend}>
                <defs>
                  <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#17362A" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#17362A" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5DED2" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#5B6961" }} />
                <YAxis tick={{ fontSize: 12, fill: "#5B6961" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#FFF", border: "1px solid #E5DED2", borderRadius: "8px", fontSize: "12px" }}
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, "Spent"]}
                />
                <Area type="monotone" dataKey="spent" stroke="#17362A" strokeWidth={2} fill="url(#spendGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Orders by Status" subtitle="Current breakdown">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wholesaleOrdersByStatus}
                  cx="50%"
                  cy="45%"
                  innerRadius={55}
                  outerRadius={90}
                  dataKey="count"
                  nameKey="status"
                  paddingAngle={3}
                >
                  {wholesaleOrdersByStatus.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#FFF", border: "1px solid #E5DED2", borderRadius: "8px", fontSize: "12px" }}
                />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "10px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Active Shipments */}
      <ChartCard
        title="Active Shipments"
        subtitle="Track your containers and deliveries"
        actions={<Badge variant="secondary" className="bg-primary/10 text-primary">{wholesaleActiveShipments.length} active</Badge>}
      >
        <DataTable columns={shipmentColumns} data={wholesaleActiveShipments as unknown as Record<string, unknown>[]} />
      </ChartCard>

      {/* Tables Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Recent Orders" subtitle="Latest purchase orders">
          <DataTable columns={orderColumns} data={wholesaleRecentOrders as unknown as Record<string, unknown>[]} />
        </ChartCard>

        <ChartCard
          title="Pending RFQs"
          subtitle="Awaiting supplier response"
          actions={<Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{wholesalePendingRfqs.filter(r => r.status === "Awaiting Quote").length} pending</Badge>}
        >
          <DataTable columns={rfqColumns} data={wholesalePendingRfqs as unknown as Record<string, unknown>[]} />
        </ChartCard>
      </div>

      {/* Activity Feed */}
      <ChartCard title="Recent Activity" subtitle="Latest updates and notifications">
        <ActivityFeed items={wholesaleRecentActivity} />
      </ChartCard>
    </div>
  );
}
