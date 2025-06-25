import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function LiveTV() {
  const featuredChannels = [
    { name: "News 24/7", genre: "News", viewers: "23.4K watching", imagePath: "/straume.jpg" },
    { name: "Movie Classics", genre: "Movies", viewers: "14.2K watching", imagePath: "/blade_runner.jpg" },
    { name: "Sports Central", genre: "Sports", viewers: "45.7K watching", imagePath: "/The_stranger_2.png" },
    { name: "Kids Zone", genre: "Kids", viewers: "8.5K watching", imagePath: "/lilo_stitch.jpg" },
  ];

  const channelCategories = [
    {
      name: "News & Information",
      channels: ["World News Network", "Business Insights", "Weather 24/7", "Tech Today", "Local News"]
    },
    {
      name: "Entertainment",
      channels: ["Celebrity Central", "Reality TV", "Comedy Showcase", "Drama Network", "Music TV"]
    },
    {
      name: "Movies",
      channels: ["Action Movies", "Classic Films", "Family Cinema", "Thriller Network", "Sci-Fi Channel"]
    },
    {
      name: "Sports",
      channels: ["Sports Central", "Football TV", "Basketball Network", "Combat Sports", "Extreme Sports"]
    },
    {
      name: "Lifestyle",
      channels: ["Food Network", "Travel Explore", "Home & Design", "Fashion TV", "Health & Wellness"]
    },
    {
      name: "Kids & Family",
      channels: ["Kids Zone", "Animation Station", "Learning Channel", "Teen Network", "Family Movies"]
    },
  ];

  const upcomingBroadcasts = [
    {
      time: "Today, 8:00 PM",
      title: "Breaking News Special Report",
      channel: "World News Network",
      description: "Live coverage of major global events as they unfold."
    },
    {
      time: "Today, 9:00 PM",
      title: "Championship Finals",
      channel: "Sports Central",
      description: "The decisive game in this season's basketball championship."
    },
    {
      time: "Tomorrow, 7:30 PM",
      title: "Cooking Masters",
      channel: "Food Network",
      description: "Professional chefs compete in a live cook-off challenge."
    },
    {
      time: "Tomorrow, 8:00 PM",
      title: "Movie Premiere Night",
      channel: "Action Movies",
      description: "Exclusive premiere of the latest blockbuster action film."
    },
  ];

  return (
    <PageTemplate title="Live TV" breadcrumb="Live TV">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Streaming Now</h2>
        <p className="text-[#959ca3] mb-6">
          Explore our free live TV channels streaming right now. No subscription required.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredChannels.map((channel, index) => (
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
                  <p className="text-sm text-gray-300">{channel.genre}</p>
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
          See All Live Channels
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Channel Guide</h2>
        <p className="text-[#959ca3] mb-6">
          Browse our selection of free live TV channels by category.
        </p>
        
        <div className="space-y-6">
          {channelCategories.map((category, index) => (
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
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Upcoming Live Broadcasts</h2>
        <div className="space-y-4">
          {upcomingBroadcasts.map((broadcast, index) => (
            <div key={index} className="border border-[#2a2d35] rounded-lg p-4">
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <span className="text-sm font-medium text-blue-400">{broadcast.time}</span>
                  <h3 className="text-lg font-medium text-[#f9f8ff] mt-1">{broadcast.title}</h3>
                  <p className="text-sm text-[#959ca3] mt-1">{broadcast.channel}</p>
                  <p className="text-[#959ca3] mt-2">{broadcast.description}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                  <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/30 px-4 py-2 rounded-lg text-sm">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">Watch Live TV on Any Device</h2>
          <p className="text-[#959ca3] mb-6">
            Enjoy our free live TV channels on your smartphone, tablet, smart TV, or computer.
            Download the Pixloris app to get started.
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
