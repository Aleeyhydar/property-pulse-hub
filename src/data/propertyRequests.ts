export interface PropertyRequest {
  id: string;
  propertyType: string;
  location: string;
  budget: string;
  purpose: "buy" | "lease";
  notes: string;
  name: string;
  email: string;
  phone: string;
  status: "pending" | "handled" | "archived";
  createdAt: string;
}

// Initial mock data
export const propertyRequests: PropertyRequest[] = [
  {
    id: "1",
    propertyType: "3-Bedroom Apartment",
    location: "Lekki Phase 1",
    budget: "₦80,000,000 - ₦120,000,000",
    purpose: "buy",
    notes: "Looking for a modern apartment with ocean view. Preferably in a gated community.",
    name: "Chukwuemeka Okafor",
    email: "c.okafor@email.com",
    phone: "+234 801 234 5678",
    status: "pending",
    createdAt: "2024-12-10"
  },
  {
    id: "2",
    propertyType: "Commercial Office Space",
    location: "Victoria Island",
    budget: "₦15,000,000/year",
    purpose: "lease",
    notes: "Need 500sqm office space for tech startup. Open floor plan preferred.",
    name: "Adaeze Nwachukwu",
    email: "adaeze.n@techcorp.ng",
    phone: "+234 802 345 6789",
    status: "pending",
    createdAt: "2024-12-08"
  },
  {
    id: "3",
    propertyType: "5-Bedroom Duplex",
    location: "Ikoyi",
    budget: "₦200,000,000 - ₦350,000,000",
    purpose: "buy",
    notes: "Executive home with pool and garden. Diplomatic zone preferred.",
    name: "Ibrahim Mohammed",
    email: "i.mohammed@diplo.gov",
    phone: "+234 803 456 7890",
    status: "handled",
    createdAt: "2024-12-05"
  },
  {
    id: "4",
    propertyType: "Warehouse",
    location: "Apapa",
    budget: "₦25,000,000/year",
    purpose: "lease",
    notes: "Logistics company needs 2000sqm warehouse near port.",
    name: "Oluwaseun Adeyemi",
    email: "olu@logisticsng.com",
    phone: "+234 804 567 8901",
    status: "pending",
    createdAt: "2024-12-12"
  }
];

export const getPropertyRequests = () => propertyRequests;
export const getPendingRequests = () => propertyRequests.filter(r => r.status === "pending");
export const getHandledRequests = () => propertyRequests.filter(r => r.status === "handled");
