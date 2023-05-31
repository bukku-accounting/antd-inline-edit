import InlineEdit from '../components';

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
    //   primary: true,
    //   label: 'Button',
  },
};

export const InlineEditTextArea = {
  args: {
    initialValue: 'Hello World - Textarea',
    inputComponent: 'textarea',
    //   primary: true,
    //   label: 'Button',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InlineEditInitialState = {
  args: {
    inputComponent: 'input',
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
