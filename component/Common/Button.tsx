import { useState } from "react";
import { BackgroundColor } from "@/types/Common/Background";
import { BorderRadius } from "@/types/Common/Border";
import { TextColor } from "@/types/Common/Text";

type props = {
  buttonType: "button" | "submit" | "reset";
  buttonColor?: string;
  buttonTitle: string;
  buttonSize?: string;
  borderRadius?: string;
  variant?: string;
};

export default function Button(props: props) {
  const log = () => {
    console.log("button clicked");
  };
  const [buttonType] = useState(props.buttonType ?? "button");
  const [buttonTitle] = useState(props.buttonTitle);
  const [borderRadius] = useState(props.borderRadius ?? BorderRadius.XL);
  const [buttonColor] = useState(
    props.buttonColor ?? BackgroundColor.TRANSPARENT
  );
  const [selectSize] = useState(props.buttonSize ?? "default");
  const [variant] = useState(props.variant ?? "default");

  const buttonSize = () => {
    switch (selectSize) {
      case "sm":
        return "h-30px";
      case "md":
        return "h-50px";
      case "lg":
        return "h-70px";
      case "xl":
        return "h-100px";
      default:
        return "h-50px";
    }
  };

  const buttonStyle = () => {
    switch (variant) {
      case "outline":
        return `border-1px border-white hover:(bg-gray-500)`;
      case "tonal":
        return `border-none ${BackgroundColor.GREEN} hover:(bg-opacity-30)`;
      case "text":
        return `border-none`;
      case "plain":
        return `border-none ${TextColor.GRAY}`;
    }
  };

  return (
    <div className={`${buttonSize()}`}>
      <button
        type={`${buttonType}`}
        className={`p-10px h-full border-1px ${buttonColor} ${borderRadius} ${buttonStyle()}`}
        onClick={log}
      >
        {buttonTitle}
      </button>
    </div>
  );
}
