"use client";
import { useState, useEffect } from "react";
import { Tabs as tabs } from "../../constants/";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function TopNavigation() {
  const pathname = usePathname();
  const [tabSelected, setTabSelected] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setTabSelected(tab);

    if (window.innerWidth <= 900) {
      setIsDrawerOpen(false);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="fixed w-full" style={{ userSelect: "none" }}>
        <div className="flex mx-8 my-2 justify-between items-center">
          {/* Company logo */}
          <div className="items-center cursor-pointer">
            <h1 className="text-gradient btn-link text-1xl sm: text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
              Seed NanoTech
            </h1>
            <h3 className=" text-gradient btn-link  text-1xl">
              International Inc.
            </h3>
          </div>

          {/* Hamburger icon for small screens */}
          <div className="lg:hidden cursor-pointer" onClick={toggleDrawer}>
            <a className="cursor-pointer text-3xl flex items-center justify-center text-gradient">
              ☰
            </a>
          </div>

          {/* Company tabs */}
          <div
            className={`lg:flex hidden text-gradient space-x-10 cursor-pointer ${
              isDrawerOpen ? "flex" : "hidden"
            }`}
          >
            {tabs.map((tab) => {
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={clsx("px-1 rounded border-2 ", {
                    "border-transparent": pathname !== tab.href,
                    "text-accent border-accent border-2": pathname === tab.href,
                  })}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
          {isDrawerOpen && (
            <div
              className="lg:hidden flex flex-col absolute top-0 left-0 w-full h-screen p-4  shadow-md "
              style={{ backgroundImage: 'url("/Image/site-bg.jpg")' }}
            >
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={() => handleTabClick(tab.name)}
                  className={`py-2 ${
                    tabSelected === tab.name
                      ? "  text-accent font-bold "
                      : "text-gradient "
                  }`}
                >
                  {tab.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
