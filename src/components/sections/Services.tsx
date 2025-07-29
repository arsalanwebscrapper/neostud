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
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect hover-lift p-8 group cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl" />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to accelerate your growth?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our services can help you achieve your digital marketing goals
            </p>
            <button className="bg-gradient-accent hover:shadow-glow px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};