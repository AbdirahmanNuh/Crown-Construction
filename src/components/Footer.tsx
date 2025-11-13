import { Link } from "react-router-dom";
import { Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Plan Construction Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm opacity-90 mb-4">
              Leading construction and consultancy company delivering excellence in Somaliland.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Plan-Construction-Consultancy-Company-61561525103958/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/plan-construction-consultancy-company/?originalSubdomain=so"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm opacity-90 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Construction Management</li>
              <li>Architectural Design</li>
              <li>Project Consultancy</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>2 floor, Dur-Dur Mall 2, Hargeisa, Somaliland</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+252636379790" className="hover:text-primary transition-colors">
                  +252 63 6379790
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@planconstruction.org" className="hover:text-primary transition-colors">
                  info@planconstruction.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Plan Construction & Consultancy Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
