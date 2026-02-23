import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: project1,
    title: "Royal Villas",
    location: "Whitefield, Bangalore",
    type: "Luxury Villas",
    config: "3/4/5 BHK Villas",
    area: "3500 - 4800 sq.ft",
  },
  {
    image: project2,
    title: "Skyline Residences",
    location: "Sarjapur Road, Bangalore",
    type: "Premium Apartments",
    config: "2/3 BHK Apartments",
    area: "1200 - 2400 sq.ft",
  },
  {
    image: project3,
    title: "Green Meadows",
    location: "Mysore Ring Road",
    type: "Villa Plots",
    config: "30x40 | 30x50 | 40x60 Plots",
    area: "1200 - 2400 sq.ft",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3 font-medium">Our Projects</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Discover Your <span className="text-gold-gradient">Dream Home</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
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
