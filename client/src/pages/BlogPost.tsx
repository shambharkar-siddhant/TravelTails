import { useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const BlogPost = () => {
  const [match, params] = useRoute("/blog/:slug");
  const [, navigate] = useLocation();
  
  // Find the current post
  const post = blogPosts.find(post => post.slug === params?.slug);
  
  // Get related posts (excluding current)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.id !== post.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    : [];

  useEffect(() => {
    // If post doesn't exist, redirect to blog listing
    if (!post) {
      navigate("/blog");
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-40 z-10"></div>
        <img 
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-[center_75%]"
        />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center max-w-3xl">
            <span className="inline-block bg-secondary text-dark text-sm px-3 py-1 rounded-full mb-4">{post.location}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-handwriting leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-white text-lg mb-2 font-serif italic">{post.date}</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-gray-600 font-serif italic text-center journal-entry">
              <p>
                written from {post.location}, experiencing the world one moment at a time. these are my thoughts, reflections, and memories from this journey.
              </p>
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:font-handwriting prose-headings:text-primary prose-a:text-accent prose-p:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author Note */}
            <div className="my-12 p-6 bg-secondary bg-opacity-20 rounded-lg journal-entry">
              <p className="text-gray-700 italic mb-0">
                thanks for reading this entry from my travel journal! i wrote this while processing my experiences, trying to capture not just what i saw, but how it felt to be there. if you have any questions about this place or my experiences, feel free to reach out!
              </p>
            </div>
            
            {/* Tags and Social Sharing */}
            <div className="border-t border-b border-gray-200 py-6 mt-12 mb-12 flex flex-col md:flex-row justify-ends items-center">
              <Link href="/blog" className="text-accent text-gray-600 hover-underline-animation flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                back to all my stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-handwriting text-primary mb-4">
              more stories you might enjoy
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default BlogPost;
