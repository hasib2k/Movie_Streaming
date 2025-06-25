"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Movie {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: number;
  genre: string[];
  slug: string;
}

export default function PopularMoviesPage() {
  const [sortBy, setSortBy] = useState<string>('popularity');
  
  // Sample popular movies data
  const popularMovies: Movie[] = [
    {
      id: '1',
      title: 'Dune: Part Two',
      image: '/Dune_2.webp',
      year: '2024',
      rating: 8.7,
      genre: ['Sci-Fi', 'Adventure', 'Drama'],
      slug: 'dune-part-two'
    },
    {
      id: '2',
      title: 'The Electric State',
      image: '/The_Electric_State.jpg',
      year: '2024',
      rating: 7.5,
      genre: ['Sci-Fi', 'Action', 'Adventure'],
      slug: 'the-electric-state'
    },
    {
      id: '3',
      title: 'Blade Runner 2049',
      image: '/blade_runner.jpg',
      year: '2017',
      rating: 8.0,
      genre: ['Sci-Fi', 'Drama', 'Mystery'],
      slug: 'blade-runner-2049'
    },
    {
      id: '4',
      title: 'The Martian',
      image: '/The_Martian.webp',
      year: '2015',
      rating: 8.0,
      genre: ['Sci-Fi', 'Adventure', 'Drama'],
      slug: 'the-martian'
    },
    {
      id: '5',
      title: 'Last Bullet',
      image: '/Last_bullet.jpg',
      year: '2022',
      rating: 7.2,
      genre: ['Action', 'Thriller', 'Crime'],
      slug: 'last-bullet'
    },
    {
      id: '6',
      title: 'Mufasa: The Lion King',
      image: '/Mufasa.jpg',
      year: '2024',
      rating: 7.8,
      genre: ['Animation', 'Adventure', 'Drama'],
      slug: 'mufasa-lion-king'
    },
    {
      id: '7',
      title: 'Mission Impossible: Fallout',
      image: '/mi.jpg',
      year: '2018',
      rating: 7.7,
      genre: ['Action', 'Adventure', 'Thriller'],
      slug: 'mission-impossible-fallout'
    },
    {
      id: '8',
      title: 'Lilo & Stitch',
      image: '/lilo_stitch.jpg',
      year: '2002',
      rating: 7.3,
      genre: ['Animation', 'Adventure', 'Comedy'],
      slug: 'lilo-and-stitch'
    },
    {
      id: '9',
      title: 'Arcane',
      image: '/arcane.jpg',
      year: '2021',
      rating: 9.0,
      genre: ['Animation', 'Action', 'Adventure'],
      slug: 'arcane'
    },
    {
      id: '10',
      title: 'How to Train Your Dragon',
      image: '/how-to-train-your-dragon-dreamworks.avif',
      year: '2010',
      rating: 8.1,
      genre: ['Animation', 'Action', 'Adventure'],
      slug: 'how-to-train-your-dragon'
    }
  ];

  // Sort movies based on the selected option
  const sortedMovies = [...popularMovies].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'year':
        return parseInt(b.year) - parseInt(a.year);
      default: // 'popularity' - already in popularity order in our mock data
        return 0;
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-white">Popular Movies</h1>
        
        {/* Sort dropdown */}
        <div className="relative">
          <label className="text-sm text-gray-400 mr-2">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-[#181e23] border border-[#232a31] text-white rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          >
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="year">Release Date</option>
            <option value="name">Name</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Movies grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sortedMovies.map((movie) => (
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
                  <span className="text-gray-400">{movie.year}</span>
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
