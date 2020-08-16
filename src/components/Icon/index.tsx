import React from "react";
import iconSet from "./selection.json";
import IcomoonReact,{ iconList } from "icomoon-react";
 
const Icon: React.FC<{
  color?: string,
  size: string | number,
  icon: string,
  className?: string 
}> = props => {
  const { color, size = "100%", icon, className = "" } = props;
  console.info("iconList:",iconList)
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};
 
export default Icon;