import { ReactNode } from "react";

type props = { children?: ReactNode; left?: ReactNode; right?: ReactNode };

export default function LayoutFooter(props: props) {
  return (
    <>
      <footer className="fixed bottom-0 flex w-full max-h-60px min-h-60px">
        {props.children}
        {props.left && <div className="mr-auto">{props.left}</div>}
        {props.right && <div className="ml-auto">{props.right}</div>}
      </footer>
    </>
  );
}
