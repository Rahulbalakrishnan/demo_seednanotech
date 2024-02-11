import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TopNavigation from "../navigation/topNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seed Nano Tech",
  description: "Business Administration and Management",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNavigation />
      {children}
    </div>
  );
}
