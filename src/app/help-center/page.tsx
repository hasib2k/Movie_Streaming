import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function HelpCenter() {
  const faqCategories = [
    {
      title: "Account & Billing",
      icon: "👤",
      questions: [
        { question: "How do I create an account?", answer: "To create a Pixloris account, visit our homepage and click 'Sign Up' in the top right corner. Follow the prompts to enter your email, create a password, and select your subscription plan." },
        { question: "How do I update my payment information?", answer: "Sign in to your account, go to Account Settings > Billing Information. From there, you can add, edit, or remove payment methods." },
        { question: "How do I cancel my subscription?", answer: "Sign in to your account, go to Account Settings > Subscription. Click 'Cancel Subscription' and follow the prompts. You'll still have access until the end of your billing cycle." },
        { question: "What payment methods are accepted?", answer: "Pixloris accepts major credit cards, PayPal, and in select regions, direct debit and mobile carrier billing." },
      ]
    },
    {
      title: "Streaming & Playback",
      icon: "📺",
      questions: [
        { question: "Why is my video buffering?", answer: "Buffering is usually caused by slow internet connection. Try reducing video quality in settings, connecting to a different network, or restarting your router." },
        { question: "How do I download content for offline viewing?", answer: "On mobile devices, open the details page for a movie or episode, then tap the download icon. Not all content is available for download due to licensing restrictions." },
        { question: "What devices can I stream on?", answer: "Pixloris is available on smartphones, tablets, computers, smart TVs, game consoles, and streaming devices like Roku, Apple TV, and Fire TV." },
        { question: "How do I change video quality?", answer: "While watching content, click the settings icon in the player and select your preferred quality. Higher quality requires faster internet connections." },
      ]
    },
    {
      title: "Content & Features",
      icon: "🎬",
      questions: [
        { question: "How do I find specific movies or shows?", answer: "Use the search function at the top of the app or website. You can search by title, actor, director, or genre." },
        { question: "When will new episodes of my favorite show be released?", answer: "Release schedules vary by show. For Pixloris Originals, new episodes are typically released weekly on Fridays at 12:00 AM PT. For other shows, check the details page for information." },
        { question: "How do I set up parental controls?", answer: "Go to Account Settings > Parental Controls to set up a PIN and content restrictions based on age ratings." },
        { question: "Why isn't a certain movie or show available in my region?", answer: "Content availability varies by region due to licensing agreements. We're constantly working to expand our library in all regions." },
      ]
    },
  ];

  return (
    <PageTemplate title="Help Center" breadcrumb="Help Center">
      <div className="mb-10">
        {/* Hero Section */}
        <div className="bg-[#181e23] rounded-lg p-6 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">How can we help you?</h1>
            <div className="relative mb-6">
              <input 
                type="text"
                placeholder="Search for help topics..."
                className="w-full bg-[#232a31] text-[#f9f8ff] px-4 py-3 rounded-md text-sm outline-none border border-transparent focus:border-yellow-400"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-1.5 rounded text-sm transition">
                Search
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] px-4 py-2 rounded-full text-xs transition">Account Issues</button>
              <button className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] px-4 py-2 rounded-full text-xs transition">Billing Questions</button>
              <button className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] px-4 py-2 rounded-full text-xs transition">Streaming Problems</button>
              <button className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] px-4 py-2 rounded-full text-xs transition">Device Support</button>
            </div>
          </div>
        </div>

        {/* Popular Help Topics */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Popular Help Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#181e23] p-5 rounded-lg hover:bg-[#1e252b] transition-colors">
              <div className="flex items-center mb-3">
                <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium">Account Security</h3>
              </div>
              <p className="text-sm text-[#959ca3] mb-2">Learn how to keep your Pixloris account secure, update passwords, and enable two-factor authentication.</p>
              <Link href="#" className="text-yellow-400 hover:underline text-xs flex items-center">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="bg-[#181e23] p-5 rounded-lg hover:bg-[#1e252b] transition-colors">
              <div className="flex items-center mb-3">
                <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium">Billing & Payments</h3>
              </div>
              <p className="text-sm text-[#959ca3] mb-2">Find information about subscriptions, payment methods, refunds, and managing your billing details.</p>
              <Link href="#" className="text-yellow-400 hover:underline text-xs flex items-center">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="bg-[#181e23] p-5 rounded-lg hover:bg-[#1e252b] transition-colors">
              <div className="flex items-center mb-3">
                <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium">Playback Issues</h3>
              </div>
              <p className="text-sm text-[#959ca3] mb-2">Resolve common streaming problems like buffering, error codes, and poor video quality.</p>
              <Link href="#" className="text-yellow-400 hover:underline text-xs flex items-center">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Frequently Asked Questions</h2>
          
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="flex items-center text-[#f9f8ff] font-medium mb-3">
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.questions.map((item, qIndex) => (
                  <div key={qIndex} className="bg-[#181e23] rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                        <span className="text-sm font-medium text-[#f9f8ff]">{item.question}</span>
                        <span className="text-yellow-400 transition-transform group-open:rotate-180">
                          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-sm text-[#959ca3] border-t border-[#232a31]">
                        <p className="pt-3">{item.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Options */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#181e23] p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#232a31] h-12 w-12 rounded-full flex items-center justify-center text-yellow-400 mr-3">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium">Live Chat Support</h3>
              </div>
              <p className="text-sm text-[#959ca3] mb-4">Chat with our support team for immediate assistance with your questions.</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#959ca3]">Available 24/7</span>
                <Link href="/contact-us" className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-2 rounded transition">Start Chat</Link>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#232a31] h-12 w-12 rounded-full flex items-center justify-center text-yellow-400 mr-3">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium">Email Support</h3>
              </div>
              <p className="text-sm text-[#959ca3] mb-4">Send us a message and we'll get back to you within 24 hours.</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#959ca3]">Response within 24 hours</span>
                <Link href="/contact-us" className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] font-medium px-4 py-2 rounded transition">Email Us</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Help Resources */}
        <div>
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Helpful Resources</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/device-support" className="bg-[#181e23] p-4 rounded-lg hover:bg-[#1e252b] transition-colors text-center">
              <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#f9f8ff] text-xs font-medium mb-1">Device Guides</h3>
              <p className="text-[#959ca3] text-xs">Setup instructions for all devices</p>
            </Link>
            
            <Link href="/community" className="bg-[#181e23] p-4 rounded-lg hover:bg-[#1e252b] transition-colors text-center">
              <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-[#f9f8ff] text-xs font-medium mb-1">Community</h3>
              <p className="text-[#959ca3] text-xs">Connect with other users</p>
            </Link>
            
            <Link href="/downloads/windows" className="bg-[#181e23] p-4 rounded-lg hover:bg-[#1e252b] transition-colors text-center">
              <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-[#f9f8ff] text-xs font-medium mb-1">Downloads</h3>
              <p className="text-[#959ca3] text-xs">Apps for all devices</p>
            </Link>
            
            <Link href="/accessibility" className="bg-[#181e23] p-4 rounded-lg hover:bg-[#1e252b] transition-colors text-center">
              <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-[#f9f8ff] text-xs font-medium mb-1">Accessibility</h3>
              <p className="text-[#959ca3] text-xs">Features for everyone</p>
            </Link>
            
            <Link href="/terms-of-service" className="bg-[#181e23] p-4 rounded-lg hover:bg-[#1e252b] transition-colors text-center">
              <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[#f9f8ff] text-xs font-medium mb-1">Legal Help</h3>
              <p className="text-[#959ca3] text-xs">Terms and policies</p>
            </Link>
            
            <Link href="/blog" className="bg-[#181e23] p-4 rounded-lg hover:bg-[#1e252b] transition-colors text-center">
              <div className="bg-[#232a31] h-10 w-10 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-[#f9f8ff] text-xs font-medium mb-1">Blog</h3>
              <p className="text-[#959ca3] text-xs">News and updates</p>
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
