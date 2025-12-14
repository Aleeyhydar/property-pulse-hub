export const companyInfo = {
  name: "Bunian",
  tagline: "Building Dreams, Growing Futures",
  description: "A premier multi-vertical company focused on Real Estate, Agriculture, and Investment Advisory. We transform visions into reality through excellence, integrity, and innovation.",
  
  contact: {
    address: "15 Victoria Island Drive, Lagos, Nigeria",
    phone: "+234 (0) 123 456 7890",
    email: "info@bunian.com",
    website: "www.bunian.com"
  },
  
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 3:00 PM",
    sunday: "Sunday: Closed"
  },
  
  social: {
    linkedin: "https://linkedin.com/company/bunian",
    twitter: "https://twitter.com/bunian",
    instagram: "https://instagram.com/bunian",
    facebook: "https://facebook.com/bunian"
  },
  
  stats: {
    yearsExperience: 15,
    projectsCompleted: 150,
    satisfiedClients: 500,
    teamMembers: 45
  },
  
  mission: "To deliver exceptional value in real estate, agriculture, and investment advisory through innovative solutions, unwavering integrity, and a commitment to sustainable growth.",
  
  vision: "To be the most trusted multi-vertical company in Africa, setting standards of excellence in every sector we operate.",
  
  values: [
    {
      title: "Excellence",
      description: "We pursue the highest standards in everything we do."
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty and transparency."
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to stay ahead."
    },
    {
      title: "Client Focus",
      description: "Our clients' success is the measure of our success."
    }
  ],
  
  milestones: [
    { year: "2009", title: "Company Founded", description: "Bunian was established with a focus on residential real estate." },
    { year: "2012", title: "Commercial Expansion", description: "Expanded into commercial real estate development." },
    { year: "2015", title: "100 Projects Milestone", description: "Completed our 100th successful project." },
    { year: "2018", title: "Agriculture Division", description: "Launched our agricultural ventures division." },
    { year: "2020", title: "Investment Advisory", description: "Established investment advisory services." },
    { year: "2023", title: "Regional Expansion", description: "Expanded operations to Abuja and Port Harcourt." }
  ]
};

export const getCompanyInfo = () => companyInfo;
