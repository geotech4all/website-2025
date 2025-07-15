
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PRODUCTS } from "@/lib/constants";
import NotifyForm from "@/components/NotifyForm";
import { LogoIcon } from "@/components/LogoIcon";
import { Mail, ArrowRight } from "lucide-react";

// Add SoilCloud product
const SOILCLOUD = {
  id: "soilcloud",
  name: "SoilCloud",
  description: "Cloud-based geotechnical and geoenvironmental data management platform",
  longDescription: "SoilCloud is a comprehensive cloud-based platform for managing geotechnical and geoenvironmental data. It provides tools for data acquisition, analysis, visualization, and reporting, streamlining workflow for geotechnical engineers and environmental consultants.",
  features: ["Data Management", "Visualization", "Reporting", "Collaboration"]
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<(typeof PRODUCTS[0] | typeof SOILCLOUD) | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  
  // Featured products for the hero section
  const featuredProducts = [
    {
      id: "dar-zarrouk",
      name: "Dar Zarrouk Analyser",
      description: "Advanced tool for analyzing electrical resistivity data",
      longDescription: "Powerful tool for processing and interpreting vertical electrical sounding data to derive dar-zarrouk parameters essential for hydrogeological and geotechnical investigations."
    },
    {
      id: "soilcloud",
      name: "SoilCloud",
      description: "Cloud-based geotechnical and geoenvironmental data management platform",
      longDescription: "Comprehensive platform for managing, analyzing, and visualizing geotechnical and geoenvironmental data, designed to streamline workflows and enhance collaboration."
    }
  ];

  // Auto-swipe animation for hero section
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % featuredProducts.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const handleContactSales = () => {
    window.location.href = "mailto:support@geotech4all.com?subject=Inquiry about SoilCloud";
  };
  
  const handleExploreClick = (productId: string) => {
    if (productId === "soilcloud") {
      window.open("https://soilcloud.tech/", "_blank");
    } else {
      setSelectedProduct(
        productId === "soilcloud" 
          ? SOILCLOUD 
          : PRODUCTS.find(p => p.id === productId) || null
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Products</h1>
            <p className="text-xl text-gray-600">
              Explore our suite of innovative geoscience applications designed to streamline your workflow.
              Sign up to be notified when they launch!
            </p>
          </div>
          
          {/* Featured Products Auto-Swipe Hero */}
          <div className="mt-12 relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center ${
                  index === featuredIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1574629173169-7019b64ac722')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                }}
              >
                <div className="container-wide text-white p-8">
                  <div className="flex items-center gap-6 mb-4">
                    <LogoIcon productId={product.id} darkBackground />
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                  </div>
                  <p className="text-xl max-w-2xl mb-8">{product.longDescription}</p>
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-200"
                    onClick={() => handleExploreClick(product.id)}
                  >
                    Explore Now <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            ))}
            
            {/* Indicator dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {featuredProducts.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === featuredIndex ? 'bg-white' : 'bg-white/40'}`}
                  onClick={() => setFeaturedIndex(index)}
                  aria-label={`View featured product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Complete Product Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <div className="relative p-8 flex items-center justify-center bg-white border-b">
                  <LogoIcon 
                    productId={product.id} 
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Fix: Check if features exists before trying to access it */}
                  <p className="text-sm text-gray-500">
                    {/* Product features aren't defined in the PRODUCTS type, so we won't render them */}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {/* SoilCloud Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
              <div className="relative p-8 flex items-center justify-center bg-white border-b">
                <LogoIcon 
                  productId="soilcloud"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{SOILCLOUD.name}</CardTitle>
                <CardDescription>{SOILCLOUD.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500">
                  {SOILCLOUD.features?.join(' • ')}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleExploreClick("soilcloud")}
                >
                  Visit SoilCloud
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
              <DialogDescription>
                {selectedProduct.longDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              {selectedProduct.id === "soilcloud" ? (
                <Button 
                  className="w-full flex items-center gap-2" 
                  onClick={handleContactSales}
                >
                  <Mail size={16} />
                  Contact Sales Team
                </Button>
              ) : (
                <NotifyForm
                  productId={selectedProduct.id}
                  productName={selectedProduct.name}
                  onSuccess={() => setSelectedProduct(null)}
                />
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Products;
