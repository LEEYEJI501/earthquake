import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type props = {
    iconName: IconDefinition;
}

export default function Icon(props: props) {
    const iconName = props.iconName;
    
    return (
        <div>
            <FontAwesomeIcon icon={iconName} />
        </div>
    )
}