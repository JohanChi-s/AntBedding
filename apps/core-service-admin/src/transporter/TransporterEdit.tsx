import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TransporterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Time Spent" source="timeSpent" />
      </SimpleForm>
    </Edit>
  );
};
