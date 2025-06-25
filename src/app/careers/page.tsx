import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (US/EU)",
      type: "Full-time"
    },
    {
      title: "Content Acquisition Specialist",
      department: "Content",
      location: "Los Angeles, CA",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote (US/EU)",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote (US)",
      type: "Full-time"
    },
    {
      title: "Customer Support Specialist",
      department: "Customer Success",
      location: "Remote (Global)",
      type: "Full-time"
    },
  ];

  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-first policy with flexible hours",
      icon: "🌍"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health plans and wellness benefits",
      icon: "🏥"
    },
    {
      title: "Unlimited PTO",
      description: "Take time off when you need it",
      icon: "🏖️"
    },
    {
      title: "Learning Budget",
      description: "$2,000 annual budget for professional development",
      icon: "🎓"
    },
    {
      title: "Home Office Setup",
      description: "$1,500 to create your perfect workspace",
      icon: "🖥️"
    },
    {
      title: "Team Retreats",
      description: "Twice-yearly company retreats in amazing locations",
      icon: "✈️"
    },
  ];

  return (
    <PageTemplate title="Join Our Team" breadcrumb="Careers">
      <div className="mb-8">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
          <Image
            src="/straume.jpg"
            alt="Pixloris Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1518] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">Build the Future of Streaming</h2>
            <p className="text-sm xs:text-base text-white/80 mt-2 max-w-lg">Join our passionate team and help millions discover their next favorite story</p>
          </div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">Why Join Pixloris?</h2>
        <p className="mb-4 text-[#b4bbc2]">
          At Pixloris, we're on a mission to transform how people discover and enjoy entertainment. We're building a team of passionate, creative individuals who share our vision of creating the most user-focused streaming platform on the planet.
        </p>
        
        <p className="mb-6 text-[#b4bbc2]">
          We believe in empowering our team members, embracing diverse perspectives, and creating an environment where innovation thrives. If you're excited about solving complex problems, delighting users, and working with cutting-edge technology, we want to hear from you.
        </p>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4 mt-8">Benefits & Perks</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#181e23] p-4 rounded-lg">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h3 className="text-[#f9f8ff] font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-[#959ca3]">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4 mt-8">Open Positions</h2>
        
        <div className="space-y-4 mb-8">
          {openPositions.map((job, index) => (
            <div key={index} className="bg-[#181e23] p-4 rounded-lg hover:bg-[#232a31] transition cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-[#f9f8ff] font-semibold">{job.title}</h3>
                  <p className="text-sm text-[#959ca3]">{job.department} • {job.location}</p>
                </div>
                <div className="text-xs font-medium bg-[#232a31] sm:bg-[#181e23] px-2 py-1 rounded w-fit text-yellow-400">
                  {job.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-[#232a31] to-[#181e23] p-6 rounded-lg text-center">
          <h3 className="text-lg xs:text-xl font-bold text-[#f9f8ff] mb-2">Don't see the right position?</h3>
          <p className="text-[#b4bbc2] mb-4">We're always looking for talented individuals to join our team.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-5 py-2 rounded-md text-sm transition">
            Send Your Resume
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
