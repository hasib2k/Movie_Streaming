import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function MacOSDownload() {
  const systemRequirements = [
    {
      label: "Operating System",
      value: "macOS 11 Big Sur or later"
    },
    {
      label: "Processor",
      value: "Intel Core i3 or Apple Silicon M1 or later"
    },
    {
      label: "Memory",
      value: "4 GB RAM minimum, 8 GB recommended"
    },
    {
      label: "Storage",
      value: "300 MB available space"
    },
    {
      label: "Graphics",
      value: "Metal-compatible graphics card"
    },
    {
      label: "Internet",
      value: "Broadband connection (5+ Mbps recommended)"
    }
  ];

  const features = [
    {
      title: "Download & Watch Offline",
      description: "Save your favorite content to watch without internet",
      icon: "💾"
    },
    {
      title: "Multiple Profiles",
      description: "Create up to 5 personalized viewing profiles",
      icon: "👥"
    },
    {
      title: "4K Ultra HD",
      description: "Stunning picture quality with supported content",
      icon: "🖥️"
    },
    {
      title: "Picture-in-Picture",
      description: "Continue watching while using other apps",
      icon: "🔍"
    },
    {
      title: "AirPlay Integration",
      description: "Stream content to your Apple TV with one click",
      icon: "📱"
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for macOS" breadcrumb="macOS Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/The_Electric_State.jpg" 
                alt="Pixloris macOS App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <path d="M20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12Z" fill="#0e1518"/>
                      <path d="M19.5 16V20.5L24 23" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for macOS</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[#f9f8ff] font-semibold mb-1">Pixloris_macOS_v3.2.1.dmg</div>
                  <div className="text-xs text-[#959ca3]">82.7 MB • Updated June 10, 2025</div>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-5 py-2 rounded text-sm flex items-center gap-2 transition">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12Z" fill="currentColor"/>
                    <path d="M2 14V11H4V12H12V11H14V14H2Z" fill="currentColor"/>
                  </svg>
                  Download Now
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-[#959ca3] mt-3">
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z" fill="currentColor"/>
                    <path d="M10.5034 10.1222L8.35342 8.60721V4.25H7.64658V8.89279L10.0966 10.6278L10.5034 10.1222Z" fill="currentColor"/>
                  </svg>
                  Quick installation
                </div>
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1C4.1 1 1 4.1 1 8C1 11.9 4.1 15 8 15C11.9 15 15 11.9 15 8C15 4.1 11.9 1 8 1ZM8 13.8C4.8 13.8 2.2 11.2 2.2 8C2.2 4.8 4.8 2.2 8 2.2C11.2 2.2 13.8 4.8 13.8 8C13.8 11.2 11.2 13.8 8 13.8Z" fill="currentColor"/>
                    <path d="M7.3 5.3L4.6 8.0001L7.3 10.7001L8.1 9.9001L6.2 8.0001L8.1 6.1001L7.3 5.3Z" fill="currentColor"/>
                    <path d="M8.7 5.3L7.9 6.1001L9.8 8.0001L7.9 9.9001L8.7 10.7001L11.4 8.0001L8.7 5.3Z" fill="currentColor"/>
                  </svg>
                  Open source
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-[#f9f8ff] mb-3">About Pixloris for macOS</h2>
            <p className="mb-4 text-sm">Enjoy the complete Pixloris experience designed specifically for macOS. Our native app provides seamless streaming with full integration of macOS features, including Picture-in-Picture, Touch Bar support, and AirPlay functionality.</p>
            
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
          <li>Download the Pixloris_macOS_v3.2.1.dmg file</li>
          <li>Open the DMG file once downloaded</li>
          <li>Drag the Pixloris app to your Applications folder</li>
          <li>Launch Pixloris from your Applications folder or Launchpad</li>
          <li>Sign in with your Pixloris account or create a new one</li>
        </ol>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Troubleshooting</h3>
        <div className="space-y-3 text-sm">
          <p>If you encounter any issues during installation or while using Pixloris for macOS, please try these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ensure your macOS is updated to the latest version</li>
            <li>Restart your computer and try installing again</li>
            <li>Clear your application cache</li>
            <li>Ensure you have sufficient disk space</li>
            <li>Check your internet connection</li>
          </ol>
          <p className="pt-2">If problems persist, please <a href="/contact-us" className="text-yellow-400 hover:underline">contact our support team</a> or visit our <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
