import { Link } from "react-router-dom";
import { Building2, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project7 from "@/assets/project7.jpg";

const Home = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Construction Management",
      description: "Expert oversight of your construction project from start to finish.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Project Consultancy",
      description: "Strategic guidance to ensure project success and efficiency.",
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage of construction.",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Years Experience" },
    { value: "100+", label: "Happy Clients" },
    { value: "25+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Stats Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building the Future of <span className="text-gradient">Somaliland</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Plan Construction & Consultancy Company is a leading construction firm in Somaliland, 
                dedicated to delivering exceptional quality and innovative solutions. With years of 
                experience and a team of skilled professionals, we transform visions into reality.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence, attention to detail, and client satisfaction has made 
                us the trusted choice for residential and commercial projects across the region.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-accent">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img
                src={project7}
                alt="Modern Architecture"
                className="rounded-lg shadow-lg hover-lift"
              />
              <img
                src={project4}
                alt="Elegant Interior"
                className="rounded-lg shadow-lg hover-lift mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and consultancy services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful construction projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[project3, project5, project7].map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover-lift animate-fade-in">
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Modern Villa Construction</h3>
                    <p className="text-sm opacity-90">Residential Project</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-primary hover:bg-accent" size="lg">
                View All Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with us today for a free consultation and quote
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Contact Us Now
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
