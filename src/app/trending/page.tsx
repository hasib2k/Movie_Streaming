import Image from 'next/image';
import Link from 'next/link';
import { FireIcon, ChartBarIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

// Sample trending data
const trendingContent = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    type: "movie",
    rank: 1,
    rankChange: "up",
    trending: 97,
    duration: "2h 46min",
    year: "2025",
    genre: "Sci-Fi, Adventure",
    views: "8.7M"
  },
  {
    id: 2,
    title: "The Martian",
    image: "/The_Martian.webp",
    type: "movie",
    rank: 2,
    rankChange: "same",
    trending: 93,
    duration: "2h 24min",
    year: "2025",
    genre: "Sci-Fi, Drama",
    views: "7.2M"
  },
  {
    id: 3,
    title: "Blade Runner 2049",
    image: "/blade_runner.jpg",
    type: "movie",
    rank: 3,
    rankChange: "up",
    trending: 91,
    duration: "2h 44min",
    year: "2025",
    genre: "Sci-Fi, Drama",
    views: "6.8M"
  },
  {
    id: 4,
    title: "Arcane",
    image: "/arcane.jpg",
    type: "series",
    rank: 4,
    rankChange: "down",
    trending: 88,
    duration: "Season 2",
    year: "2025",
    genre: "Animation, Action",
    views: "6.5M"
  },
  {
    id: 5,
    title: "How to Train Your Dragon",
    image: "/how-to-train-your-dragon-dreamworks.avif",
    type: "movie",
    rank: 5,
    rankChange: "up",
    trending: 85,
    duration: "1h 56min",
    year: "2025",
    genre: "Animation, Adventure",
    views: "5.9M"
  },
  {
    id: 6,
    title: "The Electric State",
    image: "/The_Electric_State.jpg",
    type: "movie",
    rank: 6,
    rankChange: "new",
    trending: 82,
    duration: "2h 10min",
    year: "2025",
    genre: "Sci-Fi, Action",
    views: "5.1M"
  },
  {
    id: 7,
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    type: "movie",
    rank: 7,
    rankChange: "down",
    trending: 78,
    duration: "1h 58min",
    year: "2025",
    genre: "Animation, Adventure",
    views: "4.7M"
  },
  {
    id: 8,
    title: "Last Bullet",
    image: "/Last_bullet.jpg",
    type: "movie",
    rank: 8,
    rankChange: "new",
    trending: 75,
    duration: "2h 15min",
    year: "2025",
    genre: "Action, Thriller",
    views: "4.2M"
  }
];

export default function TrendingPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-2">
          <FireIcon className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
          <span>Trending Now</span>
        </h1>
        <p className="text-[#959ca3] text-sm md:text-base ml-8 md:ml-10">
          What everyone is watching this week
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {trendingContent.map((item) => (
          <Link 
            key={item.id}
            href={`/watch/${encodeURIComponent(item.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'))}`}
            className="bg-[#181e23] rounded-xl overflow-hidden flex items-center hover:bg-[#1e252b] transition-colors shadow-md hover:shadow-lg"
          >
            {/* Rank number */}
            <div className="hidden sm:flex items-center justify-center min-w-[60px] md:min-w-[80px] h-full bg-[#10151a] px-3 md:px-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-[#959ca3]">
                  {item.rank}
                </div>
                <div className="flex items-center justify-center mt-1">
                  {item.rankChange === "up" && (
                    <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,15L12,10L17,15H7Z" />
                    </svg>
                  )}
                  {item.rankChange === "down" && (
                    <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,10L12,15L17,10H7Z" />
                    </svg>
                  )}
                  {item.rankChange === "new" && (
                    <span className="text-xs text-yellow-400 font-bold">NEW</span>
                  )}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/60 transition-opacity">
                <PlayCircleIcon className="h-8 w-8 md:h-10 md:w-10 text-yellow-400" />
              </div>

              {/* Mobile rank indicator */}
              <div className="absolute top-0 left-0 sm:hidden bg-black/70 px-2 py-1">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">#{item.rank}</span>
                  {item.rankChange === "up" && (
                    <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,15L12,10L17,15H7Z" />
                    </svg>
                  )}
                  {item.rankChange === "down" && (
                    <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,10L12,15L17,10H7Z" />
                    </svg>
                  )}
                  {item.rankChange === "new" && (
                    <span className="text-[10px] text-yellow-400 font-bold">NEW</span>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-3 xs:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 sm:mb-2">
                <h2 className="text-base xs:text-lg sm:text-xl font-bold">{item.title}</h2>
                
                {/* Trending indicator */}
                <div className="flex items-center mt-1 sm:mt-0 text-xs sm:text-sm">
                  <ChartBarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 font-medium">{item.trending}% trending</span>
                </div>
              </div>

              {/* Type badge */}
              <div className="inline-block text-[10px] xs:text-xs uppercase bg-[#232a31] text-[#959ca3] px-2 py-0.5 rounded mb-2">
                {item.type}
              </div>
                
              <div className="flex flex-wrap items-center gap-x-3 text-xs text-[#959ca3]">
                <div className="flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  <span>{item.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>{item.year}</span>
                </div>
                
                <span className="hidden xs:inline-block">{item.genre}</span>
              </div>
              
              <div className="mt-2 text-xs sm:text-sm flex justify-between items-center">
                <span className="text-[#959ca3]">
                  <span className="font-bold text-white">{item.views}</span> views this week
                </span>
                
                <span className="text-yellow-400 hover:underline">
                  Watch now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-6 py-2 rounded-full text-sm transition-colors">
          Load more
        </button>
      </div>
    </main>
  );
}
