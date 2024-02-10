"use client";

import Blogs from "./ui/components/blogs";
import Contact from "./ui/components/contact";
import Product from "./ui/components/product";
import Project from "./ui/components/project";
import Research from "./ui/components/research";
import Welcome from "./ui/components/welcome";
import Navigation from "./ui/navigation/navigation";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen flex flex-col">
        <Welcome />
        <Product />
        <Project />
        <Blogs />
        <Research />
        <Contact />

        <Navigation />
      </main>
    </>
  );
}
