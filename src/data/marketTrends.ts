export interface MarketTrend {
  trendingAreas: string[];
  mostRequestedType: string;
  averageBudget: {
    min: string;
    max: string;
    trend: "up" | "stable" | "down";
  };
  lastUpdated: string;
}

export const marketTrends: MarketTrend = {
  trendingAreas: [
    "Lekki Phase 1",
    "Victoria Island",
    "Ikoyi",
    "Banana Island",
    "Ikeja GRA"
  ],
  mostRequestedType: "3-4 Bedroom Apartments",
  averageBudget: {
    min: "₦80M",
    max: "₦250M",
    trend: "up"
  },
  lastUpdated: "December 2024"
};

export const getMarketTrends = () => marketTrends;
