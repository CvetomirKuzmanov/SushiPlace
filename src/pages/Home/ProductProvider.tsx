"use client";

import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import styles from "./HomePage.module.css";
import HomeHero from "./HomeHero";
import HomeList from "./HomeList";
import { Product } from "@/types/Product";

interface ProductsProviderProps {
  initialProducts: Product[];
}

export default function ProductsProvider({ initialProducts = [] }: ProductsProviderProps) {
  const { products, isLoading, error, fetchProducts } = useProducts(initialProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <HomeHero />
      <section className={styles.products}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>

          <HomeList
            products={products}
            isLoading={isLoading}
            error={
              error
                ? typeof error === "string"
                  ? error
                  : "error" in error
                  ? error.error
                  : "An unknown error occurred"
                : null
            }
          />
        </div>
      </section>
    </>
  );
}
