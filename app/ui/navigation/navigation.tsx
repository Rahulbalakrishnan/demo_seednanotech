import { useState } from 'react';
import scrollToSection from '@/app/lib/scroll';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  PhoneIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string | null>('Welcome');

  const handleItemClick = (section: string) => {
    scrollToSection(section);
    setActiveSection(section);
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
      <div className="w-full bg-black/20 h-[50px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-6 flex justify-between items-center text-2xl">
        <a
          className={`cursor-pointer w-[20px] h-[20px] flex items-center justify-center focus:outline-none ${
            activeSection === 'Welcome' ? 'text-purple-600' : 'text-white/50'
          }`}
          onClick={() => handleItemClick('Welcome')}
        >
          <HomeIcon />
        </a>

        <a
          className={`cursor-pointer w-[20px] h-[20px] flex items-center justify-center focus:outline-none ${
            activeSection === 'Product' ? 'text-purple-600' : 'text-white/50'
          }`}
          onClick={() => handleItemClick('Product')}
        >
          <WrenchScrewdriverIcon />
        </a>

        <a
          className={`cursor-pointer w-[20px] h-[20px] flex items-center justify-center focus:outline-none ${
            activeSection === 'Project' ? 'text-purple-600' : 'text-white/50'
          }`}
          onClick={() => handleItemClick('Project')}
        >
          <ClipboardDocumentListIcon />
        </a>

        <a
          className={`cursor-pointer w-[20px] h-[20px] flex items-center justify-center focus:outline-none ${
            activeSection === 'Blogs' ? 'text-purple-600' : 'text-white/50'
          }`}
          onClick={() => handleItemClick('Blogs')}
        >
          <PencilSquareIcon />
        </a>

        <a
          className={`cursor-pointer w-[20px] h-[20px] flex items-center justify-center focus:outline-none ${
            activeSection === 'Research' ? 'text-purple-600' : 'text-white/50'
          }`}
          onClick={() => handleItemClick('Research')}
        >
          <BeakerIcon />
        </a>

        <a
          className={`cursor-pointer w-[20px] h-[20px] flex items-center justify-center focus:outline-none ${
            activeSection === 'Contact' ? 'text-purple-600' : 'text-white/50'
          }`}
          onClick={() => handleItemClick('Contact')}
        >
          <PhoneIcon />
        </a>
      </div>
    </nav>
  );
}
