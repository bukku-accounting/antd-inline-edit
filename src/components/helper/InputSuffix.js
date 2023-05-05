import React from 'react';
// import BukkuTooltip from 'bukku/components/Tooltip';
import { UndoOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
// import { t } from '@lingui/macro';
// import { useLingui } from '@lingui/react';

export function InputSuffix({
  isChanged,
  onUndoClick,
  component = 'input', // or 'textarea'
}) {
  // useLingui();
  return (
  // undo button
    <Tooltip>
      <UndoOutlined
        className={`input-suffix--${component} ${isChanged ? '' : 'display-none'}`}
        id="inline-edit__undo-button"
        onClick={onUndoClick}
      />
    </Tooltip>
  );
}
