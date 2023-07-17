import React from 'react';
import { UndoOutlined, CheckOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import globals from '../globals';

export function InputSuffix({
  icon,
  isChanged,
  onUndoClick,
  onSaveClick,
  component = 'input', // or 'textarea'
}) {
  if (icon && !React.isValidElement(icon)) {
    throw new Error('Invalid icon prop: icon must be a valid React element.');
  }

  const renderIcon = () => {
    if (icon) {
      const { className } = icon.props;
      return React.cloneElement(icon, {
        id: 'inline-edit__undo-button',
        className: `${className} inline-edit input-suffix--${component} ${isChanged ? '' : 'display-none'}`,
        onClick: onUndoClick,
      });
    }

    const suffixIcons = [];
    if (onSaveClick) {
      suffixIcons.push(
        <Tooltip title={globals.DEFAULT_SAVE_TOOLTIP_TEXT} key="save">
          <CheckOutlined
            id="inline-edit__save-button"
            onClick={onSaveClick}
          />
        </Tooltip>,
      );
    }
    if (onUndoClick) {
      suffixIcons.push(
        <Tooltip title={globals.DEFAULT_UNDO_TOOLTIP_TEXT} key="undo">
          <UndoOutlined
            id="inline-edit__undo-button"
            className={`inline-edit input-suffix--${component} ${isChanged ? '' : 'display-none'}`}
            onClick={onUndoClick}
          />
        </Tooltip>,
      );
    }

    // undo button
    return (
      <span className="inline-edit__suffix-container">
        {suffixIcons}
      </span>
    );
  };

  return (
    renderIcon()
  );
}
