import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/contexts/AdminContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MessageSquare, TrendingUp, Leaf, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { projects, requests, agriProjects, trends } = useAdmin();
  
  const pendingRequests = requests.filter(r => r.status === "pending").length;
  const handledRequests = requests.filter(r => r.status === "handled").length;

  const stats = [
    {
      title: "Real Estate Projects",
      value: projects.length,
      icon: Building2,
      link: "/admin/projects",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Property Requests",
      value: requests.length,
      icon: MessageSquare,
      link: "/admin/requests",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      title: "Pending Requests",
      value: pendingRequests,
      icon: Clock,
      link: "/admin/requests",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      title: "Agriculture Projects",
      value: agriProjects.length,
      icon: Leaf,
      link: "/admin/agriculture",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
  ];

  return (
    <AdminLayout title="Dashboard" description="Overview of your business metrics">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.link}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Property Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requests.slice(0, 5).map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{request.name}</p>
                    <p className="text-sm text-muted-foreground">{request.propertyType} - {request.location}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    request.status === "pending" 
                      ? "bg-orange-500/10 text-orange-500" 
                      : "bg-green-500/10 text-green-500"
                  }`}>
                    {request.status}
                  </span>
                </div>
              ))}
              <Link to="/admin/requests" className="text-sm text-primary hover:underline block text-center mt-4">
                View all requests →
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Market Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Market Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Market Mood</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    trends.marketMood === "bullish" 
                      ? "bg-green-500/10 text-green-500"
                      : trends.marketMood === "bearish"
                      ? "bg-red-500/10 text-red-500"
                      : "bg-yellow-500/10 text-yellow-500"
                  }`}>
                    {trends.marketMood}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${trends.marketMoodValue}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{trends.marketMoodValue}% positive sentiment</p>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg">
                <span className="text-sm text-muted-foreground">Most Requested</span>
                <p className="font-medium mt-1">{trends.mostRequestedType}</p>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg">
                <span className="text-sm text-muted-foreground">Trending Areas</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {trends.trendingAreas.slice(0, 3).map((area) => (
                    <span key={area} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/admin/trends" className="text-sm text-primary hover:underline block text-center">
                Manage market trends →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card className="bg-green-500/5 border-green-500/20">
          <CardContent className="p-6 flex items-center gap-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{handledRequests}</p>
              <p className="text-sm text-muted-foreground">Requests Handled</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-orange-500/5 border-orange-500/20">
          <CardContent className="p-6 flex items-center gap-4">
            <Clock className="h-10 w-10 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{pendingRequests}</p>
              <p className="text-sm text-muted-foreground">Pending Review</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 flex items-center gap-4">
            <Building2 className="h-10 w-10 text-primary" />
            <div>
              <p className="text-2xl font-bold">{projects.filter(p => p.featured).length}</p>
              <p className="text-sm text-muted-foreground">Featured Projects</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
