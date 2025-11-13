import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "2 floor, Dur-Dur Mall 2, Road No.2, Hargeisa, Somaliland",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+252 63 6379790",
      link: "tel:+252636379790",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@planconstruction.org",
      link: "mailto:info@planconstruction.org",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with us for your construction and consultancy needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-glow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent">
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-strong h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2089726389564!2d44.064784!3d9.559999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzMnMzYuMCJOIDQ0wrAwMycUzMy41IkU!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-glow animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday - Thursday</span>
                  <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Friday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
