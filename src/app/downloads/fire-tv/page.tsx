import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function FireTVDownload() {
  const systemRequirements = [
    {
      label: "Device",
      value: "Amazon Fire TV Stick, Fire TV Cube, or Fire TV Edition Smart TV"
    },
    {
      label: "Operating System",
      value: "Fire OS 5.0 or later"
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
      title: "Alexa Integration",
      description: "Search and control playback with voice commands",
      icon: "🗣️"
    },
    {
      title: "Watch Party",
      description: "Watch movies and shows with friends remotely",
      icon: "🎉"
    },
    {
      title: "X-Ray",
      description: "View cast, character, and scene information",
      icon: "ℹ️"
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for Fire TV" breadcrumb="Fire TV Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/Mufasa.jpg" 
                alt="Pixloris Fire TV App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <path d="M29 17.5C29 22.1944 25.1944 26 20.5 26C15.8056 26 12 22.1944 12 17.5C12 12.8056 15.8056 9 20.5 9C25.1944 9 29 12.8056 29 17.5Z" fill="#0e1518"/>
                      <path d="M23 15L18 20L15 17" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 26V31" stroke="#0e1518" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M13 31H27" stroke="#0e1518" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for Fire TV</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg mb-6 text-center">
              <h3 className="text-[#f9f8ff] font-semibold mb-4">Get Pixloris on your Fire TV</h3>
              <div className="flex justify-center mb-5">
                <div className="bg-[#232a31] p-3 rounded-lg">
                  <Image
                    src="/arcane.jpg"
                    alt="Pixloris Fire TV App Icon"
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://www.amazon.com/gp/product/app" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-6 py-3 rounded-md text-sm flex items-center justify-center gap-2 mx-auto transition">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12Z" fill="currentColor"/>
                    <path d="M2 14V11H4V12H12V11H14V14H2Z" fill="currentColor"/>
                  </svg>
                  Get on Amazon Appstore
                </a>
                <p className="text-xs text-[#959ca3] mt-2">Or search for "Pixloris" in the Amazon Appstore on your Fire TV device</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-[#f9f8ff] mb-3">About Pixloris for Fire TV</h2>
            <p className="mb-4 text-sm">Transform your TV into an immersive entertainment center with Pixloris for Fire TV. Enjoy seamless streaming of movies and shows with an interface optimized for Fire TV devices and Alexa voice control integration.</p>
            
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
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 1: Install directly on your Fire TV</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>From your Fire TV Home screen, navigate to the search icon</li>
              <li>Type "Pixloris" using the on-screen keyboard or voice search</li>
              <li>Select Pixloris from the search results</li>
              <li>Click "Download" or "Get" to install the app</li>
              <li>Once installed, open the app and sign in to your Pixloris account or create a new one</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 2: Install from web browser</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>Click the "Get on Amazon Appstore" button above</li>
              <li>Sign in to your Amazon account when prompted</li>
              <li>Select your Fire TV device from the "Deliver to:" dropdown</li>
              <li>Click "Get App" to send the app to your device</li>
              <li>On your Fire TV, go to "Library" to find and install Pixloris</li>
              <li>Open the app and sign in to your Pixloris account or create a new one</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-[#f9f8ff] text-base mb-2">Method 3: Using Alexa</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>Press and hold the microphone button on your Fire TV remote</li>
              <li>Say "Find Pixloris app"</li>
              <li>Follow the on-screen prompts to download the app</li>
              <li>Once installed, open the app and sign in</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5 mb-8">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Using Alexa with Pixloris</h3>
        <div className="space-y-4 text-sm">
          <p>Pixloris for Fire TV integrates with Alexa for a hands-free viewing experience. Here are some voice commands you can use:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#232a31] p-3 rounded">
              <div className="text-yellow-400 font-medium mb-1">"Alexa, open Pixloris"</div>
              <p className="text-[#959ca3] text-xs">Launches the Pixloris app on your Fire TV</p>
            </div>
            
            <div className="bg-[#232a31] p-3 rounded">
              <div className="text-yellow-400 font-medium mb-1">"Alexa, find action movies on Pixloris"</div>
              <p className="text-[#959ca3] text-xs">Searches for action movies in the Pixloris app</p>
            </div>
            
            <div className="bg-[#232a31] p-3 rounded">
              <div className="text-yellow-400 font-medium mb-1">"Alexa, play [title] on Pixloris"</div>
              <p className="text-[#959ca3] text-xs">Plays the specified movie or show on Pixloris</p>
            </div>
            
            <div className="bg-[#232a31] p-3 rounded">
              <div className="text-yellow-400 font-medium mb-1">"Alexa, pause" / "Alexa, resume"</div>
              <p className="text-[#959ca3] text-xs">Controls playback while watching content</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Troubleshooting</h3>
        <div className="space-y-3 text-sm">
          <p>If you encounter any issues during installation or while using Pixloris for Fire TV, please try these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Check that your Fire TV device is connected to the internet</li>
            <li>Restart your Fire TV by unplugging it for 30 seconds, then plugging it back in</li>
            <li>Clear the app cache: Settings {"->"} Applications {"->"} Manage Installed Applications {"->"} Pixloris {"->"} Clear cache</li>
            <li>Uninstall and reinstall the app</li>
            <li>Ensure your Fire OS is updated to the latest version</li>
          </ol>
          <p className="pt-2">If problems persist, please <a href="/contact-us" className="text-yellow-400 hover:underline">contact our support team</a> or visit our <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
