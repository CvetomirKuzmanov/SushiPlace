    import { ProductModel } from "@/models/ProductModel";
    import { validateProduct } from "@/lib/validators/ProductValidator";
    import { Product } from "@/types/Product";

    export const ProductService = {
    getAllProducts: async () => {
        return await ProductModel.findAll();
    },
    
    getProductById: async (id: number) => { 
        return await ProductModel.findById(id);
    },
    
    createProduct: async (productData: Product) => {
        const validation = validateProduct(productData);
        if (!validation.isValid) {
        throw new Error(JSON.stringify(validation.errors));
        }
        
        return await ProductModel.create(productData);
    },
    
    deleteProduct: async (id: number) => {  // id is a number (auto-increment)
        return await ProductModel.delete(id); 
    },
    
    updateProduct: async (id: number, updates: Product) => {  // id is a number (auto-increment)
        const validation = validateProduct(updates);
        if (!validation.isValid) {
        throw new Error(JSON.stringify(validation.errors));
        }
        return await ProductModel.update(id, updates);
    }
    }
