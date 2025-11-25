import { Link } from "react-router-dom";
import { Facebook, MapPin, Mail, Phone } from "lucide-react";
import TiktokIcon from "./TiktokIcon";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Crown Construction Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm opacity-90 mb-4">
              Leading construction and consultancy company delivering excellence in Somaliland.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576200656378"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/252634331642"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                {/* Official WhatsApp logo SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.24 12.79c-.22.6-1.22 1.16-1.7 1.23-.46.07-.99.1-1.54-.11-.35-.13-.81-.3-1.39-.58-2.45-1.09-4.05-3.63-4.17-3.79-.12-.16-1.01-1.34-1.01-2.55 0-1.21.64-1.81.87-2.05.23-.25.5-.31.67-.31.17 0 .34.01.49.06.15.05.23.12.34.25.22.24.46.58.58.78.12.2.16.35.22.58.06.23.03.43-.01.6-.04.17-.22.58-.32.78-.1.2-.21.25-.39.43-.17.17-.35.29-.01.58.34.29 1.68 1.4 3.89 2.22.52.22.93.35 1.25.45.32.1.5.08.69-.12.19-.2.78-.91.99-1.22.21-.31.42-.25.78-.15.36.1 2.25.95 2.64 1.12.39.17.65.26.75.4.1.14.1.8-.12 1.4z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@crown.csc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <TiktokIcon size={20} />
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
                <span>jigjiga-yar, Hargeisa, Somaliland</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+252634331642" className="hover:text-primary transition-colors">
                  +252 63 4331642
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@crownconstruction.org" className="hover:text-primary transition-colors">
                  info@crownconstruction.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            Powered by Sidra Web Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
