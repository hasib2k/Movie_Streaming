import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const featuredPost = {
    title: "The Evolution of Streaming Technology: What's Next for Viewers",
    excerpt: "From buffering videos to 8K streaming and beyond, we explore how technology continues to transform the way we consume entertainment.",
    image: "/Dune_2.webp",
    date: "June 20, 2025",
    author: "Alex Rivera",
    category: "Technology"
  };

  const blogPosts = [
    {
      title: "10 Underrated Sci-Fi Shows You Need to Watch This Summer",
      excerpt: "Looking for your next binge-worthy series? These hidden gems deliver compelling stories, stunning visuals, and thought-provoking concepts.",
      image: "/The_Electric_State.jpg", 
      date: "June 15, 2025",
      author: "Michelle Wong",
      category: "Recommendations"
    },
    {
      title: "Behind the Scenes: The Making of 'Cosmic Frontier'",
      excerpt: "Our exclusive interview with director Christopher Nolan reveals the challenges and triumphs of creating Pixloris's most ambitious original series.",
      image: "/straume.jpg",
      date: "June 12, 2025",
      author: "Jordan Taylor",
      category: "Originals"
    },
    {
      title: "How AI is Personalizing Your Streaming Experience",
      excerpt: "Pixloris's recommendation engine uses advanced machine learning to help you discover content you'll love. Here's how it works.",
      image: "/The_stranger_2.png",
      date: "June 8, 2025",
      author: "Priya Patel",
      category: "Technology"
    },
    {
      title: "The Rise of International Content and Why It Matters",
      excerpt: "Global storytelling is transforming streaming platforms and audience preferences. We explore this exciting shift in entertainment consumption.",
      image: "/how-to-train-your-dragon-dreamworks.avif",
      date: "June 5, 2025",
      author: "Omar Johnson",
      category: "Industry Trends"
    },
    {
      title: "Family Movie Night: 15 Films Everyone Will Enjoy",
      excerpt: "Finding content that appeals to all ages can be challenging. These crowd-pleasing favorites strike the perfect balance.",
      image: "/lilo_stitch.jpg",
      date: "June 1, 2025",
      author: "Sarah Miller",
      category: "Recommendations"
    },
    {
      title: "From Script to Screen: How Streaming is Changing Filmmaking",
      excerpt: "Directors and producers share how creating content for streaming platforms differs from traditional film and television production.",
      image: "/mi.jpg",
      date: "May 28, 2025",
      author: "Derek Wang",
      category: "Industry Trends"
    }
  ];

  const categories = [
    "All Categories",
    "Recommendations",
    "Originals",
    "Technology",
    "Industry Trends",
    "Interviews",
    "Behind the Scenes"
  ];

  return (
    <PageTemplate title="Pixloris Blog" breadcrumb="Blog">
      <div className="mb-8">
        {/* Categories navigation */}
        <div className="overflow-x-auto mb-6">
          <div className="flex gap-2 sm:gap-3 min-w-max pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition 
                ${index === 0 ? 'bg-yellow-400 text-[#0e1518]' : 'bg-[#232a31] text-[#f9f8ff] hover:bg-[#2c3540]'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured article */}
        <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden mb-8 group cursor-pointer">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1518] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-yellow-400 text-[#0e1518] text-xs font-medium px-2 py-0.5 rounded">
                {featuredPost.category}
              </span>
              <span className="text-white/80 text-xs">{featuredPost.date}</span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-2">{featuredPost.title}</h2>
            <p className="text-sm xs:text-base text-white/80 mb-3 max-w-2xl">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#232a31] flex items-center justify-center text-[#f9f8ff] text-sm font-medium">
                {featuredPost.author.charAt(0)}
              </div>
              <span className="text-white/90 text-sm">{featuredPost.author}</span>
            </div>
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#181e23] rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#232a31] text-[#f9f8ff] text-xs px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-[#959ca3] text-xs">{post.date}</span>
                </div>
                <h3 className="text-[#f9f8ff] font-semibold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-[#b4bbc2] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#959ca3]">By {post.author}</span>
                  <span className="text-xs text-yellow-400">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#232a31] text-[#959ca3]">
              ←
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-yellow-400 text-[#0e1518] font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#232a31] text-[#f9f8ff] hover:bg-[#2c3540]">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#232a31] text-[#f9f8ff] hover:bg-[#2c3540]">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#232a31] text-[#f9f8ff] hover:bg-[#2c3540]">
              →
            </button>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="bg-gradient-to-r from-[#232a31] to-[#181e23] p-6 rounded-lg mt-12">
          <h3 className="text-lg font-semibold text-[#f9f8ff] mb-2">Subscribe to Our Blog</h3>
          <p className="text-sm text-[#b4bbc2] mb-4">
            Get the latest articles, recommendations, and industry insights delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-[#0e1518] text-[#f9f8ff] px-3 py-2 rounded flex-1 text-sm outline-none border border-transparent focus:border-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-2 rounded text-sm whitespace-nowrap transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
