import Link from "next/link";

import ArabicNote from "@/components/Front-Pages/Legal/ArabicNote";
import LegalCta from "@/components/Front-Pages/Legal/LegalCta";
import LegalHero from "@/components/Front-Pages/Legal/LegalHero";
import PolicyLayout from "@/components/Front-Pages/Legal/PolicyLayout";

const toc = [
  { id: "definitions", label: "1. Definitions" },
  { id: "account-registration", label: "2. Account Registration" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "platform-rules", label: "4. Platform Rules" },
  { id: "transactions", label: "5. Transactions" },
  { id: "fees-payments", label: "6. Fees and Payments" },
  { id: "intellectual-property", label: "7. Intellectual Property" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Termination" },
  { id: "dispute-resolution", label: "10. Dispute Resolution" },
  { id: "governing-law", label: "11. Governing Law" },
  { id: "changes", label: "12. Changes to Terms" },
  { id: "contact", label: "13. Contact" },
];

interface TermsConditionsViewProps {
  lang: string;
}

export function TermsConditionsView({ lang }: TermsConditionsViewProps) {
  return (
    <div>
      <LegalHero lang={lang} title="Terms & Conditions" updated="July 1, 2026" />
      <PolicyLayout toc={toc}>
        <p className="text-[1.05rem]!">
          These Terms and Conditions ("Terms") govern your access to and use of the Zafir360 platform. By creating an account or using any Zafir360 service, you agree to be bound by these Terms. If you do not agree, do not use the platform.
        </p>

        <h2 id="definitions">1. Definitions</h2>
        <ul>
          <li><strong>"Platform"</strong> means the Zafir360 website, mobile application, and all associated services</li>
          <li><strong>"Buyer"</strong> means any user who purchases goods through the platform</li>
          <li><strong>"Seller"</strong> means any user who lists and sells goods through the marketplace</li>
          <li><strong>"Supplier"</strong> means any verified factory or wholesaler listing products for wholesale purchase</li>
          <li><strong>"User"</strong> means any person or entity accessing or using the platform</li>
        </ul>

        <h2 id="account-registration">2. Account Registration</h2>
        <p>To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <p>Each user may maintain only one account unless expressly authorised by Zafir360. Business entities must register using their legal business name and valid registration documents.</p>

        <h2 id="eligibility">3. Eligibility</h2>
        <p>By using the platform, you represent and warrant that:</p>
        <ul>
          <li>You are at least 18 years of age</li>
          <li>You have the legal capacity to enter into binding contracts</li>
          <li>You are not located in a country subject to trade sanctions</li>
          <li>You will comply with all applicable Iraqi laws and regulations</li>
        </ul>

        <h2 id="platform-rules">4. Platform Rules</h2>
        <p>Users agree not to:</p>
        <ul>
          <li>List prohibited items (as defined in Zafir360's Prohibited Items Policy)</li>
          <li>Manipulate prices, reviews, or search results</li>
          <li>Engage in fraudulent transactions or money laundering</li>
          <li>Use the platform for any illegal purpose</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Attempt to bypass platform fees or commission structures</li>
          <li>Scrape, copy, or reproduce platform data without authorisation</li>
        </ul>

        <h2 id="transactions">5. Transactions</h2>
        <p>Zafir360 facilitates transactions between buyers, sellers, and suppliers but is not a party to the sale contract between users. All transaction terms — including price, delivery, warranties, and returns — are agreed between the buyer and seller directly, subject to platform policies.</p>
        <p>
          Wholesale transactions using the escrow system are governed by additional terms outlined in the{" "}
          <Link href={`/${lang}/buyer-agreement`}>Buyer Agreement</Link> and{" "}
          <Link href={`/${lang}/supplier-agreement`}>Supplier Agreement</Link>.
        </p>

        <h2 id="fees-payments">6. Fees and Payments</h2>
        <p>
          Zafir360 charges commission on marketplace sales and service fees for certain platform features. All applicable fees are disclosed before a transaction is completed. Fees are deducted from seller payouts or charged to the user's account as specified in the{" "}
          <Link href={`/${lang}/seller-pricing`}>Seller Pricing</Link> page.
        </p>

        <h2 id="intellectual-property">7. Intellectual Property</h2>
        <p>The Zafir360 name, logo, platform design, and all related intellectual property are owned by Zafir360 General Trading and E-Commerce Ltd. Users may not reproduce, distribute, or create derivative works without our express written consent. User-generated content (listings, photos, reviews) remains the property of the user, with a license granted to Zafir360 to display it on the platform.</p>

        <h2 id="liability">8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by Iraqi law, Zafir360 shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability for any claim shall not exceed the total fees paid by you to Zafir360 in the 12 months preceding the claim.</p>

        <h2 id="termination">9. Termination</h2>
        <p>Zafir360 may suspend or terminate your account at any time for violation of these Terms, fraudulent activity, or conduct that harms the platform or other users. You may terminate your account at any time by contacting support. Upon termination, you remain liable for any outstanding obligations.</p>

        <h2 id="dispute-resolution">10. Dispute Resolution</h2>
        <p>Disputes arising from these Terms shall first be attempted to be resolved through negotiation. If negotiation fails, disputes shall be resolved through the Iraqi courts in Baghdad. For transactions on the platform, the unified dispute resolution process shall apply.</p>

        <h2 id="governing-law">11. Governing Law</h2>
        <p>These Terms are governed by the laws of the Republic of Iraq. Any legal action arising from these Terms shall be brought exclusively in the courts of Baghdad.</p>

        <h2 id="changes">12. Changes to Terms</h2>
        <p>We may modify these Terms at any time. Material changes will be communicated via the platform or email. Continued use after changes take effect constitutes acceptance of the modified Terms.</p>

        <h2 id="contact">13. Contact</h2>
        <p>
          For questions about these Terms, contact us at <a href="mailto:legal@zafir360.com">legal@zafir360.com</a> or visit our{" "}
          <Link href={`/${lang}/contact-us`}>Contact Us</Link> page.
        </p>

        <ArabicNote doc="Terms and Conditions" />
      </PolicyLayout>
      <LegalCta />
    </div>
  );
}
