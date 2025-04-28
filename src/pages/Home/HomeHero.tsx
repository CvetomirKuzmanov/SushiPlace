"use client";
import { useEffect } from "react";
import styles from "./HomePage.module.css";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/Product"; // Import your Product type

// Define the props interface with proper typing
interface HomeHeroProps {
  initialProducts?: Product[];
}

export default function HomeHero({ initialProducts = [] }: HomeHeroProps) {
  const { products, isLoading, error, fetchProducts } = useProducts(
    initialProducts || []
  );
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  console.log(products);
  
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img
          src="./"
          alt="Sushi background"
        />
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Experience Authentic Japanese Cuisine
          </h1>
          <p className={styles.heroDescription}>
            Fresh ingredients, masterful preparation, and
            unforgettable flavors await you at Sakura Sushi.
          </p>
          <a href="#" className={styles.heroButton}>
            View Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}