"use client";

import Landing from "./ui/components/landing";
import Navigation from "./ui/navigation/navigation";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen  flex flex-col bg-cover" style={{backgroundImage:'url("/Image/site-bg.jpg")'}}>
        
        <Landing />
      </main>
      <Navigation/>
    </>
  );
}
