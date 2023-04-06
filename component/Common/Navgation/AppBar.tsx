import { TextSize, TextColor } from "@/types/Common/Text";
import { IAppBarItem, AppBarItemType } from "@/types/AppBar";
import { useState } from "react";
import IconButton from "../IconButton";

type props = {
  title: string;
  titleColor?: string;
  textSize?: TextSize;
  textColor?: TextColor;
};

export default function AppBar(props: props) {
  const { title, titleColor, textColor, textSize } = props;

  const [size] = useState(props.textSize ?? TextSize.XL);
  const [color] = useState(props.textColor ?? TextColor.WHITE);

  const ItemList: IAppBarItem[] = [
    {
      type: AppBarItemType.IconButton,
      clickEvent: () => {
        console.log("!!!!!!");
      },
      iconName: "faHeart",
    },
    {
      type: AppBarItemType.Text,
    },
  ];

  const rendering = () => {
    const renderList = [];
    for (let item of ItemList) {
      if (item.type === AppBarItemType.IconButton) {
        renderList.push(
          <IconButton
            iconName={item.iconName}
            onClickHandle={() => {
              if (item.clickEvent) {
                item.clickEvent();
              }
            }}
          />
        );
      } else if (item.type === AppBarItemType.Text) {
        renderList.push(
          <span className={`font-bold ${color} ${size}`}>{props.title}</span>
        );
      }
    }
    return renderList;
  };

  return (
    <>
      <div>{props.title}</div>
      <div
        className={`flex w-full p-10px border-1px border-gray-400 content-center items-center`}
      >
        {rendering()}
      </div>
    </>
  );
}
