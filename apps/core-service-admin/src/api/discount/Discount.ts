import { Product } from "../product/Product";

export type Discount = {
  createdAt: Date;
  id: string;
  percent: string;
  products?: Array<Product>;
  updatedAt: Date;
};
