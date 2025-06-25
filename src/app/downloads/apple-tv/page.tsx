import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function AppleTVDownload() {
  const systemRequirements = [
    {
      label: "Device",
      value: "Apple TV 4K or Apple TV HD (4th generation or later)"
    },
    {
      label: "Operating System",
      value: "tvOS 14.0 or later"
    },
    {
      label: "Internet",
      value: "Broadband connection (10+ Mbps recommended for 4K content)"
    }
  ];

  const features = [
    {
      title: "4K Ultra HD",
      description: "Enjoy stunning picture quality with supported content",
      icon: "🖥️"
    },
    {
      title: "Multiple Profiles",
      description: "Create up to 5 personalized viewing profiles",
      icon: "👥"
    },
    {
      title: "Dolby Atmos",
      description: "Immersive audio experience on supported content",
      icon: "🔊"
    },
    {
      title: "Screensavers",
      description: "Beautiful cinematic screensavers while idle",
      icon: "🌄"
    },
    {
      title: "Apple Remote Integration",
      description: "Intuitive navigation with Siri Remote",
      icon: "🎮"
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for Apple TV" breadcrumb="Apple TV Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/blade_runner.jpg" 
                alt="Pixloris Apple TV App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <path d="M10 12C10 10.9 10.9 10 12 10H28C29.1 10 30 10.9 30 12V24C30 25.1 29.1 26 28 26H12C10.9 26 10 25.1 10 24V12Z" fill="#0e1518"/>
                      <rect x="14" y="30" width="12" height="2" rx="1" fill="#0e1518"/>
                      <path d="M20 26V30" stroke="#0e1518" strokeWidth="2"/>
                      <rect x="14" y="14" width="12" height="8" rx="1" fill="#FFD600"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for Apple TV</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg mb-6 text-center">
              <h3 className="text-[#f9f8ff] font-semibold mb-3">Available on the App Store</h3>
              <div className="flex justify-center mb-4">
                <Image
                  src="/arcane.jpg"
                  alt="Pixloris Apple TV App Icon"
                  width={80}
                  height={80}
                  className="rounded-2xl"
                />
              </div>
              <p className="text-sm text-[#959ca3] mb-4">Download Pixloris directly from the App Store on your Apple TV device</p>
              <div className="flex flex-col gap-3">
                <a href="#tvos-instructions" className="bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff] font-medium px-6 py-3 rounded-md text-sm mx-auto transition">
                  View Installation Instructions
                </a>
                <p className="text-xs text-[#959ca3]">or search for "Pixloris" in the Apple TV App Store</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-[#f9f8ff] mb-3">About Pixloris for Apple TV</h2>
            <p className="mb-4 text-sm">Transform your living room into a cinematic experience with Pixloris for Apple TV. Enjoy your favorite movies and shows in stunning 4K quality with Dolby Atmos sound on the big screen.</p>
            
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
        
        <div className="bg-[#181e23] rounded-lg p-5 mb-8">
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
      
      <div id="tvos-instructions" className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Installation Instructions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 1: Download from the App Store</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>From your Apple TV Home screen, open the App Store</li>
              <li>Navigate to the "Search" tab using your Siri Remote</li>
              <li>Type "Pixloris" using the on-screen keyboard or dictate using the Siri button</li>
              <li>Select Pixloris from the search results</li>
              <li>Click the "Get" button (or "Download" if you've installed it before)</li>
              <li>Wait for the download to complete</li>
              <li>Open the app and sign in to your Pixloris account or create a new one</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 2: Using iPhone/iPad</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>On your iPhone or iPad, open the App Store</li>
              <li>Search for "Pixloris"</li>
              <li>When found, tap on the app and then tap "Get" or the download icon</li>
              <li>Look for the option to "Also download on Apple TV" or tap on your account icon</li>
              <li>Select "Purchased" and find Pixloris in the list</li>
              <li>Tap the cloud download icon to install it on your connected Apple TV</li>
              <li>The app will automatically download to your Apple TV</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Getting the Best Experience</h3>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#232a31] h-10 w-10 flex items-center justify-center rounded flex-shrink-0 mt-1">
              <span className="text-2xl">📶</span>
            </div>
            <div>
              <h4 className="text-[#f9f8ff] font-medium mb-1">Stable Internet Connection</h4>
              <p className="text-[#959ca3]">For the best 4K streaming experience, we recommend a stable internet connection of at least 25 Mbps. Connect your Apple TV to your router via Ethernet for the most reliable connection.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-[#232a31] h-10 w-10 flex items-center justify-center rounded flex-shrink-0 mt-1">
              <span className="text-2xl">🎬</span>
            </div>
            <div>
              <h4 className="text-[#f9f8ff] font-medium mb-1">4K and HDR Content</h4>
              <p className="text-[#959ca3]">To enjoy 4K and HDR content, ensure your Apple TV is configured correctly. Go to Settings {"->"} Video and Audio {"->"} Format and select 4K HDR or 4K Dolby Vision based on your TV's capabilities.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-[#232a31] h-10 w-10 flex items-center justify-center rounded flex-shrink-0 mt-1">
              <span className="text-2xl">🔊</span>
            </div>
            <div>
              <h4 className="text-[#f9f8ff] font-medium mb-1">Dolby Atmos Sound</h4>
              <p className="text-[#959ca3]">For immersive audio, connect your Apple TV to a Dolby Atmos-compatible sound system. Enable Dolby Atmos in Settings {"->"} Video and Audio {"->"} Audio Format.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Troubleshooting</h3>
        <div className="space-y-3 text-sm">
          <p>If you encounter any issues during installation or while using Pixloris for Apple TV, please try these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ensure your tvOS is updated to the latest version</li>
            <li>Restart your Apple TV by going to Settings {"->"} System {"->"} Restart</li>
            <li>Check your internet connection speed</li>
            <li>Delete and reinstall the app</li>
            <li>Sign out and sign back into your Pixloris account</li>
          </ol>
          <p className="pt-2">If problems persist, please <a href="/contact-us" className="text-yellow-400 hover:underline">contact our support team</a> or visit our <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
