import ArabicNote from "@/components/Front-Pages/Legal/ArabicNote";
import LegalCta from "@/components/Front-Pages/Legal/LegalCta";
import LegalHero from "@/components/Front-Pages/Legal/LegalHero";
import PolicyLayout from "@/components/Front-Pages/Legal/PolicyLayout";

const toc = [
  { id: "what-are-cookies", label: "1. What Are Cookies?" },
  { id: "how-we-use-cookies", label: "2. How We Use Cookies" },
  { id: "third-party-cookies", label: "3. Third-Party Cookies" },
  { id: "your-choices", label: "4. Your Cookie Choices" },
  { id: "retention", label: "5. Cookie Retention" },
  { id: "updates", label: "6. Updates to This Policy" },
  { id: "contact", label: "7. Contact Us" },
];

interface CookiePolicyViewProps {
  lang: string;
}

export function CookiePolicyView({ lang }: CookiePolicyViewProps) {
  return (
    <div>
      <LegalHero lang={lang} title="Cookie Policy" updated="July 1, 2026" />
      <PolicyLayout toc={toc}>
        <p className="text-[1.05rem]!">
          Zafir360 uses cookies and similar tracking technologies to enhance your experience, analyse usage, and support our platform operations. This Cookie Policy explains what cookies are, how we use them, and your choices regarding them.
        </p>

        <h2 id="what-are-cookies">1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and provide information to website owners. Cookies may be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain until they expire or are deleted).</p>

        <h2 id="how-we-use-cookies">2. How We Use Cookies</h2>
        <p>We use the following categories of cookies:</p>

        <h3>2.1 Essential Cookies</h3>
        <p>These cookies are necessary for the platform to function and cannot be disabled. They enable core functionality such as security, session management, and account authentication.</p>
        <ul>
          <li>Session tokens to keep you logged in</li>
          <li>Security cookies to detect fraudulent activity</li>
          <li>CSRF tokens to prevent cross-site request forgery</li>
        </ul>

        <h3>2.2 Functional Cookies</h3>
        <p>These cookies enable enhanced functionality and personalisation, such as remembering your preferences, language, and region.</p>
        <ul>
          <li>Language preference (Arabic, English, or Kurdish)</li>
          <li>Currency and region settings</li>
          <li>Saved searches and recently viewed items</li>
        </ul>

        <h3>2.3 Analytics Cookies</h3>
        <p>These cookies help us understand how users interact with the platform by collecting aggregate usage data. This helps us improve platform performance and user experience.</p>
        <ul>
          <li>Page visits, time spent, and navigation paths</li>
          <li>Feature usage and adoption rates</li>
          <li>Error tracking and performance monitoring</li>
        </ul>

        <h3>2.4 Marketing Cookies</h3>
        <p>These cookies are used to deliver relevant advertisements and measure the effectiveness of marketing campaigns. They may track your browsing across different websites.</p>

        <h2 id="third-party-cookies">3. Third-Party Cookies</h2>
        <p>Some cookies on the platform are set by trusted third-party services:</p>
        <ul>
          <li><strong>Analytics:</strong> We use analytics services to understand platform usage patterns</li>
          <li><strong>Payment Processors:</strong> Payment gateway partners may set cookies for fraud prevention</li>
          <li><strong>Customer Support:</strong> Our live chat service may use cookies to maintain conversation continuity</li>
        </ul>

        <h2 id="your-choices">4. Your Cookie Choices</h2>
        <p>When you first visit the platform, you are presented with a cookie consent banner where you can choose which categories of cookies to accept. You can also manage cookies through your browser settings:</p>
        <ul>
          <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may affect platform functionality.</li>
          <li><strong>Opt-Out Tools:</strong> You can opt out of analytics cookies using the preference centre available on our platform.</li>
        </ul>

        <h2 id="retention">5. Cookie Retention</h2>
        <p>Essential session cookies are deleted when you close your browser. Persistent cookies remain for the duration specified in the cookie, typically ranging from 30 days to 24 months depending on the cookie type and purpose.</p>

        <h2 id="updates">6. Updates to This Policy</h2>
        <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date. Significant changes will be communicated through a notice on the platform.</p>

        <h2 id="contact">7. Contact Us</h2>
        <p>
          If you have questions about our use of cookies, please contact us at{" "}
          <a href="mailto:privacy@zafir360.com">privacy@zafir360.com</a>.
        </p>

        <ArabicNote doc="Cookie Policy" />
      </PolicyLayout>
      <LegalCta />
    </div>
  );
}
