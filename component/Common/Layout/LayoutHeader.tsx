import { ReactNode } from "react";

type props = { children?: ReactNode; left?: ReactNode; right?: ReactNode };

export default function LayoutHeader(props: props) {
  return (
    <>
      <header className="fiexd top-0 flex w-full max-h-60px min-h-60px text-center">
        {props.children}
        {props.left && <div className="mr-auto">{props.left}</div>}
        {props.right && <div className="ml-auto">{props.right}</div>}
      </header>
    </>
  );
}
