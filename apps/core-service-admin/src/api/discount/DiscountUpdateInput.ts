import { ProductUpdateManyWithoutDiscountsInput } from "./ProductUpdateManyWithoutDiscountsInput";

export type DiscountUpdateInput = {
  percent?: string;
  products?: ProductUpdateManyWithoutDiscountsInput;
};
