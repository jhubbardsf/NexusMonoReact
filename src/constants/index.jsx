import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "FEATURES", href: "#" },
  { label: "PROJECT", href: "#" },
  { label: "RESOURCES", href: "#" },
  { label: "ABOUT", href: "#" },
];

export const testimonials = [
  {
    user: "Karan Palan",
    company: "CTO and co-founder",
    image: "https://media.licdn.com/dms/image/D5603AQH1ct3NgdBq1A/profile-displayphoto-shrink_200_200/0/1712770824512?e=1718236800&v=beta&t=R15Ww1sTCQLORPICjbxr_qKtUX6Md_uJEGcU42iJ3tQ", // Use a placeholder image URL
    linkedin: "https://www.linkedin.com/in/karan-palan-476472289/", 
    text: "I'm CTO, Bitch !",
  },
  {
    user: "Krish Gupta",
    company: "CEO and co-founder",
    image: "https://media.licdn.com/dms/image/D5635AQFaB5FL4GUqJA/profile-framedphoto-shrink_200_200/0/1706681244607?e=1713567600&v=beta&t=pevyw6JXQISeI58G7idNzrHveBRzuWZsmD6xGAZVVCo", // Use a placeholder image URL
    linkedin: "https://www.linkedin.com/in/krish-gupta-51637b1b8/", 
    text: "I'm CEO, Bitch !",
  },
  {
    user: "Shrawani Wagh",
    company: "COO and co-founder",
    image: "https://media.licdn.com/dms/image/D5635AQELeseuZ6bQLQ/profile-framedphoto-shrink_200_200/0/1709558241121?e=1713567600&v=beta&t=AeMCWKTiCwjvh7NjOD4SQEmwDaRqyrw9yFwqRVftXKU", 
    linkedin: "https://www.linkedin.com/in/shravani-wagh-20a69728a/", 
    text: "Turning chaos into order, with uncompromising precision.",
  },
];



export const features = [
  {
    icon: <PlugZap />,
    text: "In-House Discussion Forum",
    description:
      "The discussion forum enables DAO members to engage in open, transparent discussions about proposals, ideas, and issues. It integrates with the platform's voting system, allowing members to seamlessly transition from discussion to formal proposal submissions.",
  },
  {
    icon: <Fingerprint />,
    text: "Informed Decision-Making",
    description:
      "DAO members who have contributed to the pool can propose investments, providing details such as description, amount (within pool limits), and recipient. Every member has the authority to approve or reject proposals, with each member having a single vote.",
  },
  {
    icon: <ShieldHalf />,
    text: "Transparent Operations",
    description:
      "Proposal owners, having secured approval surpassing rejection, can execute the proposal. This leads to the transfer of the designated amount to the specified recipient. Owners also retain the option to close proposals, whether due to cancellation, publication errors, or to prevent fund disbursement.",
  },
  {
    icon: <BatteryCharging />,
    text: "User agreement for deposit/progress tracking.",
    description:
      "Users agree to terms of service and can deposit collateral, with balances tracked",
  },
  {
    icon: <BotMessageSquare />,
    text: "Collaborative Funding",
    description:
      "Members of a club can contribute to a common fund (pool) by depositing Ethereum, fostering a shared financial resource for investment proposals.",
  },
  {
    icon: <GlobeLock />,
    text: "AI predictive analysis.",
    description:
      "Advanced AI-powered predictive analysis forecasts proposal outcomes based on historical data, community sentiment, and other factors. Predictive insights inform more strategic, data-driven governance decisions.",
  },
];

export const checklistItems = [
  {
    title: "Trusted Platform",
    description:
      "To build a DAO platform that leverages blockchain technology to address trust and security issues.",
  },
  {
    title: "Transparent Governance",
    description:
      "To provide transparent governance through immutable records on the blockchain, allowing stakeholders to verify actions and decisions.",
  },
  {
    title: "Secure Processes",
    description:
      "To minimize the risk of frauds and maintain the integrity of governance processes by encoding rules and protocols into smart contracts.",
  },
  {
    title: "Inclusive Participation:",
    description:
      "To enable inclusive participation by allowing a diverse community of stakeholders to contribute to governance decisions.",
  },
];

export const pricingOptions = [
  {
    title: "What is a DAO?",
    price: "A DAO is an organization governed by blockchain-encoded rules, executed automatically through smart contracts.",
    features: [
      "Transparent and accountable",
      "Decentralized governance",
      "Automated execution",
      "Globally accessible",
    ],
    trialLink: "https://nexusspheredao.netlify.app/",
    trialText: "Start your free trial today!",
  },
  {
    title: "What is DAO governance?",
    price: "It enables decentralized organizations to create and execute secure, transparent, and tamper-proof voting proposals.",
    features: [
      "Off-chain Voting",
      "Weighted Voting",
      "Voting History",
      "Community Engagement",
    ],
    trialLink: "#",
    trialText: "Coming soon!",
  },
];
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
