import { SortOrder } from "../../util/SortOrder";

export type TransporterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  timeSpent?: SortOrder;
  updatedAt?: SortOrder;
};
