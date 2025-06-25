import movies from '../data/movies';
import Image from 'next/image';

export default function SeeMorePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#f9f8ff]">All Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <div key={movie.title} className="bg-[#181e23] rounded-xl p-4 flex flex-col items-center">
            <div className="relative w-40 h-56 mb-3">
              <Image src={movie.image} alt={movie.title} fill className="object-cover rounded-lg" />
            </div>
            <div className="text-lg font-semibold text-[#f9f8ff] mb-1">{movie.title}</div>
            <div className="text-sm text-[#959ca3] mb-1">{movie.year} • {movie.category}</div>
            <div className="text-yellow-400 font-bold">★ {movie.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'See More Movies',
}; 