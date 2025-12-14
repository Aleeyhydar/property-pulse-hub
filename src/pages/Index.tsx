import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { PropertyRequestModal } from "@/components/PropertyRequestModal";
import { PropertyRequestForm } from "@/components/forms/PropertyRequestForm";
import { MarketDashboard } from "@/components/MarketDashboard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { StatCard } from "@/components/cards/StatCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { realEstateServices } from "@/data/services";
import { getFeaturedProjects, type Project } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { companyInfo } from "@/data/companyInfo";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury real estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        
        <div className="container-wide relative z-10 text-center text-white py-20">
          <p className="text-primary-foreground/80 font-medium mb-4 animate-fade-in-up">
            Real Estate • Agriculture • Investment Advisory
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Building Dreams,<br />Growing Futures
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-delay-1">
            Your trusted partner in premium real estate, sustainable agriculture, and strategic investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button size="lg" onClick={() => setModalOpen(true)} className="text-lg px-8">
              Request a Property
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Request Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Start Your Search"
              title="Find Your Perfect Property"
              description="Tell us what you're looking for and our expert team will match you with the ideal property."
            />
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <PropertyRequestForm embedded />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            subtitle="What We Do"
            title="Our Core Services"
            description="Comprehensive real estate solutions tailored to your needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Dashboard */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader
            subtitle="Market Intelligence"
            title="Real-Time Market Trends"
            description="Stay informed with our latest insights on the Nigerian real estate market."
          />
          <MarketDashboard />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Work"
            title="Featured Projects"
            description="Explore our portfolio of successful real estate developments."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <SectionHeader
            title="Why Choose Bunian?"
            description="Trusted by hundreds of clients across Nigeria."
            className="text-primary-foreground [&_p]:text-primary-foreground/80"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={companyInfo.stats.yearsExperience} label="Years Experience" suffix="+" />
            <StatCard value={companyInfo.stats.projectsCompleted} label="Projects Completed" suffix="+" />
            <StatCard value={companyInfo.stats.satisfiedClients} label="Satisfied Clients" suffix="+" />
            <StatCard value={companyInfo.stats.teamMembers} label="Team Members" suffix="+" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            subtitle="Client Stories"
            title="What Our Clients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your real estate goals.
          </p>
          <Button size="lg" onClick={() => setModalOpen(true)}>
            Request a Property
          </Button>
        </div>
      </section>

      <PropertyRequestModal open={modalOpen} onOpenChange={setModalOpen} />
      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </Layout>
  );
};

export default Index;
