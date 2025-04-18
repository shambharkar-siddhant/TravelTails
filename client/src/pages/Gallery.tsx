import { useState } from "react";
import { Link } from "wouter";
import { galleryLocations } from "@/data/galleryImages";
import Newsletter from "@/components/Newsletter";

const Gallery = () => {
  // Create a random rotation for polaroid effect
  const getRotation = () => {
    return Math.random() * 6 * (Math.random() > 0.5 ? 1 : -1);
  };

  // Create a random rotation for polaroid effect
  const getRotation = () => {
    return Math.random() * 6 * (Math.random() > 0.5 ? 1 : -1);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Camera and map travel concept"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display leading-tight mb-4">
              my travel albums
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-handwriting">
              snapshots and memories from my favorite adventures
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Folders Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryLocations.map(location => {
              const rotation = getRotation();
              return (
                <Link 
                  key={location.id} 
                  href={`/gallery/${location.slug}`}
                >
                  <div 
                    className="polaroid cursor-pointer shadow-fun hover:shadow-xl transition-all duration-500 mb-4 bg-white group transform hover:-translate-y-2"
                    style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={location.coverImage} 
                        alt={location.name}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-primary/80 text-white text-sm px-3 py-1 rounded-full font-handwriting">
                          {location.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-2xl font-display text-primary mb-1">{location.name}</h3>
                      <p className="text-sm font-handwriting text-gray-600">
                        {location.images.length} photos
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Journal Note */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto fun-section p-8">
            <h3 className="text-2xl font-display text-primary mb-4 text-center">why I organize by place</h3>
            <p className="text-gray-700 font-handwriting text-lg mb-4">
              for me, travel memories are deeply connected to the places I've visited. each destination has its own unique 
              colors, feelings, and stories that deserve to be grouped together.
            </p>
            <p className="text-gray-700 font-handwriting text-lg">
              when I look back at these photo collections, I'm instantly transported back to the sights, sounds, and emotions 
              of being there. it's like having little portals to different parts of the world right at my fingertips! ✨
            </p>
          </div>
        </div>
      </section>
      
      {/* Floating decorative elements */}
      <div className="fixed bottom-8 right-8 opacity-30 animate-bounce hidden md:block z-0">
        <div className="text-4xl transform rotate-12">📸</div>
      </div>
      <div className="fixed top-1/3 left-8 opacity-20 hidden lg:block z-0">
        <div className="text-5xl transform -rotate-12">✈️</div>
      </div>
    </div>
  );
};

export default Gallery;
