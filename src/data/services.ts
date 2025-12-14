import { Building2, Hammer, Key, Home, Users, TrendingUp, Leaf, Warehouse, Truck } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "real-estate" | "investment" | "agriculture";
}

export const realEstateServices: Service[] = [
  {
    id: "construction",
    title: "Construction",
    description: "End-to-end construction services from groundbreaking to handover, delivering quality builds on time and within budget.",
    icon: "Building2",
    category: "real-estate"
  },
  {
    id: "renovation",
    title: "Renovation",
    description: "Transform existing spaces with our expert renovation services, breathing new life into residential and commercial properties.",
    icon: "Hammer",
    category: "real-estate"
  },
  {
    id: "acquisition",
    title: "Property Acquisition",
    description: "Strategic property sourcing and acquisition support to help you find the perfect investment or home.",
    icon: "Key",
    category: "real-estate"
  },
  {
    id: "leasing",
    title: "Leasing & Rentals",
    description: "Comprehensive property management and leasing services for landlords and tenants alike.",
    icon: "Home",
    category: "real-estate"
  },
  {
    id: "consultation",
    title: "Consultation",
    description: "Expert real estate advisory services to guide your property decisions with market intelligence and strategic insights.",
    icon: "Users",
    category: "real-estate"
  },
  {
    id: "evaluation",
    title: "Market Evaluation",
    description: "Accurate property valuations and market analysis to ensure you make informed investment decisions.",
    icon: "TrendingUp",
    category: "real-estate"
  }
];

export const agricultureServices: Service[] = [
  {
    id: "crop-farming",
    title: "Crop Farming",
    description: "Large-scale sustainable crop production using modern agricultural techniques and best practices.",
    icon: "Leaf",
    category: "agriculture"
  },
  {
    id: "livestock",
    title: "Livestock",
    description: "Quality livestock farming and animal husbandry for sustainable protein production.",
    icon: "Warehouse",
    category: "agriculture"
  },
  {
    id: "processing",
    title: "Processing & Distribution",
    description: "Value-added processing and efficient distribution networks for agricultural products.",
    icon: "Truck",
    category: "agriculture"
  }
];

export const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We begin with a thorough understanding of your needs, preferences, and goals."
  },
  {
    step: 2,
    title: "Market Analysis",
    description: "Our team conducts comprehensive research to identify the best opportunities."
  },
  {
    step: 3,
    title: "Property Matching",
    description: "We present carefully curated options that align with your requirements."
  },
  {
    step: 4,
    title: "Due Diligence",
    description: "Thorough verification and legal checks to ensure a secure transaction."
  },
  {
    step: 5,
    title: "Seamless Closing",
    description: "We handle all documentation and processes for a smooth handover."
  }
];
