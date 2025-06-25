import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function Community() {
  return (
    <PageTemplate title="Community" breadcrumb="Community">
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Join Our Global Community</h2>
        <p className="mb-4">
          Connect with millions of movie enthusiasts from around the world. Share your thoughts, 
          recommendations, and passion for cinema with like-minded individuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-2">Discussion Forums</h3>
            <p className="text-[#959ca3]">
              Join conversations about your favorite genres, directors, actors, and films.
              Our moderated forums ensure respectful and insightful discussions.
            </p>
            <Link href="#" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
              Browse Forums &rarr;
            </Link>
          </div>
          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-2">Watch Parties</h3>
            <p className="text-[#959ca3]">
              Create or join virtual watch parties with friends and community members.
              Chat in real-time while enjoying synchronized viewing experiences.
            </p>
            <Link href="#" className="inline-block mt-4 text-purple-400 hover:text-purple-300">
              Start a Watch Party &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Community Events</h2>
        <p className="mb-6">
          Participate in special community events including Q&A sessions with filmmakers, 
          virtual film festivals, and exclusive preview screenings.
        </p>
        
        <div className="space-y-4">
          <div className="border border-[#2a2d35] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-900 text-green-300 mb-2">Upcoming</span>
                <h3 className="text-lg font-medium text-[#f9f8ff]">Director's Roundtable: The Future of Sci-Fi</h3>
                <p className="text-sm text-[#959ca3] mt-1">June 15, 2023 • 7:00 PM EDT</p>
              </div>
              <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                RSVP
              </button>
            </div>
          </div>
          
          <div className="border border-[#2a2d35] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-900 text-green-300 mb-2">Upcoming</span>
                <h3 className="text-lg font-medium text-[#f9f8ff]">Summer Indie Film Festival</h3>
                <p className="text-sm text-[#959ca3] mt-1">July 8-10, 2023 • All Day</p>
              </div>
              <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                RSVP
              </button>
            </div>
          </div>
          
          <div className="border border-[#2a2d35] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300 mb-2">Past Event</span>
                <h3 className="text-lg font-medium text-[#f9f8ff]">Horror Movie Marathon</h3>
                <p className="text-sm text-[#959ca3] mt-1">October 31, 2022 • All Day</p>
              </div>
              <button className="text-sm border border-[#2a2d35] text-[#959ca3] px-4 py-2 rounded-lg">
                View Recap
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Community Guidelines</h2>
        <p className="mb-4">
          Our community thrives because of our shared respect and passion for film. 
          To maintain a positive environment for everyone, please follow these guidelines:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3]">
          <li>Be respectful and considerate of other members</li>
          <li>Avoid spoilers in general discussion areas</li>
          <li>Don't share illegal streaming links or content</li>
          <li>Keep discussions related to film and entertainment</li>
          <li>Respect diverse opinions and foster inclusive conversations</li>
        </ul>
        <Link href="#" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
          Read Full Community Guidelines
        </Link>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-2">Ready to Join the Conversation?</h2>
          <p className="text-[#959ca3] mb-6">
            Create an account or sign in to start participating in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Sign Up
            </Link>
            <Link href="#" className="bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
