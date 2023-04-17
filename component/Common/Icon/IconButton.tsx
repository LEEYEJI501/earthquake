import { useState } from "react";
import Icon from "./Icon";
import { TextColor, TextSize } from "@/types/Common/Text";
import { IconSize, TiconName } from "@/types/Common/Icon";
import { Cursor } from "@/types/Common/Cursor";

type props = {
  //buttonType: "button" | "submit" | "reset";
  onClickHandle: Function;
  title?: string;
  titleSize?: TextSize;
  iconName?: TiconName;
  disabled?: boolean;
  iconSize?: IconSize;
};

export default function IconButton(props: props) {
  //const [buttonType] = useState(props.buttonType ?? "button");
  const { onClickHandle } = props;
  const [title] = useState(props.title);
  const [titleSize] = useState(props.titleSize ?? TextSize.SM);
  const [disabled] = useState(props.disabled ?? false);
  const [iconSize] = useState(props.iconSize ?? IconSize.XL);

  return (
    <button
      //type={`${buttonType}`}
      className={`flex-col ${disabled ? `${Cursor.DEFAULT}` : ""}`}
      onClick={() => onClickHandle()}
      disabled={disabled}
    >
      <Icon
        iconName={props.iconName}
        color={disabled ? TextColor.GRAY : undefined}
        size={iconSize}
      />
      {title && <span className={`${titleSize}`}>{title}</span>}
    </button>
  );
}
