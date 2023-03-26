import { ReactNode } from "react";

type props = {
  addClass?: string;
  shadow?: boolean;
  children?: ReactNode;
};

export default function Card(props: props) {
  return (
    <>
      <div
        className={`relative p-3 w-auto border-1 rounded-10px border-gray-600 ${
          props.shadow ? "shadow-md shadow-gray-500" : ""
        } ${props.addClass}`}
      >
        {props.children}
      </div>
    </>
  );
}
