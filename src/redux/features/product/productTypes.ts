import { Product } from '../home/homeTypes';

export interface ProductListRequest {
  page: number;
  limit?: number;
  filter?: string;
  categoryId?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
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
