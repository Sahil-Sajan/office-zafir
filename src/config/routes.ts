export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  children: "/childrens",
  childDetail: (id: string) => `/childrens/${id}`,
  alerts: "/alerts",
  profile: "/profile",
  settings: "/settings",
  coParent: "/co-parent",
  subscription: "/subscription",
  plans: "/plans",
  login: "/auth/login",
  register: "/auth/register",
  forgotPassword: "/auth/forgot-password",
  onboarding: "/welcome",
} as const;

export const publicRoutes = [
  ROUTES.login,
  ROUTES.register,
  ROUTES.forgotPassword,
  ROUTES.home,
];

export const authRoutes = [
  ROUTES.login,
  ROUTES.register,
  ROUTES.forgotPassword,
];

export const protectedRoutes = [
  ROUTES.dashboard,
  ROUTES.children,
  ROUTES.alerts,
  ROUTES.profile,
  ROUTES.settings,
  ROUTES.coParent,
  ROUTES.subscription,
  ROUTES.plans,
  ROUTES.onboarding,
];
