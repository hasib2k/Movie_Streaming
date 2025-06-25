import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <PageTemplate title="Terms of Service" breadcrumb="Terms of Service">
      <div className="mb-8">
        <p className="text-sm text-[#959ca3] mb-4">Last Updated: June 15, 2025</p>
        <p className="mb-6">
          Welcome to Pixloris. These Terms of Service ("Terms") govern your access to and use of the Pixloris streaming service, 
          including our website, applications, content, and other services (collectively, the "Service"). 
          Please read these Terms carefully before using the Service.
        </p>
        <p className="mb-6">
          By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. 
          If you do not agree to these Terms, you may not access or use the Service.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">1. Account Registration</h2>
        <p className="mb-4">
          To access certain features of the Service, you must create an account. You agree to provide accurate, 
          current, and complete information during the registration process and to update such information to keep 
          it accurate, current, and complete.
        </p>
        <p className="mb-4">
          You are responsible for safeguarding your password and for all activities that occur under your account. 
          You agree to notify Pixloris immediately of any unauthorized use of your account or any other breach of security.
        </p>
        <p className="mb-4">
          Pixloris cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">2. Subscription and Billing</h2>
        <p className="mb-4">
          Certain aspects of the Service require payment of fees. If you choose to subscribe to a paid tier of the Service, 
          you agree to pay all applicable fees as described on the Service at the time of your subscription.
        </p>
        <p className="mb-4">
          Unless otherwise stated, subscriptions automatically renew for additional periods equal to the original subscription 
          term at the then-current non-promotional rate. To avoid charges for a new subscription period, you must cancel before 
          the end of the current subscription period.
        </p>
        <p className="mb-4">
          Pixloris reserves the right to change subscription fees at any time, but will provide reasonable notice before 
          any changes take effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">3. Content and Licenses</h2>
        <p className="mb-4">
          The Service includes content owned or licensed by Pixloris, including but not limited to videos, images, text, 
          graphics, logos, and software. This content is protected by copyright, trademark, and other laws.
        </p>
        <p className="mb-4">
          Subject to your compliance with these Terms, Pixloris grants you a limited, non-exclusive, non-transferable, 
          non-sublicensable license to access and view the content available on the Service for your personal, 
          non-commercial use.
        </p>
        <p className="mb-4">
          You may not download (other than through page caching necessary for personal use), modify, copy, distribute, 
          transmit, display, perform, reproduce, duplicate, publish, license, create derivative works from, or offer for 
          sale any content or other information contained on or obtained from the Service without prior written consent from Pixloris.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">4. Prohibited Conduct</h2>
        <p className="mb-4">
          You agree not to use the Service to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Violate any applicable law or regulation</li>
          <li>Infringe the rights of any third party, including intellectual property rights</li>
          <li>Circumvent, remove, alter, deactivate, degrade, or thwart any content protections</li>
          <li>Use any robot, spider, scraper, or other automated means to access the Service</li>
          <li>Decompile, reverse engineer, or disassemble any software or other products or processes accessible through the Service</li>
          <li>Insert any code or manipulate the content of the Service in any way</li>
          <li>Upload any viruses, trojan horses, worms, or other malicious code</li>
          <li>Attempt to gain unauthorized access to any part of the Service</li>
        </ul>
        <p className="mb-4">
          Pixloris reserves the right to investigate and take appropriate legal action against anyone who violates these provisions, 
          including without limitation, removing the offending content from the Service and terminating the accounts of such violators.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">5. Service Availability and Modifications</h2>
        <p className="mb-4">
          Pixloris does not guarantee that the Service will be available at all times. We may experience hardware, software, 
          or other problems that may result in service interruptions, delays, or errors.
        </p>
        <p className="mb-4">
          Pixloris reserves the right to change, modify, or remove the contents of the Service at any time or for any reason 
          at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Service 
          without notice at any time.
        </p>
        <p className="mb-4">
          We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">6. Termination</h2>
        <p className="mb-4">
          Pixloris may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
          for any reason, including without limitation if you breach these Terms.
        </p>
        <p className="mb-4">
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, 
          you may simply discontinue using the Service or contact our support team to request account deletion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">7. Disclaimer of Warranties</h2>
        <p className="mb-4">
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
          INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, 
          AND NON-INFRINGEMENT.
        </p>
        <p className="mb-4">
          PIXLORIS DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, 
          OR THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">8. Limitation of Liability</h2>
        <p className="mb-4">
          IN NO EVENT WILL PIXLORIS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, 
          OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR 
          USE, OR INABILITY TO USE, THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, 
          OR PUNITIVE DAMAGES.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">9. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to 
          its conflict of law provisions.
        </p>
        <p className="mb-4">
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of 
          these Terms will remain in effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">10. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
          we will try to provide at least 30 days' notice prior to any new terms taking effect.
        </p>
        <p className="mb-4">
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the 
          revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at <Link href="mailto:legal@pixloris.com" className="text-blue-400 hover:text-blue-300">legal@pixloris.com</Link>.
        </p>
      </section>
    </PageTemplate>
  );
}
