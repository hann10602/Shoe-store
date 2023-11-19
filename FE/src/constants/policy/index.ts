export type TermType = {
  id: number;
  title: string;
  code: string;
  content: string;
  isOpen: boolean;
};

export const terms: TermType[] = [
  {
    id: 1,
    title: "Privacy Policy",
    code: "policy1",
    content:
      "At shoe store, we prioritize your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information. We only gather data that you willingly provide, such as your name, email address, shipping details, and payment information, and we use this information solely for order processing, delivery, and customer service purposes. Rest assured, we implement robust security measures to prevent unauthorized access, loss, or misuse of your personal data. We never share your information with third parties without your explicit consent. Your trust is paramount, and we're committed to ensuring a secure and transparent online shopping experience.",
    isOpen: false,
  },
  {
    id: 2,
    title: " Shipping and Delivery",
    code: "policy2",
    content:
      "We understand the importance of timely delivery. Our Shipping and Delivery policy provides insights into estimated delivery times, associated costs, and the overall process. We strive for efficient order processing and prompt shipment to make sure you receive your purchases within the stipulated time frame. For detailed information on our shipping procedures and terms, please refer to this policy.",
    isOpen: false,
  },
  {
    id: 3,
    title: "Returns and Exchanges",
    code: "policy3",
    content:
      "Customer satisfaction is our priority. Our Returns and Exchanges policy is designed to guide you through the process of returning or exchanging items. It outlines eligibility criteria, timeframes, and any applicable fees. If, for any reason, you are not satisfied with your purchase, this policy ensures a hassle-free and fair resolution process.",
    isOpen: false,
  },
  {
    id: 4,
    title: "Product Quality Guarantee",
    code: "policy4",
    content:
    "We take pride in the quality of our products. Our Product Quality Guarantee demonstrates our commitment to maintaining high standards. This policy outlines any warranties or guarantees associated with our products, assuring you of our dedication to delivering items that meet or exceed your expectations.",
    isOpen: false,
  },
  {
    id: 5,
    title: "Payment Information Security",
    code: "policy5",
    content:
    "Security is paramount in financial transactions. Our Payment Information Security policy details the accepted payment methods, encryption protocols, and additional security measures in place to safeguard your payment information. We want you to feel confident that your financial transactions with us are secure.",
    isOpen: false,
  },
  {
    id: 6,
    title: "User Accounts and Registration",
    code: "policy6",
    content:
    "Enhance your shopping experience by creating a user account. Our User Accounts and Registration policy explains the account creation process, the information collected during registration, and how we manage user accounts. Security measures are in place to ensure your account is protected and your interactions with us are personalized.",
    isOpen: false,
  },
  {
    id: 7,
    title: "Returns and Exchanges",
    code: "policy7",
    content:
      "Our returns and exchanges policy explains the process for returning or exchanging products, including eligibility criteria, timeframes, and any associated fees. We want you to be satisfied with your purchase, and this policy provides guidance on how to handle returns and exchanges.",
    isOpen: false,
  },
  {
    id: 8,
    title: "Product Quality and Guarantee",
    code: "policy8",
    content:
      "We stand behind the quality of our products. The product quality and guarantee section outlines the standards we maintain and any warranties or guarantees provided. This helps customers understand our commitment to delivering high-quality items.",
    isOpen: false,
  },
  {
    id: 9,
    title: "Payment Information",
    code: "policy9",
    content:
      "Our payment information policy ensures the security of your financial transactions. We may detail the accepted payment methods, encryption protocols, and any additional security measures in place to protect your payment information.",
    isOpen: false,
  },
];
