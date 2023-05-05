import React, { useState } from 'react';
import InlineEdit from '../components';

export default function HandleState() {
  const defaultValue = 'John Doe';
  const [name, setName] = useState(defaultValue);

  const handleSave = (value) => {
    setName(value);
  };

  return (
    <div>
      <h1>Profile</h1>
      <InlineEdit
        onSave={handleSave}
        initialValue={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}
