"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Genre {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  slug: string;
}

export default function GenresPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const genres: Genre[] = [
    {
      id: '1',
      name: 'Action',
      description: 'Thrilling sequences of combat and adventure',
      image: '/mi.jpg',
      count: 187,
      slug: 'action'
    },
    {
      id: '2',
      name: 'Adventure',
      description: 'Journey to exciting and unknown places',
      image: '/The_Martian.webp',
      count: 142,
      slug: 'adventure'
    },
    {
      id: '3',
      name: 'Animation',
      description: 'Films using animated drawings or computer-generated images',
      image: '/how-to-train-your-dragon-dreamworks.avif',
      count: 95,
      slug: 'animation'
    },
    {
      id: '4',
      name: 'Comedy',
      description: 'Light-hearted entertainment designed to amuse',
      image: '/lilo_stitch.jpg',
      count: 207,
      slug: 'comedy'
    },
    {
      id: '5',
      name: 'Crime',
      description: 'Stories involving criminal acts and justice',
      image: '/Last_bullet.jpg',
      count: 124,
      slug: 'crime'
    },
    {
      id: '6',
      name: 'Drama',
      description: 'Serious presentations focused on realistic characters',
      image: '/arcane.jpg',
      count: 312,
      slug: 'drama'
    },
    {
      id: '7',
      name: 'Fantasy',
      description: 'Stories with magical and supernatural elements',
      image: '/Mufasa.jpg',
      count: 85,
      slug: 'fantasy'
    },
    {
      id: '8',
      name: 'Horror',
      description: 'Films intended to frighten and unsettle',
      image: '/The_stranger_2.png',
      count: 93,
      slug: 'horror'
    },
    {
      id: '9',
      name: 'Mystery',
      description: 'Stories that revolve around solving a puzzle or crime',
      image: '/The_stranger_2.png',
      count: 76,
      slug: 'mystery'
    },
    {
      id: '10',
      name: 'Romance',
      description: 'Stories centered on romantic relationships',
      image: '/The_Martian.webp',
      count: 138,
      slug: 'romance'
    },
    {
      id: '11',
      name: 'Sci-Fi',
      description: 'Speculative fiction often based on scientific concepts',
      image: '/blade_runner.jpg',
      count: 112,
      slug: 'sci-fi'
    },
    {
      id: '12',
      name: 'Thriller',
      description: 'Stories designed to create suspense and excitement',
      image: '/Last_bullet.jpg',
      count: 154,
      slug: 'thriller'
    },
    {
      id: '13',
      name: 'Documentary',
      description: 'Non-fictional examination of real-world subjects',
      image: '/Dune_2.webp',
      count: 67,
      slug: 'documentary'
    },
    {
      id: '14',
      name: 'Family',
      description: 'Films appropriate for all age groups',
      image: '/lilo_stitch.jpg',
      count: 78,
      slug: 'family'
    },
    {
      id: '15',
      name: 'War',
      description: 'Films focused on warfare and military conflicts',
      image: '/Dune_2.webp',
      count: 45,
      slug: 'war'
    },
    {
      id: '16',
      name: 'Western',
      description: 'Stories set in the American Old West',
      image: '/The_Electric_State.jpg',
      count: 32,
      slug: 'western'
    },
  ];

  // Filter genres based on search query
  const filteredGenres = genres.filter(genre => 
    genre.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Movie Genres</h1>
          <p className="text-gray-400 text-sm mt-1">Browse movies by category</p>
        </div>
        
        {/* Search input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search genres..."
            className="w-full bg-[#181e23] rounded-lg pl-4 pr-10 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filteredGenres.length === 0 ? (
        <div className="bg-[#181e23] rounded-xl p-8 text-center">
          <h3 className="text-xl font-medium text-white mb-2">No matching genres found</h3>
          <p className="text-gray-400">
            Try a different search term or browse all available genres
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGenres.map((genre) => (
            <Link href={`/movies/genres/${genre.slug}`} key={genre.id}>
              <div className="relative overflow-hidden rounded-lg aspect-[3/2] group">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={genre.image}
                    alt={genre.name}
                    fill
                    className="object-cover brightness-50 group-hover:brightness-40 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                    {genre.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2 opacity-80 line-clamp-2">
                    {genre.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs px-2 py-1 bg-[#232a31]/80 rounded text-gray-300">
                      {genre.count} movies
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
