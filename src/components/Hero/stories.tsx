import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Hero from '.';

export default {
  title: 'Hero',
  component: Hero
} as Meta;

export const Default: Story = () => <Hero />;
