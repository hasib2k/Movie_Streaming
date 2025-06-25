import Image from 'next/image';
import Link from 'next/link';
import { LifebuoyIcon, ChatBubbleLeftRightIcon, DocumentTextIcon, PhoneIcon, EnvelopeIcon, QuestionMarkCircleIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

// Sample support categories
const supportCategories = [
  {
    id: 'account',
    title: 'Account & Billing',
    icon: '/window.svg',
    description: 'Help with your account, payments, subscriptions and billing',
    commonIssues: [
      { title: 'Reset password', link: '/help-center#reset-password' },
      { title: 'Update payment information', link: '/help-center#payment-info' },
      { title: 'Cancel subscription', link: '/help-center#cancel-subscription' },
      { title: 'Change email address', link: '/help-center#change-email' },
    ],
  },
  {
    id: 'streaming',
    title: 'Streaming & Playback',
    icon: '/file.svg',
    description: 'Troubleshoot streaming issues, video quality, and playback errors',
    commonIssues: [
      { title: 'Fix buffering problems', link: '/help-center#buffering' },
      { title: 'Improve video quality', link: '/help-center#video-quality' },
      { title: 'Audio not working', link: '/help-center#audio-issues' },
      { title: 'Playback errors', link: '/help-center#playback-errors' },
    ],
  },
  {
    id: 'devices',
    title: 'Device Support',
    icon: '/globe.svg',
    description: 'Get help with apps, smart TVs, gaming consoles, and mobile devices',
    commonIssues: [
      { title: 'TV app not working', link: '/help-center#tv-app' },
      { title: 'Mobile app troubleshooting', link: '/help-center#mobile-app' },
      { title: 'Supported devices', link: '/help-center#supported-devices' },
      { title: 'Installation help', link: '/help-center#installation' },
    ],
  },
];

// Contact methods
const contactMethods = [
  {
    id: 'chat',
    title: 'Live Chat',
    icon: ChatBubbleLeftRightIcon,
    description: 'Chat with our support team in real-time',
    availability: 'Available 24/7',
    buttonText: 'Start chat',
    buttonLink: '/contact-us#chat',
  },
  {
    id: 'call',
    title: 'Phone Support',
    icon: PhoneIcon,
    description: 'Speak directly with a support representative',
    availability: 'Mon-Fri: 8am-9pm ET',
    buttonText: 'Call us',
    buttonLink: '/contact-us#phone',
  },
  {
    id: 'email',
    title: 'Email Support',
    icon: EnvelopeIcon,
    description: "Send us an email and we'll respond within 24 hours",
    availability: 'Response within 24 hours',
    buttonText: 'Email us',
    buttonLink: 'mailto:support@pixloris.com',
  },
  {
    id: 'video',
    title: 'Video Support',
    icon: VideoCameraIcon,
    description: 'Schedule a video call with a technical specialist',
    availability: 'By appointment',
    buttonText: 'Schedule call',
    buttonLink: '/contact-us#video',
  },
];

export default function SupportPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-2">
          <LifebuoyIcon className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
          <span>Support Center</span>
        </h1>
        <p className="text-[#959ca3] text-sm md:text-base">
          Find help and support for all your Pixloris questions
        </p>
      </div>

      {/* Search section */}
      <div className="bg-[#181e23] rounded-xl p-5 sm:p-8 mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">How can we help you today?</h2>
        <p className="text-[#959ca3] text-sm mb-4">Search our help center for quick answers</p>
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text"
            placeholder="Search for solutions..."
            className="w-full bg-[#10151a] border border-[#232a31] rounded-full py-3 px-5 pr-12 text-sm outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#959ca3] hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Support categories */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Browse by category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {supportCategories.map(category => (
          <div key={category.id} className="bg-[#181e23] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 mr-3 flex-shrink-0">
                <Image src={category.icon} alt={category.title} width={40} height={40} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <p className="text-[#959ca3] text-sm mt-1">{category.description}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              {category.commonIssues.map(issue => (
                <Link 
                  key={issue.title}
                  href={issue.link}
                  className="flex items-center text-sm hover:text-yellow-400 transition-colors"
                >
                  <svg className="h-3 w-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                  {issue.title}
                </Link>
              ))}
            </div>
            
            <Link 
              href={`/help-center#${category.id}`}
              className="text-yellow-400 text-sm font-medium hover:underline flex items-center"
            >
              View all topics
              <svg className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* Contact support section */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact support</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactMethods.map(method => (
          <div key={method.id} className="bg-[#181e23] rounded-xl p-4 sm:p-5 flex flex-col">
            <div className="mb-4 text-yellow-400">
              <method.icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h3 className="font-semibold mb-1">{method.title}</h3>
            <p className="text-sm text-[#959ca3] mb-2 flex-grow">{method.description}</p>
            <div className="text-xs text-[#959ca3] mb-3">{method.availability}</div>
            <Link 
              href={method.buttonLink}
              className="text-center bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] py-2 rounded-lg text-sm font-medium transition-colors block w-full"
            >
              {method.buttonText}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ section */}
      <div className="mt-8 bg-[#181e23] rounded-xl p-5 sm:p-6 md:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-lg sm:text-xl font-semibold">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          <div className="border-b border-[#232a31] pb-4">
            <h3 className="font-medium mb-2">How do I reset my password?</h3>
            <p className="text-sm text-[#959ca3]">
              You can reset your password by clicking on "Forgot Password" on the sign-in page. We'll send you an email with instructions to create a new password.
            </p>
          </div>
          
          <div className="border-b border-[#232a31] pb-4">
            <h3 className="font-medium mb-2">Can I download movies to watch offline?</h3>
            <p className="text-sm text-[#959ca3]">
              Yes, Premium and Premium+ subscribers can download movies and episodes to watch offline on mobile devices. Look for the download icon on compatible titles.
            </p>
          </div>
          
          <div className="border-b border-[#232a31] pb-4">
            <h3 className="font-medium mb-2">How many devices can I stream on simultaneously?</h3>
            <p className="text-sm text-[#959ca3]">
              Basic subscription allows 1 device at a time, Premium allows 2 devices, and Premium+ allows up to 4 devices to stream simultaneously.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">How do I cancel my subscription?</h3>
            <p className="text-sm text-[#959ca3]">
              You can cancel your subscription anytime through the "Account & Billing" section in your profile settings. Your subscription will remain active until the end of the current billing period.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            href="/help-center#faq"
            className="text-yellow-400 font-medium hover:underline flex items-center justify-center gap-1"
          >
            View all FAQs
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Self service tools */}
      <div className="mt-8 text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Self-service tools</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link 
            href="/help-center#connection-test"
            className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-4 py-2 rounded-lg text-sm transition-colors inline-block"
          >
            Connection Test
          </Link>
          <Link 
            href="/help-center#system-info"
            className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-4 py-2 rounded-lg text-sm transition-colors inline-block"
          >
            System Info
          </Link>
          <Link 
            href="/help-center#clear-cache"
            className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-4 py-2 rounded-lg text-sm transition-colors inline-block"
          >
            Clear Cache
          </Link>
          <Link 
            href="/help-center#network-settings"
            className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-4 py-2 rounded-lg text-sm transition-colors inline-block"
          >
            Network Settings
          </Link>
        </div>
      </div>
    </main>
  );
}
