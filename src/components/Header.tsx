"use client";

import { ChevronDownIcon, MagnifyingGlassIcon, BellIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  toggleSidebar?: () => void;
}

export default function Header({ toggleSidebar = () => {} }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between px-3 xs:px-4 sm:px-6 md:px-8 pt-4 xs:pt-5 sm:pt-6 md:pt-8 pb-2 xs:pb-3 sm:pb-4 gap-3 md:gap-0">
      {/* Left: Dropdown and Search */}      <div className="flex items-center gap-2 xs:gap-3 md:gap-4 w-full md:w-auto">
        {/* Menu Button - Mobile Only */}
        <button 
          className="md:hidden flex items-center justify-center p-1.5 xs:p-2 bg-[#232a31] hover:bg-[#2c3540] rounded-lg text-[#f9f8ff]"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Bars3Icon className="h-5 w-5 xs:h-6 xs:w-6" />
        </button>
        
        {/* Movies Dropdown */}
        <button className="flex items-center gap-1 xs:gap-2 bg-[#181e23] px-2 xs:px-3 md:px-4 py-1.5 xs:py-2 rounded-lg text-[#f9f8ff] font-medium text-xs xs:text-sm md:text-base focus:outline-none whitespace-nowrap">
          Movies <ChevronDownIcon className="h-4 w-4 xs:h-5 xs:w-5 text-[#959ca3]" />
        </button>
        {/* Search Bar */}
        <div className="relative flex-1 md:w-60 lg:w-80">
          <MagnifyingGlassIcon className="absolute left-2 xs:left-3 top-1/2 -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-[#959ca3]" />
          <input
            type="text"
            placeholder="Movies, series, shows..."
            className="w-full bg-[#181e23] rounded-lg pl-7 xs:pl-10 pr-2 xs:pr-4 py-1.5 xs:py-2 text-xs xs:text-sm md:text-base text-[#f9f8ff] placeholder-[#959ca3] focus:outline-none"
          />
        </div>
      </div>
      {/* Right: Notification and User */}
      <div className="flex items-center justify-end gap-2 xs:gap-3 md:gap-4">
        <button className="relative p-1.5 xs:p-2 rounded-full hover:bg-[#232a31]">
          <BellIcon className="h-5 w-5 xs:h-6 xs:w-6 text-[#959ca3]" />
        </button>
        <div className="flex items-center gap-1.5 xs:gap-2 bg-[#181e23] px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg">
          <UserCircleIcon className="h-6 w-6 xs:h-7 xs:w-7 text-[#f9f8ff]" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs xs:text-sm font-semibold">Hasib Ahmed</span>
            <span className="text-[10px] xs:text-xs text-yellow-400 font-medium">Premium</span>
          </div>
          <ChevronDownIcon className="h-4 w-4 xs:h-5 xs:w-5 text-[#959ca3] ml-0.5 xs:ml-1" />
        </div>
      </div>
    </header>
  );
}