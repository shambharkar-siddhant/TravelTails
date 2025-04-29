import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    // Filter posts based on search term
    const results = blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="World map with travel pins"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-handwriting leading-tight mb-4">
              my travel stories
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-serif">
              adventures, mishaps, and everything in between from my wanderings
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="search by place, experience, or feeling..." 
                  className="w-full px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-3 top-3 text-gray-500">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-handwriting text-primary mb-4">
              {searchTerm ? `found ${filteredPosts.length} stories about "${searchTerm}"` : 'all my travel diaries'}
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 journal-entry">
              <h3 className="text-2xl font-handwriting text-gray-700 mb-4">no stories found</h3>
              <p className="text-gray-600">
                i haven't written about that yet! try different search terms or browse all my stories below.
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-accent text-gray-600 hover-underline-animation"
              >
                clear search and see all stories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="bg-secondary bg-opacity-20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto journal-entry">
            <h3 className="text-2xl font-handwriting text-primary mb-4">a note about my stories</h3>
            <p className="text-gray-700 mb-4">
              each story here is a piece of my heart. i write these entries not just to share travel tips, but to capture how these places made me feel, the people i met, and how these experiences changed me.
            </p>
            <p className="text-gray-700">
              some entries were written in airport lounges, others in tiny cafés, and a few from the comfort of my own bed months after returning. they're unfiltered, sometimes messy, but always honest.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default BlogListing;
