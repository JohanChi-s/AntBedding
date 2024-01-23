import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type TransporterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  timeSpent?: DecimalNullableFilter;
};
