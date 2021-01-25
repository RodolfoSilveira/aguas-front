import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Main, { Props } from '.';

export default {
  title: 'Main',
  component: Main
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default: Story<Props> = (args) => <Main {...args} />;
