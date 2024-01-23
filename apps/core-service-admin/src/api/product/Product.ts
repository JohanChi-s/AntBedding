import { Comment } from "../comment/Comment";
import { Discount } from "../discount/Discount";
import { Order } from "../order/Order";

export type Product = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  discount?: Discount | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
