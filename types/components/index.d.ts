export default InlineEdit;
/**
 * - callback function after onBlur or Enter
 */
export type onSave = () => any;
/**
 * - custom display render props
 */
export type displayRenderer = (initialValue: string, defaultValue: string, maxLength: number, inputComponent: string, startWithEditViewOpen: boolean, displayPlaceholder: string, textAreaProps: any) => typeof import("react-dom");
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
 * @param {Object} textAreaProps - props to override antd's Input.TextArea
 * @returns {ReactDOM}
 */
declare function InlineEdit({ onSave, displayRenderer, initialValue, defaultValue, maxLength, inputComponent, startWithEditViewOpen, displayPlaceholder, textAreaProps, }: {
    onSave?: () => void;
    displayRenderer?: () => void;
    initialValue?: any;
    defaultValue?: any;
    maxLength?: number;
    inputComponent?: string;
    startWithEditViewOpen?: boolean;
    displayPlaceholder?: string;
    textAreaProps?: {};
}): JSX.Element;
