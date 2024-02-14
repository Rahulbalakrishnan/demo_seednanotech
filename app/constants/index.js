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
    
    title: str.BIO_TECH_TITLE,
    firstData: [str.BIO_TECH_FIRST_DATA],
    secondData: [str.BIO_TECH_SECOND_DATA],
  },
  {
    title: str.ENV_PROTECTION_TITLE,
    firstData: [str.ENV_PROTECTION_FIRST_DATA],
    secondData: [str.ENV_PROTECTION_SECOND_DATA],
  },
  {
    title: str.AGRI_FOOD_TITLE,
    firstData: [str.AGRI_FOOD_FIRST_DATA],
    secondData: [str.AGRI_FOOD_SECOND_DATA],
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

export const ProjectDetails = [
  {
    src: str.PD_BIO_SRC,
    alt: str.PD_BIO_ALT,
    title: str.PD_BIO_TITLE,
    content: str.PD_BIO_CONTENT,
  },
  {
    src: str.PD_MICRO_SRC,
    alt: str.PD_MICRO_ALT,
    title: str.PD_MICRO_TITLE,
    content: str.PD_MICRO_CONTENT,
  },
  {
    src: str.PD_LIMITS_SRC,
    alt: str.PD_LIMITS_ALT,
    title: str.PD_LIMITS_TITLE,
    content: str.PD_LIMITS_CONTENT,
  },
];


export const BlogDetails = [
  {
    src: str.PD_FUTURE_SRC,
    alt: str.PD_FUTURE_ALT,
    title: str.PD_FUTURE_TITLE,
    content: str.PD_FUTURE_CONTENT,
  },
  {
    src: str.PD_ATTENDING_SRC,
    alt: str.PD_ATTENDING_ALT,
    title: str.PD_ATTENDING_TITLE,
    content: str.PD_ATTENDING_CONTENT,
  },
  {
    src: str.PD_SENSORS_SRC,
    alt: str.PD_SENSORS_ALT,
    title: str.PD_SENSORS_TITLE,
    content: str.PD_SENSORS_CONTENT,
  },
];

export const ResDetails = [
  {
    src: str.RD_MAGNETO_SRC,
    alt: str.RD_MAGNETO_ALT,
    title: str.RD_MAGNETO_TITLE,
    content: str.RD_MAGNETO_CONTENT,
  },
  {
    src: str.RD_NANO_SRC,
    alt: str.RD_NANO_ALT,
    title: str.RD_NANO_TITLE,
    content: str.RD_NANO_CONTENT,
  },
  {
    src: str.RD_MODIFIED_SPR_SRC,
    alt: str.RD_MODIFIED_SPR_ALT,
    title: str.RD_MODIFIED_SPR_TITLE,
    content: str.RD_MODIFIED_SPR_CONTENT,
  },
];
