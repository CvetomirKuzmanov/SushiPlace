"use client";
import { useEffect } from "react";
import styles from "./HomePage.module.css";
import { Product } from "@/types/Product";
import { useProducts } from "@/hooks/useProducts";

interface HomeProductsProps {
  initialProducts?: Product[];
}

export default function HomeProducts({ initialProducts = [] }: HomeProductsProps) {
  const { products, isLoading, error } = useProducts(initialProducts || []);

  if (isLoading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading products: {error}</div>;
  }

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Signature Dishes</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.imageUrl} alt={product.name} />
                {product.badge && (
                  <div className={styles.productBadge}>{product.badge}</div>
                )}
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                  <a href="#" className={styles.productButton}>
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}