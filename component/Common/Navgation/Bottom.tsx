import { useState } from "react";
import IconButton from "../IconButton";
import { OutLine } from "@/types/Common/Border";
import { IconSize } from "@/types/Common/Icon";
import { BottomItemType, IBottomItem } from "@/types/Bottom";
import { TextColor, TextSize, TextWeight } from "@/types/Common/Text";
import { MarginPosition } from "@/types/Common/Position";

type props = {
  border?: string;
  iconSize?: IconSize;
  textColor?: TextColor;
  textSize?: TextSize;
  textWeight?: TextWeight;
  title: string;
  marginPosition?: MarginPosition;
};

export default function Bottom(props: props) {
  const [border] = useState(props.border ?? OutLine.DEFAULT);
  const [textColor] = useState(props.textColor ?? TextColor.WHITE);
  const [textSize] = useState(props.textSize ?? TextSize.XS);
  const [textWeight] = useState(props.textWeight ?? TextWeight.THIN);
  const [title] = useState(props.title);
  const [marginPosition] = useState(
    props.marginPosition ?? MarginPosition.LEFT
  );

  const ItemList: IBottomItem[] = [
    {
      type: BottomItemType.IconButton,
      clickEvent: () => {
        console.log("bottom button");
      },
      iconName: "faDog",
      addClass: "",
    },
    {
      type: BottomItemType.Text,
      addClass: "",
    },
  ];

  const rendering = () => {
    const bottomList = [];
    for (let item of ItemList) {
      if (item.type === BottomItemType.IconButton) {
        bottomList.push(
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
      } else if (item.type === BottomItemType.Text) {
        bottomList.push(
          <span
            className={`font-bold ${textColor} ${textSize} ${textWeight} ${item.addClass}`}
          >
            {title}
          </span>
        );
      }
    }
    return bottomList;
  };

  return (
    <div className={`flex ${border}`}>
      <div className={`flex-col items-center justify-center`}>
        {rendering()}
      </div>
    </div>
  );
}
