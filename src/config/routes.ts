export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  sellerDashboard: "/dashboard/seller",
  supplierDashboard: "/dashboard/supplier",
  wholesaleDashboard: "/dashboard/wholesale",
} as const;

export const DASHBOARD_ROLES = {
  seller: "seller",
  supplier: "supplier",
  wholesale: "wholesale",
} as const;

export type DashboardRole = keyof typeof DASHBOARD_ROLES;

export const DASHBOARD_NAV_ITEMS: Record<DashboardRole, { label: string; href: string; icon: string }[]> = {
  seller: [
    { label: "Overview", href: "/dashboard/seller", icon: "LayoutDashboard" },
    { label: "Orders", href: "/dashboard/seller/orders", icon: "ShoppingBag" },
    { label: "Products", href: "/dashboard/seller/products", icon: "Package" },
    { label: "Messages", href: "/dashboard/seller/messages", icon: "MessageSquare" },
    { label: "Reviews", href: "/dashboard/seller/reviews", icon: "Star" },
    { label: "Promotions", href: "/dashboard/seller/promotions", icon: "Megaphone" },
    { label: "Payouts", href: "/dashboard/seller/payouts", icon: "Wallet" },
    { label: "Settings", href: "/dashboard/seller/settings", icon: "Settings" },
  ],
  supplier: [
    { label: "Overview", href: "/dashboard/supplier", icon: "LayoutDashboard" },
    { label: "RFQ Management", href: "/dashboard/supplier/rfqs", icon: "FileText" },
    { label: "Products", href: "/dashboard/supplier/products", icon: "Package" },
    { label: "Orders", href: "/dashboard/supplier/orders", icon: "ShoppingBag" },
    { label: "Messages", href: "/dashboard/supplier/messages", icon: "MessageSquare" },
    { label: "Analytics", href: "/dashboard/supplier/analytics", icon: "BarChart3" },
    { label: "Financial Reports", href: "/dashboard/supplier/financials", icon: "DollarSign" },
    { label: "Storefront", href: "/dashboard/supplier/storefront", icon: "Store" },
  ],
  wholesale: [
    { label: "Overview", href: "/dashboard/wholesale", icon: "LayoutDashboard" },
    { label: "My Orders", href: "/dashboard/wholesale/orders", icon: "ShoppingBag" },
    { label: "RFQ Tracker", href: "/dashboard/wholesale/rfqs", icon: "FileText" },
    { label: "Documents", href: "/dashboard/wholesale/documents", icon: "FolderOpen" },
    { label: "Messages", href: "/dashboard/wholesale/messages", icon: "MessageSquare" },
    { label: "Saved Items", href: "/dashboard/wholesale/saved", icon: "Heart" },
    { label: "Reorder", href: "/dashboard/wholesale/reorder", icon: "RotateCcw" },
    { label: "Profile", href: "/dashboard/wholesale/profile", icon: "User" },
  ],
};

export const publicRoutes = [
  ROUTES.login,
  ROUTES.signup,
  ROUTES.home,
];

export const authRoutes = [
  ROUTES.login,
  ROUTES.signup,
];

export const protectedRoutes = [
  ROUTES.dashboard,
  ROUTES.sellerDashboard,
  ROUTES.supplierDashboard,
  ROUTES.wholesaleDashboard,
];
