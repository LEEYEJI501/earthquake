import { useState } from "react";
import { TextColor, TextSize } from "@/types/Common/Text";

type props = {
  title: string;
  textSize?: TextSize;
  textColor?: TextColor;
  addClass?: string;
};

export default function CardSubTitle(props: props) {
  const [textSize] = useState(props.textSize ?? TextSize.BASE);
  const [textColor] = useState(props.textColor ?? TextColor.GRAY);

  return (
    <>
      <div
        className={`text-left break-words border-bottom-1px border-gray-400 ${textColor} ${textSize} ${props.addClass}`}
      >
        {props.title}
      </div>
    </>
  );
}
