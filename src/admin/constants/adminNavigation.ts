import type { IconType } from "react-icons";
import {
  FiHome,
  FiInfo,
  FiBriefcase,
  FiPackage,
  FiMapPin,
  FiImage,
  FiInbox,
  FiMessageSquare,
  FiHelpCircle,
  FiPhone,
  FiGrid,
  FiList,
  FiMenu,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export interface AdminNavigationItem {
  id: string;
  label: string;
  icon: IconType;
  path?: string;
  action?: "logout";
}

export const adminNavigation: AdminNavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin",
    icon: FiHome,
  },
  {
    id: "homepage",
    label: "Homepage",
    path: "/admin/home",
    icon: FiGrid,
  },
  {
    id: "about",
    label: "About",
    path: "/admin/about",
    icon: FiInfo,
  },
  {
    id: "services",
    label: "Services",
    path: "/admin/services",
    icon: FiBriefcase,
  },
  {
    id: "packages",
    label: "Packages",
    path: "/admin/packages",
    icon: FiPackage,
  },
  {
    id: "destinations",
    label: "Destinations",
    path: "/admin/destinations",
    icon: FiMapPin,
  },
  {
    id: "gallery",
    label: "Gallery",
    path: "/admin/gallery",
    icon: FiImage,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    path: "/admin/testimonials",
    icon: FiMessageSquare,
  },
  {
    id: "enquiries",
    label: "Enquiries",
    path: "/admin/enquiries",
    icon: FiInbox,
  },
  {
    id: "faqs",
    label: "FAQs",
    path: "/admin/faqs",
    icon: FiHelpCircle,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/admin/contact",
    icon: FiPhone,
  },
  {
    id: "footer",
    label: "Footer",
    path: "/admin/footer",
    icon: FiList,
  },
  {
    id: "navigation",
    label: "Navigation",
    path: "/admin/navigation",
    icon: FiMenu,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: FiSettings,
  },
  {
    id: "logout",
    label: "Logout",
    icon: FiLogOut,
    action: "logout",
  },
];
