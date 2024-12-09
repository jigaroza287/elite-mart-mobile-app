import normalize from 'react-native-normalize';

export type Demographics = 'Men' | 'Women' | 'Kids' | 'Unisex';
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ProductListFilters = 'top_rated' | 'new_arrivals' | 'discounts';

const productCardWidth = normalize(140);
const productCardImageRatio = 0.7;

export default {
  productCardWidth,
  productCardImageRatio,
};
