"use client";

import styles from './HomePage.module.css';
import { Product as ProductType } from "@/types/Product";

interface HomeListProps {
  products: ProductType[];  
  isLoading: boolean;
  error: string | null;
}

export default function HomeList({ products = [], isLoading, error }: HomeListProps) {  
  if (isLoading) {
    return (
      <div className={styles.noProductsMessage}>
        <p>Loading products available at the moment.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.noProductsMessage}>
        <p>There was an error!</p>
        <p>{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.noProductsMessage}>
        <p>No products available at the moment.</p>
        <p>Please check back later for our latest arrivals.</p>
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
