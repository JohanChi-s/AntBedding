import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TransporterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Time Spent" source="timeSpent" />
      </SimpleForm>
    </Create>
  );
};
