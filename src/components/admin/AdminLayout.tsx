import { ReactNode, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { AdminSidebar } from "./AdminSidebar";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function AdminLayout({ children, title, description }: AdminLayoutProps) {
  const { isAuthenticated } = useAdmin();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("admin-sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("admin-sidebar-collapsed");
      setIsCollapsed(saved ? JSON.parse(saved) : false);
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Also listen for changes within the same tab
    const interval = setInterval(() => {
      const saved = localStorage.getItem("admin-sidebar-collapsed");
      const current = saved ? JSON.parse(saved) : false;
      if (current !== isCollapsed) {
        setIsCollapsed(current);
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [isCollapsed]);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      
      <main className={cn(
        "min-h-screen transition-all duration-300",
        isCollapsed ? "lg:ml-16" : "lg:ml-64"
      )}>
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8 pt-12 lg:pt-0">
            <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
            {description && (
              <p className="text-muted-foreground mt-1">{description}</p>
            )}
          </div>

          {/* Content */}
          {children}
        </div>
      </main>
    </div>
  );
}
