import { UndoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export function InlineEditButtons({ onUndoClick }) {
  return (
    <Button
      id="inline-edit__undo-button"
      icon={<UndoOutlined />}
      onClick={(e) => onUndoClick(e)}
    />
  );
}
