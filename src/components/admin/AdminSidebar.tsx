import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  MessageSquare, 
  TrendingUp, 
  Leaf, 
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/admin/projects", icon: Building2, label: "Real Estate Projects" },
  { path: "/admin/requests", icon: MessageSquare, label: "Property Requests" },
  { path: "/admin/trends", icon: TrendingUp, label: "Market Trends" },
  { path: "/admin/agriculture", icon: Leaf, label: "Agriculture Projects" },
];

export function AdminSidebar() {
  const location = useLocation();
  const { logout } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("admin-sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("admin-sidebar-collapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-card border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={cn("border-b border-border", isCollapsed ? "p-3" : "p-6")}>
            <Link to="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              {!isCollapsed && (
                <div>
                  <h1 className="font-bold text-lg">Bunian Admin</h1>
                  <p className="text-xs text-muted-foreground">Management Panel</p>
                </div>
              )}
            </Link>
          </div>

          {/* Collapse Toggle - Desktop only */}
          <div className="hidden lg:flex justify-end p-2 border-b border-border">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className={cn("flex-1 space-y-1", isCollapsed ? "p-2" : "p-4")}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  title={isCollapsed ? item.label : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-lg transition-colors",
                    isCollapsed ? "px-3 py-3 justify-center" : "px-4 py-3",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className={cn("border-t border-border space-y-2", isCollapsed ? "p-2" : "p-4")}>
            <Link 
              to="/" 
              title={isCollapsed ? "View Website" : undefined}
              className={cn(
                "flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors",
                isCollapsed ? "px-3 py-2 justify-center" : "px-4 py-2"
              )}
            >
              {isCollapsed ? "→" : "View Website →"}
            </Link>
            <Button 
              variant="ghost" 
              title={isCollapsed ? "Logout" : undefined}
              className={cn(
                "w-full text-destructive hover:text-destructive hover:bg-destructive/10",
                isCollapsed ? "justify-center px-0" : "justify-start"
              )}
              onClick={logout}
            >
              <LogOut className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && <span className="ml-3">Logout</span>}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
