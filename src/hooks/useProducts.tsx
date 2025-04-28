"use client";

import { useState, useCallback } from "react";
import { Product } from "@/types/Product";
import { apiResponse } from "@/utils/api";
import { ErrorResult } from "@/types/ErrorResult";
// Define the interfaces locally since they were provided separately
export interface apiResponse {
  error?: string;
  message?: string;
}


export function useProducts(initialProducts: Product[] = []) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResult | null>(null);

  const fetchProducts = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as apiResponse;
        throw new Error(errorData.message || errorData.error || `Failed to fetch products: ${response.status}`);
      }
      const data = await response.json() as Product[];
      setProducts(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError({
        error: errorMessage,
        statusCode: 500
      });
      console.error("Error fetching products", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createProduct = useCallback(async (productData: Omit<Product, "id">): Promise<Product> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as apiResponse;
        throw new Error(errorData.error || errorData.message || `Failed to create product: ${response.status}`);
      }
      const newProduct = await response.json() as Product;
      setProducts(prevProducts => [newProduct, ...prevProducts]);
      return newProduct;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError({
        error: errorMessage,
        statusCode: 500
      });
      console.error('Error creating product', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteProduct = useCallback(async (id: number): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as apiResponse;
        throw new Error(errorData.error || errorData.message || `Failed to delete product: ${response.status}`);
      }
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError({
        error: errorMessage,
        statusCode: 500
      });
      console.error('Error deleting product', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    products,
    isLoading,
    error,
    fetchProducts,
    createProduct,
    deleteProduct
  };
}