import Image from 'next/image';

interface MovieCardProps {
  title: string;
  image: string;
  year: number;
  rating: number;
}

export default function MovieCard({ title, image, year, rating }: MovieCardProps) {
  return (
    <div className="w-28 xxs:w-32 xs:w-36 sm:w-40 md:w-44 flex-shrink-0 cursor-pointer group rounded-lg xs:rounded-xl overflow-hidden bg-[#181e23] shadow transition-shadow duration-200 hover:shadow-2xl">
      <div className="relative w-full h-36 xxs:h-40 xs:h-48 sm:h-52 md:h-56 mb-1.5 xxs:mb-2">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-200" />
      </div>
      <div className="flex flex-col gap-0.5 xs:gap-1 px-1.5 xxs:px-2 pb-2 xxs:pb-3">
        <span className="text-xs xxs:text-sm sm:text-base font-semibold text-[#f9f8ff] truncate mb-0 xxs:mb-0.5">{title}</span>
        <div className="flex items-center gap-1.5 xxs:gap-2 text-[10px] xxs:text-xs text-[#959ca3]">
          <span>{year}</span>
          <span className="text-yellow-400 font-bold">★ {rating}</span>
        </div>
      </div>
    </div>
  );
}