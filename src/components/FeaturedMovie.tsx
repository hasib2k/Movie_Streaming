import Image from 'next/image';
import { PlayCircleIcon, HeartIcon } from '@heroicons/react/24/solid';
import featuredMovie from '../data/featuredMovie';

export default function FeaturedMovie() {
  return (
    <section className="relative w-full h-56 xs:h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-[#232a31] flex items-center mb-6 sm:mb-8 md:mb-12 shadow-2xl">
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
      <div className="relative z-10 flex flex-col h-full justify-center pl-3 xs:pl-4 sm:pl-8 md:pl-16 gap-2 xs:gap-3 sm:gap-4 md:gap-8 w-full max-w-full">
        <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3">
          {featuredMovie.tags.map(tag => (
            <span key={tag} className="bg-[#181e23] text-[10px] xs:text-xs sm:text-sm px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 rounded-full text-[#f9f8ff] font-semibold shadow">{tag}</span>
          ))}
        </div>
        <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#f9f8ff] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] line-clamp-2 pr-3">{featuredMovie.title}</h2>
        <p className="text-[#f9f8ff]/90 max-w-full sm:max-w-xl text-xs xs:text-sm sm:text-base md:text-lg font-medium drop-shadow pr-3 line-clamp-2 sm:line-clamp-3">{featuredMovie.description}</p>
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 mt-2">
          <a
            href={featuredMovie.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 xs:gap-2 bg-yellow-400 text-[#0e1518] font-bold px-3 xs:px-4 sm:px-5 md:px-7 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-xs xs:text-sm sm:text-base md:text-lg"
          >
            <PlayCircleIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            <span className="whitespace-nowrap">Play trailer 2:30</span>
          </a>
          <button className="flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#181e23] hover:bg-[#232a31] transition shadow-lg">
            <HeartIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#f9f8ff]" />
          </button>
        </div>
      </div>
    </section>
  );
}