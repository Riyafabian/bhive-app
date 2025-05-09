import React from "react";

interface ThreeArrowsIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  spacing?: number;
  arrowSize?: number;
}

const ThreeArrowsIcon: React.FC<ThreeArrowsIconProps> = ({
  className = "",
  color = "currentColor",
  size = 36,
  strokeWidth = 2,
  spacing = 8, // Controls space between arrows
  arrowSize = 5, // Controls size of each arrow
}) => {
  // Calculate positions based on spacing
  const firstArrowX = 2;
  const secondArrowX = firstArrowX + spacing;
  const thirdArrowX = secondArrowX + spacing;

  const totalWidth = arrowSize * 3;
  // Calculate arrow points based on arrowSize
  const getArrowPath = (startX: number) => {
    return `M${startX} ${
      12 - arrowSize
    }l${arrowSize} ${arrowSize}-${arrowSize} ${arrowSize}`;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${totalWidth} 24`} // Widened viewBox to accommodate larger spacing
      width={size}
      height={size * (24 / 36)} // Maintain aspect ratio
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* First Arrow - 30% opacity */}
      <path d={getArrowPath(firstArrowX)} strokeOpacity="0.3" />

      {/* Second Arrow - 60% opacity */}
      <path d={getArrowPath(secondArrowX)} strokeOpacity="0.6" />

      {/* Third Arrow - 100% opacity */}
      <path d={getArrowPath(thirdArrowX)} strokeOpacity="1" />
    </svg>
  );
};

export default ThreeArrowsIcon;
