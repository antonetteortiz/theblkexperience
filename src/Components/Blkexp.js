import React from "react";
import { Button } from "./Button";
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Button {...args} />;
export const Womens = Template.bind({});
Womens.args = {
  primary: true,
  size: "small",
  label: "Button",
};
export const Mens = Template.bind({});
Mens.args = {
  size: "small",
  label: "Button",
};
export const Home = Template.bind({});
Home.args = {
  size: "small",
  label: "Button",
};
export const Blk = Template.bind({});
Home.args = {
  size: "large",
  label: "Button",
};
export const Create = Template.bind({});
Home.args = {
  size: "small",
  label: "Button",
};
