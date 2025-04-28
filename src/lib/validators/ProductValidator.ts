import { Product } from "@/types/Product"


export const validateProduct = (data: Product) => {
  const errors: { [key: string]: string } = {};

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (data.name && data.name.length > 255) {
    errors.name = 'Name must be less than 255 characters long';
  }

  if (data.description && data.description.length > 1000) {
    errors.description = 'Description must be less than 1000 characters long';
  }

  if (!data.category || data.category.trim() === '') {
    errors.category = 'Category is required';
  }

  if (typeof data.price !== 'number' || data.price <= 0) {
    errors.price = 'Price must be a positive number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
