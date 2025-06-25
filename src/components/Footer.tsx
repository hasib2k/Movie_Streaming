"use client"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#181e23] py-8 xs:py-10 sm:py-12 mt-8 xs:mt-10 sm:mt-12 md:mt-16 text-[#959ca3]">
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        {/* Newsletter & Subscription Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#f9f8ff] mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-xs xs:text-sm mb-4 max-w-md">Get updates about new releases, exclusive content and personalized recommendations delivered to your inbox.</p>
            
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#232a31] text-[#f9f8ff] px-3 py-2 xs:py-2.5 rounded-md flex-1 text-xs xs:text-sm outline-none border border-transparent focus:border-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-2 xs:py-2.5 rounded-md text-xs xs:text-sm whitespace-nowrap transition">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-6">
            <h3 className="text-base xs:text-lg font-bold text-[#f9f8ff] mb-2 text-center md:text-left">Premium Plans</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 xs:gap-3">
              <div className="bg-[#232a31] px-3 py-2 rounded-lg text-xs xs:text-sm">
                <div className="text-yellow-400 font-semibold">Monthly</div>
                <div>$9.99/month</div>
              </div>
              <div className="bg-[#232a31] px-3 py-2 rounded-lg text-xs xs:text-sm">
                <div className="text-yellow-400 font-semibold">Yearly</div>
                <div>$89.99/year</div>
              </div>
              <div className="bg-[#232a31] px-3 py-2 rounded-lg text-xs xs:text-sm">
                <div className="text-yellow-400 font-semibold">Family</div>
                <div>$14.99/month</div>
              </div>
            </div>
          </div>        </div>
          {/* Footer links section - expanded */}
        <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 xs:gap-x-6 sm:gap-8 text-xs xs:text-sm mt-8 xs:mt-10 md:mt-12">
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2 md:mb-3">Company</div>
            <div className="space-y-1 xs:space-y-1.5">
              <Link href="/about-us" className="block hover:text-[#f9f8ff] transition-colors">About Us</Link>
              <Link href="/careers" className="block hover:text-[#f9f8ff] transition-colors">Careers</Link>
              <Link href="/press" className="block hover:text-[#f9f8ff] transition-colors">Press</Link>
              <Link href="/investors" className="block hover:text-[#f9f8ff] transition-colors">Investors</Link>
              <Link href="/blog" className="block hover:text-[#f9f8ff] transition-colors">Blog</Link>
            </div>
          </div>
          
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2 md:mb-3">Downloads</div>
            <div className="space-y-1 xs:space-y-1.5">
              <Link href="/downloads/windows" className="block hover:text-[#f9f8ff] transition-colors">Windows</Link>
              <Link href="/downloads/macos" className="block hover:text-[#f9f8ff] transition-colors">macOS</Link>
              <Link href="/downloads/android" className="block hover:text-[#f9f8ff] transition-colors">Android</Link>
              <Link href="/downloads/ios" className="block hover:text-[#f9f8ff] transition-colors">iOS</Link>
              <Link href="/downloads/apple-tv" className="block hover:text-[#f9f8ff] transition-colors">Apple TV</Link>
              <Link href="/downloads/roku" className="block hover:text-[#f9f8ff] transition-colors">Roku</Link>
              <Link href="/downloads/fire-tv" className="block hover:text-[#f9f8ff] transition-colors">Fire TV</Link>
            </div>
          </div>
          
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2 md:mb-3">Support</div>
            <div className="space-y-1 xs:space-y-1.5">
              <Link href="/help-center" className="block hover:text-[#f9f8ff] transition-colors">Help Center</Link>
              <Link href="/contact-us" className="block hover:text-[#f9f8ff] transition-colors">Contact Us</Link>
              <Link href="/community" className="block hover:text-[#f9f8ff] transition-colors">Community</Link>
              <Link href="/device-support" className="block hover:text-[#f9f8ff] transition-colors">Device Support</Link>
              <Link href="/accessibility" className="block hover:text-[#f9f8ff] transition-colors">Accessibility</Link>
            </div>
          </div>
          
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2 md:mb-3">Watch Free</div>
            <div className="space-y-1 xs:space-y-1.5">
              <Link href="/live-tv" className="block hover:text-[#f9f8ff] transition-colors">Live TV</Link>
              <Link href="/movies" className="block hover:text-[#f9f8ff] transition-colors">Movies</Link>
              <Link href="/tv-shows" className="block hover:text-[#f9f8ff] transition-colors">TV Shows</Link>
              <Link href="/news" className="block hover:text-[#f9f8ff] transition-colors">News</Link>
              <Link href="/sports" className="block hover:text-[#f9f8ff] transition-colors">Sports</Link>
              <Link href="/kids" className="block hover:text-[#f9f8ff] transition-colors">Kids</Link>
            </div>
          </div>
          
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2 md:mb-3">Legal</div>
            <div className="space-y-1 xs:space-y-1.5">
              <Link href="/terms-of-service" className="block hover:text-[#f9f8ff] transition-colors">Terms of Service</Link>
              <Link href="/privacy-policy" className="block hover:text-[#f9f8ff] transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="block hover:text-[#f9f8ff] transition-colors">Cookie Policy</Link>
              <Link href="/dmca" className="block hover:text-[#f9f8ff] transition-colors">DMCA</Link>
              <Link href="/content-guidelines" className="block hover:text-[#f9f8ff] transition-colors">Content Guidelines</Link>
            </div>
          </div>
          
          <div>
            <div className="font-semibold text-[#f9f8ff] mb-2 md:mb-3">Contact</div>
            <div className="space-y-2 xs:space-y-3">
              <div className="flex items-center gap-1.5">
                <EnvelopeIcon className="h-4 w-4" />
                <span>support@pixloris.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneIcon className="h-4 w-4" />
                <span>1-800-PXLRIS</span>
              </div>
              
              <div className="flex gap-3 mt-2 pt-2 border-t border-[#232a31]">
                <a href="#" className="text-[#f9f8ff] hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a href="#" className="text-[#f9f8ff] hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-[#f9f8ff] hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="#" className="text-[#f9f8ff] hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright and bottom links */}
        <div className="mt-8 pt-6 border-t border-[#232a31] flex flex-col xs:flex-row justify-between items-center gap-4 text-[10px] xs:text-xs">
          <div>© 2025 Pixloris, Inc. All rights reserved. Owned by Hasib Ahmed. <a href="https://www.pixloris.com" className="hover:text-[#f9f8ff] underline">www.Pixloris.com</a></div>
          <div className="flex gap-3 xs:gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-[#f9f8ff]">Sitemap</a>
            <a href="#" className="hover:text-[#f9f8ff]">Cookies</a>
            <a href="#" className="hover:text-[#f9f8ff]">Accessibility</a>
            <a href="#" className="hover:text-[#f9f8ff]">Do Not Sell My Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}