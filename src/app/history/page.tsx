"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayIcon, TrashIcon, CalendarIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface HistoryItem {
  id: string;
  title: string;
  image: string;
  watchedDate: string;
  progress: number;
  duration: string;
  slug: string;
}

export default function HistoryPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([
    {
      id: '1',
      title: 'The Electric State',
      image: '/The_Electric_State.jpg',
      watchedDate: 'Today',
      progress: 75,
      duration: '2h 18m',
      slug: 'the-electric-state'
    },
    {
      id: '2',
      title: 'Dune: Part Two',
      image: '/Dune_2.webp',
      watchedDate: 'Yesterday',
      progress: 100,
      duration: '2h 46m',
      slug: 'dune-part-two'
    },
    {
      id: '3',
      title: 'Blade Runner 2049',
      image: '/blade_runner.jpg',
      watchedDate: '2 days ago',
      progress: 45,
      duration: '2h 44m',
      slug: 'blade-runner-2049'
    },
    {
      id: '4',
      title: 'The Martian',
      image: '/The_Martian.webp',
      watchedDate: '3 days ago',
      progress: 60,
      duration: '2h 24m',
      slug: 'the-martian'
    },
    {
      id: '5',
      title: 'Mission Impossible: Fallout',
      image: '/mi.jpg',
      watchedDate: 'Last week',
      progress: 100,
      duration: '2h 28m',
      slug: 'mission-impossible-fallout'
    },
    {
      id: '6',
      title: 'How to Train Your Dragon',
      image: '/how-to-train-your-dragon-dreamworks.avif',
      watchedDate: '2 weeks ago',
      progress: 100,
      duration: '1h 38m',
      slug: 'how-to-train-your-dragon'
    },
    {
      id: '7',
      title: 'Arcane',
      image: '/arcane.jpg',
      watchedDate: 'Last month',
      progress: 100,
      duration: '41m',
      slug: 'arcane'
    }
  ]);

  const [showConfirmClear, setShowConfirmClear] = useState(false);
  
  const timeFilters = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  const removeFromHistory = (id: string) => {
    setHistoryItems(historyItems.filter(item => item.id !== id));
  };

  const clearAllHistory = () => {
    setHistoryItems([]);
    setShowConfirmClear(false);
  };

  const filteredHistory = historyItems.filter(item => {
    if (selectedPeriod === 'all') return true;
    if (selectedPeriod === 'today' && item.watchedDate === 'Today') return true;
    if (selectedPeriod === 'yesterday' && item.watchedDate === 'Yesterday') return true;
    if (selectedPeriod === 'week' && !item.watchedDate.includes('month')) return true;
    if (selectedPeriod === 'month') return true;
    return false;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-white">Watch History</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Time period filter */}
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="appearance-none bg-[#181e23] border border-[#232a31] text-white rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            >
              {timeFilters.map(filter => (
                <option key={filter.value} value={filter.value}>{filter.label}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          
          {/* Clear history button */}
          {historyItems.length > 0 && (
            <button 
              onClick={() => setShowConfirmClear(true)}
              className="text-sm text-red-400 hover:text-red-300 transition-colors"
            >
              Clear History
            </button>
          )}
        </div>
      </div>

      {/* Clear history confirmation modal */}
      {showConfirmClear && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#181e23] rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-2">Clear Watch History?</h3>
            <p className="text-gray-300 mb-6">
              This will clear your entire watch history. This action cannot be undone.
            </p>
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowConfirmClear(false)}
                className="px-4 py-2 bg-[#232a31] hover:bg-[#2c3540] rounded-lg text-white text-sm transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={clearAllHistory}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Clear History
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History list */}
      {filteredHistory.length === 0 ? (
        <div className="bg-[#181e23] rounded-xl p-8 text-center">
          <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
            <CalendarIcon className="h-16 w-16" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No watch history</h3>
          <p className="text-gray-400 mb-6">
            {historyItems.length === 0 
              ? "Your watch history is empty. Start watching content to see it here!"
              : "No watch history found for the selected time period."}
          </p>
          
          <Link href="/" className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded-lg transition-colors">
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHistory.map((item) => (
            <div key={item.id} className="bg-[#181e23] rounded-lg overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div 
                    className="h-full bg-yellow-400" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                
                {/* Overlay with Play button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href={`/watch/${item.slug}`}>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-3 transition-colors">
                      <PlayIcon className="h-6 w-6" />
                    </button>
                  </Link>
                </div>
                
                {/* Delete button */}
                <button 
                  onClick={() => removeFromHistory(item.id)}
                  className="absolute top-2 right-2 bg-black/60 rounded-full p-1 opacity-0 group-hover:opacity-100 hover:bg-red-500/80 transition-all"
                  aria-label="Remove from history"
                >
                  <XMarkIcon className="h-5 w-5 text-white" />
                </button>
              </div>
              
              <div className="p-4">
                <Link href={`/watch/${item.slug}`} className="hover:text-yellow-400 transition-colors">
                  <h3 className="font-medium text-white mb-1 line-clamp-1">{item.title}</h3>
                </Link>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{item.watchedDate}</span>
                  <span>{item.duration}</span>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-400">
                    {item.progress === 100 ? 'Completed' : `${item.progress}% watched`}
                  </span>
                  
                  <button 
                    onClick={() => removeFromHistory(item.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors flex items-center text-xs"
                  >
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
