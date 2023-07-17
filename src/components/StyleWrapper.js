import React from 'react';
import styled from 'styled-components';
import { InlineEditDisplayStyles } from './lib/InlineEditDisplay/InlineEditDisplay.style';
import { InlineEditInputFactoryStyles } from './lib/InlineEditInputFactory/InlineEditInputFactory.style';
import { InputSuffixStyles } from './lib/InputSuffix/InputSuffix.style';

const StyledWrapper = styled.div`
  ${InputSuffixStyles}
  ${InlineEditInputFactoryStyles}
  ${InlineEditDisplayStyles}
`;

export function StyleWrapper({ children }) {
  return <StyledWrapper className="style-wrapper">{children}</StyledWrapper>;
}
