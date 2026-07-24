import type { IconType } from "react-icons";
import {
  FiHome,
  FiInfo,
  FiGrid,
  FiPackage,
  FiMapPin,
  FiImage,
  FiMail,
  FiPhone,
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
    icon: FiGrid,
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
    id: "enquiries",
    label: "Enquiries",
    path: "/admin/enquiries",
    icon: FiMail,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/admin/contact",
    icon: FiPhone,
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