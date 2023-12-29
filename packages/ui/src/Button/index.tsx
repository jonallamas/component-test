"use client";

import { Variant, Color, ButtonProps } from "./types";

import { theme } from "../theme";
import { BaseButton } from "./style";

function variantsList(variant: Variant, color: Color) {
  const list = {
    filled: {
      background: theme.colors[color],
      color: theme.colors.black,
    },
    bezeled: {
      background: theme.colors[`${color}15`],
      color: theme.colors[color],
    },
    bezeledGray: {
      background: theme.colors.gray15,
      color: theme.colors[color],
    },
    borderless: {
      background: theme.colors.transparent,
      color: theme.colors[color],
    },
  };

  return list[variant];
}

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
      $background={variantsList(variant, color)?.background}
      $color={variantsList(variant, color)?.color}
    >
      {/* {loading ? <BtnLoader /> : children} */}
      {children}
    </BaseButton>
  );
}
