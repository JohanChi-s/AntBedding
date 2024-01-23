import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  discount?: DiscountWhereUniqueInput;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
