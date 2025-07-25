import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BlogListing from "@/pages/BlogListing";
import BlogPost from "@/pages/BlogPost";
import Gallery from "@/pages/Gallery";
import LocationGallery from "@/pages/LocationGallery";
import About from "@/pages/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={BlogListing} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/gallery/:slug" component={LocationGallery} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
