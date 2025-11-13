import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const CEOMessage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Message from Our CEO</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Leadership insights and our vision for the future
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-strong animate-fade-in-up">
            <CardContent className="p-12">
              <Quote className="w-16 h-16 text-primary mb-8" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Dear Valued Clients and Partners,
                </p>

                <p>
                  It is with great pride and gratitude that I welcome you to Plan Construction & 
                  Consultancy Company. Since our establishment, we have been driven by a singular 
                  vision: to transform the construction landscape of Somaliland through excellence, 
                  innovation, and unwavering commitment to quality.
                </p>

                <p>
                  In an industry where trust is paramount, we have built our reputation on delivering 
                  projects that not only meet but exceed expectations. Every building we construct, 
                  every consultation we provide, reflects our dedication to precision, safety, and 
                  sustainable practices.
                </p>

                <p>
                  Our success is built on the foundation of our talented team – professionals who 
                  bring expertise, creativity, and passion to every project. Together, we have 
                  completed numerous residential and commercial projects that stand as landmarks 
                  of quality and innovation across our region.
                </p>

                <p>
                  As we look to the future, we remain committed to adopting the latest construction 
                  technologies and sustainable building practices. We believe that our work contributes 
                  not just to individual projects, but to the broader development and modernization 
                  of Somaliland's infrastructure.
                </p>

                <p>
                  Whether you are planning a residential home, commercial development, or seeking 
                  expert consultancy, Plan Construction is your trusted partner. We don't just build 
                  structures; we build relationships, trust, and lasting value.
                </p>

                <p className="text-lg font-medium text-foreground pt-4">
                  Thank you for your continued trust and support.
                </p>

                <div className="pt-8 border-t border-border mt-8">
                  <p className="font-semibold text-foreground text-xl">CEO</p>
                  <p className="text-primary font-medium">Plan Construction & Consultancy Company</p>
                  <p className="text-sm mt-2">Hargeisa, Somaliland</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that true professionalism and dedication can make
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEOMessage;
