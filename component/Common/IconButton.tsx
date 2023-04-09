import { useState } from "react";
import Icon from "./Icon";
import { TextColor, TextSize } from "@/types/Common/Text";
import { TiconName } from "@/types/Common/Icon";
import { BackgroundColor } from "@/types/Common/Background";
import { Cursor } from "@/types/Common/Cursor";

type props = {
  onClickHandle: Function;
  title?: string;
  titleSize?: TextSize;
  iconName?: TiconName;
  disabled?: boolean;
};

export default function IconButton(props: props) {
  const { onClickHandle } = props;
  const [title] = useState(props.title);
  const [titleSize] = useState(props.titleSize ?? TextSize.BASE);
  const [disabled] = useState(props.disabled ?? false);

  return (
    <button
      className={`flex ${disabled ? `${Cursor.DEFAULT}` : ""}`}
      onClick={() => onClickHandle()}
      disabled={disabled}
    >
      <Icon
        iconName={props.iconName}
        color={disabled ? TextColor.GRAY : undefined}
      />
      {title && <span className={`${titleSize}`}>{title}</span>}
    </button>
  );
}
