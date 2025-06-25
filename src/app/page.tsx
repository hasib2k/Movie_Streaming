import Image from "next/image";
import FeaturedMovie from "../components/FeaturedMovie";
import CategoryFilters from "../components/CategoryFilters";
import MovieRow from "../components/MovieRow";
import categories from "../data/categories";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="px-3 xs:px-4 sm:px-6 md:px-8 pb-6 xs:pb-8">
      <FeaturedMovie />
      <CategoryFilters />
      {categories.slice(0, 6).map((cat) => (
        <MovieRow key={cat} category={cat} />
      ))}
      <FAQ />
    </div>
  );
}
