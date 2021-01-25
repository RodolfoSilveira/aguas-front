import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ModalRegister, { Props } from '.';

export default {
  title: 'ModalRegister',
  component: ModalRegister
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default: Story<Props> = (args) => <ModalRegister {...args} />;
