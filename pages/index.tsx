import LayoutHeader from "@/component/Common/Layout/LayoutHeader";
import LayoutFooter from "@/component/Common/Layout/LayoutFooter";
import LayoutArticle from "@/component/Common/Layout/LayoutArticle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LayoutHeader left={<div>test</div>}></LayoutHeader>
      <LayoutArticle>test</LayoutArticle>
      <LayoutFooter>
        <div>test</div>
      </LayoutFooter>
    </>
  );
}
