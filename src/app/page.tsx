import Image from "next/image";
import Header from "../components/Header";
import FeaturedMovie from "../components/FeaturedMovie";
import CategoryFilters from "../components/CategoryFilters";
import MovieRow from "../components/MovieRow";
import categories from "../data/categories";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 px-8 pb-8">
        <FeaturedMovie />
        <CategoryFilters />
        {categories.slice(0, 4).map((cat) => (
          <MovieRow key={cat} category={cat} />
        ))}
        <FAQ />
      </div>

    </div>
  );
}
