import AgreementDocument from "@/components/Front-Pages/Legal/AgreementDocument";
import AgreementHero from "@/components/Front-Pages/Legal/AgreementHero";
import ArabicNote from "@/components/Front-Pages/Legal/ArabicNote";
import LegalCta from "@/components/Front-Pages/Legal/LegalCta";

interface BuyerAgreementViewProps {
  lang: string;
}

export function BuyerAgreementView({ lang }: BuyerAgreementViewProps) {
  return (
    <div>
      <AgreementHero lang={lang} title="Buyer Agreement" updated="July 1, 2026" party="Buyer" />
      <AgreementDocument>
        <p className="text-[1.02rem]! text-[#332F27]!">
          This Buyer Agreement ("Agreement") governs your use of the Zafir360 platform as a buyer, whether purchasing from the retail marketplace, wholesale marketplace, or through Request for Quote (RFQ). By placing an order on Zafir360, you agree to these terms.
        </p>

        <h2>1. Account Registration</h2>
        <p>To purchase on Zafir360, you must register an account and provide accurate information. You are responsible for maintaining the confidentiality of your account. Wholesale buyers may be required to complete additional KYB (Know Your Business) verification.</p>

        <h2>2. Placing Orders</h2>
        <p>By placing an order on the platform, you agree that:</p>
        <ul>
          <li>You have the legal capacity and authority to make the purchase</li>
          <li>The information provided for the order is accurate and complete</li>
          <li>You are responsible for ensuring the product is legal to import or possess in Iraq</li>
          <li>For wholesale orders, the MOQ, pricing, and terms stated in the accepted quote are binding</li>
        </ul>

        <h2>3. Payment Obligations</h2>
        <p>As a buyer, you agree to:</p>
        <ul>
          <li>Pay the full amount for orders placed, including any applicable delivery fees</li>
          <li>For marketplace orders, payment is due at checkout via the selected payment method</li>
          <li>For wholesale orders using escrow, deposit funds into escrow within the specified timeframe</li>
          <li>Not engage in fraudulent payment activity or chargeback abuse</li>
        </ul>

        <h2>4. Receipt and Inspection</h2>
        <p>Upon receiving your order:</p>
        <ul>
          <li>Inspect the items promptly upon delivery</li>
          <li>For marketplace orders, confirm delivery through the platform</li>
          <li>For wholesale orders, inspect goods within the inspection period specified in the escrow terms</li>
          <li>Report any discrepancies, damage, or quality issues within the applicable window</li>
        </ul>

        <h2>5. Returns and Refunds</h2>
        <p>Return and refund policies vary by seller and product type:</p>
        <ul>
          <li>Each listing displays the applicable return policy before purchase</li>
          <li>Items that arrive damaged, incorrect, or not as described are covered by Buyer Protection</li>
          <li>Return requests must be initiated through the platform's order history page</li>
          <li>Wholesale orders are subject to the inspection and dispute process defined in the escrow terms</li>
          <li>Zafir360 may facilitate dispute resolution between buyers and sellers</li>
        </ul>

        <h2>6. Buyer Conduct</h2>
        <p>As a buyer, you agree not to:</p>
        <ul>
          <li>Submit false or fraudulent claims or disputes</li>
          <li>Abuse the return or refund policy</li>
          <li>Use the platform to facilitate transactions outside the platform</li>
          <li>Harass sellers, suppliers, or Zafir360 staff</li>
          <li>Create multiple accounts to circumvent platform policies</li>
        </ul>

        <h2>7. Wholesale Buyer Terms</h2>
        <p>Buyers using the wholesale marketplace agree to additional terms:</p>
        <ul>
          <li>RFQs are binding when accepted by a supplier — cancellation may result in fees</li>
          <li>Buyers must complete KYB verification for wholesale access</li>
          <li>Wholesale minimum order quantities (MOQs) are non-negotiable unless agreed with the supplier</li>
          <li>Buyers are responsible for import duties, customs clearance, and associated costs</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>Zafir360 acts as a marketplace facilitator and is not liable for the quality, safety, or legality of products sold by third-party sellers and suppliers. Our liability is limited as set forth in the Terms and Conditions. Buyer Protection provisions apply as described on the Trust &amp; Safety page.</p>

        <h2>9. Dispute Resolution</h2>
        <p>Disputes with sellers or suppliers should first be raised through the platform's dispute resolution process. Unresolved disputes may be escalated to Zafir360 mediation. Legal disputes are governed by Iraqi law and resolved in Baghdad courts.</p>

        <h2>10. Modifications</h2>
        <p>Zafir360 may modify this Agreement with notice. Continued use of the platform as a buyer after changes take effect constitutes acceptance of the modified terms.</p>

        <ArabicNote doc="Buyer Agreement" />
      </AgreementDocument>
      <LegalCta />
    </div>
  );
}
