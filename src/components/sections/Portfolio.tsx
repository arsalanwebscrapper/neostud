import { useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "branding", label: "Branding" },
    { id: "marketing", label: "Marketing" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with advanced features and seamless UX",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "mobile",
      description: "Secure financial management app with real-time transactions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["React Native", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "branding",
      description: "Complete rebrand for tech startup including logo and guidelines",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      technologies: ["Figma", "Illustrator", "After Effects"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "marketing",
      description: "Viral marketing campaign that increased engagement by 300%",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Facebook Ads", "Instagram", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "web",
      description: "Analytics dashboard with real-time data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Healthcare App",
      category: "mobile",
      description: "Patient management system with telemedicine features",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 relative bg-card/20">
      <div className="container mx-auto px-4">
        {/* Architectural Section Header */}
        <div className="mb-24 scroll-reveal">
          <div className="flex items-center mb-8">
            <div className="w-8 h-px bg-accent mr-6" />
            <span className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extralight mb-8 max-w-3xl">
            PORTFOLIO <span className="gradient-text font-light">SHOWCASE</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl font-light leading-relaxed">
            Curated collection of transformative digital experiences we've architected for visionary brands.
          </p>
        </div>

        {/* Minimal Filter Buttons */}
        <div className="flex flex-wrap gap-8 mb-16 scroll-reveal">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative font-light tracking-widest text-sm uppercase transition-all duration-500 ${
                activeFilter === filter.id 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
              <div className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${
                activeFilter === filter.id ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          ))}
        </div>

        {/* Minimal Projects Grid */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group cursor-pointer scroll-reveal ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } md:flex items-center gap-16`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {project.featured && (
                    <div className="absolute top-6 left-6 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  )}
                  
                  {/* Minimal Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex space-x-8">
                      <button className="w-12 h-12 border border-accent/40 flex items-center justify-center hover:border-accent transition-colors duration-300">
                        <ExternalLink className="w-4 h-4 text-accent" />
                      </button>
                      <button className="w-12 h-12 border border-accent/40 flex items-center justify-center hover:border-accent transition-colors duration-300">
                        <Github className="w-4 h-4 text-accent" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex items-center mb-4">
                  <span className="text-6xl font-extralight text-accent/20">0{index + 1}</span>
                  {project.featured && (
                    <span className="ml-4 text-xs font-light tracking-[0.3em] text-accent uppercase">Featured</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-light mb-4 group-hover:text-accent transition-colors duration-500 tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-light tracking-wider text-muted-foreground uppercase border-b border-accent/20 pb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="w-8 h-px bg-accent/40 group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Load More */}
        <div className="text-center mt-24 scroll-reveal">
          <button className="group relative px-8 py-4 bg-transparent border border-accent/20 hover:border-accent transition-all duration-700">
            <span className="font-light tracking-widest text-sm uppercase">View Archive</span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          </button>
        </div>
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute top-1/3 right-0 w-px h-48 bg-accent/10" />
      <div className="absolute bottom-1/3 left-0 w-px h-24 bg-accent/20" />
    </section>
  );
};