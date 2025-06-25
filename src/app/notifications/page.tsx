"use client";

import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

interface Notification {
  id: string;
  title: string;
  description: string;
  image?: string;
  time: string;
  read: boolean;
  link?: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading notification data
    setTimeout(() => {
      setNotifications([
        {
          id: '1',
          title: 'New Release',
          description: 'Dune: Part Two is now available to stream!',
          image: '/Dune_2.webp',
          time: '10 minutes ago',
          read: false,
          link: '/watch/dune-part-two'
        },
        {
          id: '2',
          title: 'Continue Watching',
          description: 'You left "The Martian" at 45 minutes. Continue watching?',
          image: '/The_Martian.webp',
          time: '2 hours ago',
          read: false,
          link: '/watch/the-martian'
        },
        {
          id: '3',
          title: 'New in Your Watchlist',
          description: 'A new title matching your watchlist has been added',
          image: '/blade_runner.jpg',
          time: 'Yesterday',
          read: true,
          link: '/watch/blade-runner'
        },
        {
          id: '4',
          title: 'Account Updated',
          description: 'Your premium subscription has been renewed successfully',
          time: '2 days ago',
          read: true,
          link: '/subscription'
        },
        {
          id: '5',
          title: 'Coming Soon',
          description: 'Mufasa: The Lion King will be released next month',
          image: '/Mufasa.jpg',
          time: '3 days ago',
          read: true,
          link: '/coming-soon'
        }
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Notifications</h1>
        {notifications.length > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="bg-[#181e23] rounded-xl p-8 text-center">
          <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No notifications</h3>
          <p className="text-gray-400">You're all caught up! Check back later for updates.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`flex gap-3 p-3 rounded-lg ${notification.read ? 'bg-[#181e23]' : 'bg-[#232a31] border-l-4 border-yellow-400'}`}
            >
              {notification.image && (
                <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 relative rounded-md overflow-hidden">
                  <Image 
                    src={notification.image} 
                    alt={notification.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="flex-1">
                <Link 
                  href={notification.link || '#'} 
                  className="block"
                  onClick={() => markAsRead(notification.id)}
                >
                  <h3 className="font-semibold text-white">{notification.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{notification.description}</p>
                  <span className="text-xs text-gray-400 mt-2 block">{notification.time}</span>
                </Link>
              </div>
              
              <button 
                onClick={() => deleteNotification(notification.id)}
                className="self-start p-1 hover:bg-[#2c3540] rounded-full transition-colors"
                aria-label="Delete notification"
              >
                <XMarkIcon className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
