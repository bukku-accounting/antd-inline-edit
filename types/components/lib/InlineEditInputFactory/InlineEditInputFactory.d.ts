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
 * @param {Object} textAreaProps - props to override antd's Input.TextArea
 * @returns {ReactDOM}
 */
export function InlineEditInputFactory({ component, label, defaultLabel, onSave, setLabel, onUndoClick, inputRef, maxLength, textAreaProps, }: string): typeof import("react-dom");
