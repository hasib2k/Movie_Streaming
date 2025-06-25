import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function Kids() {
  const featuredShows = [
    { 
      title: "Lilo & Stitch", 
      ageRating: "PG", 
      description: "Adventure with a girl and her alien friend",
      imagePath: "/lilo_stitch.jpg"
    },
    { 
      title: "How to Train Your Dragon", 
      ageRating: "PG", 
      description: "A viking boy befriends a dragon",
      imagePath: "/how-to-train-your-dragon-dreamworks.avif"
    },
    { 
      title: "Mufasa: The Lion King", 
      ageRating: "G", 
      description: "The origin story of a legendary king",
      imagePath: "/Mufasa.jpg"
    },
    { 
      title: "Arcane Jr.", 
      ageRating: "PG", 
      description: "Kid-friendly adventures in a magical world",
      imagePath: "/arcane.jpg"
    },
  ];

  const ageCategories = [
    {
      name: "Preschool (2-4 years)",
      shows: ["Paw Patrol", "Bluey", "Peppa Pig", "Cocomelon", "Blippi"]
    },
    {
      name: "Little Kids (5-7 years)",
      shows: ["SpongeBob", "Pokémon", "Lilo & Stitch", "Mufasa", "Mickey Mouse"]
    },
    {
      name: "Big Kids (8-10 years)",
      shows: ["How to Train Your Dragon", "Kung Fu Panda", "Avatar", "Sonic", "Transformers"]
    },
    {
      name: "Pre-Teens (11-12 years)",
      shows: ["Arcane Jr.", "Marvel Heroes", "DC Kids", "Star Wars Adventures", "Stranger Things Kids"]
    },
  ];

  const educationalContent = [
    {
      title: "Discover Science",
      description: "Fun experiments and amazing facts about our world",
      ageRange: "Ages 8-12",
      imagePath: "/The_Martian.webp"
    },
    {
      title: "History Heroes",
      description: "Time-travel adventures through important historical events",
      ageRange: "Ages 6-10",
      imagePath: "/straume.jpg"
    },
    {
      title: "Math Magic",
      description: "Making numbers fun with puzzles and games",
      ageRange: "Ages 5-8",
      imagePath: "/The_Electric_State.jpg"
    }
  ];

  return (
    <PageTemplate title="Kids Zone" breadcrumb="Kids">
      <div className="mb-8 p-5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Welcome to the Kids Zone!</h2>
        <p className="text-white text-sm sm:text-base">
          A safe space filled with age-appropriate entertainment for children of all ages.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Featured for Kids</h2>
        <p className="text-[#959ca3] mb-6">
          Popular shows and movies that children love.
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
                  <p className="text-sm text-gray-300">{show.description}</p>
                </div>
                <div className="absolute top-3 right-3 bg-green-600/90 px-2 py-1 rounded text-xs text-white font-medium">
                  {show.ageRating}
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
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Browse by Age</h2>
        <p className="text-[#959ca3] mb-6">
          Find age-appropriate content for your children.
        </p>
        
        <div className="space-y-6">
          {ageCategories.map((category, index) => (
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
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Learn & Play</h2>
        <p className="text-[#959ca3] mb-6">
          Educational content that makes learning fun.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationalContent.map((content, index) => (
            <Link href="#" key={index} className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[3/2] w-full">
                <Image 
                  src={content.imagePath} 
                  alt={content.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">EDUCATIONAL</span>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{content.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{content.description}</p>
                <p className="text-xs text-gray-400">{content.ageRange}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Kids Movie Schedule</h2>
        <div className="border border-[#2a2d35] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1e2126]">
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium">Time</th>
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium">Movie</th>
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium hidden sm:table-cell">Rating</th>
                <th className="text-left py-3 px-4 text-[#f9f8ff] font-medium hidden md:table-cell">Age Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">9:00 AM</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Lilo & Stitch</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">PG</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">All Ages</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">11:00 AM</td>
                <td className="py-3 px-4 text-[#f9f8ff]">How to Train Your Dragon</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">PG</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">8+</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">1:00 PM</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Mufasa: The Lion King</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">G</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">All Ages</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">3:00 PM</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Discover Science: Space Adventure</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">G</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">8-12</td>
              </tr>
              <tr className="border-t border-[#2a2d35]">
                <td className="py-3 px-4 text-[#959ca3]">5:00 PM</td>
                <td className="py-3 px-4 text-[#f9f8ff]">Arcane Jr.: Adventures</td>
                <td className="py-3 px-4 text-[#959ca3] hidden sm:table-cell">PG</td>
                <td className="py-3 px-4 text-[#959ca3] hidden md:table-cell">10+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#959ca3] mt-2">Schedule shown in your local timezone. New movies daily!</p>
      </section>

      <section>
        <div className="bg-gradient-to-br from-purple-700 to-blue-600 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-3">Parents' Controls</h2>
          <p className="text-white/90 mb-6">
            Pixloris provides robust parental controls to ensure children only access age-appropriate content.
            Create a kids profile to enable these safety features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-lg font-medium text-center">
              Set Up Kids Profile
            </Link>
            <Link href="#" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-center">
              Learn About Safety Controls
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
