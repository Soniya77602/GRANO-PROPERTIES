import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919844465483"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
    </a>
  );
};

export default WhatsAppButton;
