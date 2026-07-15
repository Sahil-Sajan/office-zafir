import AgreementDocument from "@/components/Front-Pages/Legal/AgreementDocument";
import AgreementHero from "@/components/Front-Pages/Legal/AgreementHero";
import ArabicNote from "@/components/Front-Pages/Legal/ArabicNote";
import LegalCta from "@/components/Front-Pages/Legal/LegalCta";

interface SellerAgreementViewProps {
  lang: string;
}

export function SellerAgreementView({ lang }: SellerAgreementViewProps) {
  return (
    <div>
      <AgreementHero lang={lang} title="Seller Agreement" updated="July 1, 2026" party="Seller" />
      <AgreementDocument>
        <p className="text-[1.02rem]! text-[#332F27]!">
          This Seller Agreement ("Agreement") governs your participation as a seller on the Zafir360 marketplace. By registering as a seller and listing products for sale, you agree to the terms and conditions set forth herein.
        </p>

        <h2>1. Seller Eligibility</h2>
        <p>To register as a seller, you must:</p>
        <ul>
          <li>Complete KYC verification with valid government-issued ID</li>
          <li>Provide accurate business information, including business registration if applicable</li>
          <li>Be at least 18 years of age</li>
          <li>Maintain an active account in good standing</li>
        </ul>

        <h2>2. Listing Products</h2>
        <p>As a seller, you agree that:</p>
        <ul>
          <li>All product listings must be accurate, truthful, and comply with Zafir360's listing guidelines</li>
          <li>You have the legal right to sell every product you list</li>
          <li>Products must not infringe on any third-party intellectual property rights</li>
          <li>Prohibited items as defined in Zafir360's Prohibited Items Policy may not be listed</li>
          <li>New listings are subject to review before going live</li>
          <li>Product images, descriptions, and specifications must accurately represent the item</li>
        </ul>

        <h2>3. Commissions and Fees</h2>
        <p>Zafir360 charges commission on each completed sale as follows:</p>
        <ul>
          <li>Commission rates range from 8% to 15% depending on the seller's plan and product category</li>
          <li>Commission is calculated on the sale price excluding delivery fees</li>
          <li>All applicable fees are disclosed before listing via the commission calculator</li>
          <li>Zafir360 may introduce additional service fees with prior notice</li>
        </ul>

        <h2>4. Payouts</h2>
        <p>Seller payouts are processed according to the following terms:</p>
        <ul>
          <li>Payouts are made every 7 days on a rolling basis</li>
          <li>Net earnings equal gross revenue minus commission, delivery fees, refunds, and any adjustments</li>
          <li>Payouts are sent to the seller's registered payout method</li>
          <li>Zafir360 reserves the right to hold payouts during dispute resolution</li>
        </ul>

        <h2>5. Order Fulfillment</h2>
        <p>Sellers are responsible for:</p>
        <ul>
          <li>Fulfilling orders within the stated lead time</li>
          <li>Packaging products appropriately for safe delivery</li>
          <li>Maintaining accurate inventory levels across all SKUs and variants</li>
          <li>Responding to buyer inquiries within 24 hours</li>
          <li>Honouring return and refund policies as stated in the listing</li>
        </ul>

        <h2>6. Performance Standards</h2>
        <p>Sellers are expected to maintain satisfactory performance metrics:</p>
        <ul>
          <li>Order defect rate below 5%</li>
          <li>Shipping on-time rate above 95%</li>
          <li>Customer response rate above 90%</li>
          <li>Accounts falling below these thresholds may be subject to suspension or deactivation</li>
          <li>Performance is publicly displayed via the seller's performance scorecard</li>
        </ul>

        <h2>7. Termination</h2>
        <p>Either party may terminate this Agreement at any time. Upon termination, all outstanding orders must be fulfilled, and pending payouts will be processed according to the payout schedule. Zafir360 may immediately terminate this Agreement if a seller violates these terms or engages in fraudulent activity.</p>

        <h2>8. Relationship</h2>
        <p>Sellers are independent merchants, not employees or agents of Zafir360. This Agreement does not create a partnership, joint venture, or employment relationship. Sellers set their own prices, manage their own inventory, and are responsible for their own tax obligations.</p>

        <h2>9. Dispute Resolution</h2>
        <p>Disputes related to transactions shall be handled through Zafir360's unified dispute resolution process. Other disputes arising from this Agreement shall be resolved through negotiation, then mediation, and finally through the Iraqi courts in Baghdad.</p>

        <h2>10. Modifications</h2>
        <p>Zafir360 may modify this Agreement with 30 days' notice. Continued participation as a seller after the effective date constitutes acceptance of the modified terms.</p>

        <ArabicNote doc="Seller Agreement" />
      </AgreementDocument>
      <LegalCta />
    </div>
  );
}
