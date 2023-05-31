import React, { useEffect, useRef, useState } from 'react';
import globals from './lib/globals';
import { InlineEditDisplay } from './lib/InlineEditDisplay/InlineEditDisplay';
import { InlineEditInputFactory } from './lib/InlineEditInputFactory/InlineEditInputFactory';
import { StyleWrapper } from './StyleWrapper';

// InlineEdit is a component that allows you to edit a value in place
// It consists of 2 sub-components: InlineEditDisplay and InlineEditInput

// inspired by Atlassian Inline Edit component
// https://atlassian.design/components/inline-edit/examples#default

// Also inspired by react-easy-edit
// https://github.com/giorgosart/react-easy-edit

// Tutorial for packages from:
// https://www.youtube.com/watch?v=hf6Z8OZanec

/**
 *
 * @callback onSave - callback function after onBlur or Enter
 * @callback displayRenderer - custom display render props
 * @param {String} initialValue - initial value to display / edit
 * @param {String} defaultValue - default value (will be used if user clicks Undo)
 * @param {Number} maxLength - max length of input
 * @param {String} inputComponent - 'input' or 'textarea'
 * @param {Boolean} startWithEditViewOpen - whether to start with edit view open (default: false)
 * @param {String} displayPlaceholder - placeholder for display view when value is empty
 * @returns {ReactDOM}
 */
function InlineEdit({
  onSave = () => {},
  displayRenderer = () => {},
  initialValue,
  defaultValue,
  maxLength = globals.DEFAULT_INPUT_MAX_LENGTH,
  inputComponent = 'input', // 'input' | 'textarea'
  startWithEditViewOpen = false,
  displayPlaceholder = globals.DEFAULT_PLACEHOLDER,
}) {
  const [isEditing, setIsEditing] = useState(startWithEditViewOpen);
  const [label, setLabel] = useState(initialValue);
  const inputRef = useRef();
  // const [form] = useForm();

  // to deal with i18n related changes in initialValue
  useEffect(() => {
    setLabel(initialValue);

    return () => {};
  }, [initialValue]);

  // to autofocus on input when first click
  useEffect(() => {
    if (isEditing && inputRef.current) { inputRef.current.focus({ cursor: 'all' }); }

    return () => {};
  }, [isEditing, inputRef]);

  const onSaveValue = (value) => {
    onSave(value);
    setLabel(value);
    setIsEditing(false);
  };

  const onUndoClick = (e) => {
    e.preventDefault();
    onSaveValue(defaultValue);
  };

  // INPUT: to save on enter / blur
  // Factory to create different input types (input / textarea)
  const editDOM = (
    <div className="inline-edit__input-wrapper">
      <InlineEditInputFactory
        label={label}
        initialLabel={initialValue}
        defaultLabel={defaultValue}
        onSave={onSaveValue}
        setLabel={setLabel}
        inputRef={inputRef}
        onUndoClick={onUndoClick}
        maxLength={maxLength}
        component={inputComponent}
      />
    </div>
  );

  const displayDOM = (
    <InlineEditDisplay
      onClick={() => {
        setIsEditing(true);
      }}
      label={label}
      placeholder={displayPlaceholder}
      displayRenderer={displayRenderer}
    />
  );

  // DISPLAY: to display the value
  return (
    <StyleWrapper>
      {isEditing ? editDOM : displayDOM}
    </StyleWrapper>
  );
}
export default InlineEdit;
