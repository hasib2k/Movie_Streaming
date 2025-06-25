import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function Movies() {
  const featuredMovies = [
    { title: "Dune: Part Two", genre: "Sci-Fi", year: "2024", rating: "PG-13", imagePath: "/Dune_2.webp" },
    { title: "The Martian", genre: "Sci-Fi", year: "2015", rating: "PG-13", imagePath: "/The_Martian.webp" },
    { title: "Arcane", genre: "Animation", year: "2023", rating: "TV-14", imagePath: "/arcane.jpg" },
    { title: "The Electric State", genre: "Sci-Fi", year: "2025", rating: "PG-13", imagePath: "/The_Electric_State.jpg" },
  ];

  const movieCategories = [
    {
      name: "New Releases",
      movies: ["Mufasa: The Lion King", "Blade Runner: 2099", "Last Bullet", "Stranger 2", "How to Train Your Dragon"]
    },
    {
      name: "Most Popular",
      movies: ["Mission Impossible", "Dune: Part Two", "The Martian", "Arcane", "Lilo & Stitch"]
    },
    {
      name: "Action & Adventure",
      movies: ["Mission Impossible", "The Electric State", "Last Bullet", "Blade Runner: 2099", "The Stranger 2"]
    },
    {
      name: "Animation",
      movies: ["How to Train Your Dragon", "Lilo & Stitch", "Arcane", "Mufasa: The Lion King", "Studio Ghibli Collection"]
    },
    {
      name: "Sci-Fi & Fantasy",
      movies: ["Dune: Part Two", "The Electric State", "Blade Runner: 2099", "The Martian", "Interstellar"]
    },
  ];

  const collections = [
    {
      name: "Award Winners",
      description: "Critically acclaimed films recognized at major film festivals",
      imagePath: "/The_Martian.webp"
    },
    {
      name: "Family Movie Night",
      description: "Perfect picks for the whole family to enjoy together",
      imagePath: "/lilo_stitch.jpg"
    },
    {
      name: "Sci-Fi Essentials",
      description: "Mind-bending journeys through space, time and beyond",
      imagePath: "/Dune_2.webp"
    },
    {
      name: "Action Blockbusters",
      description: "High-octane thrills and spectacular action sequences",
      imagePath: "/mi.jpg"
    },
  ];

  return (
    <PageTemplate title="Movies" breadcrumb="Movies">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Featured Films</h2>
        <p className="text-[#959ca3] mb-6">
          Watch these critically acclaimed movies completely free, no subscription required.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredMovies.map((movie, index) => (
            <div key={index} className="relative group">
              <div className="aspect-[2/3] w-full rounded-lg overflow-hidden relative">
                <Image 
                  src={movie.imagePath} 
                  alt={movie.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-white font-medium truncate">{movie.title}</h3>
                  <p className="text-sm text-gray-300">{movie.genre} • {movie.year}</p>
                </div>
                <div className="absolute top-3 right-3 bg-yellow-600/90 px-2 py-1 rounded text-xs text-white font-medium">
                  {movie.rating}
                </div>
              </div>
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Watch Now
                </span>
              </button>
            </div>
          ))}
        </div>
        
        <Link href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
          Browse All Free Movies
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Browse By Category</h2>
        <p className="text-[#959ca3] mb-6">
          Discover free movies in your favorite genres.
        </p>
        
        <div className="space-y-6">
          {movieCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.movies.map((movie, idx) => (
                  <Link 
                    href="#" 
                    key={idx} 
                    className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-4 rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all text-center"
                  >
                    <span className="block text-[#f9f8ff] truncate">{movie}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Curated Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((collection, index) => (
            <Link href="#" key={index} className="relative rounded-xl overflow-hidden group">
              <div className="aspect-video w-full">
                <Image 
                  src={collection.imagePath} 
                  alt={collection.name} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-xl font-semibold text-white mb-1">{collection.name}</h3>
                <p className="text-sm text-gray-300">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">Upgrade for Premium Movies</h2>
          <p className="text-[#959ca3] mb-6">
            Get access to our complete movie library, including new releases and exclusives, 
            with a Pixloris Premium subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="bg-yellow-500 hover:bg-yellow-400 text-[#0e1518] px-6 py-3 rounded-lg font-medium text-center">
              Try Premium Free for 7 Days
            </Link>
            <Link href="#" className="bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium text-center">
              View Premium Plans
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
