import { ProductCreateNestedManyWithoutDiscountsInput } from "./ProductCreateNestedManyWithoutDiscountsInput";

export type DiscountCreateInput = {
  percent: string;
  products?: ProductCreateNestedManyWithoutDiscountsInput;
};
