import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function Sports() {
  const liveEvents = [
    { 
      title: "Premier League: Arsenal vs. Chelsea", 
      category: "Soccer", 
      status: "Live - 63'", 
      score: "2-1",
      viewerCount: "245.8K watching",
      imagePath: "/straume.jpg"
    },
    { 
      title: "NBA Playoffs: Lakers vs. Warriors", 
      category: "Basketball", 
      status: "Live - 3rd Qtr", 
      score: "78-72",
      viewerCount: "189.4K watching",
      imagePath: "/The_stranger_2.png"
    },
    { 
      title: "Formula 1: Monaco Grand Prix", 
      category: "Motorsport", 
      status: "Live - Lap 42/78", 
      score: "",
      viewerCount: "134.2K watching",
      imagePath: "/The_Electric_State.jpg"
    },
    { 
      title: "NFL: Eagles vs. Cowboys", 
      category: "American Football", 
      status: "Live - 3rd Qtr", 
      score: "21-17",
      viewerCount: "210.5K watching",
      imagePath: "/Last_bullet.jpg"
    }
  ];

  const sportsCategories = [
    {
      name: "Popular Sports",
      categories: ["Soccer", "Basketball", "American Football", "Baseball", "Tennis"]
    },
    {
      name: "More Sports",
      categories: ["Motorsport", "Golf", "Combat Sports", "Hockey", "Rugby"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Champions League Final",
      description: "The culmination of Europe's premier club competition",
      date: "June 30, 2025",
      time: "8:00 PM",
      imagePath: "/The_stranger_2.png"
    },
    {
      title: "NBA Finals Game 7",
      description: "The decisive game to determine this season's champion",
      date: "June 28, 2025",
      time: "9:00 PM",
      imagePath: "/straume.jpg"
    },
    {
      title: "Grand Slam Tennis",
      description: "The third major tournament of the tennis calendar",
      date: "July 1-14, 2025",
      time: "All Day",
      imagePath: "/The_Electric_State.jpg"
    }
  ];

  const highlights = [
    {
      title: "Top 10 Goals of the Week",
      duration: "8:24",
      views: "1.2M views",
      date: "Yesterday",
      imagePath: "/straume.jpg"
    },
    {
      title: "Game-Winning Buzzer Beater",
      duration: "2:15",
      views: "865K views",
      date: "2 days ago",
      imagePath: "/The_stranger_2.png"
    },
    {
      title: "Incredible Championship Comeback",
      duration: "12:38",
      views: "1.5M views",
      date: "3 days ago",
      imagePath: "/Last_bullet.jpg"
    },
    {
      title: "Record-Breaking Performance",
      duration: "5:42",
      views: "720K views",
      date: "4 days ago",
      imagePath: "/The_Electric_State.jpg"
    }
  ];

  return (
    <PageTemplate title="Sports" breadcrumb="Sports">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Live Sports</h2>
        <p className="text-[#959ca3] mb-6">
          Watch live sporting events from around the world, streaming free on Pixloris.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {liveEvents.map((event, index) => (
            <div key={index} className="relative group">
              <div className="aspect-video w-full rounded-lg overflow-hidden relative">
                <Image 
                  src={event.imagePath} 
                  alt={event.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3">
                  <span className="text-sm text-gray-300">{event.category}</span>
                  <h3 className="text-white font-medium truncate">{event.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-red-400 text-sm font-medium">{event.status}</span>
                    {event.score && <span className="text-white text-sm font-bold">{event.score}</span>}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 px-2 py-1 rounded text-xs text-white font-medium">
                  LIVE
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-xs text-white">
                  {event.viewerCount}
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
          See All Live Sports
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Sports Categories</h2>
        <p className="text-[#959ca3] mb-6">
          Explore content from your favorite sports.
        </p>
        
        <div className="space-y-6">
          {sportsCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.categories.map((sport, idx) => (
                  <Link 
                    href="#" 
                    key={idx} 
                    className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-4 rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all text-center"
                  >
                    <span className="block text-[#f9f8ff] truncate">{sport}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => (
            <Link href="#" key={index} className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[3/2] w-full">
                <Image 
                  src={event.imagePath} 
                  alt={event.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">UPCOMING</span>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{event.description}</p>
                <p className="text-xs text-gray-400">{event.date} • {event.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Top Highlights & Replays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative group">
              <div className="aspect-video w-full rounded-lg overflow-hidden relative">
                <Image 
                  src={highlight.imagePath} 
                  alt={highlight.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-black/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-white font-medium truncate">{highlight.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-300">{highlight.views}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-300">{highlight.date}</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-xs text-white">
                  {highlight.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="#" className="inline-block bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium">
            View All Highlights
          </Link>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">Never Miss a Game</h2>
          <p className="text-[#959ca3] mb-6">
            Create a free account to get personalized sports recommendations, set reminders for upcoming games, 
            and follow your favorite teams and leagues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center">
              Create Free Account
            </Link>
            <Link href="#" className="bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium text-center">
              View Premium Sports Package
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
