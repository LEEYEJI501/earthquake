import { use, useState } from "react";
import { BackgroundColor } from "@/types/Common/Background";
import { BorderRadius } from "@/types/Common/Border";

type props = {
  buttonType: "button" | "submit" | "reset";
  buttonColor?: string;
  buttonTitle: string;
  buttonSize?: string;
  borderRadius?: string;
};

export default function Button(props: props) {
  const log = () => {
    console.log("button clicked");
  };
  const [buttonType] = useState(props.buttonType ?? "button");
  const [buttonTitle] = useState(props.buttonTitle);
  const [borderRadius] = useState(props.borderRadius ?? BorderRadius.XL);
  const [buttonColor] = useState(
    props.buttonColor ?? BackgroundColor.DEFAULT_GRAY
  );
  const selectSize = useState(props.buttonSize ?? "default");
  const buttonSize = () => {
    switch (selectSize) {
      case "md":
        return "h-100px";
    }
  };
  return (
    <div>
      <button
        type={`${buttonType}`}
        className={`p-10px border-1px border-gray-400 ${buttonColor} ${borderRadius}`}
        onClick={log}
      >
        {buttonTitle}
      </button>
    </div>
  );
}
