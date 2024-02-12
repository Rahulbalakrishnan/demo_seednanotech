import { useState } from "react";
import scrollToSection from "@/app/lib/scroll";
import { NavigationItems as navigationItems } from "@/app/constants";

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState<string | null>("Welcome");

  const handleItemClick = (section: string) => {
    scrollToSection(section);
    setActiveSection(section);
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-10">
      <div className="w-full bg-black/20 h-[40px] backdrop-blur-2xl rounded-full max-w-[340px] mx-auto px-6 flex justify-between items-center text-2xl">
        {navigationItems.map(({ section, icon }, index) => (
          <a
            key={index}
            className={`cursor-pointer w-[18px] h-[18px] flex items-center justify-center focus:outline-none ${
              activeSection === section ? "text-purple-500" : "text-white"
            }`}
            onClick={() => handleItemClick(section)}
          >
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
