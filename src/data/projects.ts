export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: "residential" | "commercial";
  status: "sold" | "leased" | "completed";
  location: string;
  image: string;
  images: string[];
  featured: boolean;
  specifications: {
    area: string;
    bedrooms?: number;
    bathrooms?: number;
    floors?: number;
    yearCompleted: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Lekki Oceanview Residence",
    description: "Luxury 5-bedroom waterfront villa with panoramic ocean views",
    fullDescription: "An exquisite waterfront property featuring contemporary architecture, infinity pool, smart home technology, and private beach access. This masterpiece combines luxury living with sustainable design principles.",
    category: "residential",
    status: "sold",
    location: "Lekki Phase 1, Lagos",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    featured: true,
    specifications: {
      area: "850 sqm",
      bedrooms: 5,
      bathrooms: 6,
      floors: 3,
      yearCompleted: "2023"
    }
  },
  {
    id: "2",
    title: "Victoria Island Corporate Tower",
    description: "Premium Grade A office complex in the heart of Lagos business district",
    fullDescription: "A state-of-the-art commercial development featuring flexible floor plates, advanced building management systems, and LEED certification. Perfect for multinational corporations seeking premium office space.",
    category: "commercial",
    status: "leased",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ],
    featured: true,
    specifications: {
      area: "15,000 sqm",
      floors: 18,
      yearCompleted: "2022"
    }
  },
  {
    id: "3",
    title: "Ikoyi Garden Estate",
    description: "Exclusive gated community with 12 premium detached homes",
    fullDescription: "A carefully curated residential development offering privacy, security, and luxury. Each home features custom finishes, private gardens, and access to shared amenities including a clubhouse and tennis courts.",
    category: "residential",
    status: "completed",
    location: "Ikoyi, Lagos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    featured: true,
    specifications: {
      area: "600 sqm per unit",
      bedrooms: 4,
      bathrooms: 5,
      floors: 2,
      yearCompleted: "2023"
    }
  },
  {
    id: "4",
    title: "Abuja Retail Plaza",
    description: "Modern shopping complex with mixed-use development potential",
    fullDescription: "Strategic retail development in Abuja's growing commercial corridor. Features include anchor tenant spaces, boutique retail units, food court, and underground parking.",
    category: "commercial",
    status: "completed",
    location: "Wuse 2, Abuja",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    ],
    featured: false,
    specifications: {
      area: "8,500 sqm",
      floors: 4,
      yearCompleted: "2021"
    }
  },
  {
    id: "5",
    title: "Banana Island Penthouse",
    description: "Ultra-luxury penthouse with private rooftop terrace",
    fullDescription: "The pinnacle of Lagos luxury living. This penthouse spans the top two floors with 360-degree views, private elevator access, wine cellar, and dedicated concierge services.",
    category: "residential",
    status: "sold",
    location: "Banana Island, Lagos",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    ],
    featured: false,
    specifications: {
      area: "1,200 sqm",
      bedrooms: 6,
      bathrooms: 7,
      floors: 2,
      yearCompleted: "2024"
    }
  },
  {
    id: "6",
    title: "Port Harcourt Business Hub",
    description: "Modern co-working and office space in the oil capital",
    fullDescription: "A flexible workspace solution designed for the modern business. Features hot desks, private offices, meeting rooms, and event spaces with 24/7 access and comprehensive business support services.",
    category: "commercial",
    status: "leased",
    location: "GRA Phase 2, Port Harcourt",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ],
    featured: false,
    specifications: {
      area: "3,200 sqm",
      floors: 5,
      yearCompleted: "2023"
    }
  }
];

export const getProjects = () => projects;
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getProjectsByCategory = (category: "residential" | "commercial") => 
  projects.filter(p => p.category === category);
