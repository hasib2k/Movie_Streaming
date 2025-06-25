import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <PageTemplate title="Cookie Policy" breadcrumb="Cookie Policy">
      <div className="mb-8">
        <p className="text-sm text-[#959ca3] mb-4">Last Updated: June 15, 2025</p>
        <p className="mb-6">
          This Cookie Policy explains how Pixloris ("we", "us", or "our") uses cookies and similar technologies 
          when you visit our website (www.pixloris.com) and use our streaming service, applications, and other related services 
          (collectively, the "Service").
        </p>
        <p className="mb-6">
          By continuing to use our Service, you consent to the use of cookies and similar technologies as described in this policy.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">1. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer, smartphone, tablet, or other device when you visit a website. 
          They are widely used to make websites work more efficiently, provide a more personalized user experience, 
          and to provide information to the owners of the website.
        </p>
        <p className="mb-4">
          Cookies contain information that is transferred to your device's hard drive or memory. They help us recognize your device 
          and remember certain information about your visit, such as your user preferences, settings, and previous activities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">2. Types of Cookies We Use</h2>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.1 Essential Cookies</h3>
        <p className="mb-4">
          These cookies are necessary for the Service to function properly and cannot be turned off in our systems. 
          They are usually set in response to actions made by you, such as setting privacy preferences, logging in, 
          or filling in forms. They enable basic functions like page navigation and access to secure areas of the Service.
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.2 Performance Cookies</h3>
        <p className="mb-4">
          These cookies help us understand how visitors interact with our Service by collecting and reporting information anonymously. 
          They allow us to count visits and traffic sources, measure and improve the performance of our Service, and see which pages 
          are the most and least popular.
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.3 Functionality Cookies</h3>
        <p className="mb-4">
          These cookies enable the Service to provide enhanced functionality and personalization. They may be set by us or by third-party 
          providers whose services we have added to our pages. If you disable these cookies, some or all of these features may not function properly.
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.4 Targeting/Advertising Cookies</h3>
        <p className="mb-4">
          These cookies are set through our site by our advertising partners. They may be used by those companies to build a profile of your 
          interests and show you relevant ads on other sites. They do not directly store personal information, but are based on uniquely 
          identifying your browser and internet device.
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.5 Social Media Cookies</h3>
        <p className="mb-4">
          These cookies are set by social media services that we have added to the site to enable you to share our content with your 
          friends and networks. They are capable of tracking your browser across other sites and building a profile of your interests. 
          This may impact the content and messages you see on other websites you visit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">3. Other Tracking Technologies</h2>
        <p className="mb-4">
          In addition to cookies, we may use other similar technologies to track your activities on our Service:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li><span className="text-[#f9f8ff] font-medium">Web Beacons:</span> Small graphic images (also known as "pixel tags" or "clear GIFs") that may be included on our Service and that may be used to track user interactions or for marketing purposes.</li>
          <li><span className="text-[#f9f8ff] font-medium">Local Storage Objects:</span> HTML5 and other technologies that store information locally on your device, similar to cookies but can store larger amounts of data.</li>
          <li><span className="text-[#f9f8ff] font-medium">Session Replay Tools:</span> Technologies that help us understand how users interact with our Service by recreating users' actions across our website.</li>
          <li><span className="text-[#f9f8ff] font-medium">Device Fingerprinting:</span> Collection and analysis of information from your device, such as your browser type, operating system, and installed plugins.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">4. How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>To enable and enhance your user experience, including remembering your preferences</li>
          <li>To authenticate users and prevent fraud</li>
          <li>To process transactions and fulfill your requests</li>
          <li>To analyze how our Service is accessed, used, and performs</li>
          <li>To personalize content and recommendations based on your viewing history and preferences</li>
          <li>To deliver targeted advertising</li>
          <li>To facilitate sharing on social media platforms</li>
          <li>To understand audience demographics and interests</li>
          <li>To improve our Service and develop new features</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">5. Third-Party Cookies</h2>
        <p className="mb-4">
          Some cookies on our Service are placed by third parties, such as analytics providers, advertising networks, and social 
          media platforms. These third parties may use cookies, web beacons, and similar technologies to collect information 
          about your use of our Service and other websites.
        </p>
        <p className="mb-4">
          Please note that these third parties have their own privacy policies, and we do not accept any responsibility or liability 
          for their policies or practices. We encourage you to read their privacy policies to understand how they collect and use 
          your information.
        </p>
        <p className="mb-4">
          Some of the third-party services we use include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>Facebook Pixel</li>
          <li>Twitter Analytics</li>
          <li>Amazon Advertising</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">6. Managing Your Cookie Preferences</h2>
        <p className="mb-4">
          You can manage your cookie preferences in several ways:
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">6.1 Cookie Preference Tool</h3>
        <p className="mb-4">
          We provide a cookie preference tool on our website that allows you to accept or reject certain categories of cookies. 
          Please note that essential cookies cannot be rejected as they are necessary for the Service to function properly.
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">6.2 Browser Settings</h3>
        <p className="mb-4">
          Most web browsers allow you to control cookies through their settings preferences. You can usually find these settings 
          in the "Options" or "Preferences" menu of your browser. To understand these settings, the following links may be helpful:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li><Link href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Cookie settings in Chrome</Link></li>
          <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Cookie settings in Firefox</Link></li>
          <li><Link href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Cookie settings in Edge</Link></li>
          <li><Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Cookie settings in Safari</Link></li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">6.3 Opt-Out Programs</h3>
        <p className="mb-4">
          You can opt out of interest-based advertising through industry programs such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li><Link href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Network Advertising Initiative</Link></li>
          <li><Link href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Digital Advertising Alliance</Link></li>
          <li><Link href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">European Interactive Digital Advertising Alliance</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">7. Consequences of Disabling Cookies</h2>
        <p className="mb-4">
          If you choose to disable cookies, please note that some parts of our Service may not function properly. 
          For example, you may not be able to sign in, save your preferences, or use some of the interactive features.
        </p>
        <p className="mb-4">
          Essential cookies are required for basic functionality. If you reject these cookies, we cannot guarantee 
          that our Service will work as intended.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">8. Changes to This Cookie Policy</h2>
        <p className="mb-4">
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy 
          on this page and updating the "Last Updated" date.
        </p>
        <p className="mb-4">
          We encourage you to review this Cookie Policy periodically for any changes. Your continued use of our Service after any 
          changes to this Cookie Policy constitutes your acceptance of such changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Cookie Policy or our use of cookies and similar technologies, 
          please contact us at:
        </p>
        <div className="mb-4">
          <p className="text-[#f9f8ff]">Pixloris</p>
          <p className="text-[#959ca3]">Attn: Hasib Ahmed, Owner</p>
          <p className="text-[#959ca3]">1234 Streaming Lane</p>
          <p className="text-[#959ca3]">Los Angeles, CA 90000</p>
          <p className="text-[#959ca3]">United States</p>
          <p className="mt-2">
            <Link href="mailto:privacy@pixloris.com" className="text-blue-400 hover:text-blue-300">privacy@pixloris.com</Link>
          </p>
          <p className="mt-2">
            Website: <Link href="https://www.pixloris.com" className="text-blue-400 hover:text-blue-300">www.pixloris.com</Link>
          </p>
        </div>
      </section>
    </PageTemplate>
  );
}
