import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(195_100%_50%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(220_100%_60%/0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/50 rounded-full animate-bounce" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-ping" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
          <Star className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            #1 Digital Marketing Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          <span className="block">Transform Your</span>
          <span className="gradient-text">Digital Presence</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up">
          We craft exceptional digital experiences that drive growth, 
          engage audiences, and deliver measurable results for forward-thinking brands.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up">
          <Button size="lg" className="group bg-gradient-accent hover:shadow-glow">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="group">
            <Play className="mr-2 w-5 h-5" />
            Watch Our Story
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-up">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Expert Team Members" },
            { number: "5+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};