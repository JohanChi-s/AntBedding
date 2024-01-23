import { Product } from "../product/Product";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  updatedAt: Date;
  user?: User;
};
