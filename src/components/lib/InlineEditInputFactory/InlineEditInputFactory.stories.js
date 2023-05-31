import { InlineEditInputFactory } from './InlineEditInputFactory';

export default {
  title: 'Component/InlineEditInputFactory',
  component: InlineEditInputFactory,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // decorators: [
  //   (Story) => (
  //     <StyleWrapper>
  //       <div
  //         className="inline-edit__textarea-wrapper"
  //         style={{
  //           height: 30,
  //           border: '1px solid whitesmoke',
  //         }}
  //       >
  //         <Story />
  //       </div>
  //     </StyleWrapper>
  //   ),
  // ],
};

export const InlineEditInputFactoryDefault = {
  args: {
    component: 'input', // or 'textarea',
    label: '',
    // initialLabel,
    defaultLabel: null,
    onSave: () => {},
    setLabel: () => {},
    onUndoClick: () => {},
    inputRef: null,
    maxLength: 255,
  },
};
