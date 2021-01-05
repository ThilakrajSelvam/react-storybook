import React, { ChangeEvent, useState } from "react";
import { Button } from "../Button";
import { ComboField, ComboFieldProps } from "../ComboField";
import { TextField, TextFieldProps } from "../TextField";
import "./Form.css";

export interface FormProps {
  formComponents: (TextFieldProps | ComboFieldProps)[];
  onSubmit: (data: Data) => void;
  onReset: () => void;
}

export interface Data {
  [name: string]: string | number | undefined;
}

interface FormState {
  isValid: boolean;
  data: Data;
}

export const Form: React.FC<FormProps> = ({
  formComponents,
  onSubmit,
  onReset,
}) => {
  const getInitialFormState = () => {
    let intialFormState: FormState;
    let initialFormData: Data = {};

    formComponents.forEach((formComponent) => {
      formComponent.hasOwnProperty("value")
        ? (initialFormData[formComponent.name] = formComponent.value)
        : (initialFormData[formComponent.name] = "");
    });

    intialFormState = {
      isValid: true,
      data: initialFormData,
    };

    return intialFormState;
  };

  const [formState, setformState] = useState<FormState>(() =>
    getInitialFormState()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState.data);
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    onReset();
    setformState(getInitialFormState());
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setformState((prevState) => {
      return {
        ...prevState,
        data: { ...prevState.data, [name]: value },
      };
    });
  };

  return (
    <form
      className="form_container"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      {formComponents.map(({ fieldType, name, ...rest }, index) => {
        switch (fieldType) {
          case "textField":
            return (
              <TextField
                key={index}
                name={name}
                onChange={handleChange}
                {...rest}
                value={formState.data[name]}
              ></TextField>
            );
          case "comboField":
            return (
              <ComboField
                key={index}
                name={name}
                onChange={handleChange}
                value={formState.data[name]}
                {...rest}
              ></ComboField>
            );
          default:
            return <> </>;
        }
      })}
      <div>
        <Button label="Clear" size="large" type="reset"></Button>
        <Button label="Save" primary size="large" type="submit"></Button>
      </div>
    </form>
  );
};
