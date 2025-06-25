import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function TVShows() {
  const featuredShows = [
    { title: "Arcane", genre: "Animation", year: "2023", seasons: "2 Seasons", imagePath: "/arcane.jpg" },
    { title: "The Stranger", genre: "Mystery", year: "2022", seasons: "2 Seasons", imagePath: "/The_stranger_2.png" },
    { title: "Blade Runner: 2099", genre: "Sci-Fi", year: "2025", seasons: "1 Season", imagePath: "/blade_runner.jpg" },
    { title: "Straume", genre: "Drama", year: "2024", seasons: "3 Seasons", imagePath: "/straume.jpg" },
  ];

  const showCategories = [
    {
      name: "New & Popular",
      shows: ["Arcane", "The Stranger 2", "Blade Runner: 2099", "Mission: Possible", "Dragon Flight"]
    },
    {
      name: "Drama",
      shows: ["Straume", "The Crown", "Breaking Story", "Medical Center", "Legal Affairs"]
    },
    {
      name: "Comedy",
      shows: ["Office Stories", "Parks & Recreation", "Brooklyn 99", "The Good Place", "Community"]
    },
    {
      name: "Sci-Fi & Fantasy",
      shows: ["Blade Runner: 2099", "Wanderer", "The Last Ship", "Another Earth", "Time Keepers"]
    },
    {
      name: "Animation",
      shows: ["Arcane", "Rick & Morty", "Lower Decks", "Avatar", "Invincible"]
    },
  ];

  const exclusiveShows = [
    {
      name: "Straume",
      description: "A journalist uncovers a conspiracy that threatens the entire country",
      episodeCount: "24 episodes",
      imagePath: "/straume.jpg"
    },
    {
      name: "The Stranger",
      description: "A mysterious stranger arrives in town with secrets that change everything",
      episodeCount: "16 episodes",
      imagePath: "/The_stranger_2.png"
    },
    {
      name: "Blade Runner: 2099",
      description: "The continuation of the iconic sci-fi universe set 50 years after 2049",
      episodeCount: "10 episodes",
      imagePath: "/blade_runner.jpg"
    }
  ];

  return (
    <PageTemplate title="TV Shows" breadcrumb="TV Shows">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Featured Series</h2>
        <p className="text-[#959ca3] mb-6">
          Binge-worthy television series available to stream for free.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredShows.map((show, index) => (
            <div key={index} className="relative group">
              <div className="aspect-[2/3] w-full rounded-lg overflow-hidden relative">
                <Image 
                  src={show.imagePath} 
                  alt={show.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-white font-medium truncate">{show.title}</h3>
                  <p className="text-sm text-gray-300">{show.genre} • {show.seasons}</p>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600/90 px-2 py-1 rounded text-xs text-white font-medium">
                  TV Series
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
          Browse All Free Series
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">TV Categories</h2>
        <p className="text-[#959ca3] mb-6">
          Explore series across every genre.
        </p>
        
        <div className="space-y-6">
          {showCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.shows.map((show, idx) => (
                  <Link 
                    href="#" 
                    key={idx} 
                    className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-4 rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all text-center"
                  >
                    <span className="block text-[#f9f8ff] truncate">{show}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Pixloris Originals</h2>
        <p className="text-[#959ca3] mb-6">
          Exclusive series you won't find anywhere else.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exclusiveShows.map((show, index) => (
            <Link href="#" key={index} className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[3/2] w-full">
                <Image 
                  src={show.imagePath} 
                  alt={show.name} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">PIXLORIS ORIGINAL</span>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{show.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{show.description}</p>
                <p className="text-xs text-gray-400">{show.episodeCount}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Weekly Release Schedule</h2>
        <div className="border border-[#2a2d35] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1e2126]">
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium">Day</th>
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium">Show</th>
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium hidden md:table-cell">Episode</th>
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium hidden sm:table-cell">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">Monday</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Straume</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">Season 3, Episode 8</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">9:00 PM</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">Wednesday</td>
                <td className="py-3 px-4 text-[#f9f8ff]">The Stranger</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">Season 2, Episode 5</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">8:00 PM</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">Friday</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Blade Runner: 2099</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">Season 1, Episode 3</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">12:00 AM</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">Saturday</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Arcane</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">Season 2, Episode 6</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">3:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#959ca3] mt-2">All times displayed in your local timezone.</p>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">Never Miss an Episode</h2>
          <p className="text-[#959ca3] mb-6">
            Sign up for a free account to track your favorite shows, get notifications for new episodes, 
            and pick up where you left off on any device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center">
              Create Free Account
            </Link>
            <Link href="#" className="bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
