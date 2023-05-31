import React from 'react';
import { Typography } from 'antd';
import globals from '../globals';

const {
  Text,
} = Typography;

export function InlineEditDisplay({
  onClick,
  label,
  placeholder = globals.DEFAULT_PLACEHOLDER,
  // initialLabel,
  // defaultLabel,
  displayRenderer,
}) {
  if (displayRenderer) {
    const displayDOM = displayRenderer(label || placeholder);
    // console.log('aaa InlineEditDisplay', { displayRenderer, label, displayDOM });

    if (typeof displayDOM === 'string') {
      return (
        <div
          onClick={onClick}
          className="inline-edit__display"
          role="textbox"
          aria-hidden
        >
          {displayDOM}
        </div>
      );
    }

    // append classNames
    if (React.isValidElement(displayDOM)) {
      return React.cloneElement(displayDOM, {
        className: `${displayDOM?.props?.className || ''} inline-edit__display`,
        onClick,
      });
    }
    // return <DisplayPlaceholder onClick={onClick} placeholder={placeholder} />;
  }

  if (label) {
    return (
      <div
        onClick={onClick}
        className="inline-edit__display label"
        role="textbox"
        aria-hidden
      >
        {label}
      </div>
    );
  }

  // render placeholder label -- Click to edit
  return <DisplayPlaceholder onClick={onClick} placeholder={placeholder} />;
}

function DisplayPlaceholder({
  onClick, placeholder,
}) {
  return (
    <Text
      onClick={onClick}
      type="secondary"
      className="inline-edit__display placeholder"
    >
      {placeholder}
    </Text>
  );
}
