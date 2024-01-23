import { Decimal } from "decimal.js";

export type TransporterCreateInput = {
  name?: string | null;
  price?: number | null;
  timeSpent?: Decimal | null;
};
