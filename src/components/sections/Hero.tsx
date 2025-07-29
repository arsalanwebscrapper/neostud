import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Architectural Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Geometric Floating Elements */}
      <div className="absolute top-20 left-[8%] w-1 h-32 bg-accent/20 floating" />
      <div className="absolute top-60 right-[12%] w-20 h-1 bg-accent/30 floating-delayed" />
      <div className="absolute bottom-40 left-[15%] w-8 h-8 border border-accent/40 rotate-45 floating" />
      <div className="absolute top-1/3 right-[8%] w-16 h-16 border-l border-t border-accent/20 floating-delayed" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Minimal Badge */}
        <div className="inline-flex items-center space-x-3 glass-effect px-6 py-3 mb-12 animate-fade-up">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-light tracking-wider uppercase text-muted-foreground">
            Elite Digital Agency
          </span>
        </div>

        {/* Architectural Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-8 animate-fade-up leading-none">
          <span className="block font-thin">DIGITAL</span>
          <span className="gradient-text font-light tracking-tighter">ARCHITECTURE</span>
          <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-light mt-4 tracking-widest">
            FOR THE FUTURE
          </span>
        </h1>

        {/* Minimal Subheading */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up font-light leading-relaxed">
          We architect digital experiences that transcend expectations,
          building the foundation for tomorrow's brands.
        </p>

        {/* Minimal CTA */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-fade-up">
          <button className="group relative px-8 py-4 bg-transparent border border-accent/20 hover:border-accent transition-all duration-700 hover:shadow-glow">
            <span className="font-light tracking-widest text-sm uppercase">Start Project</span>
            <ArrowRight className="ml-3 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          </button>
          
          <button className="group flex items-center text-muted-foreground hover:text-foreground transition-colors duration-500">
            <div className="w-12 h-12 mr-4 border border-muted-foreground/20 rounded-full flex items-center justify-center group-hover:border-foreground/40 transition-colors duration-500">
              <Play className="w-4 h-4 ml-0.5" />
            </div>
            <span className="font-light tracking-wide">View Process</span>
          </button>
        </div>

        {/* Minimal Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto animate-fade-up">
          {[
            { number: "500", metric: "PROJECTS" },
            { number: "98", metric: "SATISFACTION" },
            { number: "50", metric: "SPECIALISTS" },
            { number: "05", metric: "YEARS" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-extralight text-foreground mb-1 group-hover:text-accent transition-colors duration-500">
                {stat.number}
              </div>
              <div className="h-px w-8 bg-accent/40 mx-auto mb-2" />
              <div className="text-xs font-light tracking-[0.2em] text-muted-foreground uppercase">
                {stat.metric}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 floating">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-12 bg-accent/40" />
          <div className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase rotate-90 origin-center whitespace-nowrap">
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
};