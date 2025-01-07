import { Demographics } from '../../../utils/constants';
import { Product } from '../home/homeTypes';

export interface ProductListRequest {
  page: number;
  limit?: number;
  filter?: string;
  categoryId?: number;
  demographic?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  minPrice?: string;
  maxPrice?: string;
}

export interface ProductMeta {
  productCount: number;
  currentPage: number;
  totalPages: number;
}

export interface ProductListResponse {
  success: boolean;
  data: Product[];
  meta: ProductMeta;
}
