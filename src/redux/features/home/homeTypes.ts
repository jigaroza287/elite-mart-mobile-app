import { Demographics, ProductSize } from '../../../utils/constants';

export interface Category {
  id: number;
  name: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  details: string[];
  demographic: Demographics;
  ratings?: number;
  createdAt: Date;
  updatedAt?: Date;
  variants: ProductVariant[];
}

export interface ProductVariant {
  id: number;
  productId: number;
  size: ProductSize;
  color: string;
  colorCode: string;
  sku: string;
  price: number;
  discount: number;
  stock: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface HomeResponse {
  success: boolean;
  data: {
    categories: Category[];
    topSellingProducts: Product[];
    newArrivals: Product[];
  };
}
