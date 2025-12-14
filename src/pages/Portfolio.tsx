import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Portfolio</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of successful real estate projects across Nigeria.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-6",
                  activeFilter !== filter.value && "hover:bg-muted"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </Layout>
  );
};

export default Portfolio;
