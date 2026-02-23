import aboutImg from "@/assets/about-img.jpg";
import { Building2, Users, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: "50+", label: "Projects" },
  { icon: Users, value: "2000+", label: "Happy Families" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "10+", label: "Locations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 section-fade">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Happy homeowners"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 gold-gradient rounded-lg p-6 hidden lg:block">
              <p className="text-3xl font-heading font-bold text-primary-foreground">15+</p>
              <p className="text-sm text-primary-foreground/80 font-medium">Years of Trust</p>
            </div>
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3 font-medium">About Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Building Dreams, <br />Delivering <span className="text-gold-gradient">Happiness</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 15 years of experience in real estate development, we have been dedicated to creating
              living spaces that go beyond just structures. Every project reflects our commitment to quality,
              innovation, and customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of architects, engineers, and designers work together to deliver homes that are
              aesthetically pleasing, structurally sound, and designed for modern living.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
