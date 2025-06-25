"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, FireIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Movie {
  id: string;
  title: string;
  image: string;
  releaseDate: string;
  rating: number;
  genre: string[];
  isHot: boolean;
  slug: string;
}

export default function NewReleasesPage() {
  const [sortBy, setSortBy] = useState<string>('newest');
  
  // Sample new releases data
  const newReleases: Movie[] = [
    {
      id: '1',
      title: 'Dune: Part Two',
      image: '/Dune_2.webp',
      releaseDate: '2024-03-01',
      rating: 8.7,
      genre: ['Sci-Fi', 'Adventure', 'Drama'],
      isHot: true,
      slug: 'dune-part-two'
    },
    {
      id: '2',
      title: 'The Electric State',
      image: '/The_Electric_State.jpg',
      releaseDate: '2024-04-15',
      rating: 7.5,
      genre: ['Sci-Fi', 'Action', 'Adventure'],
      isHot: true,
      slug: 'the-electric-state'
    },
    {
      id: '3',
      title: 'Mufasa: The Lion King',
      image: '/Mufasa.jpg',
      releaseDate: '2024-05-10',
      rating: 7.8,
      genre: ['Animation', 'Adventure', 'Drama'],
      isHot: true,
      slug: 'mufasa-lion-king'
    },
    {
      id: '4',
      title: 'Last Bullet',
      image: '/Last_bullet.jpg',
      releaseDate: '2024-02-28',
      rating: 7.2,
      genre: ['Action', 'Thriller', 'Crime'],
      isHot: false,
      slug: 'last-bullet'
    },
    {
      id: '5',
      title: 'The Stranger 2',
      image: '/The_stranger_2.png',
      releaseDate: '2024-01-15',
      rating: 8.4,
      genre: ['Thriller', 'Drama', 'Mystery'],
      isHot: false,
      slug: 'the-stranger-2'
    },
    {
      id: '6',
      title: 'The Martian',
      image: '/The_Martian.webp',
      releaseDate: '2023-12-25',
      rating: 8.0,
      genre: ['Sci-Fi', 'Adventure', 'Drama'],
      isHot: false,
      slug: 'the-martian'
    },
    {
      id: '7',
      title: 'Mission Impossible: Fallout',
      image: '/mi.jpg',
      releaseDate: '2023-11-30',
      rating: 7.7,
      genre: ['Action', 'Adventure', 'Thriller'],
      isHot: false,
      slug: 'mission-impossible-fallout'
    },
    {
      id: '8',
      title: 'Blade Runner 2049',
      image: '/blade_runner.jpg',
      releaseDate: '2023-10-20',
      rating: 8.0,
      genre: ['Sci-Fi', 'Drama', 'Mystery'],
      isHot: false,
      slug: 'blade-runner-2049'
    },
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate how many days ago the movie was released
  const getDaysAgo = (dateString: string) => {
    const releaseDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - releaseDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Sort movies based on the selected option
  const sortedMovies = [...newReleases].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">New Releases</h1>
          <p className="text-gray-400 text-sm mt-1">The latest movies added to our collection</p>
        </div>
        
        {/* Sort dropdown */}
        <div className="relative">
          <label className="text-sm text-gray-400 mr-2">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-[#181e23] border border-[#232a31] text-white rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          >
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Hot new releases section */}
      <div className="mb-10">
        <h2 className="flex items-center text-lg font-medium text-white mb-4">
          <FireIcon className="h-5 w-5 text-yellow-400 mr-2" />
          Hot This Week
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedMovies.filter(movie => movie.isHot).map((movie) => (
            <Link href={`/watch/${movie.slug}`} key={movie.id}>
              <div className="bg-[#181e23] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/10 hover:scale-[1.02] transition-all group">
                <div className="relative h-56 md:h-64">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* NEW badge */}
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                    NEW
                  </div>
                  
                  {/* Rating badge */}
                  <div className="absolute top-2 right-2 bg-black/70 rounded-md px-2 py-1 flex items-center">
                    <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-white">{movie.rating.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-1 mb-1 text-lg">
                    {movie.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">{formatDate(movie.releaseDate)}</span>
                    <span className="text-yellow-400 font-medium">{getDaysAgo(movie.releaseDate)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((g, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-[#232a31] rounded-full text-gray-300">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other new releases */}
      <h2 className="text-lg font-medium text-white mb-4">Recent Additions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sortedMovies.filter(movie => !movie.isHot).map((movie) => (
          <Link href={`/watch/${movie.slug}`} key={movie.id}>
            <div className="bg-[#181e23] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/10 hover:scale-[1.03] transition-all group">
              <div className="relative h-64 sm:h-72">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
                
                {/* Rating badge */}
                <div className="absolute top-2 right-2 bg-black/70 rounded-md px-2 py-1 flex items-center">
                  <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-white">{movie.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="p-3">
                <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-1 mb-1">
                  {movie.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{getDaysAgo(movie.releaseDate)}</span>
                  {movie.genre.length > 0 && (
                    <span className="text-xs px-2 py-0.5 bg-[#232a31] rounded-full text-gray-300">
                      {movie.genre[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
