export type TProduct = {
  image: string[];
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  discount?: number;
  offer?: boolean;
  offerPrice?: number;
  isDeleted?: boolean;
};
