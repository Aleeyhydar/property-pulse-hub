export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Olumide Adeyemi",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in real estate development, Olumide leads Bunian's strategic vision and growth initiatives."
  },
  {
    id: "2",
    name: "Amina Bello",
    role: "Director of Operations",
    bio: "Amina oversees all operational aspects of Bunian, ensuring excellence in project delivery and client satisfaction."
  },
  {
    id: "3",
    name: "Chukwuemeka Obi",
    role: "Head of Real Estate",
    bio: "A seasoned real estate professional, Chukwuemeka manages our property portfolio and client acquisition strategies."
  },
  {
    id: "4",
    name: "Fatima Suleiman",
    role: "Head of Agriculture",
    bio: "Fatima brings agricultural expertise and sustainable farming practices to our agribusiness ventures."
  },
  {
    id: "5",
    name: "David Okafor",
    role: "Investment Advisor",
    bio: "David provides strategic investment guidance, helping clients maximize returns on their property investments."
  },
  {
    id: "6",
    name: "Ngozi Eze",
    role: "Client Relations Manager",
    bio: "Ngozi ensures every client receives personalized attention and exceptional service throughout their journey."
  }
];

export const getTeamMembers = () => teamMembers;
