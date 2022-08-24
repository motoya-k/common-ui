import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "atoms/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Alert",
};
