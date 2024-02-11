import {
  HomeIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  PhoneIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export const Tabs = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Resources", href: "/resourcez" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Conference", href: "/conference" },
  { name: "Contact", href: "/contact" },
];

export const NavigationItems = [
  { section: "Welcome", icon: <HomeIcon /> },
  { section: "Product", icon: <WrenchScrewdriverIcon /> },
  { section: "Project", icon: <ClipboardDocumentListIcon /> },
  { section: "Blogs", icon: <PencilSquareIcon /> },
  { section: "Research", icon: <BeakerIcon /> },
  { section: "Contact", icon: <PhoneIcon /> },
];
