"use client";
import { useState, useEffect } from "react";
import { Tabs as tabs } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { XCircleIcon } from "@heroicons/react/16/solid";
import * as str from "../constants/strings.js";
import Image from "next/image";

export default function TopNavigation() {
  const pathname = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerTabClick = (tab: string) => {
    // Close drawer if the clicked tab is already selected
    if (tab === pathname) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    // Close drawer when the route changes
    setIsDrawerOpen(false);
  }, [pathname]);
  return (
    <>
      <nav className="fixed w-full z-50" style={{ userSelect: "none" }}>
        <div className="flex mx-4 my-2 justify-between items-center">
          {/* Company logo */}
          <div className="flex ">
            <Image
              src={str.COMPANY_LOGO}
              alt="logo icon"
              width={50}
              height={25}
              className="mt-1"
            />

            <div className=" px-2 items-center cursor-pointer">
              <h1 className="text-gradient btn-link text-1xl  sm: text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
                <Link href="/">{str.COMPANY_NAME}</Link>
              </h1>
              <h3 className=" text-gradient btn-link  text-sm ">
                <Link href="/">{str.COMPANY_NAME_SUB}</Link>
              </h3>
            </div>
          </div>

          {/* Hamburger icon for small screens */}
          <div className="lg:hidden cursor-pointer" onClick={toggleDrawer}>
            <a className="cursor-pointer text-3xl flex items-center justify-center text-gradient">
              ☰
            </a>
          </div>

          {/* Company tabs */}
          <div
            className={`lg:flex hidden  text-gradient space-x-8 cursor-pointer ${
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
                    "text-gradient font-extrabold border-r-accent border-t-accent border-b-purple-900 border-l-purple-900 border-2":
                      pathname === tab.href,
                  })}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>

          {isDrawerOpen && (
            <div
              className=" overflow lg:hidden bg-white flex flex-col absolute top-0 left-0 w-full h-screen items-center pt-20 shadow-md "
              style={{ backgroundImage: 'url("/Assets/bg-main.jpg")' }}
            >
              {tabs.map((tab) => {
                return (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    onClick={() => handleDrawerTabClick(tab.href)}
                    className={clsx("px-1 rounded text-3xl p-1 mt-5", {
                      "text-gradient ": pathname !== tab.href,
                      "text-accent font-bold border-2 border-accent shadow-md":
                        pathname === tab.href,
                    })}
                  >
                    {tab.name}
                  </Link>
                );
              })}

              <XCircleIcon
                style={{
                  color: "#9333EA",
                  width: "2.5rem",
                  height: "2.5rem",
                  marginTop: "1.0rem",
                }}
                onClick={toggleDrawer}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
