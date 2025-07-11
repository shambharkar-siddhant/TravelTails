import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { useState, useEffect } from "react";

const Home = () => {
  // Get the featured post (first in the list)
  const featuredPost = blogPosts[blogPosts.length - 1];
  
  // Get recent posts excluding the featured one
  const recentPosts = blogPosts.slice(1, 4);
  
  // State for animated elements
  const [showSunRays, setShowSunRays] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  
  // Travel quotes
  const travelQuotes = [
    "Not all who wander are lost",
    "Adventure awaits",
    "Life is short and the world is wide",
    "Collect moments, not things",
    "Travel far, travel wide, travel deep"
  ];
  
  // Animate elements after component mounts
  useEffect(() => {
    setShowSunRays(true);
    
    // Rotate quotes
    const interval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % travelQuotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-primary/5 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 right-10 md:right-20 w-40 h-40 md:w-56 md:h-56 bg-primary rounded-full opacity-10 transform rotate-12"></div>
        <div className="absolute top-40 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-primary rounded-full opacity-10 transform -rotate-12"></div>
        <div className="absolute bottom-20 right-0 w-20 h-20 md:w-40 md:h-40 bg-primary rounded-full opacity-10 transform rotate-45"></div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 pt-12 md:pt-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center md:space-x-8 pb-20">
            {/* Left Column: Header and intro */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div 
                className={`
                  inline-block relative mb-8 transition-all duration-1000 ease-out
                  ${showSunRays ? 'opacity-100' : 'opacity-0 translate-y-8'}
                `}
              >
                <div className="text-6xl md:text-7xl lg:text-8xl font-display text-primary mb-2">
                  hello there!
                </div>
                
                <div className="relative h-12">
                  {travelQuotes.map((quote, i) => (
                    <div 
                      key={i}
                      className={`
                        absolute inset-0 transition-all duration-700 ease-in-out font-handwriting text-lg text-gray-500
                        ${activeQuote === i 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4'}
                      `}
                    >
                      {quote}
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-8 font-handwriting max-w-lg mx-auto lg:mx-0">
                Welcome to my little travel journal where I document adventures, 
                share stories, and collect memories from around our beautiful planet
              </p>
              
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link 
                  href="/blog" 
                  className="btn-bounce bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-handwriting text-lg flex items-center"
                >
                  <span className="mr-2">read my adventures</span>
                  <span>જ✈︎</span>
                </Link>
                <Link 
                  href="/about" 
                  className="btn-bounce bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-handwriting text-lg"
                >
                  about me
                </Link>
              </div>
            </div>
            
            {/* Right Column: Stacked photos */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Main image */}
                <div className="polaroid" style={{ '--rotation': '3deg' } as React.CSSProperties}>
                  <img 
                    src="./images/home_3_1.jpeg" 
                    alt="World map with travel pins"
                    className="w-full h-auto rounded-sm"
                  />
                  <p className="text-center font-handwriting mt-2 text-gray-600">memories worth remembering ♥</p>
                </div>
                
                {/* Smaller stacked images */}
                <div 
                  className="absolute -bottom-16 -left-16 z-10 polaroid shadow-lg"
                  style={{ '--rotation': '-8deg' } as React.CSSProperties}
                >
                  <img 
                    src="./images/home_2_1.jpeg" 
                    className="w-40 h-40 object-cover rounded-sm"
                  />
                </div>
                
                <div 
                  className="absolute -bottom-16 -right-0 z-10 polaroid shadow-lg hidden md:block"
                  style={{ '--rotation': '6deg' } as React.CSSProperties}
                >
                  <img 
                    src="./images/home_1.jpeg" 
                    className="w-40 h-40 object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Adventure */}
      <section className="py-16 relative">
        {/* Decorative elements */}

        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl text-white font-display text-primary mb-4">
              latest adventure
            </h2>
            <div className="divider-doodle mx-auto w-40"></div>
          </div>
          
          <div className="bg-white shadow-fun rounded-2xl overflow-hidden max-w-5xl mx-auto border-2 border-primary border-opacity-10">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-full">
                  <img 
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary bg-opacity-10 text-white font-handwriting px-3 py-1 rounded-full mr-3">{featuredPost.location}</span>
                  <span className="text-gray-500 text-sm font-handwriting">{featuredPost.date}</span>
                </div>
                <h3 className="text-3xl font-display text-primary mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-700 mb-6 font-handwriting text-lg">
                  {featuredPost.excerpt.substring(0, 150)}...
                </p>
                <Link 
                  href={`/blog/${featuredPost.slug}`} 
                  className="btn-bounce inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-lg font-handwriting shadow-md hover:shadow-lg transition-all duration-300"
                >
                  read this story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-display text-4xl text-primary mb-4">
              "Travel isn't always pretty. It isn't always comfortable.<br/>
              But that's okay. The journey changes you -<br/>
              it leaves marks on your memory, on your heart,<br/>
              and on your body. You take something with you...<br/>
              and hopefully, you leave something good behind."
            </div>
            <p className="text-gray-600 font-handwriting mt-6">— Anthony Bourdain</p>
          </div>
        </div>
      </section>

      {/* Recent Posts Section
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-display text-primary mb-4">
              more adventures
            </h2>
            <div className="divider-doodle mx-auto w-40 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/blog" 
              className="btn-bounce inline-block bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-handwriting"
            >
              see all my stories
            </Link>
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Fun decorative elements */}
    </div>
  );
};

export default Home;
