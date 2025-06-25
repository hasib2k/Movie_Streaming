import Image from 'next/image';
import { PlayCircleIcon, HeartIcon } from '@heroicons/react/24/solid';
import featuredMovie from '../data/featuredMovie';

export default function FeaturedMovie() {
  return (
    <section className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-[#232a31] flex items-center mb-8 sm:mb-12 shadow-2xl">
      {/* Movie Image */}
      <Image
        src={featuredMovie.image}
        alt={featuredMovie.title}
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1518]/95 via-[#0e1518]/70 to-transparent" />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center pl-4 sm:pl-16 gap-4 sm:gap-8">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {featuredMovie.tags.map(tag => (
            <span key={tag} className="bg-[#181e23] text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full text-[#f9f8ff] font-semibold shadow">{tag}</span>
          ))}
        </div>
        <h2 className="text-2xl sm:text-5xl font-extrabold text-[#f9f8ff] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">{featuredMovie.title}</h2>
        <p className="text-[#f9f8ff]/90 max-w-xl text-sm sm:text-lg font-medium drop-shadow">{featuredMovie.description}</p>
        <div className="flex items-center gap-4 sm:gap-6 mt-2">
          <a
            href={featuredMovie.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-[#0e1518] font-bold px-5 sm:px-7 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-base sm:text-lg"
          >
            <PlayCircleIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            Play trailer 2:30
          </a>
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181e23] hover:bg-[#232a31] transition shadow-lg">
            <HeartIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[#f9f8ff]" />
          </button>
        </div>
      </div>
    </section>
  );
} 