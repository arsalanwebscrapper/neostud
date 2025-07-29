import { useEffect } from "react";
import { Navigation } from "../components/ui/navigation";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Portfolio } from "../components/sections/Portfolio";
import { Contact } from "../components/sections/Contact";

export const Home = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal");
    scrollElements.forEach((el) => observer.observe(el));

    // Smooth scroll for anchor links
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    };

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        smoothScroll(e);
      }
    });

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold gradient-text mb-4">NexusForge</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transforming businesses through innovative digital marketing strategies 
                and cutting-edge technology solutions.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">PPC Advertising</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 NexusForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};