import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { galleryLocations, GalleryImage } from "@/data/galleryImages";
import Newsletter from "@/components/Newsletter";

const LocationGallery = () => {
  const [, params] = useRoute("/gallery/:slug");
  const [location, setLocation] = useState(galleryLocations[0]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Find the matching location based on slug in URL
  useEffect(() => {
    if (params && params.slug) {
      const matchedLocation = galleryLocations.find(
        (loc) => loc.slug === params.slug
      );
      if (matchedLocation) {
        setLocation(matchedLocation);
      }
    }
  }, [params]);

  // Open lightbox
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Create a random rotation for the polaroid effect
  const getRotation = () => {
    return Math.random() * 6 * (Math.random() > 0.5 ? 1 : -1);
  };

  // Prepare Previous/Next logic
  const images = location.images;
  const currentIndex = selectedImage
    ? images.findIndex((img) => img.id === selectedImage.id)
    : -1;
  const prevImage = currentIndex > 0 ? images[currentIndex - 1] : null;
  const nextImage =
    currentIndex < images.length - 1 ? images[currentIndex + 1] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (prevImage) openLightbox(prevImage);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (nextImage) openLightbox(nextImage);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-40 z-10"></div>
        <img
          src={location.coverImage}
          alt={location.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display leading-tight mb-3">
              {location.name}
            </h1>
            <p className="text-lg text-white mb-4 max-w-2xl mx-auto font-handwriting">
              {location.date}
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center bg-primary/80 hover:bg-primary text-white px-4 py-2 rounded-full text-sm font-handwriting transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              back to all albums
            </Link>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto journal-entry text-center">
            <p className="text-gray-700 font-handwriting text-lg">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
              adventures in {location.name}
            </h2>
            <div className="divider-doodle w-48 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.images.map((image) => {
              const rotation = getRotation();
              return (
                <div
                  key={image.id}
                  className="cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div
                    className="polaroid shadow-fun hover:shadow-xl transition-all duration-500 bg-white group transform hover:-translate-y-2"
                    style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <p className="text-sm font-handwriting text-gray-600">
                        {image.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Notes Section */}
      {location.images.map((image, index) =>
        index === 0 ? (
          <section key={image.id} className="py-12 bg-cream">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto fun-section p-8">
                <h3 className="text-2xl font-display text-primary mb-4 text-center">
                  travel notes
                </h3>
                <p className="text-gray-700 font-handwriting text-lg">
                  "Memories from this beautiful place will stay with me
                  forever. The sights, sounds, and experiences were truly
                  special."
                </p>
              </div>
            </div>
          </section>
        ) : null
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white text-xl z-10 bg-primary/80 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous */}
          {prevImage && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-primary/80 hover:bg-primary px-3 py-2 rounded"
            >
              Previous
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-6 font-handwriting">
              <h3 className="text-xl mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-300 text-sm">{selectedImage.date}</p>
              {selectedImage.description && (
                <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>

          {/* Next */}
          {nextImage && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-primary/80 hover:bg-primary px-3 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      )}

      {/* Floating decorative elements */}
      <div className="fixed bottom-8 right-8 opacity-30 animate-bounce hidden md:block z-0">
        <div className="text-4xl transform rotate-12">📸</div>
      </div>
    </div>
  );
};

export default LocationGallery;
