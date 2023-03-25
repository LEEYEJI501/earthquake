import { ReactNode } from "react";

type props = { children?: ReactNode };

export default function LayoutArticle(props: props) {
  return (
    <>
      <article>{props.children}</article>
    </>
  );
}
