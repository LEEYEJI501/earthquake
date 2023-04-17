import * as freeIcons from "@fortawesome/free-solid-svg-icons";

export enum IconSize {
  XS = "xs",
  SM = "sm",
  LG = "lg",
  XL = "xl",
  TL = "2xl",
}

export type TiconName = keyof typeof freeIcons;
