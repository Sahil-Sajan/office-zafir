"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  label: string;
  className?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  onRowClick,
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  return (
    <div className="rounded-lg border border-border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            {columns.map((col) => (
              <TableHead key={col.key} className={cn("text-xs font-semibold uppercase tracking-wider text-muted-foreground", col.className)}>
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, i) => (
              <TableRow
                key={i}
                onClick={() => onRowClick?.(row)}
                className={cn(onRowClick && "cursor-pointer hover:bg-muted/30 transition-colors")}
              >
                {columns.map((col) => (
                  <TableCell key={col.key} className={cn("py-3 text-sm", col.className)}>
                    {col.render ? col.render(row[col.key as keyof T] as T[keyof T], row) : String(row[col.key as keyof T] ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-indigo-100 text-indigo-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
    active: "bg-green-100 text-green-800",
    completed: "bg-green-100 text-green-800",
    "in progress": "bg-blue-100 text-blue-800",
    "in production": "bg-orange-100 text-orange-800",
    new: "bg-purple-100 text-purple-800",
  };

  return (
    <Badge
      variant="secondary"
      className={cn(
        "text-[11px] font-medium capitalize px-2 py-0.5",
        variants[status.toLowerCase()] || "bg-gray-100 text-gray-800"
      )}
    >
      {status}
    </Badge>
  );
}
