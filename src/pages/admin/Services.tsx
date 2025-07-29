import { useState } from "react";
import { Plus, Edit, Trash2, Search, Settings } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  category: string;
  status: 'active' | 'draft' | 'archived';
  popular: boolean;
}

export const Services = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with our advanced SEO strategies and technical expertise.",
      icon: "Search",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
      price: "$1,200/month",
      category: "Marketing",
      status: 'active',
      popular: true
    },
    {
      id: 2,
      title: "Web Development",
      description: "Create stunning, responsive websites that convert visitors into customers and deliver exceptional user experiences.",
      icon: "Monitor",
      features: ["Custom Design", "Mobile-First", "E-commerce", "Performance Optimization"],
      price: "$5,000-15,000",
      category: "Development",
      status: 'active',
      popular: false
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Engage your audience across all platforms with compelling content and data-driven social media campaigns.",
      icon: "Smartphone",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
      price: "$800/month",
      category: "Marketing",
      status: 'active',
      popular: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    icon: string;
    features: string;
    price: string;
    category: string;
    status: 'active' | 'draft' | 'archived';
    popular: boolean;
  }>({
    title: "",
    description: "",
    icon: "",
    features: "",
    price: "",
    category: "",
    status: 'active',
    popular: false
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Marketing", label: "Marketing" },
    { value: "Development", label: "Development" },
    { value: "Design", label: "Design" },
    { value: "Strategy", label: "Strategy" }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceData = {
      ...formData,
      features: formData.features.split(',').map(feature => feature.trim()),
      id: editingService?.id || Date.now()
    };

    if (editingService) {
      setServices(prev => prev.map(s => s.id === editingService.id ? serviceData as Service : s));
    } else {
      setServices(prev => [...prev, serviceData as Service]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "",
      features: "",
      price: "",
      category: "",
      status: 'active',
      popular: false
    });
    setEditingService(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      ...service,
      features: service.features.join(', ')
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(prev => prev.filter(s => s.id !== id));
    }
  };

  const togglePopular = (id: number) => {
    setServices(prev => prev.map(s => 
      s.id === id ? { ...s, popular: !s.popular } : s
    ));
  };

  const toggleStatus = (id: number) => {
    setServices(prev => prev.map(s => 
      s.id === id ? { 
        ...s, 
        status: s.status === 'active' ? 'draft' : 'active' 
      } : s
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Services Management</h1>
          <p className="text-muted-foreground">Manage your service offerings and pricing</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-gradient-accent hover:shadow-glow mt-4 sm:mt-0"
              onClick={() => setEditingService(null)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          
          <DialogContent className="glass-effect max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingService ? "Edit Service" : "Add New Service"}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Service Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="icon">Icon Name</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                    placeholder="e.g., Search, Monitor, Smartphone"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="e.g., $1,200/month"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="features">Features (comma-separated)</Label>
                <Input
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.popular}
                    onChange={(e) => setFormData(prev => ({ ...prev, popular: e.target.checked }))}
                    className="rounded border-gray-300"
                  />
                  <span>Popular Service</span>
                </label>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-gradient-accent">
                  {editingService ? "Update" : "Create"} Service
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="glass-effect p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="glass-effect p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    {service.category}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {service.popular && (
                  <Badge className="bg-gradient-accent text-xs">
                    Popular
                  </Badge>
                )}
                <Badge 
                  variant={service.status === 'active' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {service.status}
                </Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {service.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Features:</h4>
              <div className="flex flex-wrap gap-1">
                {service.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {service.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{service.features.length - 3}
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-accent">{service.price}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleStatus(service.id)}
                  className="text-xs"
                >
                  {service.status === 'active' ? 'Deactivate' : 'Activate'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => togglePopular(service.id)}
                  className={`text-xs ${service.popular ? 'text-accent' : ''}`}
                >
                  {service.popular ? '★' : '☆'}
                </Button>
              </div>
              
              <div className="flex space-x-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(service)}
                >
                  <Edit className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(service.id)}
                  className="hover:text-red-500"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <Card className="glass-effect p-12 text-center">
          <div className="text-muted-foreground">
            <Settings className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No services found matching your criteria.</p>
          </div>
        </Card>
      )}
    </div>
  );
};