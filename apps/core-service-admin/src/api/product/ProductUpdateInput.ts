import { CommentUpdateManyWithoutProductsInput } from "./CommentUpdateManyWithoutProductsInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  comments?: CommentUpdateManyWithoutProductsInput;
  description?: string | null;
  discount?: DiscountWhereUniqueInput | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
