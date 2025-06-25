"use client";

import { ChevronDownIcon, MagnifyingGlassIcon, BellIcon, UserCircleIcon, Bars3Icon, Cog6ToothIcon, CreditCardIcon, ArrowRightOnRectangleIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  toggleSidebar?: () => void;
}

export default function Header({ toggleSidebar = () => {} }: HeaderProps) {
  const [showMoviesDropdown, setShowMoviesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  
  // Toggle movies dropdown
  const toggleMoviesDropdown = () => {
    setShowMoviesDropdown(!showMoviesDropdown);
    if (showUserDropdown) setShowUserDropdown(false);
  };
  
  // Toggle user dropdown
  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
    if (showMoviesDropdown) setShowMoviesDropdown(false);
  };
  
  // Close dropdowns when clicking outside
  const closeDropdowns = () => {
    setShowMoviesDropdown(false);
    setShowUserDropdown(false);
  };
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between px-3 xs:px-4 sm:px-6 md:px-8 pt-4 xs:pt-5 sm:pt-6 md:pt-8 pb-2 xs:pb-3 sm:pb-4 gap-3 md:gap-0">
      {/* Left: Logo, Dropdown and Search */}
      <div className="flex items-center gap-2 xs:gap-3 md:gap-4 w-full md:w-auto">
        {/* Menu Button - Mobile Only */}
        <button 
          className="md:hidden flex items-center justify-center p-1.5 xs:p-2 bg-[#232a31] hover:bg-[#2c3540] rounded-lg text-[#f9f8ff]"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Bars3Icon className="h-5 w-5 xs:h-6 xs:w-6" />
        </button>
        
        {/* Logo - Hidden on Small Mobile */}
        <Link href="/" className="hidden xs:flex items-center gap-1.5 mr-1">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image 
              src="/logo.png" 
              alt="Pixloris Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Movies Dropdown */}
        <div className="relative">
          <button 
            onClick={toggleMoviesDropdown}
            className="flex items-center gap-1 xs:gap-2 bg-[#181e23] px-2 xs:px-3 md:px-4 py-1.5 xs:py-2 rounded-lg text-[#f9f8ff] font-medium text-xs xs:text-sm md:text-base focus:outline-none whitespace-nowrap hover:bg-[#232a31] transition-colors"
          >
            Movies <ChevronDownIcon className={`h-4 w-4 xs:h-5 xs:w-5 text-[#959ca3] transition-transform duration-200 ${showMoviesDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu */}
          {showMoviesDropdown && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={closeDropdowns}
              ></div>
              <div className="absolute top-full left-0 mt-1 z-20 bg-[#181e23] rounded-lg shadow-lg overflow-hidden w-48 sm:w-56 py-1">
                <Link href="/movies" className="block px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  All Movies
                </Link>
                <Link href="/movies/popular" className="block px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  Popular
                </Link>
                <Link href="/movies/top-rated" className="block px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  Top Rated
                </Link>
                <Link href="/movies/new-releases" className="block px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  New Releases
                </Link>
                <Link href="/movies/genres" className="block px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  Browse by Genre
                </Link>
              </div>
            </>
          )}
        </div>
        
        {/* Search Bar */}
        <div className="relative flex-1 md:w-60 lg:w-80">
          <MagnifyingGlassIcon className="absolute left-2 xs:left-3 top-1/2 -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-[#959ca3]" />
          <input
            type="text"
            placeholder="Movies, series, shows..."
            className="w-full bg-[#181e23] rounded-lg pl-7 xs:pl-10 pr-2 xs:pr-4 py-1.5 xs:py-2 text-xs xs:text-sm md:text-base text-[#f9f8ff] placeholder-[#959ca3] focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const query = e.currentTarget.value.trim();
                if (query) {
                  window.location.href = `/search?q=${encodeURIComponent(query)}`;
                } else {
                  window.location.href = '/search';
                }
              }
            }}
          />
        </div>
      </div>
      {/* Right: Notification and User */}
      <div className="flex items-center justify-end gap-2 xs:gap-3 md:gap-4">
        {/* Notifications Button */}
        <div className="relative">
          <Link href="/notifications" className="block relative p-1.5 xs:p-2 rounded-full hover:bg-[#232a31] transition-colors">
            <BellIcon className="h-5 w-5 xs:h-6 xs:w-6 text-[#959ca3]" />
            <span className="absolute top-0 right-0 h-2 w-2 xs:h-2.5 xs:w-2.5 bg-yellow-400 rounded-full"></span>
          </Link>
        </div>
        
        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={toggleUserDropdown}
            className="flex items-center gap-1.5 xs:gap-2 bg-[#181e23] hover:bg-[#232a31] px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg transition-colors"
          >
            <div className="relative h-6 w-6 xs:h-7 xs:w-7 rounded-full overflow-hidden">
              <Image 
                src="/straume.jpg" 
                alt="User Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs xs:text-sm font-semibold">Hasib Ahmed</span>
              <span className="text-[10px] xs:text-xs text-yellow-400 font-medium">Premium</span>
            </div>
            <ChevronDownIcon className={`h-4 w-4 xs:h-5 xs:w-5 text-[#959ca3] ml-0.5 xs:ml-1 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {/* User Dropdown Menu */}
          {showUserDropdown && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={closeDropdowns}
              ></div>
              <div className="absolute top-full right-0 mt-1 z-20 bg-[#181e23] rounded-lg shadow-lg overflow-hidden w-48 sm:w-56 py-1">
                <Link href="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  <UserCircleIcon className="h-5 w-5 mr-2 text-[#959ca3]" />
                  My Profile
                </Link>
                <Link href="/history" className="flex items-center px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  <ClockIcon className="h-5 w-5 mr-2 text-[#959ca3]" />
                  Watch History
                </Link>
                <Link href="/settings" className="flex items-center px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  <Cog6ToothIcon className="h-5 w-5 mr-2 text-[#959ca3]" />
                  Settings
                </Link>
                <Link href="/subscription" className="flex items-center px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  <CreditCardIcon className="h-5 w-5 mr-2 text-[#959ca3]" />
                  Subscription
                </Link>
                <Link href="/billing" className="flex items-center px-4 py-2 text-sm hover:bg-[#232a31] transition-colors">
                  <DocumentTextIcon className="h-5 w-5 mr-2 text-[#959ca3]" />
                  Billing
                </Link>
                <hr className="my-1 border-[#232a31]" />
                <Link href="/logout" className="flex items-center px-4 py-2 text-sm hover:bg-[#232a31] transition-colors text-red-400">
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                  Sign Out
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}