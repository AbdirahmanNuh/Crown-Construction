import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project6 from "@/assets/project6.jpg";

const slides = [
  {
    image: project6,
    title: "Building Excellence in Construction",
    subtitle: "Transform your vision into reality with professional expertise",
  },
  {
    image: project2,
    title: "Modern Architectural Solutions",
    subtitle: "Innovative designs that inspire and endure",
  },
  {
    image: project1,
    title: "Quality You Can Trust",
    subtitle: "Delivering projects with precision and care",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-primary hover:bg-accent">
                    View Our Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
