import { Input } from 'antd';
import React from 'react';
import { InputSuffix } from '../InputSuffix/InputSuffix';

/**
 * Factory function to create an input / textarea component
 *
 * @param {String} component - 'input' or 'textarea'
 * @param {String} label - current value
 * @param {String} defaultLabel - default value
 * @param {Function} onSave - callback function to set value + close edit mode
 * @param {Function} setLabel - callback function to set value
 * @param {Function} onUndoClick - callback function to reset value to default
 * @param {Object} inputRef - ref to input
 * @param {Number} maxLength - max length of input
 * @returns {ReactDOM}
 */
export function InlineEditInputFactory({
  component = 'input', // or 'textarea',
  label = '',
  // initialLabel,
  defaultLabel,
  onSave = () => {},
  setLabel = () => {},
  onUndoClick = () => {},
  inputRef,
  maxLength,
}) {
  const onInputSave = (e) => {
    const text = e.target.value;
    onSave(text || defaultLabel);
  };

  const isChanged = label !== defaultLabel;

  const onBlur = (e) => {
    // if undo button is clicked, don't blur immediately
    // isEditing will be false after undo button is clicked
    if (e.relatedTarget?.id === 'inline-edit__undo-button') { return; }

    onInputSave(e);
  };

  const onChangeFn = (e) => {
    setLabel(e.target.value);
  };

  const commonProps = {
    ref: inputRef,
    value: label,
    onPressEnter: onInputSave,
    onBlur,
    onChange: onChangeFn,
    placeholder: defaultLabel,
    maxLength,
    // showCount
  };
  const inputProps = {
    className: `inline-edit__input input-component ${isChanged ? 'has-suffix' : ''}`,
    suffix: <InputSuffix isChanged={isChanged} onUndoClick={onUndoClick} />,
  };
  const textAreaProps = {
    className: `inline-edit__input textarea-component ${isChanged ? 'has-suffix' : ''}`,
    autoSize: { minRows: 1, maxRows: 120 },
  };

  if (component === 'textarea') {
    return (
      <div className={`inline-edit__wrapper inline-edit__textarea-wrapper ${isChanged ? 'has-suffix' : ''}`}>
        <Input.TextArea {...commonProps} {...textAreaProps} />
        <InputSuffix component="textarea" isChanged={isChanged} onUndoClick={onUndoClick} />
      </div>
    );
  }

  return (
    <Input {...commonProps} {...inputProps} />
  );
}
