'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowUturnLeftIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/solid';
import { HeartIcon, BookmarkIcon, ShareIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface MovieData {
  title: string;
  image: string;
  progress: number;
  type: string;
  runtime: string;
  currentTime: string;
  rating: number;
  year: number;
  genres: string[];
  synopsis: string;
  director?: string;
  creator?: string;
  starring: string[];
  nextEpisode?: string;
  season?: number;
  episode?: number;
  relatedMovies?: string[];
}

// Map of movie slugs to their data
const moviesData: Record<string, MovieData> = {
  'arcane-2021': {
    title: 'Arcane: 2021',
    image: '/arcane.jpg',
    progress: 55,
    type: 'series',
    season: 1,
    episode: 6,
    runtime: '44:28',
    currentTime: '24:30',
    rating: 9.0,
    year: 2021,
    genres: ['Animation', 'Action', 'Adventure', 'Sci-Fi', 'Fantasy'],
    synopsis: 'Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions and the power that will tear them apart. The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun.',
    creator: 'Christian Linke, Alex Yee',
    starring: ['Hailee Steinfeld', 'Ella Purnell', 'Kevin Alejandro', 'Katie Leung'],
    nextEpisode: 'Episode 7: The Boy Savior',
  },
  'blade-runner-2049': {
    title: 'Blade Runner 2049',
    image: '/blade_runner.jpg',
    progress: 55,
    type: 'movie',
    runtime: '2h 44min',
    currentTime: '1h 25min',
    rating: 8.0,
    year: 2017,
    genres: ['Sci-Fi', 'Action', 'Drama', 'Mystery', 'Thriller'],
    synopsis: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years. A new blade runner unearths a long-buried secret that has the potential to plunge what\'s left of society into chaos.',
    director: 'Denis Villeneuve',
    starring: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Sylvia Hoeks'],
    relatedMovies: ['Blade Runner', 'Dune', 'The Martian'],
  },
  'the-martian': {
    title: 'The Martian',
    image: '/The_Martian.webp',
    progress: 34,
    type: 'movie',
    runtime: '2h 24min',
    currentTime: '38min',
    rating: 8.0,
    year: 2015,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    synopsis: 'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive. During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew.',
    director: 'Ridley Scott',
    starring: ['Matt Damon', 'Jessica Chastain', 'Kristen Wiig', 'Jeff Daniels'],
    relatedMovies: ['Interstellar', 'Gravity', 'Ad Astra'],
  }
};

export default function WatchPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  // Timer reference for control hiding
  const controlsTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Find the movie/show data by slug
  const movieData: MovieData = moviesData[slug as keyof typeof moviesData] || {
    title: 'Content Not Found',
    image: '/blade_runner.jpg',
    progress: 0,
    type: 'unknown',
    runtime: 'N/A',
    currentTime: 'N/A',
    rating: 0,
    year: 2025,
    genres: [],
    synopsis: 'The requested content could not be found.',
    director: 'Unknown',
    starring: [],
  };
  
  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Reset the controls auto-hide timer
    setShowControls(true);
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }
    controlsTimerRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };
  
  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      controlsTimerRef.current = timer;
      
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [isPlaying]);
  
  // Show controls on mouse movement
  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true);
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
      controlsTimerRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    }
  };

  return (
    <div className="flex-1 bg-[#0a0d10]">
      {/* Video player */}
      <div 
        className="relative w-full aspect-video bg-black" 
        onMouseMove={handleMouseMove}
      >
        {/* Video thumbnail/placeholder */}
        <div className="absolute inset-0">
          <Image 
            src={movieData.image} 
            alt={movieData.title} 
            fill 
            className="object-cover"
          />
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button 
                onClick={togglePlay}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-yellow-400/80 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
              >
                <PlayIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#0e1518]" />
              </button>
            </div>
          )}
        </div>

        {/* Video controls */}
        <div 
          className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Top controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link 
                href="/"
                className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <ArrowUturnLeftIcon className="h-5 w-5 text-white" />
              </Link>
              <span className="ml-3 text-white font-medium text-shadow bg-black/30 px-3 py-1 rounded-md">
                {movieData.title} {movieData.type === 'series' && `- S${movieData.season}:E${movieData.episode}`}
              </span>
            </div>
            
            <div>
              <button 
                onClick={toggleFullscreen}
                className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                {isFullscreen ? (
                  <ArrowsPointingInIcon className="h-5 w-5 text-white" />
                ) : (
                  <ArrowsPointingOutIcon className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
          
          {/* Center play/pause button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {isPlaying ? (
              <button 
                onClick={togglePlay}
                className="h-16 w-16 sm:h-20 sm:w-20 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center opacity-0 transition-opacity hover:opacity-100 pointer-events-auto"
              >
                <PauseIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </button>
            ) : (
              <button 
                onClick={togglePlay}
                className="h-16 w-16 sm:h-20 sm:w-20 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all transform hover:scale-105 pointer-events-auto"
              >
                <PlayIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </button>
            )}
          </div>
          
          {/* Bottom controls */}
          <div className="space-y-2">
            {/* Progress bar */}
            <div className="relative h-1 bg-white/30 rounded">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-yellow-400 rounded" 
                style={{ width: `${movieData.progress}%` }}
              ></div>
              <div 
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-yellow-400 rounded-full" 
                style={{ left: `${movieData.progress}%` }}
              ></div>
            </div>
            
            {/* Control buttons and time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={togglePlay}
                  className="p-1.5 hover:bg-[#ffffff1a] rounded-full transition"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-5 w-5 text-white" />
                  ) : (
                    <PlayIcon className="h-5 w-5 text-white" />
                  )}
                </button>
                
                <button 
                  onClick={toggleMute}
                  className="p-1.5 hover:bg-[#ffffff1a] rounded-full transition"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="h-5 w-5 text-white" />
                  ) : (
                    <SpeakerWaveIcon className="h-5 w-5 text-white" />
                  )}
                </button>
                
                <div className="text-white text-xs sm:text-sm">
                  {movieData.currentTime} / {movieData.runtime}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-[#ffffff1a] rounded-full transition">
                  <HeartIcon className="h-5 w-5 text-white" />
                </button>
                
                <button className="p-1.5 hover:bg-[#ffffff1a] rounded-full transition">
                  <BookmarkIcon className="h-5 w-5 text-white" />
                </button>
                
                <button className="p-1.5 hover:bg-[#ffffff1a] rounded-full transition">
                  <ShareIcon className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content details */}
      <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
        {/* Title and metadata */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{movieData.title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm">
            <span className="bg-yellow-400 text-black font-bold px-1.5 py-0.5 rounded">
              {movieData.rating}
            </span>
            <span>{movieData.year}</span>
            <span>{movieData.runtime}</span>
            <div className="flex flex-wrap gap-2">
              {movieData.genres?.map((genre: string) => (
                <span key={genre} className="bg-[#232a31] px-2 py-0.5 rounded text-xs">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Synopsis */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
          <p className="text-[#f9f8ff]/80 text-sm sm:text-base">{movieData.synopsis}</p>
        </div>
        
        {/* Cast & Crew */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Cast & Crew</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {movieData.type === 'series' ? (
              <div className="flex">
                <span className="text-[#959ca3] w-20">Creator:</span>
                <span>{movieData.creator}</span>
              </div>
            ) : (
              <div className="flex">
                <span className="text-[#959ca3] w-20">Director:</span>
                <span>{movieData.director}</span>
              </div>
            )}
            
            <div className="flex">
              <span className="text-[#959ca3] w-20">Starring:</span>
              <span>{movieData.starring?.join(', ')}</span>
            </div>
          </div>
        </div>
        
        {/* Next episode (for series) or related content (for movies) */}
        {movieData.type === 'series' ? (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Continue Watching</h2>
            <div className="bg-[#181e23] p-4 rounded-lg">
              <div className="font-medium mb-1">Up next: {movieData.nextEpisode}</div>
              <div className="text-sm text-[#959ca3] mb-3">Continues from where you left off</div>
              <button className="w-full bg-yellow-400 text-[#0e1518] py-2 rounded font-medium hover:bg-yellow-300 transition">
                Play Next Episode
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {movieData.relatedMovies?.map((movie: string) => (
                <Link 
                  key={movie} 
                  href={`/movie/${movie.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-[#181e23] rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      {movie}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 py-4">
          <button className="flex items-center gap-2 bg-[#232a31] hover:bg-[#2c3540] px-4 py-2 rounded transition">
            <HeartIcon className="h-5 w-5" />
            <span>Add to favorites</span>
          </button>
          
          <button className="flex items-center gap-2 bg-[#232a31] hover:bg-[#2c3540] px-4 py-2 rounded transition">
            <BookmarkIcon className="h-5 w-5" />
            <span>Watch later</span>
          </button>
          
          <button className="flex items-center gap-2 bg-[#232a31] hover:bg-[#2c3540] px-4 py-2 rounded transition">
            <ShareIcon className="h-5 w-5" />
            <span>Share</span>
          </button>
          
          <button className="flex items-center gap-2 bg-[#232a31] hover:bg-[#2c3540] px-4 py-2 rounded-full transition ml-auto">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
