"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would handle the actual logout logic here
    // For example, clear auth tokens, call logout API, etc.
    const logoutTimer = setTimeout(() => {
      // Redirect to home page after fake logout
      router.push('/');
    }, 2000);

    return () => clearTimeout(logoutTimer);
  }, [router]);

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="bg-[#181e23] rounded-xl p-8 w-full max-w-md text-center">
        <div className="mx-auto w-16 h-16 mb-4 text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Sign Out</h2>
        <p className="text-gray-300 mb-6">Are you sure you want to sign out of your account?</p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleCancel}
            className="flex items-center justify-center gap-2 bg-[#232a31] hover:bg-[#2c3540] text-white py-2 px-4 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Cancel
          </button>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-colors font-medium"
            onClick={() => router.push('/')}
          >
            Yes, Sign Out
          </button>
        </div>
        
        <p className="mt-6 text-xs text-gray-400">
          Signing out will end your session on this device.<br />
          You'll need to sign in again to access your account.
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="font-medium text-white mb-2">Having issues with your account?</h3>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <a href="/support" className="text-yellow-400 hover:underline">Contact Support</a>
          <span className="text-gray-500">•</span>
          <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>
          <span className="text-gray-500">•</span>
          <a href="/settings" className="text-yellow-400 hover:underline">Account Settings</a>
        </div>
      </div>
    </div>
  );
}
