import React from 'react';
import { UndoOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import globals from '../globals';

export function InputSuffix({
  icon,
  isChanged,
  onUndoClick,
  component = 'input', // or 'textarea'
}) {
  if (icon && !React.isValidElement(icon)) {
    throw new Error('Invalid icon prop: icon must be a valid React element.');
  }

  const commonProps = {
    id: 'inline-edit__undo-button',
    className: `inline-edit input-suffix--${component} ${isChanged ? '' : 'display-none'}`,
    onClick: onUndoClick,
  };

  const renderIcon = () => {
    if (icon) {
      const { className } = icon.props;
      return React.cloneElement(icon, {
        ...commonProps,
        className: `${className} ${commonProps.className}`,
      });
    }

    // undo button
    return (
      <Tooltip title={globals.DEFAULT_UNDO_TOOLTIP_TEXT}>
        <UndoOutlined
          id="inline-edit__undo-button"
          {...commonProps}
        />
      </Tooltip>
    );
  };

  return (
    renderIcon()
  );
}
