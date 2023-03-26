import LayoutHeader from "@/component/Common/Layout/LayoutHeader";
import LayoutFooter from "@/component/Common/Layout/LayoutFooter";
import LayoutArticle from "@/component/Common/Layout/LayoutArticle";
import { Inter } from "next/font/google";
import Card from "@/component/Common/Card";
import CardTitle from "@/component/Common/Card/CardTitle";
import CardSubTitle from "@/component/Common/Card/CardSubTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LayoutHeader
        left={<div>test</div>}
        right={<div>test</div>}
      ></LayoutHeader>
      <LayoutArticle>
        <Card addClass="!w-100px">
          <CardTitle title="test"></CardTitle>
          <CardSubTitle title="sub"></CardSubTitle>
        </Card>
      </LayoutArticle>
      <LayoutFooter>
        <div>test</div>
      </LayoutFooter>
    </>
  );
}
