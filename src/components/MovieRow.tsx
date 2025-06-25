import movies from '../data/movies';
import MovieCard from './MovieCard';

interface MovieRowProps {
  category: string;
}

export default function MovieRow({ category }: MovieRowProps) {
  const filtered = movies.filter((movie) => movie.category === category);
  return (
    <section className="mb-6 xs:mb-7 sm:mb-8 md:mb-10">
      <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
        <h2 className="text-base xs:text-lg sm:text-xl font-bold text-[#f9f8ff]">{category} Movies</h2>
        <a href="/see-more" className="text-[#959ca3] text-[10px] xxs:text-xs sm:text-sm hover:underline">See More</a>
      </div>      <div className="flex gap-2 xxs:gap-3 xs:gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide pb-2 scroll-smooth scrolling-touch -mx-2 px-2">
        {filtered.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </section>
  );
} 