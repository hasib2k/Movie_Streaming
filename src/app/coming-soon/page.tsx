import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Sample coming soon movies data
const comingSoonMovies = [
  {
    id: 1,
    title: "The Electric State",
    image: "/The_Electric_State.jpg",
    releaseDate: "December 15, 2025",
    director: "Anthony & Joe Russo",
    cast: ["Millie Bobby Brown", "Chris Pratt", "Ke Huy Quan"],
    tags: ["Sci-Fi", "Action", "Adventure"],
    description: "In an alternate 1997, a teenage orphan and her robot companion embark on a cross-country mission in search of her younger brother, traveling across an imaginative vision of the American West.",
    daysUntil: 174,
  },
  {
    id: 2,
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    releaseDate: "August 8, 2025",
    director: "Barry Jenkins",
    cast: ["Aaron Pierre", "Kelvin Harrison Jr.", "Seth Rogen"],
    tags: ["Animation", "Adventure", "Drama"],
    description: "The origin story of the iconic Lion King villain, exploring Mufasa's rise as the beloved ruler of the Pride Lands and his complex relationship with his brother Scar.",
    daysUntil: 44,
  },
  {
    id: 3,
    title: "Last Bullet",
    image: "/Last_bullet.jpg",
    releaseDate: "September 12, 2025",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
    tags: ["Action", "Crime", "Thriller"],
    description: "John Wick faces his deadliest challenge yet as he is forced to confront the consequences of his actions and decide whether to finally put down his guns or continue his life as the world's most feared assassin.",
    daysUntil: 79,
  },
  {
    id: 4,
    title: "Mission: Impossible - The Final Run",
    image: "/mi.jpg",
    releaseDate: "July 3, 2025",
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Simon Pegg"],
    tags: ["Action", "Adventure", "Thriller"],
    description: "Ethan Hunt and his IMF team embark on their most personal mission yet, racing against time and pursued by deadly forces as they attempt to protect the world from a new apocalyptic threat.",
    daysUntil: 8,
  },
  {
    id: 5,
    title: "The Stranger 2",
    image: "/The_stranger_2.png",
    releaseDate: "November 21, 2025",
    director: "Thomas M. Wright",
    cast: ["Joel Edgerton", "Sean Harris", "Jada Alberts"],
    tags: ["Crime", "Drama", "Mystery"],
    description: "The intense thriller continues as an undercover operative becomes further entangled in the dangerous criminal world he's infiltrated, testing the limits of his identity and morality.",
    daysUntil: 149,
  },
  {
    id: 6,
    title: "Lilo & Stitch",
    image: "/lilo_stitch.jpg",
    releaseDate: "July 25, 2025",
    director: "Dean Fleischer Camp",
    cast: ["Maia Kealoha", "Sydney Agudong", "Zach Galifianakis"],
    tags: ["Adventure", "Comedy", "Family"],
    description: "A Hawaiian girl adopts an unusual pet who is actually a notorious extra-terrestrial fugitive in this live-action adaptation of the beloved Disney animated film.",
    daysUntil: 30,
  }
];

export default function ComingSoonPage() {
  // Calculate days until release
  const today = new Date();
  
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Coming Soon</h1>
        <p className="text-[#959ca3] text-sm md:text-base">
          Upcoming releases you won't want to miss
        </p>
      </div>

      <div className="space-y-6">
        {comingSoonMovies.sort((a, b) => a.daysUntil - b.daysUntil).map(movie => (
          <div key={movie.id} className="bg-[#181e23] rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Image container */}
              <div className="md:w-1/3 lg:w-1/4">
                <div className="relative h-48 sm:h-60 md:h-full">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0e1518] to-transparent md:hidden" />
                </div>
              </div>
              
              {/* Content container */}
              <div className="p-4 md:p-6 md:w-2/3 lg:w-3/4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold">{movie.title}</h2>
                    <div className="flex items-center text-sm text-[#959ca3] mt-1">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{movie.releaseDate}</span>
                    </div>
                  </div>
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {movie.daysUntil === 0 ? 'Today' : 
                     movie.daysUntil === 1 ? 'Tomorrow' : 
                     `${movie.daysUntil} days`}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {movie.tags.map(tag => (
                    <span key={tag} className="text-xs bg-[#232a31] px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                
                <p className="text-[#f9f8ff]/80 text-sm mb-4 line-clamp-2 md:line-clamp-3">
                  {movie.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex text-sm">
                    <span className="text-[#959ca3] w-20">Director:</span>
                    <span>{movie.director}</span>
                  </div>
                  <div className="flex text-sm">
                    <span className="text-[#959ca3] w-20">Cast:</span>
                    <span className="line-clamp-1">{movie.cast.join(", ")}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <button className="flex items-center gap-1 text-yellow-400 text-sm hover:underline">
                    <StarIcon className="h-4 w-4" />
                    Add to watchlist
                  </button>
                  
                  <Link 
                    href={`/movie/${encodeURIComponent(movie.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'))}`}
                    className="flex items-center gap-1 text-sm text-yellow-400 hover:underline"
                  >
                    More details
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
