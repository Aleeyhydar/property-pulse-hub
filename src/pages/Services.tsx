import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { realEstateServices } from "@/data/services";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Real Estate Solutions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From construction to consultation, we provide end-to-end services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            subtitle="Real Estate"
            title="Property Services"
            description="Full-spectrum real estate services for residential and commercial clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Advisory */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/70 font-medium text-sm uppercase tracking-wider mb-3">
              Advisory
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment & Advisory Services</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our investment advisory team provides strategic guidance to help you identify and capitalize on real estate opportunities. We offer market analysis, investment structuring, and portfolio management to maximize your returns.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            subtitle="How We Work"
            title="Our Process"
            description="A streamlined approach to deliver exceptional results."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our team.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
