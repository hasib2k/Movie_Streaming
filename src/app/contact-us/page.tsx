import PageTemplate from "@/components/PageTemplate";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Get immediate assistance from our support team.",
      availability: "Available 24/7",
      action: "Chat Now",
      isPrimary: true
    },
    {
      icon: <EnvelopeIcon className="w-8 h-8 text-yellow-400" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours.",
      availability: "support@pixloris.com",
      action: "Send Email",
      isPrimary: false
    },
    {
      icon: <PhoneIcon className="w-8 h-8 text-yellow-400" />,
      title: "Phone Support",
      description: "Speak directly with our customer service team.",
      availability: "1-800-PXLRIS (Available Mon-Fri, 9AM-8PM EST)",
      action: "Call Now",
      isPrimary: false
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "525 Market St, Suite 2000",
      postalCode: "CA 94105, United States",
      phone: "+1 (415) 555-7890",
      email: "sf@pixloris.com"
    },
    {
      city: "New York",
      address: "350 Fifth Avenue, 21st Floor",
      postalCode: "NY 10118, United States",
      phone: "+1 (212) 555-1234",
      email: "nyc@pixloris.com"
    },
    {
      city: "London",
      address: "1 Canada Square, Canary Wharf",
      postalCode: "London E14 5AB, United Kingdom",
      phone: "+44 20 5555 6789",
      email: "london@pixloris.com"
    }
  ];

  return (
    <PageTemplate title="Contact Us" breadcrumb="Contact Us">
      <div className="mb-10">
        {/* Contact Options Section */}
        <div className="mb-8">
          <p className="text-[#959ca3] mb-6">We're here to help! Choose from one of our contact methods below, and our team will be happy to assist you with any questions or concerns.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-[#181e23] rounded-lg p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#232a31] h-16 w-16 flex items-center justify-center rounded-full mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-[#f9f8ff] font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-[#959ca3] text-sm mb-4">{method.description}</p>
                  <p className="text-xs text-yellow-400 mb-4">{method.availability}</p>
                  <button 
                    className={`${method.isPrimary 
                      ? 'bg-yellow-400 hover:bg-yellow-300 text-[#0e1518]' 
                      : 'bg-[#232a31] hover:bg-[#2d353d] text-[#f9f8ff]'} 
                      font-medium px-6 py-2 rounded text-sm transition`}
                  >
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#181e23] rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[#959ca3] text-sm mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#232a31] text-[#f9f8ff] px-3 py-2 rounded-md text-sm outline-none border border-transparent focus:border-yellow-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#959ca3] text-sm mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#232a31] text-[#f9f8ff] px-3 py-2 rounded-md text-sm outline-none border border-transparent focus:border-yellow-400"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#959ca3] text-sm mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-[#232a31] text-[#f9f8ff] px-3 py-2 rounded-md text-sm outline-none border border-transparent focus:border-yellow-400"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-[#959ca3] text-sm mb-1">Topic</label>
              <select 
                id="topic" 
                className="w-full bg-[#232a31] text-[#f9f8ff] px-3 py-2 rounded-md text-sm outline-none border border-transparent focus:border-yellow-400"
              >
                <option value="">Select a topic</option>
                <option value="account">Account Issues</option>
                <option value="billing">Billing Questions</option>
                <option value="technical">Technical Support</option>
                <option value="content">Content Request</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#959ca3] text-sm mb-1">Your Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full bg-[#232a31] text-[#f9f8ff] px-3 py-2 rounded-md text-sm outline-none border border-transparent focus:border-yellow-400 resize-none"
                placeholder="Please provide as much detail as possible..."
              ></textarea>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-xs text-[#959ca3]">
                I agree to the <a href="/terms-of-service" className="text-yellow-400 hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-yellow-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button 
              type="submit" 
              className="bg-yellow-400 hover:bg-yellow-300 text-[#0e1518] font-medium px-6 py-2.5 rounded text-sm transition"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Office Locations */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-[#181e23] rounded-lg p-5">
                <h3 className="text-[#f9f8ff] font-semibold mb-3">{office.city}</h3>
                <address className="not-italic text-sm text-[#959ca3] mb-3">
                  <p>{office.address}</p>
                  <p>{office.postalCode}</p>
                </address>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-[#959ca3]">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-[#959ca3]">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#181e23] rounded-lg p-6">
          <h2 className="text-lg font-bold text-[#f9f8ff] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <div className="bg-[#232a31] rounded overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-[#f9f8ff]">What are your customer service hours?</span>
                  <span className="text-yellow-400 transition-transform group-open:rotate-180">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-[#959ca3]">
                  <p className="pt-2">Our live chat support is available 24/7. Phone support is available Monday through Friday from 9:00 AM to 8:00 PM Eastern Time. Email support is monitored 24/7 with responses typically within 24 hours.</p>
                </div>
              </details>
            </div>

            <div className="bg-[#232a31] rounded overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-[#f9f8ff]">How quickly can I expect a response?</span>
                  <span className="text-yellow-400 transition-transform group-open:rotate-180">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-[#959ca3]">
                  <p className="pt-2">For live chat, you'll typically be connected with an agent within 2 minutes. Email responses are usually sent within 24 hours. For phone support, the average wait time is less than 5 minutes during regular business hours.</p>
                </div>
              </details>
            </div>

            <div className="bg-[#232a31] rounded overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-[#f9f8ff]">Can I submit feature requests?</span>
                  <span className="text-yellow-400 transition-transform group-open:rotate-180">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-[#959ca3]">
                  <p className="pt-2">Yes! We love hearing your suggestions. You can submit feature requests through the contact form on this page or through our <a href="/community" className="text-yellow-400 hover:underline">Community Forum</a>. Our product team regularly reviews these suggestions for future updates.</p>
                </div>
              </details>
            </div>

            <div className="bg-[#232a31] rounded overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-[#f9f8ff]">What information should I provide when reporting an issue?</span>
                  <span className="text-yellow-400 transition-transform group-open:rotate-180">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-[#959ca3]">
                  <p className="pt-2">When reporting an issue, please include: your device type, operating system, app version (if applicable), a detailed description of the problem, any error messages you received, and steps to reproduce the issue. Screenshots or screen recordings are also very helpful.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
