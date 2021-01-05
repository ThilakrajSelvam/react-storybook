import { ComboFieldProps } from "../stories/ComboField";
import { TextFieldProps } from "../stories/TextField";

export const formComponentsMock: (TextFieldProps | ComboFieldProps)[] = [
  {
    fieldType: "textField",
    name: "email",
    size: "medium",
    type: "email",
    placeholder: "Email",
  },
  {
    fieldType: "textField",
    name: "password",
    size: "medium",
    type: "password",
    placeholder: "Password",
  },
  {
    fieldType: "textField",
    name: "firstname",
    placeholder: "Firstname",
    size: "medium",
    type: "text",
    value: "Demo",
  },
  {
    fieldType: "textField",
    name: "amount",
    placeholder: "amount",
    size: "small",
    type: "number",
  },
  {
    fieldType: "comboField",
    name: "cars",
    size: "small",
    options: [
      {
        value: 1,
        label: "BMW",
      },
      {
        value: 2,
        label: "Audi",
      },
      {
        value: 3,
        label: "Benz",
      },
    ],
  },
];
