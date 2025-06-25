import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function Press() {
  const pressReleases = [
    {
      title: "Pixloris Announces New Original Series 'Cosmic Frontier'",
      date: "June 15, 2025",
      excerpt: "Sci-fi epic starring Emma Stone and John Boyega set to premiere this fall."
    },
    {
      title: "Pixloris Surpasses 20 Million Subscribers Worldwide",
      date: "May 3, 2025",
      excerpt: "Streaming platform records 150% year-over-year growth as global expansion continues."
    },
    {
      title: "Pixloris Partners with Major Studios for Exclusive Content",
      date: "April 12, 2025",
      excerpt: "Multi-year deals secure priority streaming rights for upcoming blockbusters."
    },
    {
      title: "Pixloris App Launches on Next-Gen Gaming Consoles",
      date: "March 28, 2025",
      excerpt: "Enhanced viewing experience with 4K HDR and spatial audio now available."
    },
    {
      title: "Pixloris Original 'Midnight Echo' Wins Three Emmy Awards",
      date: "February 10, 2025",
      excerpt: "Psychological thriller praised for groundbreaking storytelling and performances."
    },
  ];

  const mediaContacts = [
    {
      name: "Sarah Johnson",
      position: "Head of Global Communications",
      email: "press@pixloris.com",
      phone: "+1 (323) 555-0123"
    },
    {
      name: "Michael Chen",
      position: "Media Relations Manager",
      email: "media@pixloris.com",
      phone: "+1 (323) 555-0145"
    }
  ];

  const mediaAssets = [
    {
      name: "Pixloris Logo Package",
      type: "ZIP",
      size: "12.5 MB"
    },
    {
      name: "Brand Guidelines",
      type: "PDF",
      size: "8.2 MB"
    },
    {
      name: "Executive Team Photos",
      type: "ZIP",
      size: "45 MB"
    },
    {
      name: "Platform Screenshots",
      type: "ZIP",
      size: "32 MB"
    }
  ];

  return (
    <PageTemplate title="Press Center" breadcrumb="Press">
      <div className="mb-8">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
          <Image
            src="/Last_bullet.jpg"
            alt="Pixloris Press"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1518] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">Latest News & Updates</h2>
            <p className="text-sm xs:text-base text-white/80 mt-2 max-w-lg">Stay informed about Pixloris's newest features, content, and company announcements</p>
          </div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">Press Releases</h2>
        
        <div className="space-y-6 mb-8">
          {pressReleases.map((release, index) => (
            <div key={index} className="border-b border-[#232a31] pb-5">
              <h3 className="text-lg font-semibold text-[#f9f8ff] mb-1">{release.title}</h3>
              <div className="text-yellow-400 text-xs font-medium mb-2">{release.date}</div>
              <p className="text-sm text-[#b4bbc2] mb-3">{release.excerpt}</p>
              <button className="text-xs text-[#f9f8ff] font-medium hover:text-yellow-400 transition">
                Read Full Press Release →
              </button>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#181e23] p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-[#f9f8ff] mb-4">Media Contacts</h3>
            
            <div className="space-y-4">
              {mediaContacts.map((contact, index) => (
                <div key={index} className="border-b border-[#232a31] pb-4 last:border-0 last:pb-0">
                  <div className="font-medium text-[#f9f8ff] mb-1">{contact.name}</div>
                  <div className="text-sm text-[#959ca3] mb-1">{contact.position}</div>
                  <div className="text-sm text-yellow-400">{contact.email}</div>
                  <div className="text-sm text-[#b4bbc2]">{contact.phone}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#181e23] p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-[#f9f8ff] mb-4">Media Assets</h3>
            
            <div className="space-y-3">
              {mediaAssets.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#232a31] rounded">
                  <div>
                    <div className="text-sm font-medium text-[#f9f8ff]">{asset.name}</div>
                    <div className="text-xs text-[#959ca3]">{asset.type} • {asset.size}</div>
                  </div>
                  <button className="bg-[#181e23] hover:bg-[#2c3540] text-[#f9f8ff] text-xs px-3 py-1 rounded transition">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">Media Inquiries</h2>
        <p className="mb-6 text-[#b4bbc2]">
          For press inquiries, interview requests, or additional information, please contact our media relations team at <a href="mailto:press@pixloris.com" className="text-yellow-400 hover:underline">press@pixloris.com</a>. We strive to respond to all media inquiries within 24 hours.
        </p>
        
        <div className="bg-gradient-to-r from-[#232a31] to-[#181e23] p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#f9f8ff] mb-3">Stay Updated</h3>
          <p className="text-sm text-[#b4bbc2] mb-4">
            Subscribe to our press email list to receive the latest news and announcements from Pixloris.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-[#0e1518] text-[#f9f8ff] px-3 py-2 rounded flex-1 text-sm outline-none border border-transparent focus:border-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-2 rounded text-sm whitespace-nowrap transition">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
