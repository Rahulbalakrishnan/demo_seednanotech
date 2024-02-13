"use client";

import Landing from "./ui/components/landing";
import BottomNavigation from "./navigation/bottomNavigation";
import TopNavigation from "./navigation/topNavigation";

export default function Home() {
  return (
    <>
      <main
        className="w-full min-h-screen flex flex-col bg-cover"
        // style={{ backgroundColor: "#FEFBF6" }}
      >
        <TopNavigation />
        <Landing />
        <BottomNavigation />
      </main>
    </>
  );
}
