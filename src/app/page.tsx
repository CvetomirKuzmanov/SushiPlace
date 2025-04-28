// src/app/page.tsx
// Don't include "use client" here - keep this as a server component
import HomeHero from "@/pages/Home/HomeHero";
import { ProductService } from "@/services/ProductService";
import { Product } from "@/types/Product";

// Set the correct revalidate option
export const dynamic = "force-dynamic";
// Use a simple number value for revalidate
export const revalidate = 0;

export default async function Home() {
  let initialProducts: Product[] = [];
  try {
    initialProducts = await ProductService.getAllProducts();
  } catch (error) {
    console.error("Failed to fetch initial products:", error);
  }
  
  return <HomeHero initialProducts={initialProducts} />;
}