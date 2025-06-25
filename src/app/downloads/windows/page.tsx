import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function WindowsDownload() {
  const systemRequirements = [
    {
      label: "Operating System",
      value: "Windows 10 or Windows 11"
    },
    {
      label: "Processor",
      value: "Intel Core i3 or equivalent AMD processor"
    },
    {
      label: "Memory",
      value: "4 GB RAM minimum, 8 GB recommended"
    },
    {
      label: "Storage",
      value: "250 MB available space"
    },
    {
      label: "Graphics",
      value: "DirectX 9 compatible graphics card"
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
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for Windows" breadcrumb="Windows Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/The_Martian.webp" 
                alt="Pixloris Windows App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <rect x="10" y="14" width="20" height="14" rx="2" fill="#0e1518"/>
                      <rect x="14" y="18" width="4" height="4" rx="1" fill="#FFD600"/>
                      <rect x="22" y="18" width="4" height="4" rx="1" fill="#FFD600"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for Windows</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#181e23] p-5 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[#f9f8ff] font-semibold mb-1">Pixloris_Setup_v3.2.1.exe</div>
                  <div className="text-xs text-[#959ca3]">76.4 MB • Updated June 10, 2025</div>
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
                    <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8.75 8H11.5V9.5H7.25V4.5H8.75V8Z" fill="currentColor"/>
                  </svg>
                  <span>Fast install (under 2 minutes)</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5ZM7.25 10.5H8.75V12H7.25V10.5ZM7.25 4H8.75V9.5H7.25V4Z" fill="currentColor"/>
                  </svg>
                  <span>Verified by Microsoft SmartScreen</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#181e23] p-4 rounded-lg">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="text-[#f9f8ff] font-medium text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-[#959ca3]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold text-[#f9f8ff] mb-4">System Requirements</h2>
            
            <div className="bg-[#181e23] rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {systemRequirements.map((req, index) => (
                    <tr key={index} className={`border-b ${index === systemRequirements.length - 1 ? '' : 'border-[#232a31]'}`}>
                      <td className="py-3 px-4 font-medium text-[#f9f8ff]">{req.label}</td>
                      <td className="py-3 px-4 text-[#959ca3]">{req.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <h2 className="text-xl font-bold text-[#f9f8ff] mb-4">Installation Instructions</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-[#0e1518] flex items-center justify-center font-medium flex-shrink-0">1</div>
                <div>
                  <p className="text-[#b4bbc2] text-sm">
                    Download the installation file by clicking the "Download Now" button above.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-[#0e1518] flex items-center justify-center font-medium flex-shrink-0">2</div>
                <div>
                  <p className="text-[#b4bbc2] text-sm">
                    Run the downloaded file (Pixloris_Setup_v3.2.1.exe) and follow the on-screen instructions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-[#0e1518] flex items-center justify-center font-medium flex-shrink-0">3</div>
                <div>
                  <p className="text-[#b4bbc2] text-sm">
                    Once installed, launch Pixloris and sign in with your account or create a new one.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-[#0e1518] flex items-center justify-center font-medium flex-shrink-0">4</div>
                <div>
                  <p className="text-[#b4bbc2] text-sm">
                    Customize your preferences and start enjoying your favorite content!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#232a31] p-4 rounded-lg">
              <h3 className="text-[#f9f8ff] font-medium mb-2">Having trouble?</h3>
              <p className="text-xs text-[#959ca3] mb-3">
                Check our detailed installation guide or contact our support team for assistance.
              </p>
              <div className="flex gap-3">
                <button className="text-xs bg-[#181e23] hover:bg-[#1c242b] text-[#f9f8ff] px-3 py-1.5 rounded transition">
                  Installation Guide
                </button>
                <button className="text-xs bg-[#181e23] hover:bg-[#1c242b] text-[#f9f8ff] px-3 py-1.5 rounded transition">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-[#f9f8ff] mb-4">Other Platforms</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg text-center cursor-pointer transition">
            <div className="text-2xl mb-2">🍎</div>
            <div className="text-[#f9f8ff] font-medium mb-1">macOS</div>
            <div className="text-xs text-[#959ca3]">Version 3.2.1</div>
          </div>
          
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg text-center cursor-pointer transition">
            <div className="text-2xl mb-2">📱</div>
            <div className="text-[#f9f8ff] font-medium mb-1">iOS</div>
            <div className="text-xs text-[#959ca3]">Version 3.2.0</div>
          </div>
          
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg text-center cursor-pointer transition">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-[#f9f8ff] font-medium mb-1">Android</div>
            <div className="text-xs text-[#959ca3]">Version 3.2.0</div>
          </div>
          
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg text-center cursor-pointer transition">
            <div className="text-2xl mb-2">📺</div>
            <div className="text-[#f9f8ff] font-medium mb-1">Smart TVs</div>
            <div className="text-xs text-[#959ca3]">Various versions</div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
