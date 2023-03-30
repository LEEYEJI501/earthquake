import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  iconName: string;
};

export default function Icon(props: props) {
  const icon = import("@fortawesome/free-solid-svg-icons").then(
    (module) => module[props.iconName]
  );

  let button = icon ? <FontAwesomeIcon icon={icon} /> : <div>not</div>;

  return <div>{button}</div>;
}
