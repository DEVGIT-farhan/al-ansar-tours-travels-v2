export interface NavigationItem {
  label: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Packages",
    path: "/packages",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];