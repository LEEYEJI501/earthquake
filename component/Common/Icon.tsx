import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconStyle } from "@fortawesome/fontawesome-svg-core";
import { icon } from "@fortawesome/fontawesome-svg-core";
import * as freeIcons from "@fortawesome/free-solid-svg-icons";

type props = {
  iconName: keyof typeof freeIcons;
  color: string;
  width: string;
  height: string;
};

export default function Icon(props: props) {
  const { iconName } = props;

  const iconModule = freeIcons[iconName] as IconDefinition;
  const iconDefinition = icon(iconModule);

  return (
    <div>
      <FontAwesomeIcon
        className={`${props.width} ${props.height}`}
        icon={iconDefinition}
        style={{ color: `${props.color}` }}
      />
    </div>
  );
}
