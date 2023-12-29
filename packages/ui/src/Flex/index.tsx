import { FlexProps } from './types';

import { BaseFlex } from './style';

export function Flex(props: FlexProps) {
  const {
    children,
    gap = 0,
    direction = 'row',
    flex = 'initial',
    justify = 'start',
    align = 'start',
    onClick = () => null,
  } = props;

  return (
    <BaseFlex onClick={onClick} $gap={`${gap}px`} $direction={direction} $flex={flex} $justify={justify} $align={align}>
      {children}
    </BaseFlex>
  );
}
