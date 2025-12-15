export interface AgricultureProject {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  type: "crop" | "livestock" | "processing";
  status: "active" | "completed" | "planned";
  location: string;
  image: string;
  images: string[];
  featured: boolean;
  specifications: {
    area?: string;
    capacity?: string;
    output?: string;
    yearStarted: string;
  };
}

export const agricultureProjects: AgricultureProject[] = [
  {
    id: "1",
    title: "Kaduna Rice Farm",
    description: "500-hectare integrated rice farming operation with modern irrigation systems",
    fullDescription: "Our flagship rice production facility utilizing precision agriculture techniques, mechanized harvesting, and sustainable water management. The farm produces high-quality paddy rice for both domestic consumption and export markets.",
    type: "crop",
    status: "active",
    location: "Kaduna State",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80"
    ],
    featured: true,
    specifications: {
      area: "500 hectares",
      output: "4,000 tons/year",
      yearStarted: "2019"
    }
  },
  {
    id: "2",
    title: "Oyo Poultry Complex",
    description: "Modern poultry facility with 50,000 bird capacity for egg and meat production",
    fullDescription: "State-of-the-art poultry farm featuring climate-controlled housing, automated feeding systems, and integrated processing facilities. We supply major retailers across the Southwest region.",
    type: "livestock",
    status: "active",
    location: "Oyo State",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80"
    ],
    featured: true,
    specifications: {
      capacity: "50,000 birds",
      output: "2M eggs/month",
      yearStarted: "2020"
    }
  },
  {
    id: "3",
    title: "Plateau Greenhouse Project",
    description: "Climate-controlled greenhouse for year-round vegetable production",
    fullDescription: "Advanced greenhouse facility producing premium vegetables including tomatoes, peppers, and leafy greens. The controlled environment ensures consistent quality and year-round availability.",
    type: "crop",
    status: "completed",
    location: "Plateau State",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
    ],
    featured: true,
    specifications: {
      area: "10 hectares",
      output: "500 tons/year",
      yearStarted: "2021"
    }
  },
  {
    id: "4",
    title: "Niger Cassava Processing Plant",
    description: "Industrial cassava processing facility for flour and starch production",
    fullDescription: "Modern processing plant that transforms raw cassava into high-quality flour, starch, and ethanol. The facility supports over 2,000 local farmers through our outgrower scheme.",
    type: "processing",
    status: "active",
    location: "Niger State",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
    ],
    featured: false,
    specifications: {
      capacity: "100 tons/day",
      output: "30,000 tons/year",
      yearStarted: "2022"
    }
  }
];

export const getAgricultureProjects = () => agricultureProjects;
export const getFeaturedAgricultureProjects = () => agricultureProjects.filter(p => p.featured);
export const getAgricultureProjectById = (id: string) => agricultureProjects.find(p => p.id === id);
