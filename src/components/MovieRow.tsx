import movies from '../data/movies';
import MovieCard from './MovieCard';

interface MovieRowProps {
  category: string;
}

export default function MovieRow({ category }: MovieRowProps) {
  const filtered = movies.filter((movie) => movie.category === category);
  return (
    <section className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#f9f8ff]">{category} Movies</h2>
        <a href="/see-more" className="text-[#959ca3] text-xs sm:text-sm hover:underline">See More</a>
      </div>
      <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2">
        {filtered.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
        <a
          href="/see-more"
          className="w-36 sm:w-40 flex-shrink-0 flex flex-col items-center justify-center bg-[#181e23] rounded-xl h-48 sm:h-56 text-yellow-400 font-semibold text-base sm:text-lg hover:bg-[#232a31] transition cursor-pointer"
          style={{ minWidth: '9rem', minHeight: '12rem' }}
        >
          See More
        </a>
      </div>
    </section>
  );
} 