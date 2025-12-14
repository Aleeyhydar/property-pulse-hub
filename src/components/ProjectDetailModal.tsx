import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, BedDouble, Bath, Building, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusColors = {
  sold: "bg-green-500/10 text-green-600 border-green-500/20",
  leased: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  completed: "bg-primary/10 text-primary border-primary/20",
};

export const ProjectDetailModal = ({ project, open, onOpenChange }: ProjectDetailModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <Badge
              variant="outline"
              className={cn("capitalize shrink-0", statusColors[project.status])}
            >
              {project.status}
            </Badge>
          </div>
        </DialogHeader>

        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={project.images[selectedImage]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          {project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-colors",
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground/30"
                  )}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{project.location}</span>
        </div>

        {/* Description */}
        <p className="text-foreground leading-relaxed">
          {project.fullDescription}
        </p>

        {/* Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Area</p>
              <p className="font-medium text-sm">{project.specifications.area}</p>
            </div>
          </div>
          {project.specifications.bedrooms && (
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Bedrooms</p>
                <p className="font-medium text-sm">{project.specifications.bedrooms}</p>
              </div>
            </div>
          )}
          {project.specifications.bathrooms && (
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Bathrooms</p>
                <p className="font-medium text-sm">{project.specifications.bathrooms}</p>
              </div>
            </div>
          )}
          {project.specifications.floors && (
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Floors</p>
                <p className="font-medium text-sm">{project.specifications.floors}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Completed</p>
              <p className="font-medium text-sm">{project.specifications.yearCompleted}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
