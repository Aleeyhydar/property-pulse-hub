import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/forms/ContactForm";
import { PropertyRequestForm } from "@/components/forms/PropertyRequestForm";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { companyInfo } from "@/data/companyInfo";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="container-wide relative z-10 text-center text-white py-20">
          <p className="text-primary-foreground/80 font-medium mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground text-sm">{companyInfo.contact.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href={`tel:${companyInfo.contact.phone}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href={`mailto:${companyInfo.contact.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-muted-foreground text-sm">{companyInfo.businessHours.weekdays}</p>
                      <p className="text-muted-foreground text-sm">{companyInfo.businessHours.saturday}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7281274373177!2d3.4240943!3d6.4280556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53a7f9e2497%3A0x9b7b04eb2d8c8b9b!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bunian Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-semibold text-xl mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Request */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader
            subtitle="Looking for Property?"
            title="Submit a Property Request"
            description="Tell us your requirements and we'll find the perfect property for you."
          />
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <PropertyRequestForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
