import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function IOSDownload() {
  const systemRequirements = [
    {
      label: "Operating System",
      value: "iOS 14.0 or later"
    },
    {
      label: "Compatible With",
      value: "iPhone, iPad, and iPod touch"
    },
    {
      label: "Storage",
      value: "200 MB available space (plus space for downloaded content)"
    },
    {
      label: "Internet",
      value: "Broadband connection (5+ Mbps recommended)"
    }
  ];

  const features = [
    {
      title: "Download & Watch Offline",
      description: "Save content to watch without internet",
      icon: "💾"
    },
    {
      title: "Multiple Profiles",
      description: "Create up to 5 personalized viewing profiles",
      icon: "👥"
    },
    {
      title: "Picture-in-Picture",
      description: "Continue watching while using other apps",
      icon: "🔍"
    },
    {
      title: "AirPlay",
      description: "Stream to Apple TV or AirPlay-enabled devices",
      icon: "📺"
    },
    {
      title: "SharePlay",
      description: "Watch together with friends via FaceTime",
      icon: "👪"
    },
    {
      title: "Widget Support",
      description: "Quick access to continue watching",
      icon: "📱"
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for iOS" breadcrumb="iOS Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/lilo_stitch.jpg" 
                alt="Pixloris iOS App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <path d="M25 14C25.7956 14 26.5587 13.6839 27.1213 13.1213C27.6839 12.5587 28 11.7956 28 11C28 10.2044 27.6839 9.44129 27.1213 8.87868C26.5587 8.31607 25.7956 8 25 8C24.2044 8 23.4413 8.31607 22.8787 8.87868C22.3161 9.44129 22 10.2044 22 11C22 11.7956 22.3161 12.5587 22.8787 13.1213C23.4413 13.6839 24.2044 14 25 14Z" fill="#0e1518"/>
                      <path d="M15 14C15.7956 14 16.5587 13.6839 17.1213 13.1213C17.6839 12.5587 18 11.7956 18 11C18 10.2044 17.6839 9.44129 17.1213 8.87868C16.5587 8.31607 15.7956 8 15 8C14.2044 8 13.4413 8.31607 12.8787 8.87868C12.3161 9.44129 12 10.2044 12 11C12 11.7956 12.3161 12.5587 12.8787 13.1213C13.4413 13.6839 14.2044 14 15 14Z" fill="#0e1518"/>
                      <path d="M20 26C18.4087 26 16.8826 25.3679 15.7574 24.2426C14.6321 23.1174 14 21.5913 14 20V17H26V20C26 21.5913 25.3679 23.1174 24.2426 24.2426C23.1174 25.3679 21.5913 26 20 26Z" fill="#0e1518"/>
                      <path d="M12 32H28V33H12V32Z" fill="#0e1518"/>
                      <circle cx="20" cy="20" r="2" fill="#FFD600"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for iOS</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg mb-6 flex flex-col items-center sm:flex-row sm:items-start">
              <div className="bg-[#232a31] h-24 w-24 rounded-2xl overflow-hidden relative mb-4 sm:mb-0 sm:mr-5 flex-shrink-0">
                <Image 
                  src="/arcane.jpg"
                  alt="Pixloris iOS App Icon" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(0,0,0,0.7)] flex items-end justify-center pb-2">
                  <svg width="30" height="8" viewBox="0 0 30 8" fill="none">
                    <path d="M15 0L18.2705 5.27147L30 6.11567L22.5 10.2353L24.2705 16L15 13.2715L5.7295 16L7.5 10.2353L0 6.11567L11.7295 5.27147L15 0Z" fill="#FFD600"/>
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-[#f9f8ff] font-semibold mb-1 text-base">Pixloris: Movies & TV Shows</h3>
                <p className="text-xs text-[#959ca3] mb-3">Stream your favorites anytime, anywhere</p>
                <button className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] font-medium px-6 py-2 rounded-md text-sm flex items-center gap-2 mx-auto sm:mx-0 transition mb-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3333 9.00008L7.5 5.25008V12.7501L12.3333 9.00008Z" fill="#FFD600"/>
                    <path d="M9 0.666748C4.4 0.666748 0.666656 4.40008 0.666656 9.00008C0.666656 13.6001 4.4 17.3334 9 17.3334C13.6 17.3334 17.3333 13.6001 17.3333 9.00008C17.3333 4.40008 13.6 0.666748 9 0.666748ZM9 15.6667C5.32499 15.6667 2.33332 12.6751 2.33332 9.00008C2.33332 5.32508 5.32499 2.33341 9 2.33341C12.675 2.33341 15.6667 5.32508 15.6667 9.00008C15.6667 12.6751 12.675 15.6667 9 15.6667Z" fill="white"/>
                  </svg>
                  Preview
                </button>
                <a href="https://apps.apple.com/app/Pixloris" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-6 py-2 rounded-md text-sm flex items-center justify-center gap-2 mx-auto sm:mx-0 transition">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12Z" fill="currentColor"/>
                    <path d="M2 14V11H4V12H12V11H14V14H2Z" fill="currentColor"/>
                  </svg>
                  App Store
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-[#f9f8ff] mb-3">About Pixloris for iOS</h2>
            <p className="mb-4 text-sm">Experience Pixloris on your iPhone or iPad with our beautifully designed iOS app. Enjoy a seamless streaming experience with full integration of iOS features like Picture-in-Picture, SharePlay, and AirPlay.</p>
            
            <h3 className="text-[#f9f8ff] font-semibold mb-2">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#181e23] p-3 rounded flex">
                  <div className="bg-[#232a31] h-8 w-8 flex items-center justify-center rounded mr-3 flex-shrink-0">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[#f9f8ff] text-sm font-medium">{feature.title}</h4>
                    <p className="text-xs text-[#959ca3]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-[#181e23] rounded-lg p-5">
          <h3 className="text-[#f9f8ff] font-semibold mb-4">System Requirements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {systemRequirements.map((req, index) => (
              <div key={index} className="flex">
                <div className="w-36 text-[#959ca3] text-sm">{req.label}:</div>
                <div className="text-[#f9f8ff] text-sm">{req.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Installation Instructions</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Tap the "App Store" button above to open the App Store</li>
          <li>Tap "Get" or the cloud icon (if you've downloaded it before)</li>
          <li>Authenticate with Face ID, Touch ID, or your Apple ID password</li>
          <li>Wait for the download to complete</li>
          <li>Open the app and sign in to your Pixloris account or create a new one</li>
          <li>Enable notifications when prompted for updates on new releases</li>
        </ol>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Premium Features</h3>
        <div className="space-y-3 text-sm">
          <p>Subscribe to Pixloris Premium through the iOS app to unlock:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Ad-free viewing experience</li>
            <li>Unlimited downloads for offline viewing</li>
            <li>4K Ultra HD streaming where available</li>
            <li>Access to exclusive Pixloris Original content</li>
            <li>Stream on up to 4 devices simultaneously</li>
            <li>Priority customer support</li>
          </ul>
          <p className="pt-2 italic text-[#959ca3]">*Note: Subscriptions purchased through the App Store will be charged to your Apple ID account.</p>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Troubleshooting</h3>
        <div className="space-y-3 text-sm">
          <p>If you encounter any issues during installation or while using Pixloris for iOS, please try these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ensure your iOS is updated to the latest version</li>
            <li>Restart your iPhone or iPad</li>
            <li>Delete and reinstall the app</li>
            <li>Check your internet connection</li>
            <li>Make sure you have enough storage space</li>
          </ol>
          <p className="pt-2">If problems persist, please <a href="/contact-us" className="text-yellow-400 hover:underline">contact our support team</a> or visit our <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
