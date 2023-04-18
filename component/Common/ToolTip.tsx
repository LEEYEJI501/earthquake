import { TooltipPosition } from "@/types/Common/Position";
import { useState } from "react";

type props = {
  text: string;
  children: any;
  position: TooltipPosition;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
};

export default function ToolTip(props: props) {
  const [text] = useState(props.text ?? "message");
  const [children] = useState(props.children);
  const [position] = useState(props.position);
  const [showTooltip, setShowTooltip] = useState(false);

  const setPosition = (position: TooltipPosition) => {
    switch (position) {
      case TooltipPosition.TOP:
        return "transform -translate-x-2/4 left-2/4 bottom-30px";
      case TooltipPosition.RIGHT:
        return "transform translate-x-15 left-2/4 -translate-y-2/4 top-2/4";
      case TooltipPosition.LEFT:
        return "transform -translate-x-90 left-2/4 -translate-y-2/4 top-2/4";
      case TooltipPosition.BOTTOM:
        return "transform -translate-x-2/4 left-2/4 top-full";
    }
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={"relative"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={`absolute ${setPosition(position)}`}>
          <div className="border-1 border-gray-600 bg-red-300 max-w-300px break-all rounded">
            {text}asdasfasfasfasfasdfasf asdasfasfasfasfasdfasf
            asdasfasfasfasfasdfasf asdasfasfasfasfasdfasf asdasfasfasfasfasdfasf
            asdasfasfasfasfasdfasf asdasfasfasfasfasdfasf asdasfasfasfasfasdfasf
          </div>
        </div>
      )}
    </div>
  );
}
