"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { DashboardRole } from "@/config/routes";

interface DashboardUser {
  name: string;
  email: string;
  role: DashboardRole;
  avatar?: string;
}

interface DashboardContextType {
  user: DashboardUser | null;
  activeRole: DashboardRole;
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  switchRole: (role: DashboardRole) => void;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  logout: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const ROLE_ROUTES: Record<DashboardRole, string> = {
  seller: "/dashboard/seller",
  supplier: "/dashboard/supplier",
  wholesale: "/dashboard/wholesale",
};

const MOCK_USERS: Record<DashboardRole, DashboardUser> = {
  seller: {
    name: "Ahmed Al-Rawi",
    email: "ahmed@alrawitrading.iq",
    role: "seller",
    avatar: "/avatars/seller.jpg",
  },
  supplier: {
    name: "Mehmet Yilmaz",
    email: "mehmet@yilmaz-factory.com",
    role: "supplier",
    avatar: "/avatars/supplier.jpg",
  },
  wholesale: {
    name: "Omar Hassan",
    email: "omar@hassan-imports.iq",
    role: "wholesale",
    avatar: "/avatars/wholesale.jpg",
  },
};

function getInitialRole(pathname: string): DashboardRole {
  if (pathname.includes("/dashboard/supplier")) return "supplier";
  if (pathname.includes("/dashboard/wholesale")) return "wholesale";
  return "seller";
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeRole, setActiveRole] = useState<DashboardRole>(() => getInitialRole(pathname));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("zafir360.sidebar.collapsed") === "true";
    }
    return false;
  });

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const role = getInitialRole(pathname);
    setActiveRole(role);
    setMobileSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("zafir360.sidebar.collapsed", String(sidebarCollapsed));
  }, [sidebarCollapsed]);

  const switchRole = (role: DashboardRole) => {
    setActiveRole(role);
    router.push(ROLE_ROUTES[role]);
  };

  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);
  const toggleMobileSidebar = () => setMobileSidebarOpen((prev) => !prev);
  const closeMobileSidebar = () => setMobileSidebarOpen(false);

  const logout = () => {
    localStorage.removeItem("zafir360.sidebar.collapsed");
    router.push("/login");
  };

  const user = MOCK_USERS[activeRole];

  return (
    <DashboardContext.Provider
      value={{
        user,
        activeRole,
        sidebarCollapsed,
        mobileSidebarOpen,
        switchRole,
        toggleSidebar,
        toggleMobileSidebar,
        closeMobileSidebar,
        logout,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
