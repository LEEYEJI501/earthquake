import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { icon } from "@fortawesome/fontawesome-svg-core";
import * as freeIcons from "@fortawesome/free-solid-svg-icons";

type props = {
    iconName: keyof typeof freeIcons;
}

export default function Icon(props: props) {
    const { iconName } = props

    const iconModule = freeIcons[iconName] as IconDefinition
    const iconDefinition =  icon(iconModule);
    
    return (
        <div>
            <FontAwesomeIcon icon={iconDefinition} />
        </div>
    )
}