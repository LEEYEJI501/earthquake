import { useState } from "react";
import Icon from "./Icon";

type props = {
  onClickHandle: Function;
  title?: string;
};

export default function IconButton(props: props) {
  const { onClickHandle } = props;

  const [title] = useState(props.title);

  return (
    <button className={`ml-5px mr-5px`} onClick={() => onClickHandle()}>
      <Icon
        iconName={"faHeart"}
        color={"#FFFFFF"}
        width={"w-20px"}
        height={"h-20px"}
      />
      {title && <span>{title}</span>}
    </button>
  );
}
