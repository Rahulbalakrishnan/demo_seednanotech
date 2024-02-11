"use client";

import Landing from "./ui/components/landing";
import BottomNavigation from "./ui/navigation/bottomNavigation";
import TopNavigation from "./ui/navigation/topNavigation";
import { useRouter } from "next/router";
export default function Home() {
  
  return (
    <>
      <main
        className="w-full min-h-screen flex flex-col bg-cover"
        style={{ backgroundImage: 'url("/Image/site-bg.jpg")' }}
      >
        <TopNavigation />
        <Landing />
        <BottomNavigation />
      </main>
    </>
  );
}
