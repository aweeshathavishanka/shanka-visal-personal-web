import React from "react";
import { BsStars } from "react-icons/bs";

interface TagProps {
  text: string;
  icon?: React.ReactNode;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const sizeClasses = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-4 py-2",
  large: "text-md px-6 py-3",
};

export default function Tag({
  text,
  icon = <BsStars size={20} />,
  textColor = "text-blue-600",
  borderColor = "border-blue-600",
  backgroundColor = "bg-white",
  size = "medium",
  onClick,
}: TagProps) {
  return (
    <div
      className={`uppercase font-semibold border rounded-full flex items-center gap-2 cursor-pointer ${sizeClasses[size]} ${textColor} ${borderColor} ${backgroundColor}`}
      onClick={onClick}>
      {icon}
      {text}
    </div>
  );
}
