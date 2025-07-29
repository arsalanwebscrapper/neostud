import { Smartphone, Monitor, Search, TrendingUp, Palette, Zap } from "lucide-react";
import { Card } from "../ui/card";

export const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with our advanced SEO strategies and technical expertise.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"]
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Engage your audience across all platforms with compelling content and data-driven social media campaigns.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"]
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Create stunning, responsive websites that convert visitors into customers and deliver exceptional user experiences.",
      features: ["Custom Design", "Mobile-First", "E-commerce", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "PPC Advertising",
      description: "Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, and other platforms.",
      features: ["Campaign Strategy", "Ad Creation", "Budget Optimization", "Conversion Tracking"]
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Build a memorable brand identity that resonates with your audience and stands out in the marketplace.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with your business goals and drive sustainable growth.",
      features: ["Market Analysis", "Competitor Research", "Growth Planning", "Performance Metrics"]
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        {/* Architectural Section Header */}
        <div className="mb-24 scroll-reveal">
          <div className="flex items-center mb-8">
            <div className="w-8 h-px bg-accent mr-6" />
            <span className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extralight mb-8 max-w-3xl">
            STRATEGIC <span className="gradient-text font-light">SERVICES</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl font-light leading-relaxed">
            Precision-crafted solutions that elevate brands through strategic digital architecture.
          </p>
        </div>

        {/* Minimal Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background p-12 group cursor-pointer scroll-reveal hover-lift relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Minimal Icon */}
              <div className="w-12 h-12 border border-accent/20 flex items-center justify-center mb-8 group-hover:border-accent/60 transition-all duration-500">
                <service.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors duration-500" />
              </div>

              {/* Number */}
              <div className="text-6xl font-extralight text-accent/20 mb-4 group-hover:text-accent/40 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-light mb-6 group-hover:text-accent transition-colors duration-500 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm font-light">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs">
                    <div className="w-px h-4 bg-accent/30 mr-4" />
                    <span className="text-muted-foreground font-light tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Minimal CTA Section */}
        <div className="mt-32 scroll-reveal">
          <div className="border-t border-border pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-light mb-2 tracking-wide">
                  Ready to build something exceptional?
                </h3>
                <p className="text-muted-foreground font-light">
                  Let's architect your digital future together.
                </p>
              </div>
              <button className="mt-6 md:mt-0 group relative px-8 py-4 bg-transparent border border-accent/20 hover:border-accent transition-all duration-700">
                <span className="font-light tracking-widest text-sm uppercase">Start Conversation</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute top-1/4 left-0 w-px h-64 bg-accent/10" />
      <div className="absolute bottom-1/4 right-0 w-px h-32 bg-accent/20" />
    </section>
  );
};