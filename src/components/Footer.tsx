import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="text-2xl font-heading font-bold text-gold-gradient tracking-wide">
              GRANO<span className="text-foreground"> CONSTRUCTION</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Building premium apartments with quality, trust, and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Bangalore, Karnataka</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 83105 88048</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@granoconstruction.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DreamHomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
