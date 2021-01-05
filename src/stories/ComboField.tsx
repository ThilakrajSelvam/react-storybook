import React, { ChangeEvent } from "react";
import "./ComboField.css";

export interface ComboFieldOptionProps {
  value: number;
  label: string;
}
export interface ComboFieldProps {
  fieldType?: "comboField";
  name: string;
  size: "small" | "medium" | "large";
  options?: ComboFieldOptionProps[];
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const ComboField: React.FC<ComboFieldProps> = ({
  size,
  options,
  value,
  ...rest
}) => {
  return (
    <select
      className={`storybook_combo storybook_combo_${size}`}
      value={value}
      {...rest}
    >
      {options &&
        options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
    </select>
  );
};
