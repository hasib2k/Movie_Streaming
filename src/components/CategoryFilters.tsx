'use client';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import categories from '../data/categories';

export default function CategoryFilters() {
  const [selected, setSelected] = useState('Action');
  return (
    <div className="flex items-center gap-1.5 xxs:gap-2 mb-5 xs:mb-6 sm:mb-7 md:mb-8 overflow-x-auto scrollbar-hide py-2 scroll-smooth scrolling-touch -mx-2 px-2" style={{ WebkitOverflowScrolling: 'touch' }}>
      <button className="p-1.5 xxs:p-2 rounded-full hover:bg-[#232a31] flex-shrink-0">
        <ChevronLeftIcon className="h-4 w-4 xxs:h-5 xxs:w-5 text-[#959ca3]" />
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-3 xxs:px-4 sm:px-5 md:px-6 py-1.5 xxs:py-2 rounded-full font-medium xxs:font-semibold text-xs xxs:text-sm md:text-base transition whitespace-nowrap shadow-sm border border-transparent focus:outline-none flex-shrink-0 ${
            selected === cat
              ? 'bg-[#f9f8ff] text-[#0e1518] shadow-lg' : 'bg-[#181e23] text-[#f9f8ff] hover:bg-[#232a31]'
          }`}
          style={{ minWidth: '70px' }}
        >
          {cat}
        </button>
      ))}
      <button className="p-1.5 xxs:p-2 rounded-full hover:bg-[#232a31] flex-shrink-0">
        <ChevronRightIcon className="h-4 w-4 xxs:h-5 xxs:w-5 text-[#959ca3]" />
      </button>
    </div>
  );
}