import { useState, useCallback, useEffect } from "react";
import shanthiNivas1 from "@/assets/shanthi-nivas-1.jpg";
import shanthiNivas2 from "@/assets/shanthi-nivas-2.jpg";
import shanthiNivas3 from "@/assets/shanthi-nivas-3.jpg";
import shanthiNivas4 from "@/assets/shanthi-nivas-4.jpg";
import shanthiNivas5 from "@/assets/shanthi-nivas-5.jpg";
import shanthiNivas6 from "@/assets/shanthi-nivas-6.jpg";
import shanthiNivas7 from "@/assets/shanthi-nivas-7.jpg";
import shanthiNivas8 from "@/assets/shanthi-nivas-8.jpg";
import shanthiNivas9 from "@/assets/shanthi-nivas-9.jpg";
import granoNivas1 from "@/assets/grano-nivas-1.jpg";
import granoNivas2 from "@/assets/grano-nivas-2.jpg";
import granoNivas3 from "@/assets/grano-nivas-3.jpg";
import granoNivas4 from "@/assets/grano-nivas-4.jpg";
import granoNivas5 from "@/assets/grano-nivas-5.jpg";
import granoNivas6 from "@/assets/grano-nivas-6.jpg";
import granoNivas7 from "@/assets/grano-nivas-7.jpg";
import granoNivas8 from "@/assets/grano-nivas-8.jpg";
import granoNivas9 from "@/assets/grano-nivas-9.jpg";
import pvrBuilding from "@/assets/pvr-building.jpg";
import comingSoon from "@/assets/coming-soon.jpg";
import { ArrowRight, Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    images: [shanthiNivas1, shanthiNivas2, shanthiNivas3, shanthiNivas4, shanthiNivas5, shanthiNivas6, shanthiNivas7, shanthiNivas8, shanthiNivas9],
    title: "Shanthi Nivas",
    location: "Near DPS School, North Opposite",
    type: "Premium Apartments",
    config: "3 BHK Apartments",
    area: "Ongoing Project",
    brochure: "/brochures/prime-vision-brochure.pdf",
    floorPlan: "/brochures/vision-sathnur-floor-plan.pdf",
  },
  {
    images: [granoNivas1, granoNivas2, granoNivas3, granoNivas4, granoNivas5, granoNivas6, granoNivas7, granoNivas8, granoNivas9],
    title: "Grano Nivas",
    location: "Baba Nagar, 2nd Cross",
    type: "Residential Apartments",
    config: "2/3 BHK Apartments",
    area: "Ongoing Project",
    brochure: "/brochures/grano-nivas-brochure.pdf",
    floorPlan: "/brochures/prime-vision-floor-plan.pdf",
  },
  {
    images: [pvrBuilding],
    title: "Prime Vision Residency",
    location: "Sathnur Village, Srinivaspura",
    type: "Luxury Apartments",
    config: "2/3 BHK Apartments",
    area: "Ongoing Project",
    brochure: "/brochures/pvr-brochure.pdf",
    floorPlan: null,
  },
  {
    images: [comingSoon],
    title: "Grano Paradise",
    location: "Near Bagalur",
    type: "Residential Apartments",
    config: "2/3 BHK Apartments",
    area: "Ongoing Project",
    brochure: null,
    floorPlan: "/brochures/grano-paradise-floor-plan.pdf",
  },
];

const ImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={title}
        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
      />
    );
  }

  return (
    <div className="relative">
      <img
        src={images[current]}
        alt={`${title} - Photo ${current + 1}`}
        className="w-full aspect-[4/3] object-cover transition-all duration-500"
      />
      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-3" : "bg-background/60"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
      {/* Counter */}
      <span className="absolute top-2 right-2 bg-background/70 backdrop-blur-sm text-foreground text-xs px-2 py-0.5 rounded-full">
        {current + 1}/{images.length}
      </span>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3 font-medium">Our Projects</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Ongoing <span className="text-gold-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <ImageSlider images={project.images} title={project.title} />
              </div>
              <div className="p-6">
                <span className="text-xs tracking-widest uppercase text-primary font-medium">
                  {project.type}
                </span>
                <h3 className="text-xl font-heading font-bold text-foreground mt-2 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                <div className="flex justify-between text-sm text-muted-foreground border-t border-border pt-3">
                  <span>{project.config}</span>
                  <span>{project.area}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.brochure && (
                    <a
                      href={project.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" /> Brochure
                    </a>
                  )}
                  {project.floorPlan && (
                    <a
                      href={project.floorPlan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Floor Plan
                    </a>
                  )}
                </div>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-light transition-colors"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
