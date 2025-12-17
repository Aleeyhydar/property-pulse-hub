import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { PropertyRequestModal } from "@/components/PropertyRequestModal";

import { MarketDashboard } from "@/components/MarketDashboard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

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

      {/* About Teaser Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2">About Bunian</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Trusted Partner in Property & Agriculture
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                With over {companyInfo.stats.yearsExperience} years of experience, Bunian has established itself as a leader in premium real estate development, sustainable agriculture, and strategic investment advisory across Nigeria.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-3xl font-bold text-primary">{companyInfo.stats.projectsCompleted}+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{companyInfo.stats.satisfiedClients}+</p>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Modern building architecture"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">{companyInfo.stats.yearsExperience}+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
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
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80">
        <div className="container-wide">
          <SectionHeader
            title="Why Choose Bunian?"
            description="We deliver excellence through expertise, transparency, and dedication."
            className="text-primary-foreground [&_p]:text-primary-foreground/80"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Trusted Expertise</h3>
              <p className="text-primary-foreground/70 text-sm">Decades of experience in Nigerian real estate with proven track record.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Tailored Solutions</h3>
              <p className="text-primary-foreground/70 text-sm">Personalized service to match your unique property and investment goals.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Market Insights</h3>
              <p className="text-primary-foreground/70 text-sm">Real-time market intelligence to help you make informed decisions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">End-to-End Support</h3>
              <p className="text-primary-foreground/70 text-sm">From search to settlement, we guide you through every step.</p>
            </div>
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
