import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function RokuDownload() {
  const systemRequirements = [
    {
      label: "Device",
      value: "Any Roku streaming device, Roku TV, or Roku Stick"
    },
    {
      label: "Operating System",
      value: "Roku OS 9.0 or later"
    },
    {
      label: "Internet",
      value: "Broadband connection (5+ Mbps recommended)"
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
      title: "Voice Search",
      description: "Find content easily using your Roku voice remote",
      icon: "🔍"
    },
    {
      title: "Continue Watching",
      description: "Pick up where you left off across all your devices",
      icon: "▶️"
    },
    {
      title: "Personalized Recommendations",
      description: "Discover new content based on your viewing habits",
      icon: "🎯"
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for Roku" breadcrumb="Roku Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/Last_bullet.jpg" 
                alt="Pixloris Roku App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <path d="M10 10C10 8.9 10.9 8 12 8H28C29.1 8 30 8.9 30 10V22C30 23.1 29.1 24 28 24H12C10.9 24 10 23.1 10 22V10Z" fill="#0e1518"/>
                      <path d="M12 26H28V28H12V26Z" fill="#0e1518"/>
                      <path d="M16 28H24V32H16V28Z" fill="#0e1518"/>
                      <rect x="15" y="12" width="10" height="8" rx="1" fill="#FFD600"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for Roku</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg mb-6 text-center">
              <h3 className="text-[#f9f8ff] font-semibold mb-4">Add Pixloris to your Roku</h3>
              <div className="flex justify-center mb-5">
                <div className="bg-[#232a31] p-3 rounded-lg">
                  <Image
                    src="/arcane.jpg"
                    alt="Pixloris Roku Channel Icon"
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://channelstore.roku.com/details/channel" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-6 py-3 rounded-md text-sm flex items-center justify-center gap-2 mx-auto transition">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12Z" fill="currentColor"/>
                    <path d="M2 14V11H4V12H12V11H14V14H2Z" fill="currentColor"/>
                  </svg>
                  Add Channel on Roku
                </a>
                <div className="text-sm text-[#959ca3] mt-2">
                  <span className="font-medium text-[#f9f8ff]">Channel code:</span> PIXLORIS
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-[#f9f8ff] mb-3">About Pixloris for Roku</h2>
            <p className="mb-4 text-sm">Bring the Pixloris streaming experience to your TV with our Roku channel. Enjoy seamless access to thousands of movies and TV shows, including exclusive Pixloris Originals, with an interface optimized for the big screen.</p>
            
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
      
      <div className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Installation Instructions</h3>
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 1: Add directly on your Roku device</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>From your Roku Home screen, select "Streaming Channels" to open the Channel Store</li>
              <li>Select "Search Channels"</li>
              <li>Type "Pixloris" using the on-screen keyboard</li>
              <li>Select Pixloris from the search results</li>
              <li>Select "Add Channel" to install Pixloris</li>
              <li>Once installed, return to the Home screen and find the Pixloris channel</li>
              <li>Open the app and sign in to your Pixloris account or create a new one</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 2: Add from the web</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>Click the "Add Channel on Roku" button above</li>
              <li>Sign in to your Roku account when prompted</li>
              <li>Click "Yes, add channel" to confirm</li>
              <li>The Pixloris channel will be automatically added to your Roku device</li>
              <li>On your Roku device, open the Pixloris channel</li>
              <li>Sign in to your Pixloris account or create a new one</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 3: Using a code</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>From your Roku Home screen, select "Streaming Channels" to open the Channel Store</li>
              <li>Scroll down and select "Search Channels"</li>
              <li>Type the channel code "PIXLORIS" using the on-screen keyboard</li>
              <li>Select Pixloris from the search results</li>
              <li>Select "Add Channel" to install Pixloris</li>
              <li>Once installed, return to the Home screen and find the Pixloris channel</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Premium Features</h3>
        <div className="space-y-3 text-sm">
          <p>Subscribe to Pixloris Premium to unlock:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Ad-free viewing experience</li>
            <li>4K Ultra HD streaming (on supported Roku devices)</li>
            <li>Access to exclusive Pixloris Original content</li>
            <li>Stream on up to 4 devices simultaneously</li>
            <li>Enhanced audio quality with supported content</li>
          </ul>
          <div className="bg-[#232a31] p-4 rounded mt-4">
            <p className="text-[#f9f8ff] font-medium mb-1">To subscribe:</p>
            <ol className="list-decimal list-inside space-y-1 text-[#959ca3]">
              <li>Open the Pixloris channel on your Roku</li>
              <li>Navigate to Account or Profile settings</li>
              <li>Select "Subscribe" or "Upgrade"</li>
              <li>Choose your preferred subscription plan</li>
              <li>Complete the purchase using your Roku account</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Troubleshooting</h3>
        <div className="space-y-3 text-sm">
          <p>If you encounter any issues during installation or while using Pixloris for Roku, please try these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Check that your Roku device is connected to the internet</li>
            <li>Restart your Roku device by unplugging it for 10 seconds, then plugging it back in</li>
            <li>Remove the Pixloris channel and reinstall it</li>
            <li>Ensure your Roku OS is updated to the latest version</li>
            <li>Check that your Roku device meets the minimum requirements</li>
          </ol>
          <p className="pt-2">If problems persist, please <a href="/contact-us" className="text-yellow-400 hover:underline">contact our support team</a> or visit our <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
