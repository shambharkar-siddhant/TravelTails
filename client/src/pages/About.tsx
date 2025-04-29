import Newsletter from "@/components/Newsletter";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-40 z-10"></div>
        <img 
          src="./images/cover_1.jpeg" 
          alt="Person looking over mountains"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-handwriting leading-tight mb-4">
              about me
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-serif">
              not just collecting places — collecting perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="polaroid" style={{ '--rotation': '2deg' } as React.CSSProperties}>
                  <img 
                    src="./images/profile.jpg" 
                    alt="That's me - Siddhant"
                    className="w-full h-auto"
                  />
                </div>
              </div>  
              <div className="md:w-1/2">
                <h2 className="text-3xl font-handwriting text-white mb-6">
                  a bit about me
                </h2>
                <div className="w-20 h-1 bg-accent mb-8"></div>
                <div className="journal-entry">
                  <p className="text-lg mb-6 text-dark leading-relaxed">
                  I'm Siddhant — a coder by trade, but a wanderer by soul.
                  Born and raised in the touristic heart of Maharashtra, India, I grew up surrounded by stories, colors, and the hum of travelers passing through.
                  </p>
                  <p className="text-lg mb-6 text-dark leading-relaxed">
                    Since childhood, I've been drawn to the unknown — the way cultures speak through their food, how cities breathe with their own rhythm, how people live, believe, and belong.
                    <br /><br />
                    In 2017, I stepped out of my hometown for graduation — and unknowingly, into a journey that would forever change me.
                    Since then, every new place has left a mark on me, and the road keeps calling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary bg-opacity-20 p-8 rounded-lg mb-16">
              <h2 className="text-3xl font-handwriting text-primary mb-6 text-center">
                about this journal
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg text-dark leading-relaxed">
                This journal is more than a collection of stories — it's a piece of me.  
                Travel has never been just a hobby. It's how I make sense of the world.  
                In unfamiliar cities and quiet corners, I find clarity —  
                like that night in Meghlaya, wandering at 1am, or playing volleyball with strangers.  
                These are the moments that stay.
                <br /><br />
                My camera is my companion — not to chase the perfect shot,  
                but to slow down, to notice the way sunlight kisses old stones,  
                the faces that speak without words, the colors that hum with life.
                <br /><br />
                I've learned I travel best when I linger.  
                When I stay long enough to find a favorite coffee spot,  
                to greet the grocer with a smile, to fumble through a few local phrases.  
                That's when a place begins to feel like a memory, not just a destination.
                <br /><br />
                So here it is — a space for honest stories, thoughtful reflections, and yes, the occasional food tangent.  
                It's not a checklist or a travel guide.  
                It's a journal — for those who find meaning in the slow, the soulful, and the in-between.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-handwriting text-white mb-6 text-center">
              ✨ My Travel Style ✨
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md" style={{ transform: 'rotate(-1deg)' }}>
                  <div className="text-accent text-4xl mb-4 text-center">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <h3 className="text-xl font-handwriting mb-3 text-center">slow & deep</h3>
                  <p className="text-gray-700">
                    i'd rather spend two weeks exploring one city than racing through five countries in the same time. slow travel lets me discover those special places that never make the guidebooks.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md" style={{ transform: 'rotate(1deg)' }}>
                  <div className="text-accent text-4xl mb-4 text-center">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3 className="text-xl font-handwriting mb-3 text-center">food focused</h3>
                  <p className="text-gray-700">
                    my itineraries often revolve around food. from street stalls to cooking classes, i believe there's no better way to understand a culture than through its cuisine.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md" style={{ transform: 'rotate(-0.5deg)' }}>
                  <div className="text-accent text-4xl mb-4 text-center">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3 className="text-xl font-handwriting mb-3 text-center">local living</h3>
                  <p className="text-gray-700">
                    apartments over hotels, local transit over taxis, neighborhood eateries over tourist traps. i travel to experience life elsewhere, not just to see the sights.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-handwriting text-white mb-6 text-center">
                Lets Connect!
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg mb-8 text-dark leading-relaxed max-w-2xl mx-auto">
                I love connecting with fellow travelers! ❤️
                <br />
                Reach out anytime  — Instagram and email are right below!
              </p>
              <div className="flex justify-center space-x-8">
                <a href="https://www.instagram.com/siddhant_shambharkar" target="_blank" rel="noopener noreferrer"
                  className="text-3xl text-[#E1306C] hover:text-pink-500 transition duration-300"
                  aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:shambharakrsiddhant0698@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="text-3xl text-[#D14836] hover:text-red-700 transition duration-300"
                  aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-center">
              <p className="text-gray-600 italic">
                "the world is a book and those who do not travel read only one page." — saint augustine
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
