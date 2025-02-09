export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  banner: string;
  description: string;
  images?: string[];
  price: number;
  discount: Discount;
  rating: number;
};
