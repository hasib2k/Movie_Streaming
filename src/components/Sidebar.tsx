"use client";

import { HomeIcon, HeartIcon, ClockIcon, FireIcon, Cog6ToothIcon, LifebuoyIcon, PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Favorites', icon: HeartIcon },
  { name: 'Coming soon', icon: ClockIcon },
  { name: 'Trending', icon: FireIcon },
  { name: 'Settings', icon: Cog6ToothIcon },
  { name: 'Support', icon: LifebuoyIcon },
];

const continueWatching = [
  {
    title: 'Arcane: 2021',
    image: '/arcane.jpg',
    progress: 55,
    time: 'S1E6',
  },
  {
    title: 'Blade Runner 2049',
    image: '/blade_runner.jpg',
    progress: 55,
    time: '1h 25min',
  },
  {
    title: 'The Martian',
    image: '/The_Martian.webp',
    progress: 34,
    time: '38min',
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose = () => {} }: SidebarProps) {
  // Close sidebar when clicking escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-30"
          onClick={onClose}
        />
      )}

      <aside 
        className={`flex flex-col w-64 xxs:w-72 xs:w-80 md:w-64 h-full bg-[#10151a] p-3 xs:p-4 md:p-3 gap-6 sm:gap-8 md:gap-9 
                  text-[#f9f8ff] overflow-y-auto scrollbar-hide z-40
                  fixed md:static top-0 left-0 bottom-0 
                  transition-transform duration-300 ease-in-out
                  ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Mobile close button - visible only on mobile when sidebar is open */}
        <button 
          onClick={onClose}
          className="md:hidden absolute top-3 right-3 p-1 rounded-full bg-[#232a31] hover:bg-[#2c3540] transition-colors"
        >
          <XMarkIcon className="h-5 w-5 text-[#f9f8ff]" />
        </button>{/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-yellow-400 rounded p-1">
          <svg width="22" height="22" className="sm:w-6 sm:h-6" fill="none">
            <rect width="22" height="22" rx="6" fill="#FFD600"/>
            <rect x="6" y="7" width="11" height="9" rx="2" fill="#0e1518"/>
            <rect x="8.5" y="9.5" width="2" height="2" rx="1" fill="#FFD600"/>
            <rect x="12.5" y="9.5" width="2" height="2" rx="1" fill="#FFD600"/>
          </svg>
        </span>
        <span className="text-xl sm:text-2xl font-bold tracking-wide">pixloris</span>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-1 sm:gap-2">
        {navLinks.map(link => (
          <a 
            key={link.name} 
            href="#" 
            className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-[#232a31] transition"
          >
            <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#959ca3]" />
            <span className="text-sm sm:text-base font-medium">{link.name}</span>
          </a>
        ))}
      </nav>
      {/* Continue Watching */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <h3 className="text-xs sm:text-sm font-semibold text-[#959ca3] mb-2 sm:mb-3">Continue Watching</h3>
        <div className="flex flex-col gap-4 sm:gap-6">
          {continueWatching.map((item) => (
            <div 
              key={item.title} 
              className="relative flex items-center gap-2 sm:gap-3 bg-[#181e23] rounded-lg p-3 sm:p-4 md:p-5"
            >
              <div className="relative w-14 sm:w-16 h-9 sm:h-10 rounded overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                <PlayCircleIcon className="absolute bottom-1 right-1 h-4 sm:h-5 w-4 sm:w-5 text-white/80 bg-black/40 rounded-full" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] sm:text-xs font-semibold truncate">{item.title}</div>
                <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] text-[#959ca3]">
                  <span>{item.time}</span>
                  <span className="ml-auto">{item.progress}%</span>
                </div>
                <div className="w-full h-1 bg-[#232a31] rounded mt-1">
                  <div className="h-1 bg-yellow-400 rounded" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>      </div>
    </aside>
    </>
  );
}