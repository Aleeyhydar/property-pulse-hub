import { Building2, Hammer, Key, Home, Users, TrendingUp, Leaf, Warehouse, Truck, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Hammer,
  Key,
  Home,
  Users,
  TrendingUp,
  Leaf,
  Warehouse,
  Truck,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  const IconComponent = iconMap[icon] || Building2;

  return (
    <div
      className={cn(
        "group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover-lift",
        className
      )}
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};
