export interface MarketTrend {
  trendingAreas: string[];
  marketMood: "bullish" | "neutral" | "bearish";
  marketMoodValue: number; // 0-100
  mostRequestedType: string;
  averageBudget: {
    min: string;
    max: string;
    trend: "up" | "stable" | "down";
  };
  insights: string[];
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
  marketMood: "bullish",
  marketMoodValue: 72,
  mostRequestedType: "3-4 Bedroom Apartments",
  averageBudget: {
    min: "₦80M",
    max: "₦250M",
    trend: "up"
  },
  insights: [
    "Luxury apartments seeing 15% YoY growth",
    "Commercial spaces in VI remain in high demand",
    "New developments in Lekki attracting foreign investors"
  ],
  lastUpdated: "December 2024"
};

export const getMarketTrends = () => marketTrends;
