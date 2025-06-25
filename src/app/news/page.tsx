import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function News() {
  const featuredNewsChannels = [
    { name: "Global News Network", category: "World News", viewers: "34.5K watching", imagePath: "/straume.jpg" },
    { name: "Business Report", category: "Finance", viewers: "12.8K watching", imagePath: "/The_stranger_2.png" },
    { name: "Tech Today", category: "Technology", viewers: "8.2K watching", imagePath: "/The_Electric_State.jpg" },
    { name: "Weather 24/7", category: "Weather", viewers: "5.7K watching", imagePath: "/The_Martian.webp" }
  ];

  const newsCategories = [
    {
      name: "Top News Categories",
      channels: ["World News", "National", "Politics", "Business", "Health"]
    },
    {
      name: "Special Interest",
      channels: ["Technology", "Science", "Entertainment", "Sports", "Weather"]
    }
  ];

  const topStories = [
    {
      title: "Global Summit Addresses Climate Change",
      source: "Global News Network",
      time: "1 hour ago",
      description: "World leaders converge to discuss urgent climate initiatives and set new emissions targets.",
      imagePath: "/straume.jpg"
    },
    {
      title: "Tech Giant Unveils Revolutionary AI System",
      source: "Tech Today",
      time: "3 hours ago",
      description: "New artificial intelligence breakthrough promises to transform industries from healthcare to transportation.",
      imagePath: "/The_Electric_State.jpg"
    },
    {
      title: "Financial Markets Rally After Economic Report",
      source: "Business Report",
      time: "5 hours ago",
      description: "Global markets respond positively to better-than-expected economic indicators and employment data.",
      imagePath: "/The_stranger_2.png"
    }
  ];

  const liveEvents = [
    {
      title: "Presidential Press Conference",
      time: "Starting in 30 minutes",
      description: "The President addresses the nation on recent policy developments and international relations."
    },
    {
      title: "Breaking News Coverage",
      time: "Live Now",
      description: "Continuous updates on developing situations around the world as events unfold."
    },
    {
      title: "Market Closing Bell Report",
      time: "Today at 4:00 PM",
      description: "End-of-day analysis of financial markets, stocks, and economic indicators."
    }
  ];

  return (
    <PageTemplate title="News" breadcrumb="News">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Live News Channels</h2>
        <p className="text-[#959ca3] mb-6">
          Stay informed with 24/7 coverage from trusted news sources, streaming live and free.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredNewsChannels.map((channel, index) => (
            <div key={index} className="relative group">
              <div className="aspect-video w-full rounded-lg overflow-hidden relative">
                <Image 
                  src={channel.imagePath} 
                  alt={channel.name} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-white font-medium truncate">{channel.name}</h3>
                  <p className="text-sm text-gray-300">{channel.category}</p>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 px-2 py-1 rounded text-xs text-white font-medium">
                  LIVE
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-xs text-white">
                  {channel.viewers}
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
          See All News Channels
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">News Categories</h2>
        <p className="text-[#959ca3] mb-6">
          Browse news by topic to find the coverage that matters most to you.
        </p>
        
        <div className="space-y-6">
          {newsCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.channels.map((channel, idx) => (
                  <Link 
                    href="#" 
                    key={idx} 
                    className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-4 rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all text-center"
                  >
                    <span className="block text-[#f9f8ff] truncate">{channel}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Top Stories</h2>
        <div className="space-y-6">
          {topStories.map((story, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 border border-[#2a2d35] rounded-lg p-4">
              <div className="md:w-1/3 h-48 md:h-auto relative rounded-lg overflow-hidden">
                <Image 
                  src={story.imagePath} 
                  alt={story.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400 text-sm font-medium">{story.source}</span>
                  <span className="text-xs text-[#959ca3]">• {story.time}</span>
                </div>
                <h3 className="text-lg font-medium text-[#f9f8ff] mb-2">{story.title}</h3>
                <p className="text-[#959ca3] mb-4">{story.description}</p>
                <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Read Full Story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Live Events & Special Coverage</h2>
        <div className="space-y-4">
          {liveEvents.map((event, index) => (
            <div key={index} className="border border-[#2a2d35] rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  {event.time === "Live Now" ? (
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-900 text-red-300 mb-2">
                      <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-1 animate-pulse"></span>
                      {event.time}
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-900 text-blue-300 mb-2">
                      {event.time}
                    </span>
                  )}
                  <h3 className="text-lg font-medium text-[#f9f8ff]">{event.title}</h3>
                  <p className="text-sm text-[#959ca3] mt-1">{event.description}</p>
                </div>
                <div>
                  {event.time === "Live Now" ? (
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm">
                      Watch Now
                    </button>
                  ) : (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                      Set Reminder
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">Stay Informed Anywhere</h2>
          <p className="text-[#959ca3] mb-6">
            Access our news channels on any device with the Pixloris app, and customize your 
            news experience with personalized alerts and saved topics.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <Link href="/downloads/ios" className="flex flex-col items-center p-3 bg-[#13151a]/50 rounded-lg hover:bg-[#13151a] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f9f8ff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
              <span className="text-sm text-[#959ca3]">iOS</span>
            </Link>
            <Link href="/downloads/android" className="flex flex-col items-center p-3 bg-[#13151a]/50 rounded-lg hover:bg-[#13151a] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f9f8ff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <span className="text-sm text-[#959ca3]">Android</span>
            </Link>
            <Link href="/downloads/windows" className="flex flex-col items-center p-3 bg-[#13151a]/50 rounded-lg hover:bg-[#13151a] transition-all">
              <Image src="/window.svg" alt="Windows" width={32} height={32} className="mb-2" />
              <span className="text-sm text-[#959ca3]">Windows</span>
            </Link>
            <Link href="/downloads/macos" className="flex flex-col items-center p-3 bg-[#13151a]/50 rounded-lg hover:bg-[#13151a] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f9f8ff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <span className="text-sm text-[#959ca3]">macOS</span>
            </Link>
            <Link href="/downloads/roku" className="flex flex-col items-center p-3 bg-[#13151a]/50 rounded-lg hover:bg-[#13151a] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f9f8ff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <span className="text-sm text-[#959ca3]">Roku</span>
            </Link>
            <Link href="/downloads/fire-tv" className="flex flex-col items-center p-3 bg-[#13151a]/50 rounded-lg hover:bg-[#13151a] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f9f8ff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <span className="text-sm text-[#959ca3]">Fire TV</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
