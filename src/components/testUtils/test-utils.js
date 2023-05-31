import React from 'react';
import { render } from '@testing-library/react';
import { StyleWrapper } from '../StyleWrapper';

// React Testing Library's render method to setup Providers & Wrappers for tests
// https://testing-library.com/docs/react-testing-library/setup/
function AllTheProviders({ children }) {
  return (
    <StyleWrapper>
      {children}
    </StyleWrapper>
  );
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
