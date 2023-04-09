import { useState } from "react";
import { TextColor, TextSize } from "@/types/Common/Text";

type props = {
  title: string;
  textSize?: TextSize;
  textColor?: TextColor;
  addClass?: string;
};

export default function CardTitle(props: props) {
  const [textSize] = useState(props.textSize ?? TextSize.LG);
  const [textColor] = useState(props.textColor ?? TextColor.WHITE);

  return (
    <>
      <div
        className={`font-bold text-left break-words border-bottom-1px border-gray-400 ${textColor} ${textSize} ${props.addClass}`}
      >
        {props.title}
      </div>
    </>
  );
}
