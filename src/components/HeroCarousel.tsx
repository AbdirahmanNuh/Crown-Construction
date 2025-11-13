import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import project1 from "@/assets/project1.webp";
import project2 from "@/assets/project2.webp";
import project6 from "@/assets/project6.webp";

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

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className={`max-w-2xl text-white transition-all duration-[2500ms] ease-out ${
              index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 leading-tight transition-all duration-[2800ms] delay-200 ease-out ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}>
                {slide.title}
              </h1>
              <p className={`text-lg md:text-xl mb-8 opacity-90 transition-all duration-[2800ms] delay-400 ease-out ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}>
                {slide.subtitle}
              </p>
              <div className={`flex flex-wrap gap-4 transition-all duration-[2800ms] delay-600 ease-out ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                <Link to="/projects">
                  <Button size="lg" className="bg-primary hover:bg-accent">
                    View Our Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary bg-white/10 backdrop-blur-sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}



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
