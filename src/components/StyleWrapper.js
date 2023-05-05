import React from 'react';
import styled from 'styled-components';
import { InputSuffixStyles } from './helper/InputSuffix.style';

const StyledWrapper = styled.div`
  ${InputSuffixStyles}
`;

export function StyleWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
