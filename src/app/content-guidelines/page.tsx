import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function ContentGuidelines() {
  return (
    <PageTemplate title="Content Guidelines" breadcrumb="Content Guidelines">
      <div className="mb-8">
        <p className="text-sm text-[#959ca3] mb-4">Last Updated: June 15, 2025</p>
        <p className="mb-6">
          At Pixloris, we're committed to providing a platform where users can discover and enjoy a wide range of content 
          while maintaining a safe, respectful, and lawful environment. These Content Guidelines outline the types of content 
          that are acceptable on our platform and the standards we expect all content to meet.
        </p>
        <p className="mb-6">
          These guidelines apply to all content available through our streaming service, including but not limited to movies, 
          TV shows, user-generated content, comments, reviews, and forum posts.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">1. Content Standards</h2>
        <p className="mb-4">
          All content on Pixloris must adhere to the following standards:
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">1.1 Legal Compliance</h3>
        <p className="mb-4">
          Content must comply with all applicable laws and regulations. We do not permit content that:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Infringes on intellectual property rights</li>
          <li>Violates privacy or publicity rights</li>
          <li>Breaches contractual obligations or fiduciary duties</li>
          <li>Violates any local, state, federal, or international laws</li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">1.2 Prohibited Content</h3>
        <p className="mb-4">
          We prohibit content that:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Promotes, glorifies, or incites violence, terrorism, or criminal activity</li>
          <li>Contains hate speech, harassment, or discrimination based on race, ethnicity, national origin, religion, gender, gender identity, disability, age, veteran status, sexual orientation, or other protected characteristics</li>
          <li>Depicts or promotes self-harm, suicide, eating disorders, or substance abuse without appropriate context and resources</li>
          <li>Contains sexually explicit material that is not properly age-gated or classified</li>
          <li>Depicts or promotes child exploitation or abuse</li>
          <li>Promotes dangerous or harmful activities without appropriate disclaimers or safety information</li>
          <li>Contains malware, phishing attempts, or other content designed to compromise user security</li>
          <li>Spreads misinformation that may cause harm to individuals or society</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">2. Content Classification and Age Ratings</h2>
        <p className="mb-4">
          To help users make informed viewing decisions, all content on Pixloris is classified according to industry-standard 
          age ratings and content descriptors.
        </p>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.1 Age Ratings</h3>
        <p className="mb-4">
          We use the following rating systems:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-6">
          <li><span className="text-[#f9f8ff] font-medium">G:</span> General Audience – Suitable for all ages</li>
          <li><span className="text-[#f9f8ff] font-medium">PG:</span> Parental Guidance Suggested – Some material may not be suitable for children</li>
          <li><span className="text-[#f9f8ff] font-medium">PG-13:</span> Parents Strongly Cautioned – Some material may be inappropriate for children under 13</li>
          <li><span className="text-[#f9f8ff] font-medium">R:</span> Restricted – Under 17 requires accompanying parent or adult guardian</li>
          <li><span className="text-[#f9f8ff] font-medium">NC-17:</span> No One 17 and Under Admitted</li>
          <li><span className="text-[#f9f8ff] font-medium">TV-Y:</span> All Children</li>
          <li><span className="text-[#f9f8ff] font-medium">TV-Y7:</span> Directed to Older Children</li>
          <li><span className="text-[#f9f8ff] font-medium">TV-G:</span> General Audience</li>
          <li><span className="text-[#f9f8ff] font-medium">TV-PG:</span> Parental Guidance Suggested</li>
          <li><span className="text-[#f9f8ff] font-medium">TV-14:</span> Parents Strongly Cautioned</li>
          <li><span className="text-[#f9f8ff] font-medium">TV-MA:</span> Mature Audience Only</li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#f9f8ff] mb-2 mt-6">2.2 Content Descriptors</h3>
        <p className="mb-4">
          In addition to age ratings, we provide content descriptors to inform viewers about specific elements:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li><span className="text-[#f9f8ff] font-medium">V:</span> Violence</li>
          <li><span className="text-[#f9f8ff] font-medium">S:</span> Sexual Content</li>
          <li><span className="text-[#f9f8ff] font-medium">L:</span> Strong Language</li>
          <li><span className="text-[#f9f8ff] font-medium">D:</span> Suggestive Dialogue</li>
          <li><span className="text-[#f9f8ff] font-medium">N:</span> Nudity</li>
          <li><span className="text-[#f9f8ff] font-medium">SA:</span> Substance Abuse</li>
          <li><span className="text-[#f9f8ff] font-medium">FV:</span> Fantasy Violence</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">3. Parental Controls</h2>
        <p className="mb-4">
          Pixloris provides robust parental control features to help parents and guardians manage what content their children can access:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Age-based content filtering</li>
          <li>PIN-protected profiles</li>
          <li>Viewing history monitoring</li>
          <li>Time limits and scheduling</li>
          <li>Content restriction by ratings or categories</li>
        </ul>
        <p className="mb-4">
          For more information on setting up and using parental controls, please visit our <Link href="/help-center" className="text-blue-400 hover:text-blue-300">Help Center</Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">4. User-Generated Content</h2>
        <p className="mb-4">
          User-generated content, including comments, reviews, and forum posts, must comply with these guidelines as well as our 
          <Link href="/terms-of-service" className="text-blue-400 hover:text-blue-300 mx-1">Terms of Service</Link>.
          Additionally, users must:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Respect the opinions and experiences of others</li>
          <li>Avoid personal attacks, harassment, or bullying</li>
          <li>Not post spam, advertisements, or irrelevant content</li>
          <li>Not impersonate others or create misleading content</li>
          <li>Consider the diverse audience of Pixloris when posting content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">5. Content Moderation</h2>
        <p className="mb-4">
          Pixloris uses a combination of automated systems and human review to enforce these guidelines. We may:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Remove content that violates these guidelines</li>
          <li>Age-restrict content that is not appropriate for all audiences</li>
          <li>Add content warnings or additional context</li>
          <li>Suspend or terminate accounts that repeatedly violate these guidelines</li>
          <li>Report illegal content to appropriate authorities</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">6. Reporting Content</h2>
        <p className="mb-4">
          If you encounter content on Pixloris that you believe violates these guidelines, please report it immediately. You can:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Use the "Report" button available on all content</li>
          <li>Contact our support team through the <Link href="/help-center" className="text-blue-400 hover:text-blue-300">Help Center</Link></li>
          <li>Email us at <Link href="mailto:content@pixloris.com" className="text-blue-400 hover:text-blue-300">content@pixloris.com</Link></li>
        </ul>
        <p className="mb-4">
          Please provide as much information as possible about the content you are reporting, including where you found it 
          and why you believe it violates our guidelines.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">7. Appeals Process</h2>
        <p className="mb-4">
          If your content has been removed or your account has been affected due to a perceived violation of these guidelines, 
          and you believe this was done in error, you may appeal the decision by:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#959ca3] mb-4">
          <li>Submitting an appeal through your account settings</li>
          <li>Contacting our support team at <Link href="mailto:appeals@pixloris.com" className="text-blue-400 hover:text-blue-300">appeals@pixloris.com</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">8. Changes to These Guidelines</h2>
        <p className="mb-4">
          We may update these Content Guidelines from time to time to reflect changes in our service, user needs, or legal requirements. 
          We will notify users of significant changes through our website or other communication channels. Your continued use of 
          Pixloris after such changes constitutes your acceptance of the updated guidelines.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#f9f8ff] mb-3">9. Contact Us</h2>
        <p className="mb-4">
          If you have questions about our Content Guidelines or content moderation practices, please contact us at:
        </p>
        <div className="mb-4">
          <p className="text-[#f9f8ff]">Pixloris</p>
          <p className="text-[#959ca3]">Attn: Content Team</p>
          <p className="text-[#959ca3]">1234 Streaming Lane</p>
          <p className="text-[#959ca3]">Los Angeles, CA 90000</p>
          <p className="text-[#959ca3]">United States</p>
          <p className="mt-2">
            <Link href="mailto:content@pixloris.com" className="text-blue-400 hover:text-blue-300">content@pixloris.com</Link>
          </p>
          <p className="mt-2">
            Website: <Link href="https://www.pixloris.com" className="text-blue-400 hover:text-blue-300">www.pixloris.com</Link>
          </p>
        </div>
      </section>
    </PageTemplate>
  );
}
