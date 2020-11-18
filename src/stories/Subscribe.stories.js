import React from 'react';

import { Subscribe } from './Subscribe';

export default {
  title: 'Example/Subscribe',
  component: Subscribe,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Subscribe {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Subscribe',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Subscribe',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Subscribe',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Subscribe',
};
