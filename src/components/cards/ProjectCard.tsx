import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const statusColors = {
  sold: "bg-green-500/10 text-green-600 border-green-500/20",
  leased: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  completed: "bg-primary/10 text-primary border-primary/20",
};

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <Badge
          variant="outline"
          className={cn(
            "absolute top-4 right-4 capitalize",
            statusColors[project.status]
          )}
        >
          {project.status}
        </Badge>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4" />
          <span>{project.location}</span>
        </div>
      </div>
    </div>
  );
};
