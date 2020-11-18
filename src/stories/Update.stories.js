import React from 'react';

import { Update } from './Update';

export default {
  title: 'Example/Update',
  component: Update,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Update {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Update',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Update',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Update',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Update',
};
