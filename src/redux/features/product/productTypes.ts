import { Product } from '../home/homeTypes';

export interface ProductListRequest {
  page: number;
  limit?: number;
  filter?: string;
  categoryId?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export interface ProductListResponse {
  success: boolean;
  data: Product[];
  currentPage: number;
  totalPages: number;
}
