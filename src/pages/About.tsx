import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Project7 from "@/assets/Project 7.webp";

const About = () => {
  const values = [
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Excellence",
      description: "We strive for the highest standards in every project we undertake.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Integrity",
      description: "Honesty and transparency guide all our business relationships.",
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Innovation",
      description: "We embrace modern techniques and sustainable building practices.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-secondary text-secondary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${Project7})` }}
        />
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg opacity-90">
              Leading the way in construction and consultancy excellence across Somaliland
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Crown Construction & Consultancy Company is a premier construction firm established 
                in Hargeisa, Somaliland. With over a decade of experience in the construction industry, 
                we have built a reputation for delivering high-quality projects on time and within budget.
              </p>
              <p>
                Our team of skilled professionals brings together expertise in construction management, 
                architectural design, project consultancy, and quality assurance. We pride ourselves on 
                our ability to handle projects of all sizes, from residential homes to large commercial 
                developments.
              </p>
              <p>
                Operating from our office at jigjiga-yar in Hargeisa, we serve clients throughout 
                Somaliland and beyond, bringing modern construction practices and innovative solutions 
                to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-glow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional construction and consultancy services that exceed client 
                  expectations through innovation, quality craftsmanship, and unwavering commitment 
                  to excellence. We aim to contribute to the development and modernization of 
                  Somaliland's infrastructure while maintaining the highest professional standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-glow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading construction and consultancy company in the Horn of Africa, 
                  recognized for transforming landscapes through sustainable building practices, 
                  innovative design solutions, and an unwavering commitment to quality. We envision 
                  a future where every project we complete stands as a testament to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift shadow-glow animate-fade-in-up">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
