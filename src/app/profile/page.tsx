'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { UserCircleIcon, PencilIcon, CheckIcon, ArrowPathIcon, ChevronRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

// Sample user data
const userData = {
  name: "Hasib Ahmed",
  email: "hasib.ahmed@example.com",
  avatar: "/straume.jpg",
  phone: "+1 (555) 123-4567",
  dateJoined: "December 2023",
  subscription: "Premium",
  nextBillingDate: "August 15, 2025",
  paymentMethod: "•••• 4242",
  preferences: {
    language: "English",
    subtitles: "On",
    notifications: "On",
    autoplay: "On",
    maturityLevel: "All content"
  }
};

// Watch history
const watchHistory = [
  {
    id: 1,
    title: "Arcane: 2021",
    image: "/arcane.jpg",
    watchedDate: "Yesterday",
    progress: 55,
    episode: "S1:E6"
  },
  {
    id: 2,
    title: "Blade Runner 2049",
    image: "/blade_runner.jpg",
    watchedDate: "2 days ago",
    progress: 55
  },
  {
    id: 3,
    title: "The Martian",
    image: "/The_Martian.webp",
    watchedDate: "Last week",
    progress: 34
  }
];

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  
  const handleSave = () => {
    // In a real app, you'd save the changes to the server here
    setEditing(false);
  };

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">My Profile</h1>
        <p className="text-[#959ca3] text-sm md:text-base">
          Manage your profile and account settings
        </p>
      </div>

      {/* Profile Overview */}
      <div className="bg-[#181e23] rounded-xl p-4 sm:p-6 mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-[#232a31] flex-shrink-0">
              <Image 
                src={userData.avatar} 
                alt={userData.name} 
                fill 
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-yellow-400 text-black p-1.5 rounded-full">
              <PencilIcon className="h-4 w-4" />
            </button>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              {editing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#232a31] rounded-lg px-3 py-1.5 text-lg sm:text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ) : (
                <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
              )}
              
              <div className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                {userData.subscription}
              </div>
            </div>
            
            <div className="space-y-2">
              {editing ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-[#959ca3] text-sm">Email:</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#232a31] rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#959ca3] text-sm">Phone:</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-[#232a31] rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm"><span className="text-[#959ca3]">Email:</span> {userData.email}</p>
                  <p className="text-sm"><span className="text-[#959ca3]">Phone:</span> {userData.phone}</p>
                </>
              )}
              <p className="text-sm"><span className="text-[#959ca3]">Member since:</span> {userData.dateJoined}</p>
            </div>
          </div>
          
          {/* Edit/Save Button */}
          <div>
            {editing ? (
              <div className="flex gap-2">
                <button 
                  onClick={() => setEditing(false)}
                  className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-3 py-1.5 rounded transition-colors text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <CheckIcon className="h-4 w-4" />
                  Save
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setEditing(true)}
                className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-3 py-1.5 rounded transition-colors text-sm flex items-center gap-1"
              >
                <PencilIcon className="h-4 w-4" />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Subscription & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Subscription Info */}
        <div className="bg-[#181e23] rounded-xl p-4 sm:p-6">
          <h3 className="text-lg font-semibold mb-4">Subscription</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#959ca3]">Plan</span>
              <span className="font-medium text-yellow-400">{userData.subscription}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#959ca3]">Next billing date</span>
              <span>{userData.nextBillingDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#959ca3]">Payment method</span>
              <span>{userData.paymentMethod}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <Link 
              href="/subscription"
              className="text-sm text-yellow-400 hover:underline"
            >
              Manage Subscription
            </Link>
            <Link 
              href="/billing"
              className="text-sm text-yellow-400 hover:underline"
            >
              Billing History
            </Link>
          </div>
        </div>
        
        {/* Preferences */}
        <div className="bg-[#181e23] rounded-xl p-4 sm:p-6">
          <h3 className="text-lg font-semibold mb-4">Preferences</h3>
          <div className="divide-y divide-[#232a31]">
            {Object.entries(userData.preferences).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-3">
                <span className="text-[#959ca3] capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link 
              href="/settings"
              className="flex items-center justify-center w-full bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-3 py-2 rounded-lg transition-colors text-sm gap-2"
            >
              <Cog6ToothIcon className="h-4 w-4" />
              Manage Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Watch History */}
      <div className="bg-[#181e23] rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recently Watched</h3>
          <Link 
            href="/history"
            className="text-sm text-yellow-400 hover:underline flex items-center"
          >
            View All
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {watchHistory.map(item => (
            <Link 
              key={item.id}
              href={`/watch/${item.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}`}
              className="flex items-center gap-3 bg-[#232a31] rounded-lg p-3 hover:bg-[#2c3540] transition-colors"
            >
              <div className="relative w-16 h-10 rounded overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                <div className="flex text-xs text-[#959ca3] gap-2">
                  <span>{item.watchedDate}</span>
                  {item.episode && <span>•</span>}
                  {item.episode && <span>{item.episode}</span>}
                </div>
                <div className="w-full h-1 bg-[#10151a] rounded mt-1.5">
                  <div 
                    className="h-full bg-yellow-400 rounded"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
