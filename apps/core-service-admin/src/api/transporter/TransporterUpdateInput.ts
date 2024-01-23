import { Decimal } from "decimal.js";

export type TransporterUpdateInput = {
  name?: string | null;
  price?: number | null;
  timeSpent?: Decimal | null;
};
