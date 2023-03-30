import LayoutHeader from "@/component/Common/Layout/LayoutHeader";
import LayoutFooter from "@/component/Common/Layout/LayoutFooter";
import LayoutArticle from "@/component/Common/Layout/LayoutArticle";
import { Inter } from "next/font/google";
import Card from "@/component/Common/Card";
import CardTitle from "@/component/Common/Card/CardTitle";
import CardSubTitle from "@/component/Common/Card/CardSubTitle";
import Icon from "@/component/Icon";
import Image from "@/component/Image";
// awesome icon
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// google map
import GoogleMap from "@/component/Map";

const inter = Inter({ subsets: ["latin"] });
const iconDefinition =  icon(faHeart);
const apikey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

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
          <Icon iconName={iconDefinition}></Icon>
        </Card>
        <Image
          src={"/assets/images/cutePuppy.jpg"} alt={"potato"} fallbackSrc={""} 
          width={200}
          height={100}
        />
        <GoogleMap></GoogleMap>
        <div>{apikey}</div>
      </LayoutArticle>
      <LayoutFooter>
        <div>test</div>
      </LayoutFooter>
    </>
  );
}
