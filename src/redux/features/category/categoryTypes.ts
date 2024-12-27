import { Category } from '../home/homeTypes';

export interface CategoriesResponse {
  success: boolean;
  data: Category[];
}
