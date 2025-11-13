import { Building2, PenTool, ClipboardCheck, Ruler, Wrench, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import project7 from "@/assets/project7.webp";

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-16 h-16 text-primary" />,
      title: "Construction Management",
      description:
        "Comprehensive project management from planning to completion. We oversee every aspect of your construction project, ensuring timely delivery, budget adherence, and quality standards.",
      features: [
        "Project planning and scheduling",
        "Budget management and cost control",
        "Quality assurance and safety compliance",
        "Vendor and subcontractor coordination",
      ],
    },
    {
      icon: <PenTool className="w-16 h-16 text-primary" />,
      title: "Architectural Design",
      description:
        "Innovative and functional architectural solutions tailored to your vision. Our design team creates spaces that are both aesthetically pleasing and highly functional.",
      features: [
        "Conceptual design and 3D visualization",
        "Detailed construction drawings",
        "Building code compliance",
        "Sustainable design solutions",
      ],
    },
    {
      icon: <ClipboardCheck className="w-16 h-16 text-primary" />,
      title: "Project Consultancy",
      description:
        "Expert guidance and strategic advice for successful project delivery. We help you make informed decisions at every stage of your construction journey.",
      features: [
        "Feasibility studies and site analysis",
        "Risk assessment and mitigation",
        "Value engineering",
        "Project documentation",
      ],
    },
    {
      icon: <Ruler className="w-16 h-16 text-primary" />,
      title: "Interior Design",
      description:
        "Transform your spaces with elegant and functional interior solutions. We create interiors that reflect your style while maximizing comfort and efficiency.",
      features: [
        "Space planning and layout",
        "Material and finish selection",
        "Lighting design",
        "Custom furniture design",
      ],
    },
    {
      icon: <Wrench className="w-16 h-16 text-primary" />,
      title: "Renovation & Remodeling",
      description:
        "Breathe new life into existing structures with professional renovation services. We modernize and upgrade buildings while preserving their character.",
      features: [
        "Structural renovations",
        "Modern system upgrades",
        "Historic building restoration",
        "Energy efficiency improvements",
      ],
    },
    {
      icon: <Shield className="w-16 h-16 text-primary" />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and inspection services throughout the construction process. We ensure every project meets the highest standards.",
      features: [
        "Regular site inspections",
        "Material testing and certification",
        "Compliance verification",
        "Final walkthrough and handover",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-secondary text-secondary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${project7})` }}
        />
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg opacity-90">
              Comprehensive construction and consultancy solutions for all your building needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed project planning and design" },
              { step: "03", title: "Execution", desc: "Professional construction management" },
              { step: "04", title: "Delivery", desc: "Quality handover and support" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a free consultation
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-accent">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
