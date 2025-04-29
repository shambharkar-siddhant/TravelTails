import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream pt-16 pb-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="divider-doodle"></div>
      </div>
      
      {/* Scattered travel icons */}
      {['✈️', '🧳', '🗺️', '🏝️', '📸', '🧭', '🚂', '⛰️'].map((emoji, i) => (
        <div 
          key={i}
          className="absolute text-xl opacity-25"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            zIndex: 0
          }}
        >
          {emoji}
        </div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center">
          <p className="text-primary text-opacity-100 font-handwriting text-lg mb-4">
            Thanks for stopping by! Hope your day is as amazing as your next adventure ✨
          </p>
          <p className="text-gray-500 text-sm">
            Made with ♥ and lots of coffee,<br />
            somewhere between adventures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
