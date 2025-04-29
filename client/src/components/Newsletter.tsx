import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email.trim()) {
      toast({
        title: "empty message?",
        description: "write something before sending 😊",
        variant: "destructive",
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const res = await fetch("https://formspree.io/f/xdkgnzek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: email }), // changed key to `message`
      });
  
      if (res.ok) {
        toast({
          title: "yay! I got your message!",
          description: "thanks for reaching out — can't wait to read it! ✨",
        });
        setEmail('');
      } else {
        toast({
          title: "hmm, something went wrong",
          description: "please try again later",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "network error",
        description: "couldn't send your message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <section className="py-16 bg-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-full opacity-10 transform -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full opacity-10 transform translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Paper airplane animation */}
      <div className="absolute top-1/4 left-0 animate-pulse opacity-20 transform -translate-x-1/2">
        <div className="text-5xl transform rotate-45">✈️</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-fun border-2 border-primary/10 relative">
            {/* Decorative postcard elements */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 transform rotate-45 translate-x-10 translate-y--10"></div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-4xl font-display text-primary mb-3 relative inline-block">
                Don't be shy, say hi!👋
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 transform -rotate-1"></div>
              </h2>
              <p className="text-lg text-gray-700 font-handwriting mt-6 max-w-2xl mx-auto">
              "Are you a fellow travel lover too? I'd love to hear from you! 
              <br />
              Drop me your <strong> name and a message </strong> — 
              <br />
              who knows, maybe our next great adventure is waiting for us to explore together! 🌍✈️"
              </p>
            </div>
            
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="bg-cream p-6 rounded-xl mb-6 relative space-y-4">
                
                {/* Message Box */}
                <textarea
                  placeholder="your message..."
                  className="w-full h-32 px-4 py-3 rounded-xl border-2 border-primary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 font-handwriting text-gray-700 resize-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className="btn-bounce bg-primary hover:bg-opacity-90 text-white font-handwriting text-lg px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message!</span>
                        <span>✨</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
