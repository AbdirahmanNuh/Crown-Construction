import { Mail, Phone, Facebook, Linkedin, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-orange-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@planconstruction.org" className="text-sm hover:text-orange-200 transition-colors">
                info@planconstruction.org
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+252636379790" className="text-sm hover:text-orange-200 transition-colors">
                +252 63 6379790
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me/252636379790" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;