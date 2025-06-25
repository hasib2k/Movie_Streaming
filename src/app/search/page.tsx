"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon, XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  type: 'movie' | 'tv' | 'person';
  image: string;
  year: string;
  rating: number;
  genre: string;
  slug: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    year: 'all',
    genre: 'all',
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data for filters
  const filterOptions = {
    type: ['all', 'movie', 'tv', 'person'],
    year: ['all', '2023', '2022', '2021', '2020', '2019', '2010s', '2000s', '1990s'],
    genre: ['all', 'action', 'adventure', 'comedy', 'drama', 'fantasy', 'horror', 'sci-fi', 'thriller']
  };

  // Sample search results
  const sampleResults: SearchResult[] = [
    {
      id: '1',
      title: 'Dune: Part Two',
      type: 'movie',
      image: '/Dune_2.webp',
      year: '2024',
      rating: 8.7,
      genre: 'sci-fi',
      slug: 'dune-part-two'
    },
    {
      id: '2',
      title: 'The Electric State',
      type: 'movie',
      image: '/The_Electric_State.jpg',
      year: '2024',
      rating: 7.5,
      genre: 'sci-fi',
      slug: 'the-electric-state'
    },
    {
      id: '3',
      title: 'Arcane',
      type: 'tv',
      image: '/arcane.jpg',
      year: '2021',
      rating: 9.0,
      genre: 'animation',
      slug: 'arcane'
    },
    {
      id: '4',
      title: 'The Martian',
      type: 'movie',
      image: '/The_Martian.webp',
      year: '2015',
      rating: 8.0,
      genre: 'sci-fi',
      slug: 'the-martian'
    },
    {
      id: '5',
      title: 'Blade Runner 2049',
      type: 'movie',
      image: '/blade_runner.jpg',
      year: '2017',
      rating: 8.0,
      genre: 'sci-fi',
      slug: 'blade-runner-2049'
    },
    {
      id: '6',
      title: 'Last Bullet',
      type: 'movie',
      image: '/Last_bullet.jpg',
      year: '2022',
      rating: 7.2,
      genre: 'action',
      slug: 'last-bullet'
    },
    {
      id: '7',
      title: 'Stranger 2',
      type: 'tv',
      image: '/The_stranger_2.png',
      year: '2023',
      rating: 8.4,
      genre: 'thriller',
      slug: 'stranger-2'
    },
    {
      id: '8',
      title: 'Lilo & Stitch',
      type: 'movie',
      image: '/lilo_stitch.jpg',
      year: '2002',
      rating: 7.3,
      genre: 'animation',
      slug: 'lilo-and-stitch'
    }
  ];

  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
  }, [initialQuery]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filtered = sampleResults.filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 800);
  };

  const applyFilters = (results: SearchResult[]) => {
    return results.filter(result => {
      const typeMatch = activeFilters.type === 'all' || result.type === activeFilters.type;
      const yearMatch = activeFilters.year === 'all' || result.year === activeFilters.year ||
        (activeFilters.year === '2010s' && parseInt(result.year) >= 2010 && parseInt(result.year) < 2020) ||
        (activeFilters.year === '2000s' && parseInt(result.year) >= 2000 && parseInt(result.year) < 2010) ||
        (activeFilters.year === '1990s' && parseInt(result.year) >= 1990 && parseInt(result.year) < 2000);
      const genreMatch = activeFilters.genre === 'all' || result.genre === activeFilters.genre;
      
      return typeMatch && yearMatch && genreMatch;
    });
  };

  const filteredResults = applyFilters(results);
  
  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters({
      ...activeFilters,
      [category]: value
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      type: 'all',
      year: 'all',
      genre: 'all'
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-400';
    if (rating >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search bar */}
      <div className="mb-8">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for movies, TV shows, actors..."
            className="w-full bg-[#181e23] rounded-lg pl-12 pr-16 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <MagnifyingGlassIcon className="absolute left-4 h-5 w-5 text-gray-400" />
          
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setResults([]);
              }}
              className="absolute right-[4.5rem] text-gray-400 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
          
          <button
            onClick={handleSearch}
            className="absolute right-4 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-md text-sm font-medium transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filters section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium text-white">Search Results</h2>
            {results.length > 0 && (
              <span className="text-sm text-gray-400">({filteredResults.length} results)</span>
            )}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 bg-[#181e23] hover:bg-[#232a31] px-3 py-1.5 rounded-lg text-sm transition-colors"
            >
              <FunnelIcon className="h-4 w-4" />
              Filters
            </button>
            
            {(activeFilters.type !== 'all' || activeFilters.year !== 'all' || activeFilters.genre !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-yellow-400 hover:text-yellow-300 text-sm"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
        
        {/* Filters dropdown */}
        {showFilters && (
          <div className="bg-[#181e23] rounded-lg p-4 mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Type</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.type.map(type => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange('type', type)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${activeFilters.type === type ? 'bg-yellow-400 text-black' : 'bg-[#232a31] text-white hover:bg-[#2c3540]'}`}
                  >
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Year</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.year.map(year => (
                  <button
                    key={year}
                    onClick={() => handleFilterChange('year', year)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${activeFilters.year === year ? 'bg-yellow-400 text-black' : 'bg-[#232a31] text-white hover:bg-[#2c3540]'}`}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Genre</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.genre.map(genre => (
                  <button
                    key={genre}
                    onClick={() => handleFilterChange('genre', genre)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${activeFilters.genre === genre ? 'bg-yellow-400 text-black' : 'bg-[#232a31] text-white hover:bg-[#2c3540]'}`}
                  >
                    {genre === 'all' ? 'All Genres' : genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search results */}
      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : searchQuery && results.length === 0 ? (
        <div className="bg-[#181e23] rounded-xl p-8 text-center">
          <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
            <MagnifyingGlassIcon className="h-16 w-16" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
          <p className="text-gray-400 mb-4">
            No matches found for "{searchQuery}". Please try another search term.
          </p>
          <p className="text-sm text-gray-400">
            Try using different keywords or check for typos
          </p>
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredResults.map((result) => (
            <Link href={`/watch/${result.slug}`} key={result.id}>
              <div className="bg-[#181e23] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/10 hover:scale-[1.02] transition-all group">
                <div className="relative h-56">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
                    {result.title}
                  </h3>
                  
                  <div className="flex flex-wrap justify-between items-center mt-2 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">{result.year}</span>
                      <span className={`text-sm font-medium ${getRatingColor(result.rating)}`}>
                        {result.rating.toFixed(1)}
                      </span>
                    </div>
                    
                    <div>
                      <span className="text-xs px-2 py-1 bg-[#232a31] rounded-full text-gray-300 capitalize">
                        {result.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : !searchQuery && (
        <div className="bg-[#181e23] rounded-xl p-8 text-center">
          <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
            <MagnifyingGlassIcon className="h-16 w-16" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Search for movies and TV shows</h3>
          <p className="text-gray-400">
            Type in the search bar above to find your favorite content
          </p>
        </div>
      )}

      {/* Popular searches */}
      {!searchQuery && (
        <div className="mt-12">
          <h2 className="text-lg font-medium text-white mb-4">Popular Searches</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {['Dune', 'Action Movies', 'Sci-Fi', 'New Releases', 'The Martian', 'Animation', 'Comedy', 'TV Shows', 'Fantasy', 'Thriller'].map((term, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchQuery(term);
                  setTimeout(() => handleSearch(), 0);
                }}
                className="bg-[#181e23] hover:bg-[#232a31] rounded-lg py-3 px-4 text-center text-sm transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
