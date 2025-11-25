import { useState } from "react";
import { X, Maximize2 } from "lucide-react";
import project1 from "@/assets/project1.webp";
import project2 from "@/assets/project2.webp";
import Project3 from "@/assets/Project3.webp";
import Project4 from "@/assets/Project4.webp";
import Project5 from "@/assets/Project5.webp";
import project6 from "@/assets/project6.webp";
import Project7 from "@/assets/Project 7.webp";
import Project8 from "@/assets/Project8.webp";
import Project9 from "@/assets/Project9.webp";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);

  const projects = [
    { image: project1, title: "Luxury Villa - Interior", category: "Residential" },
    { image: project2, title: "Modern House - Exterior", category: "Residential" },
    { image: Project3, title: "Contemporary Bathroom", category: "Interior" },
    { image: Project4, title: "Spacious Living Room", category: "Interior" },
    { image: Project5, title: "Modern Villa Exterior", category: "Residential" },
    { image: project6, title: "Elegant House at Dusk", category: "Residential" },
    { image: Project7, title: "Architectural Masterpiece", category: "Residential" },
    { image: Project8, title: "Sophisticated Interior Space", category: "Interior" },
    { image: Project9, title: "Classic Interior Design", category: "Interior" },
  ];

const videos = [
    {
      title: "Project Showcase 1",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2102255113850526%2F&show_text=false&width=560&t=0",
    },
    {
      title: "Project Showcase 2",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3179310865583274%2F&show_text=false&width=560&t=0",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg opacity-90">
              Explore our portfolio of exceptional construction and design projects
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
            <p className="text-muted-foreground">
              A showcase of our completed residential and interior projects
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs text-primary font-semibold mb-1">{project.category}</p>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Project Videos</h2>
            <p className="text-muted-foreground">
              Watch our construction projects come to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-strong animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-secondary text-secondary-foreground p-4">
                  <h3 className="font-semibold">{video.title}</h3>
                </div>
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={video.embedUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: "none", overflow: "hidden" }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                  {/* Fullscreen button for mobile */}
                  <button
                    onClick={() => setFullscreenVideo(index)}
                    className="absolute bottom-4 right-4 md:hidden bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all z-10"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Project"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Fullscreen Video Modal for Mobile */}
      {fullscreenVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 animate-fade-in md:hidden"
          onClick={() => setFullscreenVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            onClick={() => setFullscreenVideo(null)}
          >
            <X size={32} />
          </button>
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={videos[fullscreenVideo].embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
