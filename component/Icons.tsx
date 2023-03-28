import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

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