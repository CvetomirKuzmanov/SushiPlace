import { supabase } from "../utils/supabase/Client";
import { Product } from "../types/Product";  

export const ProductModel = {
  findAll: async (): Promise<Product[]> => {
    const { data, error } = await supabase
      .from('food')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    console.log("Fetched Products:", data);  // Log fetched data for debugging
    return data as Product[];
  },

  findById: async (id: number): Promise<Product | null> => {  // id is a string (UUID)
    const { data, error } = await supabase
      .from('food')
      .select('*')
      .eq('id', id)
      .single();  

    if (error) {
      throw new Error(error.message);
    }

    return data as Product | null;
  },

  create: async ({ name, description, price, image_url, category }: Omit<Product, 'id'>): Promise<Product> => {
    const { data, error } = await supabase
      .from('food')
      .insert([{ name, description, price, image_url, category }])
      .single();  

    if (error) {
      throw new Error(error.message);
    }

    return data as Product;
  },

  update: async (id: number, updates: Partial<Omit<Product, 'id'>>): Promise<Product> => {  // id is a string (UUID)
    const { data, error } = await supabase
      .from('food')
      .update(updates)
      .eq('id', id)
      .single(); 

    if (error) {
      throw new Error(error.message);
    }

    return data as Product;
  },

  delete: async (id: number): Promise<boolean> => {
    const { data, error } = await supabase
      .from('food')
      .delete()
      .eq('id', id)
      .select(); 
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data && data.length > 0; 
  }
}
