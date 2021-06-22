import React from "react";
import { View } from "react-native";
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

const deleteIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    >
      <Path
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm0-9.414l2.828-2.829 1.415 1.415L11.414 10l2.829 2.828-1.415 1.415L10 11.414l-2.828 2.829-1.415-1.415L8.586 10 5.757 7.172l1.415-1.415L10 8.586z"
        fill="#000"
      />
    </Svg>
  )
}

export default deleteIcon