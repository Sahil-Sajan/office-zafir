export interface NavItem {
  labelKey: string;
  descKey: string;
  href: string;
  icon: string;
}

export interface NavColumn {
  headingKey: string;
  items: NavItem[];
}

export type NavEntry =
  | { type: "link"; labelKey: string; href: string }
  | { type: "dropdown"; titleKey: string; columns: NavColumn[] };

export const navEntries: NavEntry[] = [
  { type: "link", labelKey: "topnav.features", href: "/features" },
  { type: "link", labelKey: "topnav.categories", href: "/categories" },
  {
    type: "dropdown",
    titleKey: "seller",
    columns: [
      {
        headingKey: "seller.colGetStarted",
        items: [
          { labelKey: "seller.become", descKey: "seller.become.desc", href: "/become-a-seller", icon: "rocket" },
          { labelKey: "seller.benefits", descKey: "seller.benefits.desc", href: "/seller-benefits", icon: "sparkles" },
          { labelKey: "seller.openStore", descKey: "seller.openStore.desc", href: "/open-your-store", icon: "storefront" },
        ],
      },
      {
        headingKey: "seller.colResources",
        items: [
          { labelKey: "seller.pricing", descKey: "seller.pricing.desc", href: "/seller-pricing", icon: "tag" },
          { labelKey: "seller.faq", descKey: "seller.faq.desc", href: "/seller-faq", icon: "question" },
          { labelKey: "seller.successStories", descKey: "seller.successStories.desc", href: "/seller-success-stories", icon: "trophy" },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    titleKey: "supplier",
    columns: [
      {
        headingKey: "supplier.colGetStarted",
        items: [
          { labelKey: "supplier.become", descKey: "supplier.become.desc", href: "/become-a-supplier", icon: "userPlus" },
          { labelKey: "supplier.benefits", descKey: "supplier.benefits.desc", href: "/supplier-benefits", icon: "shieldCheck" },
          { labelKey: "supplier.registration", descKey: "supplier.registration.desc", href: "/supplier-registration", icon: "clipboardList" },
        ],
      },
      {
        headingKey: "supplier.colVerification",
        items: [
          { labelKey: "supplier.howWeVerify", descKey: "supplier.howWeVerify.desc", href: "/how-we-verify-suppliers", icon: "magnifierCheck" },
          { labelKey: "supplier.factoryInspection", descKey: "supplier.factoryInspection.desc", href: "/factory-inspection-process", icon: "building" },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    titleKey: "wholesale",
    columns: [
      {
        headingKey: "wholesale.colMarketplace",
        items: [
          { labelKey: "wholesale.marketplace", descKey: "wholesale.marketplace.desc", href: "/wholesale", icon: "shoppingBag" },
          { labelKey: "wholesale.rfq", descKey: "wholesale.rfq.desc", href: "/request-for-quote", icon: "documentText" },
          { labelKey: "wholesale.bulkOrders", descKey: "wholesale.bulkOrders.desc", href: "/bulk-orders", icon: "cube" },
          { labelKey: "wholesale.moqCalculator", descKey: "wholesale.moqCalculator.desc", href: "/moq-calculator", icon: "tag" },
        ],
      },
      {
        headingKey: "wholesale.colImport",
        items: [
          { labelKey: "wholesale.importTurkey", descKey: "wholesale.importTurkey.desc", href: "/import-from-turkey", icon: "globe" },
          { labelKey: "wholesale.importChina", descKey: "wholesale.importChina.desc", href: "/import-from-china", icon: "globeAlt" },
          { labelKey: "wholesale.containerShipping", descKey: "wholesale.containerShipping.desc", href: "/container-shipping", icon: "truck" },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    titleKey: "help",
    columns: [
      {
        headingKey: "help.colGetHelp",
        items: [
          { labelKey: "help.center", descKey: "help.center.desc", href: "/help-center", icon: "lifebuoy" },
          { labelKey: "help.faq", descKey: "help.faq.desc", href: "/faq", icon: "question" },
          { labelKey: "help.accountHelp", descKey: "help.accountHelp.desc", href: "/account-help", icon: "userPlus" },
          { labelKey: "help.contactSupport", descKey: "help.contactSupport.desc", href: "/contact-support", icon: "rocket" },
        ],
      },
      {
        headingKey: "help.colGuides",
        items: [
          { labelKey: "help.shippingGuide", descKey: "help.shippingGuide.desc", href: "/shipping-guide", icon: "truck" },
          { labelKey: "help.paymentGuide", descKey: "help.paymentGuide.desc", href: "/payment-guide", icon: "tag" },
          { labelKey: "help.returnsGuide", descKey: "help.returnsGuide.desc", href: "/returns-guide", icon: "arrowsExchange" },
        ],
      },
    ],
  },
  { type: "link", labelKey: "topnav.about", href: "/about" },
  { type: "link", labelKey: "topnav.contact", href: "/contact-us" },
];
