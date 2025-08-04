import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutForm } from '@/components/CheckoutForm';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/contexts/CartContext';

// Import product images
import headphonesImg from '@/assets/headphones.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import laptopImg from '@/assets/laptop.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: headphonesImg,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Audio"
  },
  {
    id: 2,
    name: "Latest Smartphone",
    price: 899.99,
    image: smartphoneImg,
    description: "Flagship smartphone with advanced camera system and 5G connectivity.",
    category: "Mobile"
  },
  {
    id: 3,
    name: "Professional Laptop",
    price: 1499.99,
    image: laptopImg,
    description: "High-performance laptop perfect for work and creative projects.",
    category: "Computers"
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 399.99,
    image: smartwatchImg,
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    category: "Wearables"
  },
  {
    id: 5,
    name: "Wireless Earbuds Pro",
    price: 199.99,
    image: headphonesImg,
    description: "Compact wireless earbuds with crystal clear sound and quick charging.",
    category: "Audio"
  },
  {
    id: 6,
    name: "Gaming Smartphone",
    price: 799.99,
    image: smartphoneImg,
    description: "Powerful gaming phone with high refresh rate display and cooling system.",
    category: "Mobile"
  }
];

const categories = ["All", "Audio", "Mobile", "Computers", "Wearables"];

export const Store: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckingOut(true);
  };

  const handleBackToStore = () => {
    setIsCheckingOut(false);
  };

  if (isCheckingOut) {
    return <CheckoutForm onBack={handleBackToStore} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Premium Tech Collection
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Discover the latest in technology with our curated selection of premium devices and accessories.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-elegant animate-slide-up"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-primary text-primary-foreground" 
                  : "hover:border-primary hover:bg-primary/5"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} products
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        onCheckout={handleCheckout}
      />
    </div>
  );
};