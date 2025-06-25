import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";

export default function DeviceSupport() {
  const supportedDevices = [
    {
      category: "Smart TVs",
      devices: [
        { name: "Samsung Smart TVs", years: "2018 and newer", icon: "📺" },
        { name: "LG WebOS TVs", years: "WebOS 4.0 and newer", icon: "📺" },
        { name: "Sony Android TVs", years: "2018 and newer", icon: "📺" },
        { name: "Vizio SmartCast TVs", years: "2018 and newer", icon: "📺" },
        { name: "Hisense Smart TVs", years: "2019 and newer", icon: "📺" },
      ]
    },
    {
      category: "Streaming Devices",
      devices: [
        { name: "Roku", years: "All Roku devices (OS 9.0+)", icon: "🔌" },
        { name: "Amazon Fire TV", years: "All Fire TV devices (2nd gen+)", icon: "🔌" },
        { name: "Apple TV", years: "Apple TV HD (4th gen) and Apple TV 4K", icon: "🔌" },
        { name: "Chromecast", years: "Chromecast (2nd gen+) and Google TV", icon: "🔌" },
        { name: "NVIDIA Shield", years: "All models", icon: "🔌" },
      ]
    },
    {
      category: "Game Consoles",
      devices: [
        { name: "PlayStation", years: "PS4, PS5", icon: "🎮" },
        { name: "Xbox", years: "Xbox One, Xbox Series X|S", icon: "🎮" },
      ]
    },
    {
      category: "Mobile & Tablets",
      devices: [
        { name: "iOS", years: "iOS 14.0 and newer", icon: "📱" },
        { name: "Android", years: "Android 7.0 and newer", icon: "📱" },
        { name: "Amazon Fire Tablets", years: "Fire OS 6 and newer", icon: "📱" },
      ]
    },
    {
      category: "Computers",
      devices: [
        { name: "Windows", years: "Windows 10 and newer", icon: "💻" },
        { name: "Mac", years: "macOS 10.14 and newer", icon: "💻" },
        { name: "Linux", years: "Major distributions with modern browsers", icon: "💻" },
      ]
    },
  ];

  const commonIssues = [
    {
      title: "App Won't Launch or Crashes",
      solution: "Try reinstalling the app, ensuring your device has the latest system updates, and clearing the app cache if possible."
    },
    {
      title: "Streaming Quality Issues",
      solution: "Check your internet connection speed, try lowering video quality in app settings, or move closer to your Wi-Fi router."
    },
    {
      title: "Audio/Video Sync Problems",
      solution: "Restart the app, check for app updates, or try switching to a different audio output device if available."
    },
    {
      title: "Login Problems",
      solution: "Reset your password, verify your email address, or try logging in through our website first."
    },
    {
      title: "Missing Content",
      solution: "Content availability varies by region. Check that your device location settings match your actual location."
    },
  ];

  return (
    <PageTemplate title="Device Support" breadcrumb="Device Support">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Supported Devices</h2>
        <p className="mb-6">
          Pixloris is designed to work seamlessly across a wide range of devices. Below is a
          comprehensive list of supported platforms. We regularly update our apps to ensure
          compatibility with the latest operating systems and hardware.
        </p>

        <div className="space-y-8">
          {supportedDevices.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.devices.map((device) => (
                  <div key={device.name} className="flex items-center p-4 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg">
                    <div className="text-2xl mr-3">{device.icon}</div>
                    <div>
                      <h4 className="font-medium text-[#f9f8ff]">{device.name}</h4>
                      <p className="text-sm text-[#959ca3]">{device.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Common Issues & Solutions</h2>
        <div className="space-y-4">
          {commonIssues.map((issue) => (
            <div key={issue.title} className="border border-[#2a2d35] rounded-lg p-5">
              <h3 className="font-medium text-[#f9f8ff] mb-2">{issue.title}</h3>
              <p className="text-[#959ca3]">{issue.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Device-Specific Setup Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="#" className="flex flex-col items-center p-5 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-medium text-center text-[#f9f8ff]">iOS Setup Guide</h3>
          </Link>
          <Link href="#" className="flex flex-col items-center p-5 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-medium text-center text-[#f9f8ff]">Android Setup Guide</h3>
          </Link>
          <Link href="#" className="flex flex-col items-center p-5 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all">
            <div className="text-3xl mb-2">📺</div>
            <h3 className="font-medium text-center text-[#f9f8ff]">Smart TV Setup Guide</h3>
          </Link>
          <Link href="#" className="flex flex-col items-center p-5 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all">
            <div className="text-3xl mb-2">🔌</div>
            <h3 className="font-medium text-center text-[#f9f8ff]">Roku Setup Guide</h3>
          </Link>
          <Link href="#" className="flex flex-col items-center p-5 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all">
            <div className="text-3xl mb-2">🔌</div>
            <h3 className="font-medium text-center text-[#f9f8ff]">Fire TV Setup Guide</h3>
          </Link>
          <Link href="#" className="flex flex-col items-center p-5 bg-gradient-to-br from-[#1e2126] to-[#13151a] rounded-lg hover:from-[#23272f] hover:to-[#16181e] transition-all">
            <div className="text-3xl mb-2">🎮</div>
            <h3 className="font-medium text-center text-[#f9f8ff]">Game Console Setup</h3>
          </Link>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Need More Help?</h2>
          <p className="mb-6">
            If you're still experiencing issues with your device, our support team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center">
              Contact Support
            </Link>
            <Link href="/help-center" className="bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium text-center">
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
