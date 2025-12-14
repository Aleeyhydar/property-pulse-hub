import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StatCard } from "@/components/cards/StatCard";
import { agricultureServices } from "@/data/services";
import { Link } from "react-router-dom";

const agricultureProjects = [
  { id: "1", title: "Kaduna Rice Farm", type: "Crop Farming", status: "Active", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80", description: "500-hectare integrated rice farming operation." },
  { id: "2", title: "Oyo Poultry Complex", type: "Livestock", status: "Active", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", description: "Modern poultry facility with 50,000 bird capacity." },
  { id: "3", title: "Plateau Greenhouse", type: "Processing", status: "Completed", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", description: "Climate-controlled greenhouse for vegetables." },
];

const Agriculture = () => {
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

      {/* Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader subtitle="Our Operations" title="Agriculture Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agricultureProjects.map((project) => (
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
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <SectionHeader title="Our Impact" className="text-primary-foreground" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={2500} label="Hectares Cultivated" suffix="+" />
            <StatCard value={12} label="Years in Agriculture" />
            <StatCard value={500} label="Jobs Created" suffix="+" />
            <StatCard value={25000} label="Tons Annual Output" suffix="+" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Interested in agricultural investment or partnership opportunities?</p>
          <Button size="lg" asChild><Link to="/contact">Contact Our Team</Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Agriculture;
