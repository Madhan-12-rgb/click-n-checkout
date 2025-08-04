import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-card-foreground">{product.name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ${product.price}
            </span>
            <Button 
              onClick={() => addToCart(product)}
              className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-lg transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};