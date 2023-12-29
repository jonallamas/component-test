import { BaseDivider } from "./style";

import { DividerProps } from "./types";

export function Divider(props: DividerProps) {
  const { x = 0, y = 0 } = props;

  return <BaseDivider $y={y} $x={x} />;
}
