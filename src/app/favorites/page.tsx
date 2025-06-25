import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Sample favorites data
const favorites = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    rating: 8.7,
    year: "2025",
    duration: "2h 46min",
    genre: "Sci-Fi, Adventure",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee."
  },
  {
    id: 2,
    title: "How to Train Your Dragon",
    image: "/how-to-train-your-dragon-dreamworks.avif",
    rating: 8.1,
    year: "2010",
    duration: "1h 38min",
    genre: "Animation, Adventure",
    description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."
  },
  {
    id: 3,
    title: "Blade Runner 2049",
    image: "/blade_runner.jpg",
    rating: 8.0,
    year: "2017",
    duration: "2h 44min",
    genre: "Sci-Fi, Action",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
  },
  {
    id: 4,
    title: "The Martian",
    image: "/The_Martian.webp",
    rating: 8.0,
    year: "2015",
    duration: "2h 24min",
    genre: "Sci-Fi, Adventure",
    description: "An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive."
  },
  {
    id: 5,
    title: "Arcane",
    image: "/arcane.jpg", 
    rating: 9.0,
    year: "2021",
    duration: "Series",
    genre: "Animation, Action",
    description: "Set in the utopian city of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions and the power that will tear them apart."
  },
];

export default function FavoritesPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">My Favorites</h1>
        <p className="text-[#959ca3] text-sm md:text-base">Your personally curated collection of favorites</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {favorites.map(movie => (
          <div key={movie.id} className="bg-[#181e23] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="relative aspect-video">
              <Image 
                src={movie.image} 
                alt={movie.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                  <HeartIcon className="h-5 w-5 text-red-500" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold line-clamp-1">{movie.title}</h3>
                <div className="bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded">
                  {movie.rating}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-[#959ca3] mb-3">
                <span>{movie.year}</span>
                <span className="mx-2">•</span>
                <span>{movie.duration}</span>
                <span className="mx-2">•</span>
                <span className="line-clamp-1">{movie.genre}</span>
              </div>
              
              <p className="text-sm text-[#f9f8ff]/70 mb-4 line-clamp-2">
                {movie.description}
              </p>
              
              <Link 
                href={`/watch/${encodeURIComponent(movie.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'))}`}
                className="inline-flex items-center justify-center w-full py-2 bg-[#232a31] hover:bg-[#2c3540] rounded-lg transition-colors text-sm font-medium"
              >
                Watch Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state - show when no favorites */}
      {favorites.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <HeartOutlineIcon className="h-16 w-16 text-[#959ca3] mb-4" />
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-[#959ca3] max-w-md">
            Start adding movies and shows to your favorites by clicking the heart icon while browsing
          </p>
        </div>
      )}
    </main>
  );
}
