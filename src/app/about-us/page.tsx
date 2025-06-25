import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function AboutUs() {
  return (
    <PageTemplate title="About Us" breadcrumb="About Us">
      <div className="mb-8">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
          <Image
            src="/The_Martian.webp"
            alt="Pixloris Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1518] to-transparent"></div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4">Our Mission</h2>
        <p className="mb-4 text-[#b4bbc2]">
          At Pixloris, we're redefining the streaming experience with a singular focus: to bring the world's most captivating stories to audiences everywhere. Founded in 2022, our platform combines cutting-edge technology with passionate curation to deliver a streaming service that truly understands what viewers want.
        </p>
        
        <p className="mb-4 text-[#b4bbc2]">
          We believe that great stories have the power to inspire, connect, and transform. That's why we've built a platform that not only delivers exceptional streaming quality but also helps you discover content that resonates with your unique tastes and interests.
        </p>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4 mt-8">Our Story</h2>
        <p className="mb-4 text-[#b4bbc2]">
          Pixloris began as a bold idea among a group of film enthusiasts, technologists, and industry veterans who saw an opportunity to create something better in the streaming landscape. Frustrated by cluttered interfaces, limited discovery options, and fragmented content libraries, our founders set out to build a platform that would address these pain points.
        </p>
        
        <p className="mb-4 text-[#b4bbc2]">
          After two years of development, we launched Pixloris with a carefully curated library of films and shows spanning genres, eras, and cultures. Our advanced recommendation engine and thoughtfully designed user experience immediately set us apart, attracting viewers seeking a more refined streaming experience.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#181e23] p-5 rounded-lg">
            <div className="text-yellow-400 font-bold text-2xl sm:text-3xl mb-2">20M+</div>
            <div className="text-[#f9f8ff] font-medium mb-1">Active Users</div>
            <div className="text-sm text-[#959ca3]">Streaming content across 190+ countries</div>
          </div>
          
          <div className="bg-[#181e23] p-5 rounded-lg">
            <div className="text-yellow-400 font-bold text-2xl sm:text-3xl mb-2">10K+</div>
            <div className="text-[#f9f8ff] font-medium mb-1">Movies & Shows</div>
            <div className="text-sm text-[#959ca3]">Carefully curated library across genres</div>
          </div>
          
          <div className="bg-[#181e23] p-5 rounded-lg">
            <div className="text-yellow-400 font-bold text-2xl sm:text-3xl mb-2">99.9%</div>
            <div className="text-[#f9f8ff] font-medium mb-1">Uptime</div>
            <div className="text-sm text-[#959ca3]">Industry-leading streaming reliability</div>
          </div>
        </div>
        
        <h2 className="text-xl xs:text-2xl font-bold text-[#f9f8ff] mb-4 mt-8">Our Values</h2>
        <ul className="list-disc pl-5 mb-6 text-[#b4bbc2] space-y-2">
          <li><strong className="text-[#f9f8ff]">Quality Over Quantity</strong> - We prioritize exceptional content rather than endless options.</li>
          <li><strong className="text-[#f9f8ff]">Innovation</strong> - We continuously improve our platform with new features and technologies.</li>
          <li><strong className="text-[#f9f8ff]">Inclusivity</strong> - We celebrate diverse stories and perspectives from around the world.</li>
          <li><strong className="text-[#f9f8ff]">User-Focused Design</strong> - We create experiences that put viewers' needs and preferences first.</li>
          <li><strong className="text-[#f9f8ff]">Transparency</strong> - We maintain honest communication with our community and partners.</li>
        </ul>
        
        <p className="mt-8 text-[#b4bbc2]">
          Thank you for choosing Pixloris as your entertainment destination. We're excited to continue innovating and bringing you the content you love.
        </p>
      </div>
    </PageTemplate>
  );
}
