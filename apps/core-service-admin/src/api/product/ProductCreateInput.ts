import { CommentCreateNestedManyWithoutProductsInput } from "./CommentCreateNestedManyWithoutProductsInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  comments?: CommentCreateNestedManyWithoutProductsInput;
  description?: string | null;
  discount?: DiscountWhereUniqueInput | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
