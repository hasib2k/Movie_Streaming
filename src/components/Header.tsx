import { ChevronDownIcon, MagnifyingGlassIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 pt-8 pb-4">
      {/* Left: Dropdown and Search */}
      <div className="flex items-center gap-4">
        {/* Movies Dropdown */}
        <button className="flex items-center gap-2 bg-[#181e23] px-4 py-2 rounded-lg text-[#f9f8ff] font-medium text-base focus:outline-none">
          Movies <ChevronDownIcon className="h-5 w-5 text-[#959ca3]" />
        </button>
        {/* Search Bar */}
        <div className="relative w-80">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#959ca3]" />
          <input
            type="text"
            placeholder="Movies, series, shows..."
            className="w-full bg-[#181e23] rounded-lg pl-10 pr-4 py-2 text-[#f9f8ff] placeholder-[#959ca3] focus:outline-none"
          />
        </div>
      </div>
      {/* Right: Notification and User */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-[#232a31]">
          <BellIcon className="h-6 w-6 text-[#959ca3]" />
        </button>
        <div className="flex items-center gap-2 bg-[#181e23] px-3 py-2 rounded-lg">
          <UserCircleIcon className="h-7 w-7 text-[#f9f8ff]" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Yuki R.</span>
            <span className="text-xs text-yellow-400 font-medium">Premium</span>
          </div>
          <ChevronDownIcon className="h-5 w-5 text-[#959ca3] ml-1" />
        </div>
      </div>
    </header>
  );
} 