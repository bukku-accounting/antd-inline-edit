import { userEvent } from '@storybook/testing-library';
import 'jest-styled-components';
import React from 'react';
import { act } from 'react-test-renderer';
import InlineEdit from './index';
import globals from './lib/globals';
import {
  fireEvent, render, screen,
} from './test-utils';

const mockOnSave = jest.fn();

describe('InlineEdit', () => {
  describe('Initial Load', () => {
    test('renders on initial load - display DOM', () => {
      render(
        <InlineEdit />,
      );

      const displayDOM = document.querySelector('.inline-edit__display');
      const placeholder = screen.getByText(globals.DEFAULT_PLACEHOLDER);
      expect(displayDOM).toBeInTheDocument();
      expect(placeholder).toBeInTheDocument();

      const editDOM = document.querySelector('.inline-edit__input-wrapper');
      expect(editDOM).not.toBeInTheDocument();
    });
  });

  describe('onClick', () => {
    test('onClick will change DisplayDOM -> EditDOM', async () => {
      render(
        <InlineEdit />,
      );

      const displayDOM = document.querySelector('.inline-edit__display');
      expect(displayDOM).toBeInTheDocument();

      fireEvent.click(displayDOM);

      const editDOM = document.querySelector('.inline-edit__input-wrapper');
      expect(editDOM).toBeInTheDocument();

      // check if has autofocus
      const inputDOM = document.querySelector('.inline-edit__input .ant-input');
      expect(inputDOM).toHaveFocus();
    });
  });
});

describe('onSave props - onBlur', () => {
  test('should call onSave after blur', async () => {
    render(
      <InlineEdit
        initialValue="onBlur"
        onSave={mockOnSave}
        startWithEditViewOpen
      />,
    );

    const input = screen.getByDisplayValue('onBlur');
    fireEvent.blur(input);
    expect(mockOnSave).toHaveBeenCalled();
  });

  test('should call onSave onPressEnter', async () => {
    render(
      <InlineEdit
        initialValue="onPressEnter"
        onSave={mockOnSave}
        startWithEditViewOpen
      />,
    );
    const input = screen.getByDisplayValue('onPressEnter');
    act(() => {
      userEvent.type(input, 'user typed something and press enter');
    });
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(mockOnSave).toHaveBeenCalled();
    expect(input.value).toBe('user typed something and press enter');
  });
});

describe('onUndoClick()', () => {
  test('should not show reset icon if label same as default label', () => {
    render(
      <InlineEdit
        initialValue={null}
        defaultValue={null}
        startWithEditViewOpen
      />,
    );

    const resetIcon1 = document.querySelector('#inline-edit__undo-button');
    expect(resetIcon1).not.toBeVisible();

    render(
      <InlineEdit
        initialValue={null}
        defaultValue={null}
        startWithEditViewOpen
        component="textarea"
      />,
    );

    const resetIcon2 = document.querySelector('#inline-edit__undo-button');
    expect(resetIcon2).not.toBeVisible();
  });

  test('should show reset icon if label is different than default label', () => {
    render(
      <InlineEdit
        initialValue="changed value"
        defaultValue={null}
        startWithEditViewOpen
        component="textarea"
      />,
    );

    const resetIcon1 = document.querySelector('#inline-edit__undo-button');
    expect(resetIcon1).toBeVisible();

    render(
      <InlineEdit
        initialValue="changed value"
        defaultValue={null}
        startWithEditViewOpen
        component="textarea"
      />,
    );
    const resetIcon2 = document.querySelector('#inline-edit__undo-button');
    expect(resetIcon2).toBeVisible();
  });

  test('should trigger onSave with defaultLabel as value when reset icon is pressed', async () => {
    act(() => {
      render(
        <InlineEdit
          initialValue="initial value"
          defaultValue="default value"
          startWithEditViewOpen
          onSave={mockOnSave}
        />,
      );
    });

    const resetIcon1 = document.querySelector('#inline-edit__undo-button');
    expect(resetIcon1).toBeVisible();
    act(() => {
      fireEvent.click(resetIcon1);
    });
    expect(mockOnSave).toHaveBeenCalled();

    // changed from editDOM to displayDOM
    const displayDOM = document.querySelector('.inline-edit__display');
    expect(displayDOM).toBeInTheDocument();

    const inputDOM = screen.queryByText('initial value');
    const inputDOM2 = screen.getByText('default value');
    expect(inputDOM).toBeFalsy();
    expect(inputDOM2).toBeVisible();
  });
});

describe('maxLength prop', () => {
  test('should default as 155 chars', () => {
    render(
      <InlineEdit
        initialValue="initial value"
        defaultValue="default value"
        startWithEditViewOpen
        onSave={mockOnSave}
      />,
    );

    const inputDOM = document.querySelector('.inline-edit__input .ant-input');
    expect(inputDOM).toHaveAttribute('maxlength', String(globals.DEFAULT_INPUT_MAX_LENGTH));
  });

  test('chars beyond 155 chars will be clipped', () => {
    render(
      <InlineEdit
        initialValue="initial value"
        defaultValue="default value"
        startWithEditViewOpen
        onSave={mockOnSave}
      />,
    );

    const inputDOM = document.querySelector('.inline-edit__input .ant-input');
    act(() => {
      userEvent.type(inputDOM, 'a'.repeat(200));
    });
    expect(inputDOM.value).toHaveLength(155);
  });
});
