import React from 'react';

export function InlineEditDisplay({
  onClick,
  label,
  // initialLabel,
  // defaultLabel,
  displayRenderer,
}) {
  if (displayRenderer) {
    const displayDOM = displayRenderer(label);

    // console.log('aaa displayDOM', { displayRenderer, label, displayDOM });
    // append classNames
    if (React.isValidElement(displayDOM)) {
      return React.cloneElement(displayDOM, {
        className: `${displayDOM?.props?.className || ''} inline-edit__display`,
        onClick,
      });
    }
  }
  return (
    <div
      onClick={onClick}
      className="inline-edit__display"
      role="textbox"
      aria-hidden
    >
      {label}
    </div>
  );
}
