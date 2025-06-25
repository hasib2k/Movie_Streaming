"use client"
export default function Footer() {
  return (
    <footer className="bg-[#181e23] py-12 mt-16 text-[#959ca3]">
      <div className="max-w-5xl mx-auto px-2">
        <div className="flex flex-col items-center mb-8">
          <div className="text-2xl font-bold text-[#f9f8ff] mb-2">20,000+ Titles 600+ Live TV Channels</div>
          <div className="mb-4">Watch live anytime, anywhere, on any device.</div>
          <div className="flex gap-6 mb-4">
            {/* Placeholder icons */}
            <span className="bg-[#0e1518] p-3 rounded-lg"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#f9f8ff"/></svg></span>
            <span className="bg-[#0e1518] p-3 rounded-lg"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#f9f8ff"/></svg></span>
            <span className="bg-[#0e1518] p-3 rounded-lg"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#f9f8ff"/></svg></span>
            <span className="bg-[#0e1518] p-3 rounded-lg"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#f9f8ff"/></svg></span>
            <span className="bg-[#0e1518] p-3 rounded-lg"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#f9f8ff"/></svg></span>
            <span className="bg-[#0e1518] p-3 rounded-lg"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#f9f8ff"/></svg></span>

          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-8 text-sm border-t border-[#232a31] pt-8">
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2">Company</div>
            <div>Plex Inc.</div>
            <div>All rights reserved.</div>
          </div>
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2">Downloads</div>
            <div>macOS</div>
            <div>Android</div>
            <div>Apple TV</div>
            <div>Roku</div>
          </div>
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2">Support</div>
            <div>Help Center</div>
            <div>Contact</div>
            <div>Privacy Policy</div>
          </div>
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2">Watch Free</div>
            <div>Live TV</div>
            <div>Movies</div>
            <div>Shows</div>
          </div>
        </div>
      </div>
    </footer>
  );
} 