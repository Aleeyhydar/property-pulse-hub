import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StatCard } from "@/components/cards/StatCard";
import { AgricultureContactForm } from "@/components/forms/AgricultureContactForm";
import { Button } from "@/components/ui/button";
import { agricultureServices } from "@/data/services";
import { Leaf, TrendingUp, Shield, Users, Truck, Award, ChevronLeft, ChevronRight } from "lucide-react";

const agricultureProjects = [
  { id: "1", title: "Kaduna Rice Farm", type: "Crop Farming", status: "Active", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80", description: "500-hectare integrated rice farming operation." },
  { id: "2", title: "Oyo Poultry Complex", type: "Livestock", status: "Active", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", description: "Modern poultry facility with 50,000 bird capacity." },
  { id: "3", title: "Plateau Greenhouse", type: "Processing", status: "Completed", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", description: "Climate-controlled greenhouse for vegetables." },
];

const whyChooseUs = [
  { icon: Leaf, title: "Sustainable Practices", description: "Environmentally responsible farming methods that preserve soil health and biodiversity." },
  { icon: TrendingUp, title: "High Yield Focus", description: "Modern techniques and technology to maximize agricultural output and profitability." },
  { icon: Shield, title: "Quality Assurance", description: "Rigorous quality control from farm to market ensuring premium produce." },
  { icon: Users, title: "Expert Team", description: "Experienced agronomists and farm managers with decades of combined expertise." },
  { icon: Truck, title: "End-to-End Supply", description: "Complete value chain management from production to distribution." },
  { icon: Award, title: "Certified Standards", description: "Compliance with international agricultural and food safety standards." },
];

const ITEMS_PER_PAGE = 6;

const Agriculture = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(agricultureProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = agricultureProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80" alt="Agriculture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="container-wide relative z-10 text-center text-white py-20">
          <p className="text-primary-foreground/80 font-medium mb-4">Agriculture Division</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Growing Nigeria's Future</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Sustainable agricultural ventures driving food security and economic growth.</p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader subtitle="What We Do" title="Agricultural Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agricultureServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader 
            subtitle="Why Partner With Us" 
            title="Excellence in Agriculture" 
            description="We combine traditional farming wisdom with modern innovation to deliver exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 rounded-xl bg-card border border-border hover-lift">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader subtitle="Our Operations" title="Agriculture Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => (
              <div key={project.id} className="rounded-xl overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">{project.type}</span>
                  <h3 className="font-semibold text-lg mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-gradient-to-br from-secondary to-secondary/80 text-white">
        <div className="container-wide">
          <SectionHeader title="Our Impact" className="text-white" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={2500} label="Hectares Cultivated" suffix="+" />
            <StatCard value={12} label="Years in Agriculture" />
            <StatCard value={500} label="Jobs Created" suffix="+" />
            <StatCard value={25000} label="Tons Annual Output" suffix="+" />
          </div>
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader 
            subtitle="Get Started" 
            title="Partner With Us" 
            description="Interested in agricultural investment or partnership opportunities? Fill out the form below and our team will get back to you."
          />
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <AgricultureContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agriculture;
