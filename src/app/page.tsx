import { ProductService } from "@/services/ProductService";
import { Product } from "@/types/Product";
import "./globals.css"; 
import ProductsProvider from "@/pages/Home/ProductProvider";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  let initialProducts: Product[] = [];
  try {
    initialProducts = await ProductService.getAllProducts();
  } catch (error) {
    console.error("Failed to fetch initial products:", error);
  }
  
  return <ProductsProvider initialProducts={initialProducts} />
}