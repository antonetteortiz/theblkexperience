import React from 'react';

import { Delete } from './Delete';

export default {
  title: 'Example/Delete',
  component: Delete,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Delete {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Delete',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Delete',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Delete',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Delete',
};
