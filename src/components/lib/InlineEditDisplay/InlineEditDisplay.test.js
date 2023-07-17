import React from 'react';
import { render, screen } from '../../testUtils/test-utils';
import globals from '../globals';
import { InlineEditDisplay } from './InlineEditDisplay';

const mockOnClick = jest.fn();

describe('InlineEditDisplay', () => {
  describe('placeholder', () => {
    test('Renders the Display with default placeholder text', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
        />,
      );
      const displayDiv = screen.getByText(globals.DEFAULT_PLACEHOLDER);
      expect(displayDiv).toBeInTheDocument();
    });

    test('Renders the Display with different placeholder text', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          placeholder="Display Div"
        />,
      );
      const displayDiv = screen.getByText('Display Div');
      expect(displayDiv).toBeInTheDocument();
    });
  });

  describe('Style of placeholder & label', () => {
    test('Placeholder text has correct styles - secondary text', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
        />,
      );
      const displayDiv = screen.getByText(globals.DEFAULT_PLACEHOLDER);
      expect(displayDiv).toHaveClass('inline-edit__display', 'placeholder', 'ant-typography-secondary');
    });

    test('Label text has correct styles - normal font', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          label="Hello World - Not Placeholder"
        />,
      );
      const displayDiv = screen.getByText('Hello World - Not Placeholder');

      expect(displayDiv).not.toHaveClass('inline-edit__display', 'placeholder', 'ant-typography-secondary');
      expect(displayDiv).toHaveClass('inline-edit__display', 'label');
    });
  });

  describe('Only label or placeholder can exist at one time', () => {
    test('❎ label prop, ❎ placeholder prop => show placeholder', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
        />,
      );
      const displayDivPlaceholder = screen.queryByText(globals.DEFAULT_PLACEHOLDER);
      expect(displayDivPlaceholder).toBeVisible();
    });

    test('✅ label prop, ❎ placeholder prop => show label', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          label="A label, not placeholder"
        />,
      );
      const displayDivLabel = screen.getByText('A label, not placeholder');
      const displayDivPlaceholder = screen.queryByText(globals.DEFAULT_PLACEHOLDER);

      expect(displayDivLabel).toBeVisible();
      expect(displayDivPlaceholder).toBeFalsy();
    });

    test('❎ label prop, ✅ placeholder prop => show placeholder', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          placeholder="A placeholder, not label"
        />,
      );
      const displayDivPlaceholder = screen.getByText('A placeholder, not label');
      expect(displayDivPlaceholder).toBeVisible();
    });

    test('✅ label prop, ✅ placeholder prop => show label', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          label="A label, not placeholder"
          placeholder="A placeholder, not label"
        />,
      );
      const displayDivLabel = screen.queryByText('A label, not placeholder');
      const displayDivPlaceholder = screen.queryByText('A placeholder, not label');

      expect(displayDivLabel).toBeVisible();
      expect(displayDivPlaceholder).toBeFalsy();
    });
  });

  describe('displayRenderer Prop', () => {
    test('show placeholder if no label prop', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          // placeholder={globals.DEFAULT_PLACEHOLDER}
          displayRenderer={(label) => (<h3>{label}</h3>)}
        />,
      );
      const displayDivPlaceholder = screen.getByText(globals.DEFAULT_PLACEHOLDER);
      expect(displayDivPlaceholder).toBeVisible();
    });

    test('show custom placeholder if no label prop', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          placeholder="Hello Custom Placeholder"
          displayRenderer={(label) => (<h3>{label}</h3>)}
        />,
      );
      const displayDivPlaceholder = screen.getByText('Hello Custom Placeholder');
      expect(displayDivPlaceholder).toBeVisible();
    });

    test('show custom placeholder custom renderer if no label prop', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          placeholder="Hello Custom Placeholder"
          displayRenderer={(label, placeholder) => {
            if (label) { return (<h3>{label}</h3>); }
            if (placeholder && !label) { return <h1>{placeholder}</h1>; }
            return null;
          }}
        />,
      );
      const displayDivPlaceholder = screen.getByRole('heading', { name: 'Hello Custom Placeholder' });
      expect(displayDivPlaceholder).toBeVisible();
    });

    test('displayRenderer renders correctly based on label prop', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          displayRenderer={(label) => <div>{label}</div>}
          label="A label, not placeholder"
        />,
      );
      const displayDivLabel = screen.queryByText('A label, not placeholder');
      expect(displayDivLabel).toBeVisible();
    });

    test('has correct classname', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          displayRenderer={(label) => <h3 className="h3-display">{label}</h3>}
          label="A label, not placeholder"
        />,
      );
      const displayDivLabel = screen.getByRole('heading', { name: 'A label, not placeholder' });
      expect(displayDivLabel).toBeVisible();
    });

    test('displayRenderer returns a String', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          displayRenderer={() => ('hiii')}
          label="A label, not placeholder"
        />,
      );
      const displayDivLabel = screen.queryByText('hiii');
      expect(displayDivLabel).toBeVisible();
    });

    test('displayRenderer returns a ReactDOM', () => {
      render(
        <InlineEditDisplay
          onClick={mockOnClick}
          displayRenderer={(label) => (
            <h5>
              {label}
              <span>hello</span>
            </h5>
          )}
          label="A label, not placeholder"
        />,
      );
      const displayDivLabel = screen.getByText('A label, not placeholder');
      const displayDivHello = screen.getByText('hello');
      expect(displayDivLabel).toBeVisible();
      expect(displayDivHello).toBeVisible();
    });
  });
});
