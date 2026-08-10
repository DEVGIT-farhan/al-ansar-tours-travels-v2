export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "Visa Services",
    href: "/visa",
  },
  {
    label: "Hajj",
    href: "/hajj",
  },
  {
    label: "Umrah",
    href: "/umrah",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
