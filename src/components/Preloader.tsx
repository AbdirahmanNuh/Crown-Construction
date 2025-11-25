import { useState, useEffect } from "react";

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imagesToLoad = [
      "/src/assets/logo.webp",
    "/src/assets/project1.webp",
    "/src/assets/project2.webp",
    "/src/assets/project6.webp",
    ];

    let loadedImages = 0;
    const totalImages = imagesToLoad.length;

    // Simulate minimum loading time for better UX
    const minLoadingTime = 2000; // 2 seconds
    const startTime = Date.now();

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          setProgress((loadedImages / totalImages) * 70); // 70% for images
          resolve();
        };
        img.onerror = () => {
          loadedImages++;
          setProgress((loadedImages / totalImages) * 70); // Continue even if image fails
          resolve(); // Resolve anyway to not block the loading process
        };
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(imagesToLoad.map(loadImage));
        
        // Complete remaining progress
        setProgress(90);
        
        // Ensure minimum loading time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 300); // Small delay for fade out animation
          }, 500); // Delay to show 100% completion
        }, remainingTime);
        
      } catch (error) {
        console.warn("Some images failed to load, but continuing...");
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 500);
      }
    };

    loadAllImages();
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-opacity duration-300">
      <div className="text-center animate-fade-in-up">
        {/* Logo with enhanced animations */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
            <span className="text-white text-3xl font-bold">🏗️</span>
          </div>
        </div>
        
        {/* Company Name with staggered animation */}
        <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Crown Construction
        </h2>
        <p className="text-secondary-foreground mb-8 text-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Building Dreams, Creating Futures
        </p>
        
        {/* Progress Bar with enhanced styling */}
        <div className="w-64 mx-auto mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-primary rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-secondary to-accent h-full rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-sm font-semibold text-white">{Math.round(progress)}%</span>
          </div>
        </div>
        
        {/* Loading Text with dynamic messages */}
        <p className="text-sm text-secondary-foreground animate-pulse animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          {progress < 25 ? "Initializing systems..." : 
           progress < 50 ? "Loading company assets..." : 
           progress < 75 ? "Preparing your experience..." : 
           progress < 100 ? "Finalizing setup..." : "Welcome to Crown Construction!"}
        </p>
        
        {/* Subtle loading dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;