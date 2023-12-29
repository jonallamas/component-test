import { ReactNode } from "react";

export type Color = "primary" | "secondary" | "error";
export type Variant = "filled" | "bezeled" | "bezeledGray" | "borderless";
export type Size = "small" | "normal";

export interface ButtonProps {
  children: ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  componentName?: string;
  tabIndex?: number;
  onClick: () => any;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

export interface BaseButtonProps {
  $background?: string;
  $color?: string;
  $isSmall?: boolean;
}
