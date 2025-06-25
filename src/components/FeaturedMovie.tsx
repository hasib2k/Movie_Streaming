'use client';

import Image from 'next/image';
import { PlayCircleIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import featuredMovies from '../data/featuredMovie';
import { useState, useEffect, useRef } from 'react';

export default function FeaturedMovie() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  // Function to go to next slide
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPreviousIndex(currentIndex);
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    setTimeout(() => setIsTransitioning(false), 700); // Increased duration for smoother transition
  };

  // Function to go to previous slide
  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPreviousIndex(currentIndex);
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredMovies.length) % featuredMovies.length);
    setTimeout(() => setIsTransitioning(false), 700); // Increased duration for smoother transition
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setPreviousIndex(currentIndex);
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700); // Increased duration for smoother transition
  };

  // Auto play slides
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 7000); // Change slide every 7 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Reset timer when manually navigating
  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 7000);
    }
  };

  const handlePrev = () => {
    goToPrev();
    resetTimer();
  };

  const handleNext = () => {
    goToNext();
    resetTimer();
  };

  const currentMovie = featuredMovies[currentIndex];
  const previousMovie = featuredMovies[previousIndex];

  const getSlideStyles = (index: number) => {
    if (!isTransitioning) {
      return index === currentIndex 
        ? 'opacity-100 scale-100 z-10 transform translate-x-0' 
        : 'opacity-0 scale-95 z-0';
    }
    
    if (index === previousIndex) {
      return direction === 'next' 
        ? 'opacity-0 translate-x-[-8%] scale-95 z-0 transition-all duration-700 ease-out' 
        : 'opacity-0 translate-x-[8%] scale-95 z-0 transition-all duration-700 ease-out';
    }
    
    if (index === currentIndex) {
      return direction === 'next' 
        ? 'opacity-100 translate-x-0 scale-100 z-10 transition-all duration-700 ease-out' 
        : 'opacity-100 translate-x-0 scale-100 z-10 transition-all duration-700 ease-out';
    }
    
    return 'opacity-0 scale-95 z-0';
  };

  return (
    <section className="relative w-full h-56 xs:h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-[#232a31] mb-6 sm:mb-8 md:mb-12 shadow-2xl">
      {/* Slides container */}
      <div ref={slidesRef} className="relative w-full h-full">
        {featuredMovies.map((movie, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full ${getSlideStyles(index)}`}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              className="object-cover object-center opacity-80"
              priority={index === currentIndex}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1518]/95 via-[#0e1518]/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition transform hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition transform hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>

      {/* Content for each slide */}
      {featuredMovies.map((movie, index) => (
        <div 
          key={`content-${index}`}
          className={`absolute inset-0 z-10 flex flex-col justify-center pl-3 xs:pl-4 sm:pl-8 md:pl-16 gap-2 xs:gap-3 sm:gap-4 md:gap-8 w-full max-w-full transition-all duration-500 ${
            index === currentIndex 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform translate-x-8 pointer-events-none'
          }`}
        >
          <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3">
            {movie.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-[#181e23] text-[10px] xs:text-xs sm:text-sm px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 rounded-full text-[#f9f8ff] font-semibold shadow"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#f9f8ff] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] line-clamp-2 pr-3">{movie.title}</h2>
          <p className="text-[#f9f8ff]/90 max-w-full sm:max-w-xl text-xs xs:text-sm sm:text-base md:text-lg font-medium drop-shadow pr-3 line-clamp-2 sm:line-clamp-3">{movie.description}</p>
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 mt-2">
            <a
              href={movie.trailer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 xs:gap-2 bg-yellow-400 text-[#0e1518] font-bold px-3 xs:px-4 sm:px-5 md:px-7 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg"
            >
              <PlayCircleIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              <span className="whitespace-nowrap">Play trailer 2:30</span>
            </a>
            <button className="flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#181e23] hover:bg-[#232a31] transition transform hover:scale-110 active:scale-95 shadow-lg">
              <HeartIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#f9f8ff]" />
            </button>
          </div>
        </div>
      ))}

      {/* Pagination dots with enhanced styling */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                goToSlide(index);
                resetTimer();
              }
            }}
            className={`h-2 rounded-full transition-all duration-500 transform ${
              index === currentIndex 
                ? 'w-6 bg-yellow-400 scale-110' 
                : 'w-2 bg-white/50 hover:bg-white/70 hover:scale-105'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Progress bar animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-10 overflow-hidden">
        <div 
          key={`progress-${currentIndex}`}
          className={`h-full bg-yellow-400 origin-left ${isTransitioning ? 'w-0' : 'animate-progress'}`} 
          style={{
            animationDuration: '7s',
            animationTimingFunction: 'linear',
            animationIterationCount: 1,
            animationFillMode: 'forwards',
            animationPlayState: isTransitioning ? 'paused' : 'running'
          }}
        />
      </div>
    </section>
  );
}