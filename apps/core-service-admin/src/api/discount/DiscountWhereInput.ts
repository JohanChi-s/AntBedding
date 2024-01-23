import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type DiscountWhereInput = {
  id?: StringFilter;
  percent?: StringFilter;
  products?: ProductListRelationFilter;
};
