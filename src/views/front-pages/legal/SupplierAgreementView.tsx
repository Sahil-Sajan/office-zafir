import AgreementDocument from "@/components/Front-Pages/Legal/AgreementDocument";
import AgreementHero from "@/components/Front-Pages/Legal/AgreementHero";
import ArabicNote from "@/components/Front-Pages/Legal/ArabicNote";
import LegalCta from "@/components/Front-Pages/Legal/LegalCta";

interface SupplierAgreementViewProps {
  lang: string;
}

export function SupplierAgreementView({ lang }: SupplierAgreementViewProps) {
  return (
    <div>
      <AgreementHero lang={lang} title="Supplier Agreement" updated="July 1, 2026" party="Supplier" />
      <AgreementDocument>
        <p className="text-[1.02rem]! text-[#332F27]!">
          This Supplier Agreement ("Agreement") governs the relationship between Zafir360 and verified suppliers (including factories and wholesalers) listing products on the Zafir360 wholesale platform. By registering as a supplier, you agree to these terms.
        </p>

        <h2>1. Supplier Verification</h2>
        <p>All suppliers must undergo verification before listing products:</p>
        <ul>
          <li>Submit valid business registration documents and tax identification</li>
          <li>Undergo factory inspection (physical or remote) conducted by Zafir360's verification team</li>
          <li>Provide product samples for quality assessment where applicable</li>
          <li>Maintain valid business licences and comply with all applicable laws in their jurisdiction</li>
          <li>Re-verification may be required periodically</li>
        </ul>

        <h2>2. Product Listings</h2>
        <p>Suppliers agree that all product listings must include:</p>
        <ul>
          <li>Accurate product specifications, materials, and dimensions</li>
          <li>Clear pricing tiers including MOQ-based pricing</li>
          <li>Realistic lead times and production capacity</li>
          <li>Container capacity information for bulk orders</li>
          <li>High-quality product photographs (minimum 5 per product)</li>
          <li>Compliance with Iraqi import regulations and standards</li>
        </ul>

        <h2>3. Wholesale Transactions</h2>
        <p>Wholesale transactions on the platform are governed by the following:</p>
        <ul>
          <li>All wholesale orders are protected by escrow — funds are held until buyer confirms receipt</li>
          <li>Suppliers must honour the pricing, MOQ, and lead time stated in accepted quotes</li>
          <li>Any deviation from quoted terms must be communicated and agreed before fulfilment</li>
          <li>Proforma invoices must match the terms agreed on the platform</li>
        </ul>

        <h2>4. Quality and Compliance</h2>
        <p>Suppliers warrant that:</p>
        <ul>
          <li>All products meet the quality standards represented in listings</li>
          <li>Products comply with Iraqi safety, labelling, and import regulations</li>
          <li>Products are not counterfeit and do not infringe on any intellectual property rights</li>
          <li>Production facilities maintain adequate working conditions and comply with local labour laws</li>
          <li>Any quality disputes will be resolved through Zafir360's dispute resolution process</li>
        </ul>

        <h2>5. Fees and Payments</h2>
        <p>Suppliers are subject to the following financial terms:</p>
        <ul>
          <li>Transaction fees apply to completed wholesale orders as disclosed during onboarding</li>
          <li>Payment is released from escrow upon buyer confirmation of satisfactory receipt</li>
          <li>Letters of Credit (L/C) are supported for high-value container shipments</li>
          <li>Currency conversion fees may apply for cross-border transactions</li>
        </ul>

        <h2>6. Supply Commitments</h2>
        <p>By accepting a wholesale order, suppliers commit to:</p>
        <ul>
          <li>Producing and shipping the order within the agreed lead time</li>
          <li>Using appropriate packaging for international shipment</li>
          <li>Providing shipping documentation (bill of lading, packing list, certificate of origin)</li>
          <li>Notifying the buyer and Zafir360 of any delays immediately</li>
        </ul>

        <h2>7. Termination</h2>
        <p>Zafir360 may suspend or remove a supplier's account for violations including listing inaccuracies, quality failures, fraudulent activity, or breach of this Agreement. Suppliers may terminate this Agreement with 30 days' written notice, subject to fulfilment of all pending orders.</p>

        <h2>8. Relationship</h2>
        <p>Suppliers are independent businesses, not partners, employees, or agents of Zafir360. Suppliers retain full control over their production, pricing, and business operations.</p>

        <h2>9. Dispute Resolution</h2>
        <p>Disputes shall first be resolved through Zafir360's dispute resolution process. Unresolved disputes shall be governed by Iraqi law and resolved in the courts of Baghdad.</p>

        <ArabicNote doc="Supplier Agreement" />
      </AgreementDocument>
      <LegalCta />
    </div>
  );
}
