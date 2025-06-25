import { Cog6ToothIcon, UserCircleIcon, ShieldCheckIcon, BellIcon, DevicePhoneMobileIcon, CreditCardIcon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// Sample user data
const user = {
  name: "Hasib Ahmed",
  email: "hasib.ahmed@example.com",
  avatar: "/straume.jpg",
  plan: "Premium",
  billingCycle: "Annual",
  nextBillingDate: "August 15, 2025",
  autoRenew: true,
};

// Settings sections
const settingsSections = [
  {
    id: "account",
    title: "Account",
    icon: UserCircleIcon,
    items: [
      { name: "Profile Information", description: "Update your personal details" },
      { name: "Password & Security", description: "Manage your password and 2FA" },
      { name: "Email Preferences", description: "Choose what emails you receive" },
      { name: "Manage Devices", description: "See where you're signed in" },
    ]
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    icon: ShieldCheckIcon,
    items: [
      { name: "Privacy Settings", description: "Control your data and privacy" },
      { name: "Parental Controls", description: "Set content restrictions" },
      { name: "Viewing History", description: "See and manage your viewing history" },
      { name: "Download Settings", description: "Manage offline content" },
    ]
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: BellIcon,
    items: [
      { name: "Push Notifications", description: "Updates on mobile and desktop" },
      { name: "Email Notifications", description: "News and recommendations" },
      { name: "Content Updates", description: "New releases and content alerts" },
    ]
  },
  {
    id: "playback",
    title: "Playback & Quality",
    icon: DevicePhoneMobileIcon,
    items: [
      { name: "Playback Settings", description: "Autoplay and language options" },
      { name: "Video Quality", description: "Set default streaming quality" },
      { name: "Data Usage", description: "Manage bandwidth consumption" },
      { name: "Audio & Subtitles", description: "Default language preferences" },
    ]
  },
  {
    id: "billing",
    title: "Billing & Plans",
    icon: CreditCardIcon,
    items: [
      { name: "Subscription Plan", description: "View or change your subscription" },
      { name: "Payment Methods", description: "Manage your payment options" },
      { name: "Billing History", description: "View past invoices and payments" },
      { name: "Redeem Gift Card", description: "Apply a gift card to your account" },
    ]
  },
  {
    id: "help",
    title: "Help & Support",
    icon: QuestionMarkCircleIcon,
    items: [
      { name: "Help Center", description: "Find answers to common questions" },
      { name: "Contact Support", description: "Get help from our team" },
      { name: "Report a Problem", description: "Tell us about issues you've found" },
      { name: "Legal Information", description: "Terms of Service and Privacy Policy" },
    ]
  },
];

export default function SettingsPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-2">
          <Cog6ToothIcon className="h-6 w-6 md:h-8 md:w-8" />
          Settings
        </h1>
        <p className="text-[#959ca3] text-sm md:text-base">
          Manage your account preferences and settings
        </p>
      </div>

      {/* User info card */}
      <div className="bg-[#181e23] rounded-xl p-4 sm:p-6 mb-6 md:mb-8 shadow-lg">
        <div className="flex items-center">
          {/* User avatar */}
          <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-[#232a31] flex-shrink-0">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
            ) : (
              <UserCircleIcon className="h-full w-full text-[#959ca3]" />
            )}
          </div>
          
          {/* User info */}
          <div className="ml-4 flex-1">
            <h2 className="text-lg sm:text-xl font-semibold">{user.name}</h2>
            <p className="text-[#959ca3] text-sm">{user.email}</p>
          </div>
          
          {/* Subscription status */}
          <div className="text-right hidden sm:block">
            <div className="flex items-center text-yellow-400 font-medium">
              <CheckCircleIcon className="h-4 w-4 mr-1" />
              {user.plan} Plan
            </div>
            <p className="text-xs text-[#959ca3] mt-1">
              Renews {user.billingCycle.toLowerCase()}: {user.nextBillingDate}
            </p>
          </div>
        </div>
        
        {/* Mobile subscription info */}
        <div className="mt-3 pt-3 border-t border-[#232a31] sm:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-400 font-medium">
              <CheckCircleIcon className="h-4 w-4 mr-1" />
              {user.plan} Plan
            </div>
            <p className="text-xs text-[#959ca3]">
              Renews {user.nextBillingDate}
            </p>
          </div>
        </div>
      </div>

      {/* Settings sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {settingsSections.map((section) => (
          <div key={section.id} className="bg-[#181e23] rounded-xl overflow-hidden shadow-lg">
            <div className="p-4 sm:p-5 border-b border-[#232a31] flex items-center">
              <section.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-yellow-400" />
              <h3 className="text-lg font-medium">{section.title}</h3>
            </div>
            
            <div className="divide-y divide-[#232a31]/50">
              {section.items.map((item) => (
                <button 
                  key={item.name}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-[#232a31] transition-colors"
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs sm:text-sm text-[#959ca3] mt-1">{item.description}</div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-[#959ca3]" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sign out button */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] px-6 py-3 rounded-lg text-sm font-medium transition-colors">
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Sign out
        </button>
      </div>
    </main>
  );
}
