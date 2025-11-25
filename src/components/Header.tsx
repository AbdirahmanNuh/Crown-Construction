import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "CEO Message", path: "/ceo-message" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-background shadow-strong" : "bg-background"
        }`}
      >
      {/* Thematic Scroller */}
      <div className="bg-white border-b border-border overflow-hidden">
        <div className="animate-scroll whitespace-nowrap py-2 text-xs text-primary font-semibold">
          <span className="inline-block px-8">🏗️ Building Dreams, Creating Futures • 🏗️ Construction Excellence Since 2015 • 🏗️ Quality Construction Services • 🏗️ Your Trusted Building Partner • 🏗️ Innovation in Construction • 🏗️ Sustainable Building Solutions • 🏗️ Expert Consultancy Services</span>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 min-w-0 flex-1">
            {/* Desktop Logo */}
            <img src={logo} alt="Crown Construction Logo" className="hidden sm:block h-12 w-auto flex-shrink-0 shadow-lg rounded-lg" />
            <div className="hidden sm:block min-w-0 flex-1">
              <h1 className="text-primary font-bold text-sm sm:text-lg leading-tight tracking-wide">
                Crown Construction Company
              </h1>
              <p className="text-secondary text-xs font-bold">Building Dreams, Creating Futures</p>
            </div>
            {/* Mobile Logo - Matches Navigation Menu */}
            <div className="sm:hidden flex items-center space-x-4">
              <img src={logo} alt="Crown Construction Logo" className="h-16 w-auto shadow-lg rounded-lg border-2 border-secondary" />
              <div>
                <h3 className="text-primary font-bold text-xl">Crown Construction</h3>
                <p className="text-secondary text-sm font-bold">Building Dreams, Creating Futures</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-foreground bg-primary"
                    : "text-primary hover:text-primary-foreground hover:bg-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-4 bg-secondary text-secondary-foreground hover:bg-accent">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background lg:hidden animate-fade-in w-full h-full">
            <div className="flex flex-col h-full w-full px-6">
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 text-primary hover:bg-muted rounded-full transition-all bg-white shadow-md"
                >
                  <X size={28} />
                </button>
              </div>
              
              {/* Logo at top */}
              <div className="pt-16 pb-8">
                <div className="flex items-center space-x-4">
                  <img src={logo} alt="Crown Construction Logo" className="h-16 w-auto shadow-lg rounded-lg border-2 border-secondary" />
                  <div>
                    <h3 className="text-primary font-bold text-xl">Crown Construction</h3>
                    <p className="text-secondary text-sm font-bold">Building Dreams, Creating Futures</p>
                  </div>
                </div>
              </div>
              
              {/* Separator */}
              <div className="border-t border-border/40 mb-8"></div>
              
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-4 rounded-lg text-lg font-semibold transition-all transform hover:translate-x-2 ${
                      location.pathname === link.path
                        ? "text-primary-foreground bg-primary shadow-lg border border-primary"
                        : "text-primary bg-white hover:bg-muted hover:shadow-lg border border-border/30"
                    }`}
                  >
                    {/* Professional icons for each menu item */}
                    <div className="mr-4 w-6 text-center">
                      {index === 0 && <span className="text-secondary">🏠</span>}
                      {index === 1 && <span className="text-secondary">👥</span>}
                      {index === 2 && <span className="text-secondary">💼</span>}
                      {index === 3 && <span className="text-secondary">🔧</span>}
                      {index === 4 && <span className="text-secondary">🏗️</span>}
                      {index === 5 && <span className="text-secondary">📞</span>}
                    </div>
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-accent text-lg py-4 shadow-lg transform hover:scale-105 transition-all font-bold border-2 border-accent">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
