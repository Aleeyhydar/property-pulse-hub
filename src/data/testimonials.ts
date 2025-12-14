export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  image?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adebayo Johnson",
    role: "CEO",
    company: "TechVentures Nigeria",
    content: "Bunian transformed our vision into reality. Their attention to detail and professionalism in delivering our corporate headquarters exceeded all expectations.",
    rating: 5
  },
  {
    id: "2",
    name: "Chioma Okonkwo",
    role: "Real Estate Investor",
    content: "Working with Bunian on my property portfolio has been exceptional. Their market insights and strategic approach have consistently delivered strong returns.",
    rating: 5
  },
  {
    id: "3",
    name: "Mohammed Ibrahim",
    role: "Managing Director",
    company: "Northern Agro Industries",
    content: "The Bunian team's expertise in both real estate and agriculture made them the perfect partner for our mixed-use development project.",
    rating: 5
  },
  {
    id: "4",
    name: "Folake Adeleke",
    role: "Homeowner",
    content: "From the first consultation to handing over the keys, Bunian made buying my dream home a seamless experience. Highly recommended!",
    rating: 5
  }
];

export const getTestimonials = () => testimonials;
