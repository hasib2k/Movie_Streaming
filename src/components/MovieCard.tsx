import Image from 'next/image';

interface MovieCardProps {
  title: string;
  image: string;
  year: number;
  rating: number;
}

export default function MovieCard({ title, image, year, rating }: MovieCardProps) {
  return (
    <div className="w-36 sm:w-40 flex-shrink-0 cursor-pointer group rounded-xl overflow-hidden bg-[#181e23] shadow transition-shadow duration-200 hover:shadow-2xl">
      <div className="relative w-full h-48 sm:h-56 mb-2">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-200" />
      </div>
      <div className="flex flex-col gap-1 px-2 pb-3">
        <span className="text-sm sm:text-base font-semibold text-[#f9f8ff] truncate mb-0.5">{title}</span>
        <div className="flex items-center gap-2 text-xs text-[#959ca3]">
          <span>{year}</span>
          <span className="text-yellow-400 font-bold">★ {rating}</span>
        </div>
      </div>
    </div>
  );
} 