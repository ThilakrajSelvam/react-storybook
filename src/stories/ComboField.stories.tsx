import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ComboField, ComboFieldProps } from "./ComboField";

export default {
  title: "Example/ComboField",
  component: ComboField,
} as Meta;

const Template: Story<ComboFieldProps> = (args) => (
  <ComboField {...args}></ComboField>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  options: [
    {
      value: 1,
      label: "BMW",
    },
    {
      value: 1,
      label: "Audi",
    },
    {
      value: 1,
      label: "Benz",
    },
  ],
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  options: [
    {
      value: 1,
      label: "BMW",
    },
    {
      value: 1,
      label: "Audi",
    },
    {
      value: 1,
      label: "Benz",
    },
  ],
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  options: [
    {
      value: 1,
      label: "BMW",
    },
    {
      value: 1,
      label: "Audi",
    },
    {
      value: 1,
      label: "Benz",
    },
  ],
};
