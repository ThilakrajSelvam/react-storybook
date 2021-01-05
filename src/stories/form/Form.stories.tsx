import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Form, FormProps } from "./Form";
import { formComponentsMock } from "../../mock/formComponentsMock";

export default {
  title: "Example/Form",
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args}></Form>;

export const ExampleForm = Template.bind({});
ExampleForm.args = {
  formComponents: formComponentsMock,
};
