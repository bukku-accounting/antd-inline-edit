import React from 'react';
import InlineEdit from '.';

export default {
  title: 'Component/InlineEdit',
  component: InlineEdit,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InlineEditInput = {
  args: {
    initialValue: 'Hello World - Input',
    inputComponent: 'input',
  },
};

export const InlineEditTextArea = {
  args: {
    initialValue: 'Hello World - Textarea',
    inputComponent: 'textarea',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InlineEditDefaultValue = {
  args: {
    inputComponent: 'input',
    defaultValue: 'Default Value',
    initialValue: 'Initial Value',
  },
};

export const InlineEditStartWithEditViewOpen = {
  args: {
    startWithEditViewOpen: true,
  },
};

export const InlineEditDisplayRenderer = {
  args: {
    displayRenderer: (label) => (<h2>{label}</h2>),
  },
};

export const InlineEditTextAreaProps = {
  args: {
    displayRenderer: (label) => (<h2>{label}</h2>),
    // onSave: mockOnSave,
    inputComponent: 'textarea',
    startWithEditViewOpen: true,
    textAreaProps: {
      className: 'henlooo',
      autoSize: { minRows: 2, maxRows: 6 },
      showCount: true,
    },
  },
};
