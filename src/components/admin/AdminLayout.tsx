import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { AdminSidebar } from "./AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function AdminLayout({ children, title, description }: AdminLayoutProps) {
  const { isAuthenticated } = useAdmin();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      
      <main className="lg:ml-64 min-h-screen">
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
