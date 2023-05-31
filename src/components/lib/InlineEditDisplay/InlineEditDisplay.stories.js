import React from 'react';
import { InlineEditDisplay } from './InlineEditDisplay';

export default {
  title: 'Component/InlineEditDisplay',
  component: InlineEditDisplay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export const InlineEditDisplayDisplayRenderer = {
  args: {
    onClick: () => {},
    // label: 'Hello World - Display',
    displayRenderer: (label) => (<h3>{label}</h3>),
  },
};
