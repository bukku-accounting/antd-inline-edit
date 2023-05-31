import React from 'react';
import { HistoryOutlined } from '@ant-design/icons';
import { InputSuffix } from './InputSuffix';
import { StyleWrapper } from '../../StyleWrapper';

export default {
  title: 'Component/InputSuffix',
  component: InputSuffix,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <StyleWrapper>
        <div
          className="inline-edit__textarea-wrapper"
          style={{
            height: 30,
            border: '1px solid whitesmoke',
          }}
        >
          <Story />
        </div>
      </StyleWrapper>
    ),
  ],
};

export const InputSuffixInputIsChanged = {
  args: {
    isChanged: true,
    onUndoClick: undefined,
    component: 'input',
  },
};

export const InputSuffixInputIsNotChanged = {
  args: {
    isChanged: false,
    onUndoClick: undefined,
    component: 'input',
  },
};

export const InputSuffixInputCustomIcon = {
  args: {
    isChanged: true,
    onUndoClick: undefined,
    component: 'input',
    icon: <HistoryOutlined className="history-oulined-icon" />,
  },
};

export const InputSuffixTextareaIsChanged = {
  args: {
    isChanged: true,
    onUndoClick: undefined,
    component: 'textarea',
  },
};
