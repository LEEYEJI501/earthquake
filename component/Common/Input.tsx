import { BorderRadius } from "@/types/Common/Border";
import { useState } from "react";
import Icon from "@/component/Common/Icon/Icon";
import { TiconName } from "@/types/Common/Icon";
import { OutLine } from "@/types/Common/Border";
import { InputType } from "@/types/Common/Text";

type props = {
  type?: InputType;
  label?: string;
  prependIcon?: TiconName;
  appendIcon?: TiconName;
  rounded?: BorderRadius;
  outlined?: boolean;
  min?: number;
  max?: number;
  block?: boolean;
};

export default function Input(props: props) {
  const [rounded] = useState(props.rounded ?? BorderRadius.DEFALUT);
  const [label] = useState(props.label ?? "");
  const [type] = useState(props.type ?? InputType.TEXT);
  const [block] = useState(props.block ?? false);
  const [outlined] = useState(props.outlined ?? false);
  const [min] = useState(props.min ?? 0);
  const [max] = useState(props.max ?? 20);

  const [text, setText] = useState("");
  const onChange = (event: Event) => {
    const element = event.target as HTMLInputElement;
    const value = element.value;

    if (type === InputType.NUMBER) {
      setText(numberTypeByLengthCheck(value));
      return;
    }
    setText(value);
  };

  const exponentDefender = (value: string) => {
    if (value.length === 1 && (value.includes("e") || value.includes("E")))
      return "";
    if (!value.includes("e") && !value.includes("E")) return value;
    return value.substring(0, value.length - 1);
  };

  const numberTypeByLengthCheck = (value: string) => {
    const convValue = exponentDefender(value);
    if (convValue.length > max) return convValue.substring(0, max);
    return convValue;
  };

  return (
    <div
      className={`flex ${
        block ? "w-full" : "w-auto"
      } border-1 border-gray-500 shadow-md shadow-gray-600 ${rounded} ${
        outlined ? OutLine.DEFAULT : OutLine.SOLO
      }`}
    >
      <label className="flex">
        {label}
        {props.prependIcon && <Icon iconName={props.prependIcon} />}
      </label>
      <input
        className={`${block ? "w-full" : "w-auto"}`}
        type={type}
        minLength={min}
        maxLength={max}
        value={text}
        onChange={onChange}
      ></input>
    </div>
  );
}
