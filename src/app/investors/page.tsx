import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function Investors() {
  const financialHighlights = [
    {
      metric: "Annual Revenue",
      value: "$2.8B",
      growth: "+42% YoY"
    },
    {
      metric: "Paid Subscribers",
      value: "20.4M",
      growth: "+38% YoY"
    },
    {
      metric: "Average Watch Time",
      value: "2.5hrs",
      growth: "+18% YoY"
    },
    {
      metric: "Content Library",
      value: "10,500+",
      growth: "+25% YoY"
    }
  ];

  const quarterlyReports = [
    {
      quarter: "Q1 2025",
      date: "April 15, 2025",
      fileSize: "3.2 MB"
    },
    {
      quarter: "Q4 2024",
      date: "January 20, 2025",
      fileSize: "3.5 MB"
    },
    {
      quarter: "Q3 2024",
      date: "October 18, 2024",
      fileSize: "3.1 MB"
    },
    {
      quarter: "Q2 2024",
      date: "July 22, 2024",
      fileSize: "2.9 MB"
    }
  ];

  const leadershipTeam = [
    {
      name: "Elena Rodriguez",
      position: "Chief Executive Officer",
      background: "Former VP at Netflix, 15+ years in digital entertainment"
    },
    {
      name: "Marcus Chen",
      position: "Chief Financial Officer",
      background: "Previously CFO at Spotify, MBA from Harvard Business School"
    },
    {
      name: "Aisha Johnson",
      position: "Chief Content Officer",
      background: "Former Head of Original Content at HBO, Emmy-winning producer"
    },
    {
      name: "Daniel Kim",
      position: "Chief Technology Officer",
      background: "Previously led engineering teams at Amazon Prime Video and Twitch"
    }
  ];

  return (
    <PageTemplate title="Investor Relations" breadcrumb="Investors">
      <div className="mb-8">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
          <Image
            src="/Dune_2.webp"
            alt="Pixloris Investors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1518] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">Powering the Future of Streaming</h2>
            <p className="text-sm xs:text-base text-white/80 mt-2 max-w-lg">Investor information and financial performance for Pixloris, Inc.</p>
          </div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">Financial Highlights</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {financialHighlights.map((item, index) => (
            <div key={index} className="bg-[#181e23] p-4 rounded-lg text-center">
              <div className="text-sm text-[#959ca3] mb-1">{item.metric}</div>
              <div className="text-xl sm:text-2xl font-bold text-[#f9f8ff] mb-1">{item.value}</div>
              <div className="text-xs font-medium text-green-400">{item.growth}</div>
            </div>
          ))}
        </div>
        
        <p className="mb-6 text-[#b4bbc2]">
          Pixloris continues to demonstrate strong growth across all key performance indicators. Our focus on premium content acquisition, technological innovation, and user experience enhancements has driven substantial increases in subscriber numbers and engagement metrics.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-[#f9f8ff] mb-4">Quarterly Reports</h3>
            
            <div className="space-y-3">
              {quarterlyReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#181e23] hover:bg-[#232a31] rounded cursor-pointer transition">
                  <div>
                    <div className="text-sm font-medium text-[#f9f8ff]">{report.quarter} Financial Results</div>
                    <div className="text-xs text-[#959ca3]">Released {report.date} • PDF ({report.fileSize})</div>
                  </div>
                  <button className="bg-[#232a31] hover:bg-[#2c3540] text-[#f9f8ff] text-xs px-3 py-1 rounded transition">
                    Download
                  </button>
                </div>
              ))}
              
              <button className="text-sm text-yellow-400 hover:text-yellow-300 mt-2 transition">
                View All Financial Reports →
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-[#181e23] p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#f9f8ff] mb-4">Upcoming Events</h3>
            
            <div className="space-y-4">
              <div className="border-b border-[#232a31] pb-4">
                <div className="text-yellow-400 text-xs font-medium mb-1">July 22, 2025</div>
                <div className="text-[#f9f8ff] font-medium">Q2 2025 Earnings Release</div>
                <div className="text-xs text-[#959ca3] mt-1">2:00 PM PT / 5:00 PM ET</div>
              </div>
              
              <div className="border-b border-[#232a31] pb-4">
                <div className="text-yellow-400 text-xs font-medium mb-1">August 15, 2025</div>
                <div className="text-[#f9f8ff] font-medium">Annual Shareholder Meeting</div>
                <div className="text-xs text-[#959ca3] mt-1">10:00 AM PT / 1:00 PM ET</div>
              </div>
              
              <div>
                <div className="text-yellow-400 text-xs font-medium mb-1">September 8, 2025</div>
                <div className="text-[#f9f8ff] font-medium">Technology and Content Showcase</div>
                <div className="text-xs text-[#959ca3] mt-1">9:00 AM PT / 12:00 PM ET</div>
              </div>
              
              <button className="text-sm text-[#f9f8ff] bg-[#232a31] hover:bg-[#2c3540] px-4 py-2 rounded w-full transition">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4 mt-8">Leadership Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="bg-[#181e23] p-4 rounded-lg">
              <h3 className="text-[#f9f8ff] font-semibold mb-1">{leader.name}</h3>
              <div className="text-yellow-400 text-sm mb-2">{leader.position}</div>
              <p className="text-xs text-[#959ca3]">{leader.background}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">Investor Resources</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg cursor-pointer transition">
            <h3 className="text-[#f9f8ff] font-medium mb-2">Corporate Governance</h3>
            <p className="text-xs text-[#959ca3] mb-3">Board composition, committees, and governance policies</p>
            <div className="text-xs text-yellow-400">View Details →</div>
          </div>
          
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg cursor-pointer transition">
            <h3 className="text-[#f9f8ff] font-medium mb-2">Stock Information</h3>
            <p className="text-xs text-[#959ca3] mb-3">Current stock price, history, and dividend information</p>
            <div className="text-xs text-yellow-400">View Details →</div>
          </div>
          
          <div className="bg-[#181e23] hover:bg-[#232a31] p-4 rounded-lg cursor-pointer transition">
            <h3 className="text-[#f9f8ff] font-medium mb-2">SEC Filings</h3>
            <p className="text-xs text-[#959ca3] mb-3">Access to all SEC filings and annual reports</p>
            <div className="text-xs text-yellow-400">View Details →</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-[#232a31] to-[#181e23] p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#f9f8ff] mb-3">Investor Contact</h3>
          <p className="text-sm text-[#b4bbc2] mb-4">
            For investor relations inquiries, please contact:
          </p>
          <div className="font-medium text-[#f9f8ff] mb-1">Investor Relations Department</div>
          <div className="text-sm text-yellow-400 mb-1">investors@pixloris.com</div>
          <div className="text-sm text-[#b4bbc2]">+1 (415) 555-0189</div>
        </div>
      </div>
    </PageTemplate>
  );
}
