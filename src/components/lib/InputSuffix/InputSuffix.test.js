import 'jest-styled-components';
import React from 'react';
import { HistoryOutlined } from '@ant-design/icons';
import { fireEvent, render, screen } from '../../testUtils/test-utils';
import globals from '../globals';
import { InputSuffix } from './InputSuffix';

const mockOnClick = jest.fn();

describe('InputSuffix', () => {
  describe('Initial Load', () => {
    test('renders on initial load', () => {
      render(
        <InputSuffix
          onUndoClick={mockOnClick}
        />,
      );

      const button = document.querySelector('.inline-edit.input-suffix--input');
      expect(button).toBeInTheDocument();
    });

    test('renders Undo tooltip when hovered', async () => {
      render(
        <InputSuffix
          onUndoClick={mockOnClick}
        />,
      );

      const button = document.querySelector('.inline-edit.input-suffix--input');

      // when hovered over, the tooltip should appear
      fireEvent.mouseOver(button);
      const tooltip = await screen.findByText(globals.DEFAULT_UNDO_TOOLTIP_TEXT);
      expect(tooltip).toBeInTheDocument();
    });
  });

  describe('Custom Props - isChanged=false', () => {
    test('should not be visible for icon and tooltip', async () => {
      render(
        <InputSuffix
          isChanged={false}
          onUndoClick={mockOnClick}
        />,
      );

      const button = document.querySelector('.inline-edit.input-suffix--input');
      expect(button).toBeInTheDocument();
      expect(button).not.toBeVisible();

      // the tooltip should not appear
      fireEvent.mouseOver(button);
      const tooltip = await screen.findByText(globals.DEFAULT_UNDO_TOOLTIP_TEXT);
      expect(tooltip).not.toBeVisible();
    });
  });

  describe('Custom Props - icon', () => {
    test('should throw error when icon is invalid element', () => {
      // to temporarily surpress the error message in jest console
      const spy = jest.spyOn(console, 'error');
      spy.mockImplementation(() => {});

      expect(() => render(
        <InputSuffix
          onUndoClick={mockOnClick}
          icon="Must be a DOM"
        />,
      )).toThrow(/Invalid icon prop/);

      spy.mockRestore();
    });

    test('should render if it is a valid element', async () => {
      render(
        <InputSuffix
          onUndoClick={mockOnClick}
          icon={<HistoryOutlined className="history-oulined-icon" />}
        />,
      );

      const button = document.querySelector('.inline-edit.input-suffix--input.history-oulined-icon');
      expect(button).toBeInTheDocument();

      // the tooltip should not appear
      fireEvent.mouseOver(button);
      const tooltip = await screen.queryByText(globals.DEFAULT_UNDO_TOOLTIP_TEXT);
      expect(tooltip).toBeFalsy();
    });
  });
});
