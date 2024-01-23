import { Decimal } from "decimal.js";

export type Transporter = {
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  timeSpent: Decimal | null;
  updatedAt: Date;
};
