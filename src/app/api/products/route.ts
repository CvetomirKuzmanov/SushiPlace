import { ProductService } from "@/services/ProductService";
import { apiResponse } from "@/utils/api";
import { handleError } from "@/utils/error";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const products = await ProductService.getAllProducts();
    return apiResponse.success(products);
  } catch (err) {
    return handleError(err);
  }
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const productData = await request.json();
    const newProduct = await ProductService.createProduct(productData);
    return apiResponse.success(newProduct);
  } catch (err) {
    return handleError(err);
  }
}