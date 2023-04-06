import { useState } from "react";
import Icon from "./Icon";
import { TextSize } from "@/types/Common/Text";
import { TiconName } from "@/types/Common/Icon";

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
      className="flex"
      onClick={() => onClickHandle()}
      disabled={disabled}
    >
      <Icon iconName={props.iconName} />
      {title && <span className={`${titleSize}`}>{title}</span>}
    </button>
  );
}
