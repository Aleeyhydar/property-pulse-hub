import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Project } from "@/data/projects";
import { PropertyRequest, propertyRequests as initialRequests } from "@/data/propertyRequests";
import { MarketTrend, marketTrends as initialTrends } from "@/data/marketTrends";
import { AgricultureProject, agricultureProjects as initialAgriProjects } from "@/data/agricultureProjects";
import { projects as initialProjects } from "@/data/projects";

interface AdminContextType {
  // Auth
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  
  // Projects
  projects: Project[];
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  
  // Property Requests
  requests: PropertyRequest[];
  updateRequestStatus: (id: string, status: PropertyRequest["status"]) => void;
  
  // Market Trends
  trends: MarketTrend;
  updateTrends: (trends: Partial<MarketTrend>) => void;
  
  // Agriculture Projects
  agriProjects: AgricultureProject[];
  addAgriProject: (project: Omit<AgricultureProject, "id">) => void;
  updateAgriProject: (id: string, project: Partial<AgricultureProject>) => void;
  deleteAgriProject: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = {
  email: "admin@bunian.com",
  password: "bunian2024"
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("adminAuth") === "true";
  });
  
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("adminProjects");
    return saved ? JSON.parse(saved) : initialProjects;
  });
  
  const [requests, setRequests] = useState<PropertyRequest[]>(() => {
    const saved = localStorage.getItem("adminRequests");
    return saved ? JSON.parse(saved) : initialRequests;
  });
  
  const [trends, setTrends] = useState<MarketTrend>(() => {
    const saved = localStorage.getItem("adminTrends");
    return saved ? JSON.parse(saved) : initialTrends;
  });
  
  const [agriProjects, setAgriProjects] = useState<AgricultureProject[]>(() => {
    const saved = localStorage.getItem("adminAgriProjects");
    return saved ? JSON.parse(saved) : initialAgriProjects;
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("adminProjects", JSON.stringify(projects));
  }, [projects]);
  
  useEffect(() => {
    localStorage.setItem("adminRequests", JSON.stringify(requests));
  }, [requests]);
  
  useEffect(() => {
    localStorage.setItem("adminTrends", JSON.stringify(trends));
  }, [trends]);
  
  useEffect(() => {
    localStorage.setItem("adminAgriProjects", JSON.stringify(agriProjects));
  }, [agriProjects]);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
  };

  const addProject = (project: Omit<Project, "id">) => {
    const newProject = { ...project, id: Date.now().toString() };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const updateRequestStatus = (id: string, status: PropertyRequest["status"]) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const updateTrends = (updates: Partial<MarketTrend>) => {
    setTrends(prev => ({ ...prev, ...updates, lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }));
  };

  const addAgriProject = (project: Omit<AgricultureProject, "id">) => {
    const newProject = { ...project, id: Date.now().toString() };
    setAgriProjects(prev => [...prev, newProject]);
  };

  const updateAgriProject = (id: string, updates: Partial<AgricultureProject>) => {
    setAgriProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteAgriProject = (id: string) => {
    setAgriProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      projects,
      addProject,
      updateProject,
      deleteProject,
      requests,
      updateRequestStatus,
      trends,
      updateTrends,
      agriProjects,
      addAgriProject,
      updateAgriProject,
      deleteAgriProject
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
