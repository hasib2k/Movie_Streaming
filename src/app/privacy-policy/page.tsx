import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <PageTemplate title="Privacy Policy" breadcrumb="Privacy Policy">
      <div className="mb-8">
        <p className="text-sm text-[#959ca3] mb-4">Last Updated: June 15, 2025</p>
        <p className="mb-6">
          At Pixloris, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you use our streaming service, website, mobile application, 
          and any other related services (collectively, the "Service").
        </p>
        <p className="mb-6">
          Please read this Privacy Policy carefully. By accessing or using the Service, you acknowledge that 
          you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not 
          agree with our policies and practices, please do not use our Service.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">1. Information We Collect</h2>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">1.1 Personal Information</h3>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us when you register for the Service, 
          express interest in obtaining information about us or our products and services, or otherwise contact us. 
          The personal information we collect may include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Name, email address, and contact information</li>
          <li>Account credentials (username and password)</li>
          <li>Billing information and payment details</li>
          <li>User preferences and profile information</li>
          <li>Communications and correspondence with us</li>
        </ul>

        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">1.2 Usage Information</h3>
        <p className="mb-4">
          When you use our Service, we may automatically collect certain information about your device and how you 
          interact with our Service, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Device information (e.g., IP address, browser type, device type, operating system)</li>
          <li>Log information (e.g., access times, pages viewed, time spent on pages)</li>
          <li>Content preferences and viewing history</li>
          <li>Geographic location information</li>
          <li>Other technical information about your use of the Service</li>
        </ul>

        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">1.3 Information from Third Parties</h3>
        <p className="mb-4">
          We may receive information about you from third-party sources such as business partners, marketing agencies, 
          and data analytics providers. We may combine this information with other information we have about you to help 
          us improve our Service and provide a better user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">2. How We Use Your Information</h2>
        <p className="mb-4">
          We may use the information we collect for various purposes, including to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Provide, maintain, and improve our Service</li>
          <li>Process transactions and manage your account</li>
          <li>Personalize your experience and deliver content and product offerings relevant to your interests</li>
          <li>Provide customer support and respond to your inquiries</li>
          <li>Send you technical notices, updates, security alerts, and administrative messages</li>
          <li>Communicate with you about products, services, offers, and events</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Detect, prevent, and address technical issues, security breaches, and fraudulent activities</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">3. How We Share Your Information</h2>
        <p className="mb-4">
          We may share your information in the following situations:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li><span className="text-[#f9f8ff] font-medium">Service Providers:</span> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
          <li><span className="text-[#f9f8ff] font-medium">Business Transfers:</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
          <li><span className="text-[#f9f8ff] font-medium">With Your Consent:</span> We may disclose your information for any other purpose with your consent.</li>
          <li><span className="text-[#f9f8ff] font-medium">Legal Requirements:</span> We may disclose your information where required to comply with applicable law, governmental requests, judicial proceeding, court order, or legal process.</li>
          <li><span className="text-[#f9f8ff] font-medium">Protection of Rights:</span> We may disclose your information to protect the rights, property, or safety of Pixloris, our users, or others.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">4. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We and our third-party service providers may use cookies, web beacons, and other tracking technologies to 
          collect information about your browsing activities on our Service. This information helps us improve your experience, 
          understand how users engage with our Service, and tailor our marketing efforts.
        </p>
        <p className="mb-4">
          You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. 
          However, if you disable or refuse cookies, some parts of our Service may be inaccessible or not function properly.
        </p>
        <p className="mb-4">
          For more information about how we use cookies and your choices regarding cookies, please see our <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">5. Data Security</h2>
        <p className="mb-4">
          We have implemented appropriate technical and organizational security measures designed to protect the security 
          of any personal information we process. However, despite our safeguards and efforts to secure your information, 
          no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
        </p>
        <p className="mb-4">
          We strive to protect your personal information, but we cannot guarantee the absolute security of your information. 
          We encourage you to help us by keeping your account credentials confidential and by choosing strong passwords.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">6. International Data Transfers</h2>
        <p className="mb-4">
          Our Service is operated in the United States. If you are located in another country, please be aware that 
          information we collect will be transferred to, processed, and stored in the United States. The data protection 
          laws in the United States may differ from those in your country of residence.
        </p>
        <p className="mb-4">
          By using our Service or providing us with any information, you consent to this transfer, processing, and storage 
          of your information in the United States and other countries where we or our service providers operate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">7. Children's Privacy</h2>
        <p className="mb-4">
          Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information 
          from children under 13. If you are a parent or guardian and you believe your child has provided us with personal 
          information, please contact us. If we become aware that we have collected personal information from children 
          without verification of parental consent, we take steps to remove that information from our servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">8. Your Privacy Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>The right to access personal information we hold about you</li>
          <li>The right to request correction or deletion of your personal information</li>
          <li>The right to restrict or object to processing of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time, where we rely on consent to process your information</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information provided in the "Contact Us" section below. 
          Please note that these rights may be limited in some circumstances by applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">9. California Privacy Rights</h2>
        <p className="mb-4">
          If you are a California resident, you have specific rights regarding your personal information under the 
          California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
        </p>
        <p className="mb-4">
          You have the right to request information about how we collect, use, and disclose your personal information. 
          You also have the right to request that we delete your personal information in certain circumstances. 
          We will not discriminate against you for exercising your rights under California privacy laws.
        </p>
        <p className="mb-4">
          To make a request regarding your California privacy rights, please contact us using the information 
          provided in the "Contact Us" section below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">10. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
          Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy 
          periodically for any changes.
        </p>
        <p className="mb-4">
          Your continued use of our Service after any changes to this Privacy Policy constitutes your acceptance of such changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <div className="mb-4">
          <p className="text-[#f9f8ff]">Pixloris, Inc.</p>
          <p className="text-[#959ca3]">Privacy Department</p>
          <p className="text-[#959ca3]">1234 Streaming Lane</p>
          <p className="text-[#959ca3]">Los Angeles, CA 90000</p>
          <p className="text-[#959ca3]">United States</p>
          <p className="mt-2">
            <Link href="mailto:privacy@pixloris.com" className="text-blue-400 hover:text-blue-300">privacy@pixloris.com</Link>
          </p>
        </div>
      </section>
    </PageTemplate>
  );
}
