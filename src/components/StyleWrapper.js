import React from 'react';
import styled from 'styled-components';
import { InlineEditInputFactoryStyles } from './lib/InlineEditInputFactory/InlineEditInputFactory.style';
import { InputSuffixStyles } from './lib/InputSuffix/InputSuffix.style';

const StyledWrapper = styled.div`
  ${InputSuffixStyles}
  ${InlineEditInputFactoryStyles}
`;

export function StyleWrapper({ children }) {
  return <StyledWrapper className="style-wrapper">{children}</StyledWrapper>;
}
