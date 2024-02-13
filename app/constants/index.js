import {
  HomeIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  PhoneIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import * as str from "./strings.js";

export const Tabs = [
  { name: str.HOME, href: str.HOME_ROUTE },
  { name: str.PRODUCTS, href: str.PRODUCTS_ROUTE },
  { name: str.RESOURCES, href: str.RESOURCES_ROUTE },
  { name: str.ABOUT, href: str.ABOUT_ROUTE },
  { name: str.GALLERY, href: str.GALLERY_ROUTE },
  { name: str.CONFERENCE, href: str.CONFERENCE_ROUTE },
  { name: str.CONTACT, href: str.CONTACT_ROUTE },
];

export const NavigationItems = [
  { section: str.WELCOME_SECTION, icon: <HomeIcon /> },
  { section: str.PRODUCT_SECTION, icon: <WrenchScrewdriverIcon /> },
  { section: str.PROJECT_SECTION, icon: <ClipboardDocumentListIcon /> },
  { section: str.BLOGS_SECTION, icon: <PencilSquareIcon /> },
  { section: str.RESEARCH_SECTION, icon: <BeakerIcon /> },
  { section: str.CONTACT_SECTION, icon: <PhoneIcon /> },
];

export const ProductDetails = [
  {
    // {a1...c2} are additional unique keys to bypass <li> warning 
    title: str.BIO_TECH_TITLE,
    firstData: [str.BIO_TECH_FIRST_DATA, "a1"], 
    secondData: [str.BIO_TECH_SECOND_DATA,"a2"],
  },
  {
    title: str.ENV_PROTECTION_TITLE,
    firstData: [str.ENV_PROTECTION_FIRST_DATA, "b1"],
    secondData: [str.ENV_PROTECTION_SECOND_DATA, "b2"],
  },
  {
    title: str.AGRI_FOOD_TITLE,
    firstData: [str.AGRI_FOOD_FIRST_DATA,  "c1"],
    secondData: [str.AGRI_FOOD_SECOND_DATA,  "c2"],
  },
];

export const SocialIcons = [
  {
    src: str.FB_SRC,
    alt: str.FB_ALT,
    href: str.FB_HREF,
  },
  {
    src: str.IG_SRC,
    alt: str.IG_ALT,
    href: str.IG_HREF,
  },
  {
    src: str.LN_SRC,
    alt: str.LN_ALT,
    href: str.LN_HREF,
  },
  {
    src: str.YT_SRC,
    alt: str.YT_ALT,
    href: str.YT_HREF,
  },
  {
    src: str.TR_SRC,
    alt: str.TR_ALT,
    href: str.TR_HREF,
  },
];
