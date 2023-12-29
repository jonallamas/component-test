import { styled } from 'styled-components';

import { BaseDividerProps } from './types';

export const BaseDivider = styled.div<BaseDividerProps>`
  width: 100%;

  min-height: ${(props) => props.$y}px;
`;
