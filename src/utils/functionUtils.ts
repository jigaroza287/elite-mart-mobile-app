import { ProductListFilters } from './constants';

const productScreenTitle = (filter?: ProductListFilters): string => {
  switch (filter) {
    case 'top_rated':
      return 'Top Rated Products';
    case 'new_arrivals':
      return 'New Arrivals';
    case 'discounts':
      return 'Discounted Products';

    default:
      return '';
  }
};

const priceWithFormat = (price?: string | Number): string => {
  return price ? `$${price}` : '';
};

export { priceWithFormat, productScreenTitle };
