import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TeamCard } from "@/components/cards/TeamCard";
import { StatCard } from "@/components/cards/StatCard";
import { companyInfo } from "@/data/companyInfo";
import { teamMembers } from "@/data/team";
import { Target, Eye, Award, Users, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Bunian headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="container-wide relative z-10 text-center text-white py-20">
          <p className="text-primary-foreground/80 font-medium mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {companyInfo.tagline}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Excellence Since 2009</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {companyInfo.description} For over {companyInfo.stats.yearsExperience} years, we have been at the forefront of real estate development in Nigeria, consistently delivering projects that exceed expectations and create lasting value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">{companyInfo.mission}</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader subtitle="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((value, index) => {
              const icons = [Award, Heart, Lightbulb, Users];
              const Icon = icons[index];
              return (
                <div key={value.title} className="text-center p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader subtitle="Our Journey" title="Milestones" />
          <div className="max-w-3xl mx-auto space-y-8">
            {companyInfo.milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="shrink-0 w-20 text-right">
                  <span className="font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="relative pb-8">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
                  {index < companyInfo.milestones.length - 1 && (
                    <div className="absolute left-[5px] top-5 w-0.5 h-full bg-border" />
                  )}
                  <div className="pl-8">
                    <h4 className="font-semibold mb-1">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-secondary to-secondary/80 text-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={companyInfo.stats.yearsExperience} label="Years Experience" suffix="+" />
            <StatCard value={companyInfo.stats.projectsCompleted} label="Projects Completed" suffix="+" />
            <StatCard value={companyInfo.stats.satisfiedClients} label="Satisfied Clients" suffix="+" />
            <StatCard value={companyInfo.stats.teamMembers} label="Team Members" suffix="+" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader subtitle="Our People" title="Meet the Team" description="The dedicated professionals behind Bunian's success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
