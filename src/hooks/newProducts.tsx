'use client';

import { Product } from '@/types/products';
import { useEffect, useState } from 'react';

export const useNewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/products/new`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return products;
};
