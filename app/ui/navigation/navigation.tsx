import scrollToSection from "@/app/lib/scroll";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  PhoneIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
export default function Navigation() {
  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[50px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-6 flex justify-between items-center text-2xl text-white/50">
          <a
            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
            onClick={() => scrollToSection("Welcome")}
          >
            <HomeIcon />
          </a>

          <a
            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
            onClick={() => scrollToSection("Product")}
          >
            <WrenchScrewdriverIcon />
          </a>

          <a
            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
            onClick={() => scrollToSection("Project")}
          >
            <ClipboardDocumentListIcon />
          </a>

          <a
            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
            onClick={() => scrollToSection("Blogs")}
          >
            <PencilSquareIcon />
          </a>

          <a
            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
            onClick={() => scrollToSection("Research")}
          >
            <BeakerIcon />
          </a>

          <a
            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
            onClick={() => scrollToSection("Contact")}
          >
            <PhoneIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
