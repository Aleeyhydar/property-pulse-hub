import { TrendingUp, MapPin, Home, DollarSign, ArrowUp, ArrowRight, ArrowDown } from "lucide-react";
import { marketTrends } from "@/data/marketTrends";

const trendIcons = {
  up: ArrowUp,
  stable: ArrowRight,
  down: ArrowDown,
};

const trendColors = {
  up: "text-green-500",
  stable: "text-muted-foreground",
  down: "text-red-500",
};

const moodColors = {
  bullish: { bg: "bg-green-500", text: "text-green-500" },
  neutral: { bg: "bg-yellow-500", text: "text-yellow-500" },
  bearish: { bg: "bg-red-500", text: "text-red-500" },
};

export const MarketDashboard = () => {
  const TrendIcon = trendIcons[marketTrends.averageBudget.trend];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Trending Areas */}
      <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">Trending Areas</h3>
        </div>
        <ul className="space-y-2">
          {marketTrends.trendingAreas.slice(0, 4).map((area, index) => (
            <li key={area} className="flex items-center gap-2 text-sm">
              <span className="h-5 w-5 rounded bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                {index + 1}
              </span>
              <span className="text-muted-foreground">{area}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Market Mood */}
      <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">Market Mood</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`font-semibold capitalize ${moodColors[marketTrends.marketMood].text}`}>
              {marketTrends.marketMood}
            </span>
            <span className="text-sm text-muted-foreground">{marketTrends.marketMoodValue}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full rounded-full ${moodColors[marketTrends.marketMood].bg} transition-all duration-500`}
              style={{ width: `${marketTrends.marketMoodValue}%` }}
            />
          </div>
        </div>
      </div>

      {/* Most Requested */}
      <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Home className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">Most Requested</h3>
        </div>
        <div className="flex items-center justify-center h-16">
          <span className="text-lg font-medium text-center">
            {marketTrends.mostRequestedType}
          </span>
        </div>
      </div>

      {/* Average Budget */}
      <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">Average Budget</h3>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              {marketTrends.averageBudget.min} - {marketTrends.averageBudget.max}
            </span>
            <TrendIcon className={`h-4 w-4 ${trendColors[marketTrends.averageBudget.trend]}`} />
          </div>
          <p className="text-sm text-muted-foreground">
            Trend: <span className="capitalize">{marketTrends.averageBudget.trend}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
