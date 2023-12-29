"use client";

import { ButtonProps } from "./types";

import { theme } from "../theme";
import { BaseButton } from "./style";

export function Button(props: ButtonProps) {
  const {
    children,
    color = "primary",
    variant = "filled",
    size = "normal",
    loading = false,
    disabled = false,
    tabIndex = 0,
    onClick,
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
  } = props;

  let backgroundColor: string = "transparent";
  let textColor: string = theme.colors.text;

  switch (variant) {
    case "filled":
      backgroundColor = theme.colors[color];
      textColor = theme.colors.black;
      break;
    case "bezeled":
      backgroundColor = theme.colors[`${color}15`];
      textColor = theme.colors[color];
      break;
    case "bezeledGray":
      backgroundColor = theme.colors.gray15;
      textColor = theme.colors[color];
      break;
    case "borderless":
      backgroundColor = "transparent";
      textColor = theme.colors[color];
      break;
  }

  return (
    <BaseButton
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      tabIndex={tabIndex}
      disabled={disabled || loading}
      $isSmall={size === "small"}
      $background={backgroundColor}
      $color={textColor}
    >
      {children}
    </BaseButton>
  );
}
