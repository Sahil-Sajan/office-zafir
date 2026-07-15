import Link from "next/link";

import ArabicNote from "@/components/Front-Pages/Legal/ArabicNote";
import LegalCta from "@/components/Front-Pages/Legal/LegalCta";
import LegalHero from "@/components/Front-Pages/Legal/LegalHero";
import PolicyLayout from "@/components/Front-Pages/Legal/PolicyLayout";

const toc = [
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "how-we-use", label: "2. How We Use Your Information" },
  { id: "information-sharing", label: "3. Information Sharing" },
  { id: "data-security", label: "4. Data Security" },
  { id: "data-retention", label: "5. Data Retention" },
  { id: "your-rights", label: "6. Your Rights" },
  { id: "international-transfers", label: "7. International Data Transfers" },
  { id: "childrens-privacy", label: "8. Children's Privacy" },
  { id: "changes", label: "9. Changes to This Policy" },
  { id: "contact", label: "10. Contact Us" },
];

interface PrivacyPolicyViewProps {
  lang: string;
}

export function PrivacyPolicyView({ lang }: PrivacyPolicyViewProps) {
  return (
    <div>
      <LegalHero lang={lang} title="Privacy Policy" updated="July 1, 2026" />
      <PolicyLayout toc={toc}>
        <p className="text-[1.05rem]!">
          Zafir360 General Trading and E-Commerce Ltd. ("Zafir360," "we," "us," or "our") is committed to protecting the privacy of all users of our platform, including buyers, sellers, suppliers, and visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data.
        </p>

        <h2 id="information-we-collect">1. Information We Collect</h2>
        <p>We collect information you provide directly, information collected automatically when you use the platform, and information from third-party sources.</p>
        <h3>1.1 Information You Provide</h3>
        <p>When you register for an account, complete KYC/KYB verification, list products, place orders, or contact support, we may collect:</p>
        <ul>
          <li>Full name, phone number, email address, and physical address</li>
          <li>Government-issued ID, business registration documents, and tax identification numbers</li>
          <li>Bank account details and payment information</li>
          <li>Product listings, photos, descriptions, and pricing information</li>
          <li>Communications with our support team and other users</li>
        </ul>
        <h3>1.2 Information Collected Automatically</h3>
        <p>When you access the platform, we automatically collect:</p>
        <ul>
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Usage data (pages visited, time spent, search queries, clicked items)</li>
          <li>Location data (approximate location based on IP address)</li>
          <li>
            Cookies and similar tracking technologies (see our{" "}
            <Link href={`/${lang}/cookie-policy`}>Cookie Policy</Link>)
          </li>
        </ul>

        <h2 id="how-we-use">2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li><strong>Platform Operation:</strong> To create and maintain your account, process orders, facilitate payments, and enable communication between buyers and sellers</li>
          <li><strong>Verification &amp; Security:</strong> To perform KYC/KYB checks, detect and prevent fraud, and ensure the security of the platform</li>
          <li><strong>Improvement &amp; Analytics:</strong> To analyse usage patterns, improve platform features, and personalise your experience</li>
          <li><strong>Communications:</strong> To send transaction updates, support responses, and (with your consent) marketing communications</li>
          <li><strong>Compliance:</strong> To comply with Iraqi Central Bank regulations, anti-money laundering laws, and other legal obligations</li>
        </ul>

        <h2 id="information-sharing">3. Information Sharing</h2>
        <p>We do not sell your personal data. We may share your information with:</p>
        <ul>
          <li><strong>Other Users:</strong> Your business name, listing details, and public profile information are visible to other platform users as necessary for transactions</li>
          <li><strong>Service Providers:</strong> Payment processors, logistics partners (JayakHub), verification services, and cloud infrastructure providers who act on our instructions</li>
          <li><strong>Legal Authorities:</strong> When required by Iraqi law, court order, or regulatory request</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        </ul>

        <h2 id="data-security">4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data:</p>
        <ul>
          <li>AES-256 encryption at rest and TLS 1.3 in transit</li>
          <li>IP-based and device-based fraud detection systems</li>
          <li>Role-based access control limiting internal access to personal data</li>
          <li>Immutable audit logging of all sensitive data access</li>
          <li>Regular security audits and penetration testing</li>
        </ul>

        <h2 id="data-retention">5. Data Retention</h2>
        <p>We retain your personal data for as long as your account is active and for a reasonable period thereafter to comply with legal obligations, resolve disputes, and enforce agreements. Account deletion requests are processed within 30 days, subject to legal retention requirements.</p>

        <h2 id="your-rights">6. Your Rights</h2>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (subject to legal obligations)</li>
          <li>Object to or restrict certain processing activities</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time where processing is based on consent</li>
        </ul>
        <p>
          To exercise these rights, contact our Data Protection Officer at{" "}
          <a href="mailto:privacy@zafir360.com">privacy@zafir360.com</a>.
        </p>

        <h2 id="international-transfers">7. International Data Transfers</h2>
        <p>Your data may be transferred to and processed in countries other than Iraq where our service providers operate. We ensure appropriate safeguards are in place, including standard contractual clauses, to protect your data in accordance with this Privacy Policy.</p>

        <h2 id="childrens-privacy">8. Children's Privacy</h2>
        <p>The platform is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that a minor has provided us with personal data, we will take steps to delete it.</p>

        <h2 id="changes">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Material changes will be notified through the platform or via email. Your continued use of the platform after changes take effect constitutes acceptance of the updated policy.</p>

        <h2 id="contact">10. Contact Us</h2>
        <p>For questions about this Privacy Policy or our data practices, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@zafir360.com">privacy@zafir360.com</a></li>
          <li>Address: Mansour, Baghdad, Iraq</li>
          <li>Phone: +964 770 000 0360</li>
        </ul>

        <ArabicNote doc="Privacy Policy" />
      </PolicyLayout>
      <LegalCta />
    </div>
  );
}
