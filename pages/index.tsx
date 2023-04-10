import LayoutHeader from "@/component/Common/Layout/LayoutHeader";
import LayoutFooter from "@/component/Common/Layout/LayoutFooter";
import LayoutArticle from "@/component/Common/Layout/LayoutArticle";
import Card from "@/component/Common/Card";
import CardTitle from "@/component/Common/Card/CardTitle";
import CardSubTitle from "@/component/Common/Card/CardSubTitle";
import Button from "@/component/Common/Button";
import Image from "@/component/Common/Image";
import AppBar from "@/component/Common/Navgation/AppBar";
import { MarginPosition } from "@/types/Common/Position";
// google map
import GoogleMap from "@/component/Common/Map";
import useGeoLocation from "@/component/Geocode";

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
      </LayoutArticle>
      {/* <div>
        {location.loaded ? JSON.stringify(location) : "Location data nono"}
      </div> */}
      {/* <LayoutFooter>
        <div>test</div>
      </LayoutFooter> */}
    </>
  );
}
