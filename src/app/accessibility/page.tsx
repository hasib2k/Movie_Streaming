import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function Accessibility() {
  return (
    <PageTemplate title="Accessibility" breadcrumb="Accessibility">
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Our Commitment to Accessibility</h2>
        <p className="mb-4">
          At Pixloris, we believe that entertainment should be accessible to everyone. We're committed to creating 
          an inclusive streaming experience that accommodates users with diverse needs and abilities.
        </p>
        <p className="mb-4">
          We continuously work to improve our platform's accessibility features, meet industry standards, 
          and incorporate feedback from our community to ensure our service is usable and enjoyable for all.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Accessibility Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">Closed Captioning</h3>
            <p className="text-[#959ca3] mb-4">
              Closed captioning is available for most of our content library. You can customize caption appearance 
              including font size, color, and background to suit your preferences.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <Link href="#" className="text-blue-400 hover:text-blue-300">
                Learn how to adjust caption settings
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">Audio Descriptions</h3>
            <p className="text-[#959ca3] mb-4">
              Audio descriptions provide verbal narrations of key visual elements in a scene. This feature 
              is available for select titles and is growing with our catalog.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <Link href="#" className="text-blue-400 hover:text-blue-300">
                Browse titles with audio descriptions
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">Screen Reader Support</h3>
            <p className="text-[#959ca3]">
              Our web and mobile applications are optimized for screen readers including JAWS, NVDA, 
              VoiceOver, and TalkBack. We regularly test and improve compatibility with these tools.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">Keyboard Navigation</h3>
            <p className="text-[#959ca3]">
              Navigate the entire Pixloris interface using only your keyboard. We provide intuitive focus 
              indicators and logical tab ordering to make keyboard navigation simple and efficient.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">Text Readability</h3>
            <p className="text-[#959ca3]">
              Our interface features high contrast text and scalable fonts to ensure content is readable 
              for users with visual impairments or those viewing on different screen sizes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
            <h3 className="text-lg font-medium text-[#f9f8ff] mb-3">Voice Commands</h3>
            <p className="text-[#959ca3]">
              On supported devices, you can control playback and navigate the interface using voice commands, 
              making our platform more accessible to those with mobility limitations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Compliance & Standards</h2>
        <p className="mb-4">
          Pixloris is committed to meeting international accessibility standards. Our development team works to 
          ensure our platform adheres to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3]">
          <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
          <li>Americans with Disabilities Act (ADA) requirements</li>
          <li>Section 508 of the Rehabilitation Act</li>
          <li>European Accessibility Act standards</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Finding Accessible Content</h2>
        <p className="mb-4">
          To help you find content with specific accessibility features:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Use the "Accessibility" filter in the search and browse sections</li>
          <li>Look for accessibility icons on title cards and detail pages</li>
          <li>Check the "Audio & Subtitles" section on a title's detail page</li>
        </ol>
        <Link href="#" className="text-blue-400 hover:text-blue-300">
          Browse our collection of titles with enhanced accessibility features
        </Link>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1e2126] to-[#13151a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#f9f8ff] mb-4">Feedback & Continuous Improvement</h2>
          <p className="mb-4">
            We're committed to continuously improving our accessibility features. Your feedback is invaluable 
            in helping us create a better experience for all users.
          </p>
          <p className="mb-6">
            If you encounter any accessibility challenges or have suggestions for improvement, please 
            share your experience with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center">
              Submit Accessibility Feedback
            </Link>
            <Link href="/help-center" className="bg-transparent border border-[#2a2d35] text-[#f9f8ff] hover:bg-[#2a2d35] px-6 py-3 rounded-lg font-medium text-center">
              View Accessibility FAQ
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
