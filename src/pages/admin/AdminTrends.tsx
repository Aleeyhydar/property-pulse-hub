import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, TrendingDown, Minus, MapPin, Home, X, Plus } from "lucide-react";
import { MarketTrend } from "@/data/marketTrends";

export default function AdminTrends() {
  const { trends, updateTrends } = useAdmin();
  const { toast } = useToast();
  const [formData, setFormData] = useState<MarketTrend>(trends);
  const [newArea, setNewArea] = useState("");

  const handleSave = () => {
    updateTrends(formData);
    toast({ title: "Market trends updated successfully" });
  };

  const addArea = () => {
    if (newArea.trim() && !formData.trendingAreas.includes(newArea.trim())) {
      setFormData({
        ...formData,
        trendingAreas: [...formData.trendingAreas, newArea.trim()]
      });
      setNewArea("");
    }
  };

  const removeArea = (area: string) => {
    setFormData({
      ...formData,
      trendingAreas: formData.trendingAreas.filter(a => a !== area)
    });
  };

  return (
    <AdminLayout title="Market Trends" description="Update market trend data displayed on the website">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Requested & Budget */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Property Demand
            </CardTitle>
            <CardDescription>Set the most requested property type and budget trends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Most Requested Property Type</Label>
              <Input
                value={formData.mostRequestedType}
                onChange={(e) => setFormData({ ...formData, mostRequestedType: e.target.value })}
                placeholder="e.g., 3-4 Bedroom Apartments"
              />
            </div>

            <div className="space-y-4">
              <Label>Average Budget Range</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Minimum</Label>
                  <Input
                    value={formData.averageBudget.min}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      averageBudget: { ...formData.averageBudget, min: e.target.value }
                    })}
                    placeholder="₦80M"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Maximum</Label>
                  <Input
                    value={formData.averageBudget.max}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      averageBudget: { ...formData.averageBudget, max: e.target.value }
                    })}
                    placeholder="₦250M"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Budget Trend</Label>
              <Select 
                value={formData.averageBudget.trend} 
                onValueChange={(value: "up" | "stable" | "down") => 
                  setFormData({ 
                    ...formData, 
                    averageBudget: { ...formData.averageBudget, trend: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="up">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      Trending Up
                    </span>
                  </SelectItem>
                  <SelectItem value="stable">
                    <span className="flex items-center gap-2">
                      <Minus className="h-4 w-4 text-yellow-500" />
                      Stable
                    </span>
                  </SelectItem>
                  <SelectItem value="down">
                    <span className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      Trending Down
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Trending Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Trending Areas
            </CardTitle>
            <CardDescription>Manage the list of trending locations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={newArea}
                onChange={(e) => setNewArea(e.target.value)}
                placeholder="Add new area..."
                onKeyDown={(e) => e.key === "Enter" && addArea()}
              />
              <Button onClick={addArea} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {formData.trendingAreas.map((area) => (
                <span 
                  key={area}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2"
                >
                  {area}
                  <button 
                    onClick={() => removeArea(area)}
                    className="hover:text-destructive transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <Button size="lg" onClick={handleSave}>
          Save Changes
        </Button>
      </div>

      {/* Preview */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>How the market dashboard will appear on the website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Most Requested</p>
              <p className="font-bold">{formData.mostRequestedType}</p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Budget Range</p>
              <p className="font-bold">{formData.averageBudget.min} - {formData.averageBudget.max}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                {formData.averageBudget.trend === "up" && <TrendingUp className="h-3 w-3 text-green-500" />}
                {formData.averageBudget.trend === "down" && <TrendingDown className="h-3 w-3 text-red-500" />}
                {formData.averageBudget.trend === "stable" && <Minus className="h-3 w-3 text-yellow-500" />}
                {formData.averageBudget.trend}
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Trending Areas</p>
              <p className="font-bold">{formData.trendingAreas.length} locations</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}