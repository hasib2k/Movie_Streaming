import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function DMCA() {
  return (
    <PageTemplate title="DMCA Policy" breadcrumb="DMCA">
      <div className="mb-8">
        <p className="text-sm text-[#959ca3] mb-4">Last Updated: June 15, 2025</p>
        <p className="mb-6">
          Pixloris respects the intellectual property rights of others and expects its users to do the same. 
          In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), this policy describes the procedure 
          for reporting and responding to claims of copyright infringement on our streaming service, website, mobile 
          applications, and other related services (collectively, the "Service").
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">1. Reporting Copyright Infringement</h2>
        <p className="mb-4">
          If you believe that content available on or through our Service infringes one or more of your copyrights, 
          please send a written notification ("DMCA Notice") containing the information described below to our 
          designated copyright agent. Your DMCA Notice may be forwarded to the party that made the content available.
        </p>
        <p className="mb-4">
          To be effective, your DMCA Notice must include:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works;</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;</li>
          <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail address;</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ol>
        <p className="mb-4">
          Please send DMCA Notices to our designated copyright agent at:
        </p>
        <div className="bg-[#1e2126] p-5 rounded-lg mb-6">
          <p className="text-[#f9f8ff]">Pixloris</p>
          <p className="text-[#959ca3]">Attn: Copyright Agent</p>
          <p className="text-[#959ca3]">1234 Streaming Lane</p>
          <p className="text-[#959ca3]">Los Angeles, CA 90000</p>
          <p className="text-[#959ca3]">United States</p>
          <p className="mt-2">
            <Link href="mailto:copyright@pixloris.com" className="text-blue-400 hover:text-blue-300">copyright@pixloris.com</Link>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">2. Counter-Notification Procedures</h2>
        <p className="mb-4">
          If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have 
          the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the 
          material in your content, you may send a counter-notification to our designated copyright agent containing the 
          following information:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Your physical or electronic signature;</li>
          <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>
          <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and</li>
          <li>Your name, address, telephone number, and email address, a statement that you consent to the jurisdiction of the federal court in which your address is located, or if your address is outside of the United States, for any judicial district in which Pixloris may be found, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
        </ol>
        <p className="mb-4">
          If our copyright agent receives a counter-notification, we may send a copy of the counter-notification to the original 
          complaining party informing that person that we may replace the removed content or cease disabling it in 10 business days. 
          Unless the copyright owner files an action seeking a court order against the content provider, the removed content may be 
          replaced, or access to it restored, in 10 to 14 business days or more after receipt of the counter-notice, at our sole discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">3. Repeat Infringers</h2>
        <p className="mb-4">
          It is our policy in appropriate circumstances to disable and/or terminate the accounts of users who are repeat infringers. 
          We may also at our sole discretion limit access to the Service and/or terminate the accounts of any users who infringe any 
          intellectual property rights of others, whether or not there is any repeat infringement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">4. Modifications to This Policy</h2>
        <p className="mb-4">
          Pixloris reserves the right to modify this DMCA Policy at any time. Changes and clarifications will take effect immediately 
          upon their posting on our website. We encourage you to periodically review this policy to stay informed of updates.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">5. Disclaimer</h2>
        <p className="mb-4">
          This DMCA Policy is provided for informational purposes only and does not constitute legal advice. If you have questions 
          about your legal rights or obligations, please consult with an attorney.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">6. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about our DMCA Policy, please contact us at:
        </p>
        <div className="mb-4">
          <p className="text-[#f9f8ff]">Pixloris</p>
          <p className="text-[#959ca3]">Attn: Hasib Ahmed, Owner</p>
          <p className="text-[#959ca3]">1234 Streaming Lane</p>
          <p className="text-[#959ca3]">Los Angeles, CA 90000</p>
          <p className="text-[#959ca3]">United States</p>
          <p className="mt-2">
            <Link href="mailto:copyright@pixloris.com" className="text-blue-400 hover:text-blue-300">copyright@pixloris.com</Link>
          </p>
          <p className="mt-2">
            Website: <Link href="https://www.pixloris.com" className="text-blue-400 hover:text-blue-300">www.pixloris.com</Link>
          </p>
        </div>
      </section>
    </PageTemplate>
  );
}
