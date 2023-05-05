
!["Antd Inline Edit](/public/images/antdInlineEditLogo.svg "Antd Inline Edit")

# Antd Inline Edit

Is it an input? Is it a div? It's both! 🤩

An inline edit displays a custom input component that switches between reading and editing on the same page.

The Antd Inline Edit component is a React component that provides an inline editing interface. 


## Installation

You can install the Antd Inline Edit component using npm:

```bash
npm install antd-inline-edit
```

or yarn:
```bash
yarn add antd-inline-edit
```

## Usage

To use the Antd Inline Edit component in your project, you can import it like any other React component:

```jsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { InlineEdit } from 'antd-inline-edit';

export default function MyComponent() {
  const valueWhenUndo = 'John Doe'
  const [name, setName] = useState(valueWhenUndo);

  const handleSave = (value) => {
    setName(value);
  };

  return (
    <div>
      <h1>Profile</h1>
    <InlineEdit 
        onSave={handleSave}
        initialValue={name}
        defaultValue={valueWhenUndo}
        inputMaxLength={50}
      />
    </div>
  );
}
```

In this example, we're rendering an `InlineEdit` component and passing in a `value` prop and an `onSave` prop. When the user clicks on the component, it will switch to edit mode and allow the user to edit the value. When the user saves the changes, the `onSave` callback will be called with the new value.

## Props

The Antd Inline Edit component accepts the following props:

| Name | Description | Type | Default | Example |
| ---- | ----------- | ---- | ------- | ------- |
| onSave | Callback function that is called after the user has finished editing the input (either by pressing Enter or by blurring the input). | Function | `() => {}` | `value => console.log(value)` |
| displayRenderer | Custom render function that is used to display the current value of the component. | Function | `undefined` | `value => <span>{value}</span>` |
| initialValue | The initial value that is displayed in the component when it is first rendered. | String | `undefined` | `"Hello, world!"` |
| defaultValue | The default value that is used if the user clicks the "Undo" button. | String | `undefined` | `"John Doe"` |
| inputMaxLength | The maximum number of characters that can be entered into the input field. | Number | `155` | `50` |
| startWithEditViewOpen | The editable component rendered (`input` or `textarea`). | String | `input` | `textarea` |
| inputComponent | whether to start with editable component open | Boolean | `false` | `true` |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

If you'd like to contribute to the Antd Inline Edit component, please open an issue or pull request on the GitHub repository. We welcome all contributions and feedback!

## Author

This package was created by [erictehyc](https://github.com/erictehyc).
