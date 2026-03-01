import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury villa at dusk"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
        <img src={logo} alt="Grano Properties Logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-medium">
          Building Your Legacy
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-foreground">
          Building Your <span className="text-gold-gradient">Legacy</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Premium apartments crafted with quality, trust, and modern design. Building your legacy, one home at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="gold-gradient text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-8 py-3 rounded-md font-semibold text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
