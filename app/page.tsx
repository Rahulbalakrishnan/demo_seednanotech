"use client";

import Landing from "./ui/components/landing";
import Navigation from "./ui/navigation/navigation";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen flex flex-col">
        <Landing />
      </main>
    </>
  );
}
