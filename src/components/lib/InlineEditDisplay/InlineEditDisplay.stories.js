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
    placeholder: 'Hello World - Placeholder',
    // placeholder: globals.DEFAULT_PLACEHOLDER,
    // displayRenderer: (label) => <h3>{label}</h3>
    displayRenderer: (label, placeholder) => {
      if (label) { return (<h3>{label}</h3>); }
      if (placeholder && !label) { return <h1>{placeholder}</h1>; }
      return null;
    },

  },
};
