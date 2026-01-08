import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const AgricultureContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestType: "",
    farmSize: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted",
      description: "Our agriculture team will contact you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      interestType: "",
      farmSize: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+234..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interestType">Area of Interest *</Label>
          <Select
            value={formData.interestType}
            onValueChange={(value) => setFormData({ ...formData, interestType: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="crop-farming">Crop Farming</SelectItem>
              <SelectItem value="livestock">Livestock Production</SelectItem>
              <SelectItem value="processing">Agro-Processing</SelectItem>
              <SelectItem value="investment">Farm Investment</SelectItem>
              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
              <SelectItem value="consultation">Agricultural Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="farmSize">Preferred Farm Size (Hectares)</Label>
        <Select
          value={formData.farmSize}
          onValueChange={(value) => setFormData({ ...formData, farmSize: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select size range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1 - 10 hectares</SelectItem>
            <SelectItem value="10-50">10 - 50 hectares</SelectItem>
            <SelectItem value="50-100">50 - 100 hectares</SelectItem>
            <SelectItem value="100-500">100 - 500 hectares</SelectItem>
            <SelectItem value="500+">500+ hectares</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Interest *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          placeholder="Describe your agricultural interests, goals, or questions..."
          rows={4}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Agriculture Inquiry"}
      </Button>
    </form>
  );
};
