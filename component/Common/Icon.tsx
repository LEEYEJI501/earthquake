import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconStyle } from "@fortawesome/fontawesome-svg-core";
import { icon } from "@fortawesome/fontawesome-svg-core";
import * as freeIcons from "@fortawesome/free-solid-svg-icons";
import { TextColor } from "@/types/Common/Text";
import { IconSize, TiconName } from "@/types/Common/Icon";
import { useState } from "react";

type props = {
  iconName?: TiconName;
  size?: IconSize;
  color?: TextColor;
};

export default function Icon(props: props) {
  const { iconName, color, size } = props;

  const iconModule = freeIcons[iconName ?? "fa0"] as IconDefinition;
  const iconDefinition = icon(iconModule);

  const [textColor] = useState(color ?? TextColor.YELLOW);
  const [iconSize] = useState(size ?? IconSize.LG);

  return (
    <div>
      <FontAwesomeIcon
        className={`${textColor}`}
        icon={iconDefinition}
        size={iconSize}
      />
    </div>
  );
}
