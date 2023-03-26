import { useState } from "react";
import { TextColor, TextSize } from "@/types/Common/Text";

type props = {
  title: string;
  textSize?: TextSize;
  textColor?: TextColor;
  addClass?: string;
};

export default function CardSubTitle(props: props) {
  const textSize = useState(props.textSize ?? TextSize.BASE);
  const textColor = useState(props.textColor ?? TextColor.GRAY);

  return (
    <>
      <div
        className={`text-left break-words ${textColor[0]} ${textSize[0]} ${props.addClass}`}
      >
        {props.title}
      </div>
    </>
  );
}
