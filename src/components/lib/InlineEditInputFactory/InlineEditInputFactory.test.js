import { userEvent } from '@storybook/testing-library';
import 'jest-styled-components';
import React, { useState } from 'react';
import { act } from 'react-test-renderer';
import {
  fireEvent, render, screen,
} from '../../testUtils/test-utils';
import { InlineEditInputFactory } from './InlineEditInputFactory';

const mockSetState = jest.fn();
const mockOnSave = jest.fn();
const mockOnUndo = jest.fn();

function Wrapper(props) {
  const [value, setValue] = useState(null);
  const { defaultLabel, onUndoClick } = props;
  return (
    <InlineEditInputFactory
      label={value}
      setLabel={(val) => {
        setValue(val);
        mockSetState();
      }}
      onSave={mockOnSave}
      onUndoClick={() => {
        setValue(defaultLabel);
        if (onUndoClick) { onUndoClick(); }
      }}
      defaultLabel={defaultLabel}
    />
  );
}

describe('InlineEditInputFactory', () => {
  describe('Initial Load', () => {
    test('renders on initial load - input', () => {
      render(
        <InlineEditInputFactory />,
      );

      const spanDOM = document.querySelector('.inline-edit__input.input-component');
      expect(spanDOM).toBeInTheDocument();
    });

    test('renders on initial load - textarea', () => {
      render(
        <InlineEditInputFactory
          component="textarea"
        />,
      );

      const spanDOM = document.querySelector('.inline-edit__input.textarea-component');
      expect(spanDOM).toBeInTheDocument();
    });
  });

  describe('Label Props', () => {
    test('should show text of label in input', () => {
      render(
        <InlineEditInputFactory
          label="test label"
        />,
      );

      const inputWithText = screen.getByDisplayValue('test label');
      expect(inputWithText).toBeInTheDocument();
    });
  });

  describe('setLabel & onSave Props - tested using onBlur, onChange, onPressEnter', () => {
    test('should call onSave after blur', async () => {
      const mockFn = jest.fn();

      render(
        <InlineEditInputFactory
          label="onBlur"
          onSave={mockFn}
        />,
      );

      const input = screen.getByDisplayValue('onBlur');
      fireEvent.blur(input);
      expect(mockFn).toHaveBeenCalled();
    });

    test('should call setLabel and have correct value onChange', async () => {
      render(
        <Wrapper />,
      );
      // fireEvent.change(inputDOM, { target: { value: 'test input value' } });
      const inputDOM = document.querySelector('.inline-edit__input.input-component .ant-input');
      act(() => {
        userEvent.type(inputDOM, 'user typed something');
      });

      expect(mockSetState).toHaveBeenCalled();
      expect(mockOnSave).not.toHaveBeenCalled(); // onSave will only be called when blur / enter
      expect(inputDOM.value).toBe('user typed something');
    });

    test('should call onSave onPressEnter', async () => {
      render(
        <Wrapper />,
      );
      // fireEvent.change(inputDOM, { target: { value: 'test input value' } });
      const inputDOM = document.querySelector('.inline-edit__input.input-component .ant-input');
      act(() => {
        userEvent.type(inputDOM, 'user typed something and press enter');
      });
      fireEvent.keyDown(inputDOM, { key: 'Enter', code: 13, charCode: 13 });

      expect(mockSetState).toHaveBeenCalled();
      expect(mockOnSave).toHaveBeenCalled();
      expect(inputDOM.value).toBe('user typed something and press enter');
    });
  });

  describe('is changed from defaultLabel', () => {
    test('should not show reset icon if label same as default label', () => {
      render(
        <InlineEditInputFactory
          label={null}
          defaultLabel={null}
        />,
      );

      const component = document.querySelector('.inline-edit__input.input-component');
      expect(component).not.toHaveClass('has-suffix');
      const resetIcon1 = document.querySelector('#inline-edit__undo-button');
      expect(resetIcon1).not.toBeVisible();

      render(
        <InlineEditInputFactory
          label={null}
          defaultLabel={null}
          component="textarea"
        />,
      );

      const textareaComponent = document.querySelector('.inline-edit__input.textarea-component');
      expect(textareaComponent).not.toHaveClass('has-suffix');
      const textareaWrapper = document.querySelector('.inline-edit__wrapper.inline-edit__textarea-wrapper');
      expect(textareaWrapper).not.toHaveClass('has-suffix');
      const resetIcon2 = document.querySelector('#inline-edit__undo-button');
      expect(resetIcon2).not.toBeVisible();
    });

    test('should show reset icon if label is different than default label', () => {
      render(
        <InlineEditInputFactory
          label="changed value"
          defaultLabel={null}
        />,
      );

      const component = document.querySelector('.inline-edit__input.input-component');
      expect(component).toHaveClass('has-suffix');
      const resetIcon1 = document.querySelector('#inline-edit__undo-button');
      expect(resetIcon1).toBeVisible();

      render(
        <InlineEditInputFactory
          label="changed value"
          defaultLabel={null}
          component="textarea"
        />,
      );
      const textareaComponent = document.querySelector('.inline-edit__input.textarea-component');
      expect(textareaComponent).toHaveClass('has-suffix');
      const textareaWrapper = document.querySelector('.inline-edit__wrapper.inline-edit__textarea-wrapper');
      expect(textareaWrapper).toHaveClass('has-suffix');
      const resetIcon2 = document.querySelector('#inline-edit__undo-button');
      expect(resetIcon2).toBeVisible();
    });

    test('should trigger onSave with defaultLabel as value when reset icon is pressed', async () => {
      act(() => {
        render(
          <Wrapper
            label="changed value"
            defaultLabel="default label"
            // onUndoClick={mockOnUndo}
          />,
        );
      });

      const resetIcon1 = document.querySelector('#inline-edit__undo-button');
      expect(resetIcon1).toBeVisible();
      act(() => {
        fireEvent.click(resetIcon1);
      });
      expect(mockOnUndo).not.toHaveBeenCalled();

      const inputDOM = screen.queryByDisplayValue('changed value');
      const inputDOM2 = screen.getByDisplayValue('default label');
      expect(inputDOM).not.toBeInTheDocument();
      expect(inputDOM2).toBeVisible();
    });
  });
});
