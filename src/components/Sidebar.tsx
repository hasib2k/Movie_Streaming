import { HomeIcon, HeartIcon, ClockIcon, FireIcon, Cog6ToothIcon, LifebuoyIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Favorites', icon: HeartIcon },
  { name: 'Coming soon', icon: ClockIcon },
  { name: 'Trending', icon: FireIcon },
  { name: 'Settings', icon: Cog6ToothIcon },
  { name: 'Support', icon: LifebuoyIcon },
];

const continueWatching = [
  {
    title: 'Arcane: 2021',
    image: '/arcane.jpg',
    progress: 55,
    time: 'S1E6',
  },
  {
    title: 'Blade Runner 2049',
    image: '/blade_runner.jpg',
    progress: 55,
    time: '1h 25min',
  },
  {
    title: 'The Martian',
    image: '/The_Martian.webp',
    progress: 34,
    time: '38min',
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-full bg-[#10151a] p-3 gap-9 text-[#f9f8ff]">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-yellow-400 rounded p-1"><svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#FFD600"/><rect x="6" y="7" width="12" height="10" rx="2" fill="#0e1518"/><rect x="9" y="10" width="2" height="2" rx="1" fill="#FFD600"/><rect x="13" y="10" width="2" height="2" rx="1" fill="#FFD600"/></svg></span>
        <span className="text-2xl font-bold tracking-wide">servia</span>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navLinks.map(link => (
          <a key={link.name} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#232a31] transition">
            <link.icon className="h-6 w-6 text-[#959ca3]" />
            <span className="text-base font-medium">{link.name}</span>
          </a>
        ))}
      </nav>
      {/* Continue Watching */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-[#959ca3] mb-3">Continue Watching</h3>
        <div className="flex flex-col gap-6">
          {continueWatching.map((item, idx) => (
            <div key={item.title} className="relative flex items-center gap-3 bg-[#181e23] rounded-lg p-5">
              <div className="relative w-16 h-10 rounded overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                <PlayCircleIcon className="absolute bottom-1 right-1 h-5 w-5 text-white/80 bg-black/40 rounded-full" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold truncate">{item.title}</div>
                <div className="flex items-center gap-2 text-[10px] text-[#959ca3]">
                  <span>{item.time}</span>
                  <span className="ml-auto">{item.progress}%</span>
                </div>
                <div className="w-full h-1 bg-[#232a31] rounded mt-1">
                  <div className="h-1 bg-yellow-400 rounded" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
} 