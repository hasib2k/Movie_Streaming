import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function AndroidDownload() {
  const systemRequirements = [
    {
      label: "Operating System",
      value: "Android 8.0 (Oreo) or higher"
    },
    {
      label: "Processor",
      value: "1.5 GHz quad-core or higher"
    },
    {
      label: "Memory",
      value: "2 GB RAM minimum, 4 GB recommended"
    },
    {
      label: "Storage",
      value: "100 MB available space (plus space for downloaded content)"
    },
    {
      label: "Screen",
      value: "All screen sizes and resolutions supported"
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
      title: "Cast to TV",
      description: "Send content to your Chromecast-enabled devices",
      icon: "📺"
    },
    {
      title: "Data Saver Mode",
      description: "Reduce data usage while streaming on mobile networks",
      icon: "📊"
    }
  ];

  return (
    <PageTemplate title="Download Pixloris for Android" breadcrumb="Android Download">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-72 w-full bg-[#181e23] rounded-lg overflow-hidden mb-4">
              <Image
                src="/how-to-train-your-dragon-dreamworks.avif" 
                alt="Pixloris Android App"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-400 rounded p-2 inline-block mb-3">
                    <svg width="40" height="40" fill="none">
                      <rect width="40" height="40" rx="8" fill="#FFD600"/>
                      <path d="M20 28C16.6863 28 14 25.3137 14 22V16C14 12.6863 16.6863 10 20 10C23.3137 10 26 12.6863 26 16V22C26 25.3137 23.3137 28 20 28Z" fill="#0e1518"/>
                      <path d="M14 22V16H16V22H14Z" fill="#FFD600"/>
                      <path d="M24 22V16H26V22H24Z" fill="#FFD600"/>
                      <path d="M17 13L23 13" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#f9f8ff]">Pixloris for Android</h2>
                  <p className="text-sm text-[#959ca3] mt-1">Version 3.2.1</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#181e23] p-5 rounded-lg flex flex-col items-center">
                <div className="bg-[#232a31] h-12 w-12 flex items-center justify-center rounded-full mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6 5.82C15.5 4.84 14.1 4.2 12.5 4.04V2H11.5V4.04C9.9 4.2 8.5 4.84 7.4 5.82L6.22 4.64L5.5 5.36L6.68 6.54C5.46 8.08 4.8 10.04 4.8 12.2C4.8 17 8.2 20.8 12.5 20.8C16.8 20.8 20.2 17 20.2 12.2C20.2 10.04 19.54 8.08 18.32 6.54L19.5 5.36L18.78 4.64L17.6 5.82H16.6ZM12.5 19.8C8.8 19.8 5.8 16.4 5.8 12.2C5.8 8 8.8 4.6 12.5 4.6C16.2 4.6 19.2 8 19.2 12.2C19.2 16.4 16.2 19.8 12.5 19.8ZM13 7.8H12V12.8H16.2V11.8H13V7.8Z" fill="#FFD600"/>
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium text-sm mb-1">Google Play Store</h3>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-1.5 rounded text-xs flex items-center gap-1 transition mt-2">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12Z" fill="currentColor"/>
                    <path d="M2 14V11H4V12H12V11H14V14H2Z" fill="currentColor"/>
                  </svg>
                  Download
                </button>
              </div>
              
              <div className="bg-[#181e23] p-5 rounded-lg flex flex-col items-center">
                <div className="bg-[#232a31] h-12 w-12 flex items-center justify-center rounded-full mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9.5 11.5C9.5 12.33 8.83 13 8 13H7V15H5.5V9H8C8.83 9 9.5 9.67 9.5 10.5V11.5ZM14.5 13.5C14.5 14.33 13.83 15 13 15H10.5V9H13C13.83 9 14.5 9.67 14.5 10.5V13.5ZM18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5ZM7 10.5H8V11.5H7V10.5ZM12 10.5H13V13.5H12V10.5Z" fill="#FFD600"/>
                  </svg>
                </div>
                <h3 className="text-[#f9f8ff] font-medium text-sm mb-1">Direct APK</h3>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-4 py-1.5 rounded text-xs flex items-center gap-1 transition mt-2">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12Z" fill="currentColor"/>
                    <path d="M2 14V11H4V12H12V11H14V14H2Z" fill="currentColor"/>
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-[#f9f8ff] mb-3">About Pixloris for Android</h2>
            <p className="mb-4 text-sm">Experience Pixloris on your Android phone or tablet with our specially optimized app. Enjoy seamless streaming, offline viewing, and all your favorite movies and shows on the go.</p>
            
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
        <div>
          <h4 className="text-[#f9f8ff] text-sm mb-2">Google Play Store</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
            <li>Click the "Download" button to open the Google Play Store</li>
            <li>Tap "Install" on the Pixloris app page</li>
            <li>Wait for the download to complete</li>
            <li>Open the app and sign in to your account or create a new one</li>
          </ol>
          
          <h4 className="text-[#f9f8ff] text-sm mb-2">Direct APK</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Click the "Download" button to download the APK file</li>
            <li>You may need to allow installations from unknown sources in your device settings</li>
            <li>Open the downloaded APK file and tap "Install"</li>
            <li>Once installed, open the app and sign in or create a new account</li>
          </ol>
        </div>
      </div>
      
      <div className="bg-[#181e23] rounded-lg p-5">
        <h3 className="text-[#f9f8ff] font-semibold mb-3">Troubleshooting</h3>
        <div className="space-y-3 text-sm">
          <p>If you encounter any issues during installation or while using Pixloris for Android, please try these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ensure your Android OS is up to date</li>
            <li>Clear the app cache in your device settings</li>
            <li>Uninstall and reinstall the app</li>
            <li>Check if your device meets the minimum requirements</li>
            <li>Verify your internet connection is stable</li>
          </ol>
          <p className="pt-2">If problems persist, please <a href="/contact-us" className="text-yellow-400 hover:underline">contact our support team</a> or visit our <a href="/help-center" className="text-yellow-400 hover:underline">Help Center</a>.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
