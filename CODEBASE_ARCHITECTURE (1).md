# 🏗️ Sentinel Frontend - Complete Codebase Architecture

## 📑 Table of Contents

1. [Visual Architecture Diagram](#visual-architecture-diagram)
2. [Layer Explanation](#layer-explanation)
3. [Data Flow Examples](#data-flow-examples)
4. [Authentication Flow](#authentication-flow)
5. [Features & Components Mapping](#features--components-mapping)
6. [Tech Stack](#tech-stack)
7. [Directory Structure](#directory-structure)
8. [Quick Reference](#quick-reference)

---

## Visual Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PRESENTATION LAYER                                   │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ App Router (Next.js 16)                                              │  │
│  │ └─ Root Layout (layout.tsx)                                          │  │
│  │    └─ Language Layout [en/fr/ar] (i18n)                            │  │
│  │       ├─ Auth Routes: login, register, forgot-password              │  │
│  │       ├─ Dashboard: /dashboard, /childrens, /alerts                 │  │
│  │       ├─ Profile: /profile                                          │  │
│  │       ├─ Children: /add-children, /childrens                        │  │
│  │       ├─ Co-Parent: /co-parent                                      │  │
│  │       └─ Subscription: /plans, /subscription                        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         COMPONENT LAYER                                      │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Reusable UI Components (Radix + Tailwind)                            │  │
│  │                                                                      │  │
│  │ ├─ UI Components: Buttons, Forms, Dialogs, Cards                   │  │
│  │ ├─ Auth Components: Navigation, Stepper, Header                     │  │
│  │ ├─ Children Components: Cards, Forms, Profiles, Action Bars        │  │
│  │ ├─ Device Components: Device Details, Tracking, Status Cards       │  │
│  │ ├─ Location Components: Maps, Tracking, Logs                        │  │
│  │ ├─ Alert Components: Alert Cards, Search                           │  │
│  │ ├─ Web Filter Components: Filter settings UI                        │  │
│  │ ├─ Table Components: Data tables                                    │  │
│  │ ├─ Form Components: Reusable form fields                            │  │
│  │ └─ Dialog Components: Modal dialogs                                 │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  Props ▲                                                                    │
│        └────────────────────────────────────────────────────────────┐      │
└─────────────────────────────────────────────────────────────────────┼──────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┼──────┐
│                         VIEWS LAYER                                  │      │
│  ┌──────────────────────────────────────────────────────────────┐   │      │
│  │ Smart/Container Components (Business Logic)                 │   │      │
│  │                                                              │   │      │
│  │ ├─ Auth Views: Login, Register, Forgot Password            │   │      │
│  │ ├─ Dashboard Views: Main dashboard logic                    │   │      │
│  │ ├─ Children Views: Children management & CRUD               │   │      │
│  │ ├─ Alerts Views: Alert display & handling                   │   │      │
│  │ ├─ Co-Parent Views: Co-parent management                    │   │      │
│  │ ├─ Profile Views: User profile management                   │   │      │
│  │ ├─ Location Views: Location tracking logic                  │   │      │
│  │ ├─ Device Views: Device management logic                    │   │      │
│  │ └─ Subscription Views: Billing & plans                      │   │      │
│  └──────────────────────────────────────────────────────────────┘   │      │
│                                                                       │      │
│  Responsibilities:                                                   │      │
│  • Fetch data via Server Actions                                   │      │
│  • Manage UI state (useState, useReducer)                          │      │
│  • Pass data to Components via props                               │      │
│  • Handle complex business logic                                   │      │
└───────────────────────────────────────────────────────────────────┼───────┘
              │                                                       │
              ▼                                                       ▼
    ┌─────────────────────┐                            ┌──────────────────────┐
    │ STATE MANAGEMENT    │                            │ HOOKS & UTILITIES    │
    ├─────────────────────┤                            ├──────────────────────┤
    │ React Context       │                            │ Custom Hooks:        │
    │ ├─ UserContext      │                            │ • use-debounce       │
    │ ├─ SubscriptionCtx  │                            │ • use-mobile         │
    │ └─ SocketContext    │                            │ • use-server-action  │
    │                     │                            │ • useDebouncedQuery  │
    │ useUser()           │                            │                      │
    │ useSubscription()   │                            │ Config:              │
    │ useSocket()         │                            │ • i18n.ts            │
    └─────────────────────┘                            │ • routes.ts          │
                                                       │ • navigation.ts      │
                                                       └──────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                                           │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Server Actions (Next.js "use server")                                │  │
│  │                                                                      │  │
│  │ ├─ auth.ts: login, register, logout, verify email, verify OTP      │  │
│  │ ├─ children.ts: add, edit, delete children (CRUD)                  │  │
│  │ ├─ profile.ts: update user profile, settings                        │  │
│  │ ├─ co-parent.ts: invite, manage co-parents                          │  │
│  │ ├─ geo-fencing.ts: create & manage geofence rules                   │  │
│  │ ├─ web-filtering.ts: configure web filter settings                  │  │
│  │ ├─ packages-and-subcriptions.ts: manage subscriptions & billing     │  │
│  │ └─ server.ts: generic API call handler                              │  │
│  │                                                                      │  │
│  │ Responsibilities:                                                   │  │
│  │ • Validate data server-side                                         │  │
│  │ • Handle authentication & tokens                                    │  │
│  │ • Make secure API calls via axios                                   │  │
│  │ • Interact with backend                                             │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES & APIs                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ REST API (via axios)                                                 │  │
│  │ ├─ Configured axios instance (src/lib/axios.ts)                    │  │
│  │ ├─ Auth headers & token management                                  │  │
│  │ ├─ Request/response interceptors                                    │  │
│  │ ├─ Error handling                                                   │  │
│  │ └─ Base URL: api.sentinelkids.com                                   │  │
│  │                                                                      │  │
│  │ WebSocket (Socket.IO)                                               │  │
│  │ ├─ Real-time notifications                                          │  │
│  │ ├─ Live location updates                                            │  │
│  │ ├─ Device status changes                                            │  │
│  │ └─ Connected via socket-context                                     │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Layer Explanation

### 1️⃣ **APP LAYER** - Routing & Layouts

#### Location: `src/app/`

```
src/app/
├── layout.tsx                    # Root layout with ToastProvider
├── globals.css                   # Global Tailwind styles
├── [lang]/                       # Dynamic language routing
│   ├── layout.tsx                # Language-specific layout
│   ├── (blank-layout-pages)/     # Routes without sidebars
│   ├── (dashboard)/              # Protected routes group
│   ├── [...not-found]/           # Custom 404 page
│   ├── @modal/                   # Modal parallel route
│   ├── auth/                     # Auth routes
│   ├── modal/                    # Modal components
│   └── welcome/                  # Welcome/onboarding
```

#### Key Files & Their Purpose:

| File                     | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| `layout.tsx`             | Wraps entire app with ToastProvider       |
| `globals.css`            | Base styles, Tailwind @layer directives   |
| `[lang]/layout.tsx`      | Provides language context to child routes |
| `(dashboard)/layout.tsx` | Dashboard layout with sidebar             |
| `(blank-layout-pages)/`  | Landing pages without navigation          |

#### How it Works:

- **Route Groups** `(dashboard)` and `(blank-layout-pages)` allow different layouts for different routes
- **Dynamic Route** `[lang]` enables i18n routing (URLs like `/en/dashboard`, `/fr/dashboard`)
- **Parallel Routes** `@modal` allows modals to render alongside page content

---

### 2️⃣ **COMPONENT LAYER** - Reusable UI Building Blocks

#### Location: `src/components/`

```
src/components/
├── ui/                           # Core Radix UI components
│   ├── button.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── dialog.tsx
│   ├── popover.tsx
│   ├── tabs.tsx
│   └── ... (other base components)
│
├── auth/                         # Authentication specific
│   ├── OnboardingNavigation.tsx   # Stepper navigation
│   ├── OnboardingStepper.tsx      # Multi-step form stepper
│   └── OnBoradingHeader.tsx       # Onboarding header
│
├── children/                     # Children management
│   ├── ChildCard.tsx             # Child profile card display
│   ├── ChildAvatar.tsx           # Child avatar component
│   ├── AddChildButton.tsx        # Add child CTA button
│   ├── AddChildCard.tsx          # Add child card UI
│   ├── AddEditFormDialog.tsx      # Child form dialog
│   ├── ChildProfileHeader.tsx    # Profile header section
│   ├── ChildrenActionBar.tsx     # Action bar (edit, delete)
│   ├── ChildrenDeviceDetail.tsx  # Device list for child
│   ├── ChildrenStatusCard.tsx    # Status display card
│   ├── DeviceDetailItem.tsx      # Single device item
│   ├── LocationLogs.tsx          # Location history list
│   ├── ScreenTimeCard.tsx        # Screen time stats
│   ├── TrackLocation.tsx         # Location tracking UI
│   ├── ViewLogDialogBox.tsx      # View logs modal
│   └── childProfile.tsx          # Full child profile
│
├── location/                     # Location tracking
│   ├── Map component with Google Maps integration
│   ├── Location history display
│   └── Geofence boundaries
│
├── Devices/                      # Device management
│   ├── Device list
│   ├── Device status
│   └── Device detail view
│
├── Alerts/                       # Alert system
│   ├── AlertCard.tsx             # Individual alert card
│   └── Alerts.Search.tsx         # Alert search & filter
│
├── tables/                       # Data table components
│   ├── Generic table component
│   └── Table utilities
│
├── forms/                        # Reusable form parts
│   ├── Field wrapper
│   ├── Error display
│   └── Form utilities
│
├── DialogBoxes/                  # Modal dialogs
│   ├── Confirmation dialogs
│   ├── Input modals
│   └── Action dialogs
│
├── common/                       # Shared components
│   ├── ToastProvider.tsx         # Toast notifications provider
│   ├── Navigation.tsx            # Main navigation
│   ├── Header.tsx                # Page header
│   └── Sidebar.tsx               # Sidebar navigation
│
├── chat/                         # Chat/support
│   └── AIchatSupport.tsx         # AI support chat
│
├── co-parent/                    # Co-parent features
│   ├── AddCoparentCard.tsx       # Add co-parent UI
│   └── ... (other co-parent UI)
│
├── dashboard/                    # Dashboard specific
│   ├── Dashboard widgets
│   └── Dashboard layout
│
├── Family/                       # Family features
│   ├── Family tree display
│   └── Family management
│
├── Front-Pages/                  # Landing pages
│   ├── Hero section
│   └── Feature showcase
│
├── navigation/                   # Navigation components
│   ├── Menu
│   ├── Breadcrumbs
│   └── Tabs
│
├── onboarding/                   # Onboarding flow
│   ├── Step components
│   └── Progress tracker
│
├── Packages&Subcriptions/        # Subscription UI
│   ├── Plan cards
│   ├── Pricing display
│   └── Upgrade/downgrade
│
├── profile/                      # User profile
│   ├── Profile form
│   ├── Settings
│   └── Account management
│
├── web-filtering/                # Web filter UI (old)
│   └── ... (deprecated, use WebFiltering)
│
├── WebFiltering/                 # Web filter UI (new)
│   ├── Filter rules
│   ├── Whitelist/blacklist
│   └── Settings
│
└── welcome/                      # Welcome section
    └── Welcome page UI
```

#### Component Characteristics:

- **Presentational**: No business logic, only UI rendering
- **Reusable**: Used across multiple views
- **Props-driven**: All data passed via props
- **Callbacks**: Handle user interactions with callbacks (onClick, onChange, etc.)
- **Styling**: Tailwind CSS + Radix UI design system

#### Example Component Structure:

```tsx
// src/components/children/ChildCard.tsx
interface ChildCardProps {
  child: IChild;
  onEdit: (child: IChild) => void;
  onDelete: (childId: string) => void;
}

export const ChildCard: React.FC<ChildCardProps> = ({
  child,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={child.avatar} alt={child.name} />
      <h3>{child.name}</h3>
      <button onClick={() => onEdit(child)}>Edit</button>
      <button onClick={() => onDelete(child.id)}>Delete</button>
    </div>
  );
};
```

---

### 3️⃣ **VIEWS LAYER** - Smart/Container Components

#### Location: `src/views/`

```
src/views/
├── auth/                         # Authentication views
│   ├── LoginView.tsx             # Login page logic
│   ├── RegisterView.tsx          # Registration logic
│   ├── ForgotPasswordView.tsx   # Password reset flow
│   └── VerifyEmailView.tsx      # Email verification
│
├── dashboard/                    # Dashboard logic
│   ├── DashboardView.tsx         # Main dashboard data
│   ├── StatsSummary.tsx          # Dashboard stats
│   └── RecentActivity.tsx        # Activity feed
│
├── children/                     # Children management logic
│   ├── ChildrenListView.tsx      # List all children
│   ├── ChildDetailView.tsx       # Single child detail
│   ├── AddChildView.tsx          # Add child form logic
│   ├── EditChildView.tsx         # Edit child logic
│   └── ChildrenManagementView.tsx # Full management page
│
├── alerts/                       # Alert management
│   ├── AlertsListView.tsx        # List all alerts
│   ├── AlertDetailView.tsx       # Alert detail logic
│   └── AlertsFilterView.tsx      # Filtered alerts
│
├── location/                     # Location tracking
│   ├── LocationMapView.tsx       # Map display logic
│   ├── LocationHistoryView.tsx   # History list logic
│   └── GeofenceView.tsx          # Geofence management
│
├── Devices/                      # Device management
│   ├── DeviceListView.tsx        # List devices
│   ├── DeviceDetailView.tsx      # Device details
│   └── DeviceStatusView.tsx      # Device status
│
├── co-parent/                    # Co-parent features
│   ├── CoparentListView.tsx      # List co-parents
│   ├── AddCoparentView.tsx       # Add co-parent logic
│   └── CoparentManagementView.tsx # Manage co-parents
│
├── profile/                      # User profile
│   ├── ProfileEditView.tsx       # Edit profile logic
│   ├── SettingsView.tsx          # Settings page
│   └── AccountView.tsx           # Account management
│
├── Packages&Subcriptions/        # Subscription management
│   ├── PlansView.tsx             # Browse plans
│   ├── SubscriptionView.tsx      # Current subscription
│   ├── CheckoutView.tsx          # Checkout logic
│   └── BillingView.tsx           # Billing history
│
├── web-filtering/                # Web filtering
│   ├── WebFilterView.tsx         # Filter management
│   ├── FilterRulesView.tsx       # Create/edit rules
│   └── BlacklistView.tsx         # Blacklist management
│
├── front-pages/                  # Public pages
│   ├── LandingView.tsx           # Landing page
│   ├── AboutView.tsx             # About page
│   └── ContactView.tsx           # Contact form
│
└── onboarding/                   # Onboarding flow
    ├── OnboardingView.tsx        # Main onboarding
    ├── ProfileSetupView.tsx      # Profile setup step
    ├── AddChildrenView.tsx       # Add children step
    └── ProtectionPlanView.tsx    # Choose plan step
```

#### View Responsibilities:

1. **Data Fetching**: Call server actions to get data
2. **State Management**: Manage local UI state (loading, errors, filters)
3. **Business Logic**: Handle complex workflows
4. **Composition**: Combine multiple components
5. **Event Handling**: Connect components to server actions

#### Example View Structure:

```tsx
// src/views/children/ChildrenListView.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/context/user-context";
import { getChildren } from "@/server-actions/children";
import { ChildCard } from "@/components/children/ChildCard";
import { AddChildButton } from "@/components/children/AddChildButton";

export const ChildrenListView = () => {
  const { user } = useUser();
  const [children, setChildren] = useState<IChild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await getChildren(user?.id);
        setChildren(response.data);
      } catch (error) {
        console.error("Failed to fetch children", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchChildren();
    }
  }, [user?.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <AddChildButton onSuccess={() => refetch()} />
      <div className="grid gap-4">
        {children.map((child) => (
          <ChildCard
            key={child.id}
            child={child}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
```

---

### 4️⃣ **STATE MANAGEMENT** - React Context

#### Location: `src/context/`

#### User Context

```tsx
// src/context/user-context.tsx
interface IUser {
  id: string;
  email: string;
  name: string;
  role: "parent" | "guardian";
  avatar?: string;
}

interface UserContextType {
  user: IUser | null;
}

const UserContext = createContext<UserContextType>({ user: null });

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children, user }: UserProviderProps) => (
  <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
);
```

**Usage**: Access authenticated user throughout app

```tsx
const { user } = useUser();
if (!user) return <Redirect to="/login" />;
```

---

#### Subscription Context

```tsx
// src/context/subscription-context.tsx
interface Subscription {
  id: string;
  planId: string;
  status: "active" | "cancelled" | "expired";
  renewalDate: Date;
  children: number; // Number of child licenses
}

export const useSubscription = () => useContext(SubscriptionContext);
```

**Usage**: Check subscription status & limits

```tsx
const { subscription } = useSubscription();
if (subscription.children === MAX_CHILDREN) {
  return <UpgradePrompt />;
}
```

---

#### Socket Context

```tsx
// src/context/socket-context.tsx
interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  emit: (event: string, data: any) => void;
  on: (event: string, callback: Function) => void;
}

export const useSocket = () => useContext(SocketContext);
```

**Usage**: Real-time updates

```tsx
const { on } = useSocket();

useEffect(() => {
  on("child-location-updated", (data) => {
    // Update UI with new location
  });
}, []);
```

---

### 5️⃣ **SERVER ACTIONS** - Backend Integration

#### Location: `src/server-actions/`

Server actions are "use server" functions that run on Node.js backend. They're more secure than exposing API calls to client.

#### `auth.ts` - Authentication Actions

```typescript
// User authentication lifecycle
export async function loginUser(email: string, password: string) {
  // 1. Validate input
  // 2. Call backend API
  // 3. Store JWT token in cookie
  // 4. Return user data
}

export async function registerUser(data: RegisterFormData) {
  // 1. Validate data
  // 2. Create user account
  // 3. Send verification email
  // 4. Return verification status
}

export async function verifyOTP(email: string, otp: string) {
  // 1. Validate OTP with backend
  // 2. Update user verification status
  // 3. Return token
}

export async function logoutUser() {
  // 1. Clear JWT cookie
  // 2. Clear session
}
```

---

#### `children.ts` - Children Management CRUD

```typescript
export async function addChild(data: AddChildFormData) {
  // 1. Validate input schema (Zod)
  // 2. Call POST /children API
  // 3. Return new child data
}

export async function editChild(childId: string, data: EditChildFormData) {
  // 1. Authorize user owns this child
  // 2. Validate data
  // 3. Call PUT /children/:id API
  // 4. Return updated child
}

export async function deleteChild(childId: string) {
  // 1. Authorize deletion
  // 2. Call DELETE /children/:id API
  // 3. Update UserContext
}

export async function getChildren(parentId: string) {
  // 1. Fetch all children for parent
  // 2. Return with status & devices
}
```

---

#### `profile.ts` - User Profile Actions

```typescript
export async function updateProfile(data: ProfileFormData) {
  // 1. Validate changes
  // 2. Call PUT /profile API
  // 3. Update UserContext
  // 4. Return updated profile
}

export async function updateSettings(settings: UserSettings) {
  // 1. Validate settings
  // 2. Call PUT /settings API
  // 3. Return confirmation
}
```

---

#### `co-parent.ts` - Co-parent Management

```typescript
export async function inviteCoparent(email: string) {
  // 1. Validate email
  // 2. Call POST /co-parents/invite API
  // 3. Send invitation email
  // 4. Return invitation status
}

export async function acceptCoparentInvitation(invitationId: string) {
  // 1. Verify invitation validity
  // 2. Link co-parent account
  // 3. Share children access
  // 4. Return success
}
```

---

#### `geo-fencing.ts` - Geofence Management

```typescript
export async function createGeofence(data: GeofenceData) {
  // 1. Validate coordinates
  // 2. Call POST /geofences API
  // 3. Return geofence with ID
}

export async function getGeofences(childId: string) {
  // 1. Fetch all geofences for child
  // 2. Return with alert history
}
```

---

#### `web-filtering.ts` - Web Filter Configuration

```typescript
export async function updateWebFilter(data: FilterConfig) {
  // 1. Validate filter rules
  // 2. Call PUT /web-filter API
  // 3. Push config to child devices
  // 4. Return confirmation
}

export async function addBlockedSite(childId: string, url: string) {
  // 1. Validate URL
  // 2. Add to blacklist
  // 3. Sync to device
}
```

---

#### `packages-and-subcriptions.ts` - Subscription Management

```typescript
export async function getSubscriptionPlans() {
  // 1. Fetch available plans
  // 2. Return with pricing & features
}

export async function upgradePlan(newPlanId: string, paymentData: any) {
  // 1. Process payment
  // 2. Update subscription
  // 3. Update UserContext
  // 4. Return confirmation
}

export async function cancelSubscription() {
  // 1. Validate cancellation
  // 2. Set cancellation date
  // 3. Send cancellation email
  // 4. Return confirmation
}
```

---

#### `server.ts` - Generic API Caller

```typescript
export async function apiCall(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: any,
  options?: RequestOptions,
) {
  // Generic wrapper for all API calls
  // Handles auth headers, error handling, etc.
}
```

---

### 6️⃣ **DATA LAYER** - External Services

#### Axios Instance (`src/lib/axios.ts`)

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Add auth token
api.interceptors.request.use((config) => {
  const token = getAuthToken(); // From cookies
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - Handle auth errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired, refresh it
      await refreshAuthToken();
      // Retry request
    }
    return Promise.reject(error);
  },
);

export default api;
```

---

#### Socket.IO Connection (`src/context/socket-context.tsx`)

```typescript
import { io, Socket } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
  auth: {
    token: getAuthToken(),
  },
});

// Real-time event listeners
socket.on("child-location-updated", (data) => {
  // Update child location on map
});

socket.on("device-status-changed", (data) => {
  // Update device status badge
});

socket.on("alert-triggered", (data) => {
  // Show alert notification
});
```

---

## Data Flow Examples

### Example 1: Adding a Child

```
1. USER ACTION
   └─ User clicks "Add Child" button in ChildrenListView

2. COMPONENT RENDERED
   └─ AddEditFormDialog opens with empty form

3. FORM SUBMISSION
   └─ User fills form & clicks "Save"
   └─ Form validation with Zod schema

4. SERVER ACTION CALL
   └─ View calls: addChild(formData)

5. BACKEND PROCESSING
   └─ Server action validates data
   └─ Calls API: POST /api/children
   └─ Backend creates child record

6. RESPONSE HANDLING
   └─ Server action returns new child data
   └─ View receives response

7. STATE UPDATE
   └─ Add new child to local state
   └─ Optionally update UserContext

8. UI REFRESH
   └─ Component re-renders
   └─ New ChildCard appears in list
   └─ Toast notification: "Child added successfully"

9. REAL-TIME SYNC
   └─ Socket event emitted: "child-added"
   └─ Other tabs/devices get notified
```

---

### Example 2: Viewing Child Location in Real-time

```
1. USER NAVIGATES
   └─ User goes to /childrens/:childId/location

2. VIEW INITIALIZATION
   └─ LocationMapView loads
   └─ Fetches child's current location via getChildLocation()

3. MAP RENDERED
   └─ Google Map displayed with child's marker

4. SOCKET CONNECTION
   └─ View calls useSocket()
   └─ Subscribes to: "location-update-{childId}"

5. REAL-TIME UPDATES
   └─ Child's device sends GPS updates
   └─ Backend emits Socket event to parent

6. UI UPDATE
   └─ LocationMapView receives Socket event
   └─ Map marker animates to new position
   └─ Last update timestamp refreshes

7. HISTORY TRACKING
   └─ LocationLogs component shows recent locations
   └─ Updated in real-time as positions change
```

---

### Example 3: Web Filter Configuration

```
1. NAVIGATE TO SETTINGS
   └─ User goes to /web-filtering

2. VIEW LOADS DATA
   └─ WebFilterView fetches current filter config
   └─ Shows enabled categories, blocked sites, time restrictions

3. USER MODIFIES SETTINGS
   └─ Adds blocked website
   └─ Changes time restriction to 9 PM - 7 AM
   └─ Enables "Adult Content" category block

4. SAVE CHANGES
   └─ User clicks "Apply"
   └─ View calls: updateWebFilter(newConfig)

5. SERVER PROCESSING
   └─ Server action validates config
   └─ Calls API: PUT /api/web-filter
   └─ Backend updates filter rules

6. DEVICE SYNC
   └─ Backend pushes config to all child's devices
   └─ Devices install new rules

7. CONFIRMATION
   └─ API returns "config applied successfully"
   └─ Toast notification shown
   └─ UI updates to show active config

8. ENFORCEMENT
   └─ When child tries to access blocked site
   └─ Device intercepts & blocks request
   └─ Parent sees attempt in Alerts
```

---

### Example 4: Authentication Flow

```
1. USER OPENS APP
   └─ Browser navigates to /
   └─ Middleware redirects to /login (if not authenticated)

2. LOGIN PAGE
   └─ AuthLayout renders LoginView
   └─ Form with email & password

3. USER SUBMITS
   └─ View calls: loginUser(email, password)

4. SERVER PROCESSING
   ├─ Validate credentials with backend
   ├─ Backend returns JWT token & user data
   └─ Server action stores token in httpOnly cookie

5. RESPONSE
   └─ Server action returns user data
   └─ View sets UserContext

6. REDIRECT
   └─ User redirected to /dashboard

7. PROTECTED ROUTES
   └─ Middleware checks for valid token
   └─ If expired, refreshes automatically
   └─ Dashboard accessible with user data

8. SESSION PERSISTENCE
   └─ Token stored in cookie persists across refreshes
   └─ On app reload, token automatically used
   └─ UserContext restored with user data
```

---

## Authentication Flow

### Route Protection Strategy

```
┌─ Request to /dashboard
│
├─ Middleware checks: is user authenticated?
│  ├─ NO: Redirect to /login
│  └─ YES: Proceed to route
│
├─ Root Layout loads (layout.tsx)
│  ├─ Wraps with ToastProvider
│  └─ Wraps with UserProvider
│
├─ [lang] Layout loads ([lang]/layout.tsx)
│  ├─ Sets language context
│  └─ Passes to child routes
│
├─ (dashboard) Layout loads
│  ├─ Renders Sidebar
│  ├─ Renders Navigation
│  └─ Renders page content
│
└─ Dashboard View loads
   ├─ Accesses user via useUser()
   ├─ Fetches dashboard data
   └─ Renders dashboard UI
```

### Route Types

```
PUBLIC ROUTES (No auth required)
├─ /
├─ /login
├─ /register
├─ /forgot-password
├─ /contact
└─ /about

AUTH ROUTES (During auth process)
├─ /verify-email
├─ /verify-otp
├─ /reset-password
└─ /password-updated-successfully

PROTECTED ROUTES (Auth required)
├─ /welcome (onboarding)
├─ /dashboard (main)
├─ /profile (user settings)
├─ /add-children (onboarding)
├─ /protection-plan (onboarding)
├─ /childrens (children list)
├─ /alerts (alert list)
├─ /co-parent (co-parent management)
├─ /plans (subscription plans)
└─ /subscription (current subscription)

ONBOARDING ROUTES (After registration)
├─ /profile-information
├─ /add-children
└─ /protection-plan
```

---

## Features & Components Mapping

### Complete Feature Matrix

| Feature                 | Components                | View           | Server Action                | Context         | Real-time? |
| ----------------------- | ------------------------- | -------------- | ---------------------------- | --------------- | ---------- |
| **User Authentication** | LoginForm, RegisterForm   | auth/          | auth.ts                      | useUser         | ❌         |
| **Profile Management**  | ProfileForm, Settings     | profile/       | profile.ts                   | useUser         | ❌         |
| **Add Children**        | AddChildCard, ChildForm   | children/      | children.ts                  | useUser         | ❌         |
| **View Children**       | ChildCard, ChildList      | children/      | children.ts                  | useUser         | ✅ Socket  |
| **Child Profile**       | ChildProfile, ChildHeader | children/      | children.ts                  | useUser         | ✅ Socket  |
| **Location Tracking**   | TrackLocation, Map        | location/      | server.ts                    | useSocket       | ✅ Socket  |
| **Location History**    | LocationLogs, Timeline    | location/      | server.ts                    | -               | ❌         |
| **Device Management**   | ChildrenDeviceDetail      | Devices/       | server.ts                    | useSocket       | ✅ Socket  |
| **Device Status**       | ChildrenStatusCard        | Devices/       | server.ts                    | useSocket       | ✅ Socket  |
| **Screen Time**         | ScreenTimeCard, Chart     | children/      | server.ts                    | -               | ✅ Socket  |
| **Alert System**        | AlertCard, AlertSearch    | alerts/        | server.ts                    | useSocket       | ✅ Socket  |
| **Geofencing**          | GeofenceMap, Rules        | location/      | geo-fencing.ts               | -               | ❌         |
| **Web Filtering**       | WebFilterSettings         | web-filtering/ | web-filtering.ts             | -               | ❌         |
| **Co-Parents**          | CoparentCard, InviteForm  | co-parent/     | co-parent.ts                 | useUser         | ❌         |
| **Subscriptions**       | PlanCard, Checkout        | Packages/      | packages-and-subcriptions.ts | useSubscription | ❌         |

---

## Tech Stack

### Frontend Framework

- **Next.js 16.1.2**: React framework with App Router, Server Components, Server Actions
- **React 19.2.3**: UI library with latest hooks and features
- **TypeScript**: Type safety and developer experience

### UI & Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component library
  - Avatar, Checkbox, Dialog, Dropdown, Label, Popover
  - Radio Group, Select, Separator, Slider, Switch, Tabs, Tooltip
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library

### Forms & Validation

- **React Hook Form**: Performant form library
- **@hookform/resolvers**: Schema validation bridge
- **Zod**: TypeScript-first schema validation
  - Used for form validation, API response validation, type safety

### State Management

- **React Context API**: Global state (User, Subscription, Socket)
- **React Hooks**: useState, useEffect, useContext, useCallback

### API & Communication

- **Axios**: HTTP client with interceptors for auth
- **Socket.IO**: Real-time bidirectional communication
  - Real-time location updates
  - Live notifications
  - Device status changes

### Data & Features

- **Recharts**: Charts and graphs (Screen Time, Analytics)
- **React Markdown**: Markdown rendering
- **React Phone Number Input**: Phone input validation
- **libphonenumber-js**: Phone number formatting
- **input-otp**: OTP input component

### Internationalization

- **@formatjs/intl-localematcher**: Language negotiation
- **Manual i18n system**: Dictionary-based translation
  - Dictionaries: en.json, fr.json, ar.json
  - Dynamic language routing: /en, /fr, /ar

### Build & Development

- **Next.js Dev Server**: Hot reload development
- **pnpm**: Fast package manager with monorepo support
- **ESLint**: Code linting and quality
- **PostCSS**: CSS transformations

### Integrations

- **Google Maps API**: Location mapping via @react-google-maps/api
- **Dicebear API**: Avatar generation
- **Unsplash**: Image resources
- **Sentinel Backend API**: Custom REST API

### Environment

- **Node.js Runtime**: Server-side JavaScript
- **Browser APIs**: Geolocation, LocalStorage, etc.
- **Server-only Utilities**: For sensitive operations

---

## Directory Structure

### Complete File Structure

```
Sentinel-Frontend/
├── public/                           # Static assets
│   ├── icons/                        # Icon files
│   ├── img/                          # Images (boy.avif)
│   └── video/                        # Videos
│
├── src/
│   ├── app/                          # ⭐ Next.js App Router
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   └── [lang]/                   # Language routes
│   │       ├── layout.tsx
│   │       ├── (blank-layout-pages)/
│   │       ├── (dashboard)/
│   │       ├── [... not-found]/
│   │       ├── @modal/
│   │       ├── auth/
│   │       ├── modal/
│   │       └── welcome/
│   │
│   ├── components/                   # ⭐ Reusable UI Components
│   │   ├── ui/                       # Base components (Radix UI)
│   │   ├── auth/                     # Auth components
│   │   ├── children/                 # Children management UI
│   │   ├── location/                 # Location components
│   │   ├── Devices/                  # Device UI
│   │   ├── Alerts/                   # Alert components
│   │   ├── tables/                   # Table components
│   │   ├── forms/                    # Form components
│   │   ├── DialogBoxes/              # Modal components
│   │   ├── common/                   # Shared components
│   │   ├── chat/                     # Chat component
│   │   ├── co-parent/                # Co-parent UI
│   │   ├── dashboard/                # Dashboard widgets
│   │   ├── Family/                   # Family features
│   │   ├── Front-Pages/              # Landing page components
│   │   ├── navigation/               # Navigation components
│   │   ├── onboarding/               # Onboarding UI
│   │   ├── Packages&Subcriptions/    # Subscription UI
│   │   ├── profile/                  # Profile components
│   │   ├── web-filtering/            # Web filter UI (old)
│   │   ├── WebFiltering/             # Web filter UI (new)
│   │   └── welcome/                  # Welcome component
│   │
│   ├── views/                        # ⭐ Smart Components (Container Logic)
│   │   ├── auth/                     # Auth view
│   │   ├── dashboard/                # Dashboard view
│   │   ├── children/                 # Children views
│   │   ├── alerts/                   # Alerts view
│   │   ├── co-parent/                # Co-parent views
│   │   ├── profile/                  # Profile views
│   │   ├── location/                 # Location views
│   │   ├── Devices/                  # Device views
│   │   ├── Packages&Subcriptions/    # Subscription views
│   │   ├── web-filtering/            # Web filter views
│   │   ├── front-pages/              # Landing page views
│   │   ├── forgot-password/          # Password reset views
│   │   ├── onboarding/               # Onboarding views
│   │   └── App/                      # Root app view
│   │
│   ├── context/                      # ⭐ Global State (Context)
│   │   ├── user-context.tsx          # User/Auth context
│   │   ├── subscription-context.tsx  # Subscription context
│   │   └── socket-context.tsx        # Real-time Socket context
│   │
│   ├── server-actions/               # ⭐ Backend Functions (use server)
│   │   ├── index.ts                  # Barrel export
│   │   ├── auth.ts                   # Auth actions
│   │   ├── children.ts               # Children CRUD
│   │   ├── profile.ts                # Profile updates
│   │   ├── co-parent.ts              # Co-parent management
│   │   ├── geo-fencing.ts            # Geofence rules
│   │   ├── web-filtering.ts          # Web filter config
│   │   ├── packages-and-subcriptions.ts # Subscription management
│   │   └── server.ts                 # Generic API caller
│   │
│   ├── config/                       # ⭐ Configuration
│   │   ├── i18n.ts                   # i18n setup
│   │   ├── routes.ts                 # Route definitions
│   │   └── navigation.ts             # Navigation structure
│   │
│   ├── hooks/                        # ⭐ Custom React Hooks
│   │   ├── use-debounce.ts
│   │   ├── use-debounced-query.ts
│   │   ├── use-mobile.ts
│   │   ├── use-server-action.ts
│   │   └── useDebouncedQueryParam.ts
│   │
│   ├── lib/                          # ⭐ Utilities & Instances
│   │   ├── axios.ts                  # Axios instance (API client)
│   │   └── utils.ts                  # Utility functions
│   │
│   ├── utils/                        # ⭐ Helper Functions
│   │   ├── types.ts                  # TypeScript interfaces
│   │   ├── schema.ts                 # Zod validation schemas
│   │   ├── helper.ts                 # Helper functions
│   │   ├── helpers.ts                # More helpers
│   │   ├── getDictionary.ts          # i18n loader
│   │   ├── handle-response.ts        # API response handler
│   │   ├── header-info.ts            # Header utilities
│   │   ├── cookies.ts                # Cookie management
│   │   ├── images.ts                 # Image utilities
│   │   ├── location-utils.ts         # Location helpers
│   │   ├── tables.ts                 # Table utilities
│   │   └── validate-form.ts          # Form validation
│   │
│   ├── data/                         # ⭐ Static Data
│   │   └── dictionaries/
│   │       ├── en.json               # English translations
│   │       ├── fr.json               # French translations
│   │       └── ar.json               # Arabic translations
│   │
│   └── proxy.ts                      # API proxy configuration
│
├── Configuration Files
│   ├── next.config.ts                # Next.js configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── postcss.config.mjs            # PostCSS configuration
│   ├── eslint.config.mjs             # ESLint configuration
│   ├── components.json               # Component library config
│   └── pnpm-workspace.yaml           # PNPM workspace
│
├── Dependencies
│   ├── package.json                  # Project dependencies
│   ├── pnpm-lock.yaml                # Dependency lock file
│   └── next-env.d.ts                 # Next.js type definitions
│
└── Documentation
    └── README.md                     # Project readme
```

---

## Quick Reference

### 🚀 Quick Start Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

### 🔗 Common URL Patterns

```
http://localhost:3000/en/login              # Login page
http://localhost:3000/en/register           # Register page
http://localhost:3000/en/dashboard          # Main dashboard
http://localhost:3000/en/childrens          # Children list
http://localhost:3000/en/alerts             # Alerts
http://localhost:3000/en/profile            # User profile
http://localhost:3000/en/subscription       # Subscription
```

### 📝 Key Types (from utils/types.ts)

```typescript
interface IUser {
  id: string;
  email: string;
  name: string;
  role: "parent" | "guardian";
  avatar?: string;
}

interface IChild {
  id: string;
  name: string;
  age: number;
  parentId: string;
  devices: IDevice[];
}

interface IDevice {
  id: string;
  childId: string;
  type: "phone" | "tablet" | "laptop";
  status: "online" | "offline";
  lastSeen: Date;
}

interface IAlert {
  id: string;
  childId: string;
  type: "location" | "screen-time" | "web-access";
  message: string;
  severity: "low" | "medium" | "high";
  createdAt: Date;
}
```

### 🎨 Component Import Pattern

```typescript
// ✅ Correct
import { ChildCard } from "@/components/children/ChildCard";
import { useUser } from "@/context/user-context";
import { addChild } from "@/server-actions/children";

// ❌ Avoid
import ChildCard from "../../../components/children/ChildCard";
```

### 🔄 Typical View Component Structure

```typescript
'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/context/user-context';
import { useSocket } from '@/context/socket-context';
import { getChildren } from '@/server-actions/children';
import { ChildCard } from '@/components/children/ChildCard';
import toast from 'react-hot-toast';

export const ChildrenListView = () => {
  const { user } = useUser();
  const { on } = useSocket();
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getChildren(user?.id);
        setChildren(response.data);
      } catch (error) {
        toast.error('Failed to fetch children');
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchData();
    }
  }, [user?.id]);

  // Real-time updates
  useEffect(() => {
    on('child-updated', (updatedChild) => {
      setChildren(prev =>
        prev.map(c => c.id === updatedChild.id ? updatedChild : c)
      );
    });
  }, [on]);

  if (loading) return <Loading />;
  if (!children.length) return <EmptyState />;

  return (
    <div>
      {children.map(child => (
        <ChildCard key={child.id} child={child} />
      ))}
    </div>
  );
};
```

---

## Summary

**Sentinel Frontend** is a production-grade Next.js application with:

✅ **Clear Architecture**: Components → Views → Server Actions → API
✅ **Type Safety**: Full TypeScript with Zod validation
✅ **Global State**: React Context for User, Subscription, Real-time
✅ **Real-time Features**: Socket.IO integration
✅ **Multi-language**: i18n with en/fr/ar
✅ **Protected Routes**: Middleware-based auth
✅ **Modern UI**: Radix UI + Tailwind CSS
✅ **Performance**: Next.js optimizations, code splitting, memoization
✅ **Security**: Server Actions, httpOnly cookies, auth headers
✅ **Developer Experience**: TypeScript, ESLint, proper folder structure

---

**Created on**: May 30, 2026
**Framework**: Next.js 16 + React 19
**Language**: TypeScript
**Styling**: Tailwind CSS + Radix UI
