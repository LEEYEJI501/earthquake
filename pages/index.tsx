import LayoutHeader from "@/component/Common/Layout/LayoutHeader";
import LayoutFooter from "@/component/Common/Layout/LayoutFooter";
import LayoutArticle from "@/component/Common/Layout/LayoutArticle";
import Card from "@/component/Common/Card";
import CardTitle from "@/component/Common/Card/CardTitle";
import CardSubTitle from "@/component/Common/Card/CardSubTitle";
import Button from "@/component/Common/Button";
import Image from "@/component/Common/Image";
import AppBar from "@/component/Common/Navgation/AppBar";
import { MarginPosition, TooltipPosition } from "@/types/Common/Position";
// google map
import GoogleMap from "@/component/Common/Map";
import useGeoLocation from "@/component/Geocode";
import Input from "@/component/Common/Input";
import { InputType } from "@/types/Common/Text";
import BottomBar from "@/component/Common/Navgation/BottomBar";
import ToolTip from "@/component/Common/ToolTip";

export default function Home() {
  const location = useGeoLocation();
  return (
    <>
      <LayoutHeader
        left={<div>test</div>}
        right={<div>test</div>}
      ></LayoutHeader>
      <LayoutArticle>
        <Card addClass="w-100px">
          <CardTitle title="test"></CardTitle>
          <CardSubTitle title="sub"></CardSubTitle>
        </Card>
        <Image
          src={"/assets/images/cutePuppy.jpg"}
          alt={"potato"}
          fallbackSrc={""}
          width={200}
          height={100}
        />
        <GoogleMap
          lat={-3.745}
          lng={-38.523}
          width={500}
          height={500}
        ></GoogleMap>
        <AppBar title="test" marginPosition={MarginPosition.LEFT}></AppBar>
        <Button
          buttonType="button"
          buttonTitle="뀨?"
          buttonSize="md"
          variant="text"
        ></Button>
        <BottomBar title="끄아앙"></BottomBar>
        <div className="text-center">
          <ToolTip text="끄아앙" position={TooltipPosition.RIGHT}>
            <span>툴팁 테스트</span>
          </ToolTip>
        </div>
      </LayoutArticle>
      {/* <div>
        {location.loaded ? JSON.stringify(location) : "Location data nono"}
      </div> */}

      <Input type={InputType.TEXT} outlined></Input>
      {/* <LayoutFooter>
      {/* <LayoutFooter>
        <div>test</div>
      </LayoutFooter> */}
    </>
  );
}
