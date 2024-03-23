export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
};

export type Cart = {
  id: number;
  productId: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
};
