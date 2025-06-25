'use client';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import categories from '../data/categories';

export default function CategoryFilters() {
  const [selected, setSelected] = useState('Action');

  return (
    <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide px-1 py-2" style={{ WebkitOverflowScrolling: 'touch' }}>
      <button className="p-2 rounded-full hover:bg-[#232a31]">
        <ChevronLeftIcon className="h-5 w-5 text-[#959ca3]" />
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-6 py-2 rounded-full font-semibold text-base transition whitespace-nowrap shadow-sm border border-transparent focus:outline-none ${
            selected === cat
              ? 'bg-[#f9f8ff] text-[#0e1518] shadow-lg' : 'bg-[#181e23] text-[#f9f8ff] hover:bg-[#232a31]'
          }`}
          style={{ minWidth: 110 }}
        >
          {cat}
        </button>
      ))}
      <button className="p-2 rounded-full hover:bg-[#232a31]">
        <ChevronRightIcon className="h-5 w-5 text-[#959ca3]" />
      </button>
    </div>
  );
} 