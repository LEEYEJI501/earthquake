import { TextSize, TextColor } from "@/types/Common/Text";
import { IAppBarItem, AppBarItemType } from "@/types/AppBar";
import { useState } from "react";
import IconButton from "../IconButton";
import { MarginPosition } from "@/types/Common/Position";

type props = {
  title: string;
  marginPosition?: MarginPosition;
  textSize?: TextSize;
  textColor?: TextColor;
};

export default function AppBar(props: props) {
  const { title, textColor, textSize } = props;

  const [marginPosition] = useState(
    props.marginPosition ?? MarginPosition.LEFT
  );
  const [size] = useState(props.textSize ?? TextSize.XL);
  const [color] = useState(props.textColor ?? TextColor.WHITE);

  const ItemList: IAppBarItem[] = [
    {
      type: AppBarItemType.IconButton,
      clickEvent: () => {
        console.log("!!!!!!");
      },
      iconName: "faHeart",
      addClass: "ml-30px",
    },
    {
      type: AppBarItemType.Text,
      addClass: "ml-100px",
    },
  ];

  const rendering = () => {
    const renderList = [];
    for (let item of ItemList) {
      if (item.type === AppBarItemType.IconButton) {
        renderList.push(
          <div className={`${item.addClass}`}>
            <IconButton
              iconName={item.iconName}
              onClickHandle={() => {
                if (item.clickEvent) {
                  item.clickEvent();
                }
              }}
            />
          </div>
        );
      } else if (item.type === AppBarItemType.Text) {
        renderList.push(
          <span className={`font-bold ${color} ${size} ${item.addClass}`}>
            {props.title}
          </span>
        );
      }
    }
    return renderList;
  };

  return (
    <>
      <div className={`flex p-10px border-1px border-gray-400`}>
        <div className={`${marginPosition} flex items-center`}>
          {rendering()}
        </div>
      </div>
    </>
  );
}
