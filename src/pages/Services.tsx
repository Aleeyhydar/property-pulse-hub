import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PenTool, HardHat, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { realEstateServices } from "@/data/services";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="container-wide relative z-10 text-center text-white py-20">
          <p className="text-primary-foreground/80 font-medium mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Comprehensive Real Estate Solutions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
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

      {/* Investment */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/70 font-medium text-sm uppercase tracking-wider mb-3">
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest in Real Estate & Agriculture</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Grow your wealth by investing in our premium real estate developments and sustainable agricultural ventures. We offer secure investment opportunities with competitive returns in Nigeria's thriving property and agribusiness sectors.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Process"
            title="How We Work"
            description="A seamless journey from consultation to completion."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, step: "01", title: "Consult & Assess", desc: "We listen to your needs and evaluate requirements." },
              { icon: PenTool, step: "02", title: "Plan & Design", desc: "Custom strategies and designs tailored for you." },
              { icon: HardHat, step: "03", title: "Build & Manage", desc: "Expert execution with quality at every stage." },
              { icon: CheckCircle, step: "04", title: "Deliver & Support", desc: "Seamless handover with ongoing assistance." },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-background rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
