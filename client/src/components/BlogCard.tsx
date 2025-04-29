import { Link } from "wouter";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // Generate a random small rotation for each blog card to create a more personal scrapbook feel
  const rotation = Math.random() * 3 * (Math.random() > 0.5 ? 1 : -1);
  
  return (
    <article className="blog-card bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300" style={{ transform: `rotate(${rotation}deg)` }}>
      <div className="relative overflow-hidden h-56">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-56 object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-dark text-xs px-3 py-1 rounded-full">{post.location}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-handwriting text-dark mb-2 hover:text-accent transition duration-300">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-500 text-sm mb-4 italic">{post.date}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-accent hover-underline-animation inline-flex items-center"
        >
          read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
