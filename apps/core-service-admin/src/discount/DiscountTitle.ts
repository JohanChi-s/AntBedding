import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "percent";

export const DiscountTitle = (record: TDiscount): string => {
  return record.percent?.toString() || String(record.id);
};
