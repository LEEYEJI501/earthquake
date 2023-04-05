import { TextSize, TextColor } from "@/types/Common/Text";
import { useState } from "react";
import IconButton from "../IconButton";

type props = {
  title: string;
  titleColor?: string;
  textSize?: TextSize;
  textColor?: TextColor;
};

export default function AppBar(props: props) {
  const { title, titleColor, textColor, textSize } = props;

  const handleClick = () => {
    console.log("!!!!!!!");
  };

  const [size] = useState(props.textSize ?? TextSize.XL);
  const [color] = useState(props.textColor ?? TextColor.WHITE);

  return (
    <>
      <div>{props.title}</div>
      <div
        className={`flex w-full p-10px border-1px border-gray-400 content-center items-center`}
      >
        <div className={`justify-start`}>
          <IconButton onClickHandle={handleClick} />
        </div>
        <span className={`ml-10px font-bold ${color} ${size}`}>
          {props.title}
        </span>
        <div className={`ml-auto`}>
          <IconButton onClickHandle={handleClick} />
        </div>
      </div>
    </>
  );
}
