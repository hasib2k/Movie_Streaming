const movies = [
  // Action Movies
  {
    title: "Mission: Impossible - T",
    image: "/mi.jpg",
    year: 2025,
    rating: 8.2,
    category: "Action",
  },
  {
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    year: 2024,
    rating: 8.5,
    category: "Action",
  },
  {
    title: "Last Bullet (2025)",
    image: "/Last_bullet.jpg",
    year: 2025,
    rating: 6.3,
    category: "Action",
  },
  {
    title: "The Martian",
    image: "/The_Martian.webp",
    year: 2023,
    rating: 7.8,
    category: "Action",
  },
  {
    title: "Blade Runner 2049",
    image: "/blade_runner.jpg",
    year: 2024,
    rating: 8.7,
    category: "Action",
  },
  {
    title: "Arcane",
    image: "/arcane.jpg",
    year: 2024,
    rating: 9.0,
    category: "Action",
  },
  
  // Trending Movies
  {
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    year: 2024,
    rating: 8.5,
    category: "Trending",
  },
  {
    title: "Arcane",
    image: "/arcane.jpg",
    year: 2024,
    rating: 9.0,
    category: "Trending",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    year: 2024,
    rating: 6.6,
    category: "Trending",
  },
  {
    title: "The Electric State (2025)",
    image: "/The_Electric_State.jpg",
    year: 2025,
    rating: 5.9,
    category: "Trending",
  },
  {
    title: "Straume",
    image: "/straume.jpg",
    year: 2024,
    rating: 7.9,
    category: "Trending",
  },
  {
    title: "Mission: Impossible - T",
    image: "/mi.jpg",
    year: 2025,
    rating: 8.2,
    category: "Trending",
  },
  
  // Adventure Movies
  {
    title: "The Martian",
    image: "/The_Martian.webp",
    year: 2023,
    rating: 7.8,
    category: "Adventure",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    year: 2024,
    rating: 6.6,
    category: "Adventure",
  },
  {
    title: "How to Train Your Dragon",
    image: "/how-to-train-your-dragon-dreamworks.avif",
    year: 2024,
    rating: 8.1,
    category: "Adventure",
  },
  {
    title: "The Electric State (2025)",
    image: "/The_Electric_State.jpg",
    year: 2025,
    rating: 5.9,
    category: "Adventure",
  },
  {
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    year: 2024,
    rating: 8.5,
    category: "Adventure",
  },
  
  // Comedy Movies
  {
    title: "Lilo & Stitch",
    image: "/lilo_stitch.jpg",
    year: 2025,
    rating: 7.2,
    category: "Comedy",
  },
  {
    title: "How to Train Your Dragon",
    image: "/how-to-train-your-dragon-dreamworks.avif",
    year: 2024,
    rating: 8.1,
    category: "Comedy",
  },
  {
    title: "Arcane",
    image: "/arcane.jpg",
    year: 2024,
    rating: 9.0,
    category: "Comedy",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    year: 2024,
    rating: 6.6,
    category: "Comedy",
  },
  
  // Crime Movies
  {
    title: "Last Bullet (2025)",
    image: "/Last_bullet.jpg",
    year: 2025,
    rating: 6.3,
    category: "Crime",
  },
  {
    title: "The Strangers: Chapter 2 (2025)",
    image: "/The_Stranger_2.png",
    year: 2025,
    rating: 6.8,
    category: "Crime",
  },
  {
    title: "Straume",
    image: "/straume.jpg",
    year: 2024,
    rating: 7.9,
    category: "Crime",
  },
  {
    title: "Mission: Impossible - T",
    image: "/mi.jpg",
    year: 2025,
    rating: 8.2,
    category: "Crime",
  },
  
  // Drama Movies
  {
    title: "The Martian",
    image: "/The_Martian.webp",
    year: 2023,
    rating: 7.8,
    category: "Drama",
  },
  {
    title: "Blade Runner 2049",
    image: "/blade_runner.jpg",
    year: 2024,
    rating: 8.7,
    category: "Drama",
  },
  {
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    year: 2024,
    rating: 8.5,
    category: "Drama",
  },
  {
    title: "The Electric State (2025)",
    image: "/The_Electric_State.jpg",
    year: 2025,
    rating: 5.9,
    category: "Drama",
  },
  
  // Fantasy Movies
  {
    title: "How to Train Your Dragon",
    image: "/how-to-train-your-dragon-dreamworks.avif",
    year: 2024,
    rating: 8.1,
    category: "Fantasy",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    year: 2024,
    rating: 6.6,
    category: "Fantasy",
  },
  {
    title: "Lilo & Stitch",
    image: "/lilo_stitch.jpg",
    year: 2025,
    rating: 7.2,
    category: "Fantasy",
  },
  {
    title: "Arcane",
    image: "/arcane.jpg",
    year: 2024,
    rating: 9.0,
    category: "Fantasy",
  },
  
  // Horror Movies
  {
    title: "The Strangers: Chapter 2 (2025)",
    image: "/The_Stranger_2.png",
    year: 2025,
    rating: 6.8,
    category: "Horror",
  },
  {
    title: "Last Bullet (2025)",
    image: "/Last_bullet.jpg",
    year: 2025,
    rating: 6.3,
    category: "Horror",
  },
  {
    title: "Straume",
    image: "/straume.jpg",
    year: 2024,
    rating: 7.9,
    category: "Horror",
  },
  
  // Sci-Fi Movies
  {
    title: "The Electric State (2025)",
    image: "/The_Electric_State.jpg",
    year: 2025,
    rating: 5.9,
    category: "Sci-Fi",
  },
  {
    title: "Blade Runner 2049",
    image: "/blade_runner.jpg",
    year: 2024,
    rating: 8.7,
    category: "Sci-Fi",
  },
  {
    title: "Dune: Part Two",
    image: "/Dune_2.webp",
    year: 2024,
    rating: 8.5,
    category: "Sci-Fi",
  },
  {
    title: "The Martian",
    image: "/The_Martian.webp",
    year: 2023,
    rating: 7.8,
    category: "Sci-Fi",
  },
  {
    title: "Arcane",
    image: "/arcane.jpg",
    year: 2024,
    rating: 9.0,
    category: "Sci-Fi",
  },
  
  // Family Movies
  {
    title: "Lilo & Stitch",
    image: "/lilo_stitch.jpg",
    year: 2025,
    rating: 7.2,
    category: "Family",
  },
  {
    title: "How to Train Your Dragon",
    image: "/how-to-train-your-dragon-dreamworks.avif",
    year: 2024,
    rating: 8.1,
    category: "Family",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/Mufasa.jpg",
    year: 2024,
    rating: 6.6,
    category: "Family",
  },
  {
    title: "Arcane",
    image: "/arcane.jpg",
    year: 2024,
    rating: 9.0,
    category: "Family",
  },
];

export default movies; 