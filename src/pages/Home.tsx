import { Link } from "react-router-dom";
import { Building2, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import project3 from "@/assets/project3.webp";
import project4 from "@/assets/project4.webp";
import project5 from "@/assets/project5.webp";
import project7 from "@/assets/project7.webp";

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
    { value: "500+", label: "Projects Completed" },
    { value: "10+", label: "Years Experience" },
    { value: "97%", label: "Happy Clients" },
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

      

      {/* Project Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our construction projects come to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="rounded-lg overflow-hidden shadow-strong animate-fade-in-up"
            >
              <div className="bg-secondary text-secondary-foreground p-4">
                <h3 className="font-semibold">Project Showcase 1</h3>
              </div>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1352364943186496"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-strong animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-secondary text-secondary-foreground p-4">
                <h3 className="font-semibold">Project Showcase 2</h3>
              </div>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61561525103958%2Fvideos%2F1910937926390926%2F"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Message from Our CEO</h2>
              <p className="text-muted-foreground">
                Insights and vision from our leadership
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg p-8 animate-fade-in-up">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    CEO
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
                    "At Plan Construction & Consultancy Company, we believe in building not just structures, 
                    but lasting relationships with our clients. Our commitment to excellence, innovation, 
                    and sustainability drives us to deliver projects that exceed expectations and stand 
                    the test of time. Together, we are building the future of Somaliland."
                  </blockquote>
                  <cite className="font-semibold text-foreground">
                    — Chief Executive Officer, Plan Construction & Consultancy Company
                  </cite>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/ceo-message">
                  <Button variant="outline" size="lg">
                    Read Full Message
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
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
